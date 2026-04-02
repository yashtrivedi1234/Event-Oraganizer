import { useEffect, useRef } from "react";
import QRCode from "qrcode";

const ACCENT = "#88ab32";
const ACCENT2 = "#b8d56a";
const BG = "#ffffff";
const FG = "#0c0c0e";

function isFinderZone(row: number, col: number, size: number) {
  return (
    (row < 8 && col < 8) ||
    (row < 8 && col >= size - 8) ||
    (row >= size - 8 && col < 8)
  );
}

interface Props {
  url: string;
  logoText?: string;
  size?: number;
}

export default function CustomQR({ url, logoText = "CC", size = 260 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const matrix = await QRCode.create(url, {
        errorCorrectionLevel: "H",
      });

      const modules = matrix.modules;
      const N = modules.size;
      const cell = size / N;
      const r = cell * 0.38;

      let dots = "";
      for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
          if (!modules.get(row, col)) continue;
          if (isFinderZone(row, col, N)) continue;
          const x = col * cell + cell * 0.1;
          const y = row * cell + cell * 0.1;
          const w = cell * 0.8;
          dots += `<rect x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${w.toFixed(2)}" height="${w.toFixed(2)}" rx="${r.toFixed(2)}" fill="url(#dotgrad-${url.length})"/>`;
        }
      }

      const fp = (tx: number, ty: number) => {
        const s = cell * 7;
        return `
          <g transform="translate(${tx},${ty})">
            <rect width="${s}" height="${s}" rx="${cell * 1.2}" fill="${FG}"/>
            <rect x="${cell}" y="${cell}" width="${cell * 5}" height="${cell * 5}" rx="${cell * 0.8}" fill="${BG}"/>
            <rect x="${cell * 1.5}" y="${cell * 1.5}" width="${cell * 4}" height="${cell * 4}" rx="${cell * 0.6}" fill="url(#fpgrad-${url.length})"/>
            <rect x="${cell * 2.5}" y="${cell * 2.5}" width="${cell * 2}" height="${cell * 2}" rx="${cell * 0.3}" fill="${BG}"/>
          </g>`;
      };

      const logoSize = cell * 5;
      const logoX = size / 2 - logoSize / 2;
      const logoY = size / 2 - logoSize / 2;

      // Unique gradient IDs per QR to avoid SVG ID conflicts when multiple are on the page
      const uid = Math.random().toString(36).slice(2, 7);

      const logo = `
        <g transform="translate(${logoX},${logoY})">
          <rect width="${logoSize}" height="${logoSize}" rx="${cell * 0.8}" fill="${BG}"/>
          <rect x="${cell * 0.4}" y="${cell * 0.4}" width="${logoSize - cell * 0.8}" height="${logoSize - cell * 0.8}" rx="${cell * 0.6}" fill="${ACCENT}"/>
          <text x="${logoSize / 2}" y="${logoSize * 0.67}" text-anchor="middle" font-size="${cell * 1.7}" fill="${BG}" font-weight="700" font-family="sans-serif">${logoText}</text>
        </g>`;

      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
          <defs>
            <linearGradient id="dotgrad-${uid}" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="${FG}"/>
              <stop offset="100%" stop-color="#2a2a2a"/>
            </linearGradient>
            <linearGradient id="fpgrad-${uid}" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="${ACCENT}"/>
              <stop offset="100%" stop-color="${ACCENT2}"/>
            </linearGradient>
            <linearGradient id="scangrad-${uid}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0"/>
              <stop offset="50%" stop-color="${ACCENT}" stop-opacity="0.5"/>
              <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0"/>
            </linearGradient>
            <clipPath id="clip-${uid}">
              <rect width="${size}" height="${size}" rx="14"/>
            </clipPath>
          </defs>
          <rect width="${size}" height="${size}" fill="${BG}" rx="14"/>
          <g clip-path="url(#clip-${uid})">
            ${dots.replace(/url\(#dotgrad-\d+\)/g, `url(#dotgrad-${uid})`).replace(/url\(#fpgrad-\d+\)/g, `url(#fpgrad-${uid})`)}
            ${fp(0, 0).replace(/url\(#fpgrad-\d+\)/g, `url(#fpgrad-${uid})`)}
            ${fp((N - 7) * cell, 0).replace(/url\(#fpgrad-\d+\)/g, `url(#fpgrad-${uid})`)}
            ${fp(0, (N - 7) * cell).replace(/url\(#fpgrad-\d+\)/g, `url(#fpgrad-${uid})`)}
            ${logo}
            <rect x="0" y="0" width="${size}" height="${cell * 4}" fill="url(#scangrad-${uid})" opacity="0.9">
              <animateTransform attributeName="transform" type="translate" from="0,0" to="0,${size}" dur="2.5s" repeatCount="indefinite"/>
            </rect>
          </g>
        </svg>`;

      if (containerRef.current) {
        containerRef.current.innerHTML = svg;
      }
    })();
  }, [url, size, logoText]);

  return <div ref={containerRef} className="w-full h-full" />;
}