'use client';



export default function PlanPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:px-8">
      <h1 className="text-4xl md:text-5xl mb-8">Plan mieszkania</h1>
      <div className="w-full aspect-[1.414] relative">
        <iframe
          src="/plan.pdf"
          className="w-full h-full"
          style={{ border: 'none' }}
        />
      </div>
      <div className="md:hidden mt-4">
        <a
          href="/plan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-6 py-3 bg-black text-white text-center rounded-full hover:bg-neutral-800 transition-colors"
        >
         Open file in full screen
        </a>
      </div>
    </div>
  );
} 