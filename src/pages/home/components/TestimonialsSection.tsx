import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-accent text-white" data-scroll-section>
      <div className="max-w-4xl mx-auto text-center">
        <Star className="mx-auto mb-8 opacity-50" size={48} />
        <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-12">
          "Bamboo Groves Events exceeded every expectation. Their ability to handle complex logistics while maintaining a high level of creative flair is truly impressive."
        </h2>
        <div>
          <p className="font-bold uppercase tracking-widest">Michael Chen</p>
          <p className="text-white/60 text-sm uppercase tracking-widest mt-1">Director of Events, Global Tech Corp</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
