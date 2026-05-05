export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F5EDD8] text-[#1B2742]">
      <div className="text-center px-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#8C5E1F] mb-6">
          Dog House Fitness
        </p>
        <h1 className="font-serif text-7xl md:text-9xl font-medium leading-none">
          Faithful <span className="italic text-[#8C5E1F]">to</span> the work.
        </h1>
        <p className="mt-8 text-lg text-[#1B2742]/80 max-w-md mx-auto">
          Custom training programs and a daily workout, for people who would
          rather earn the result than market it.
        </p>
      </div>
    </main>
  );
}