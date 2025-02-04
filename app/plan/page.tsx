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
    </div>
  );
} 