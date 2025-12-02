const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 animate-fade-in">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight">
          Алиса Меликова
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
          Российский художник, живущая и работающая в Москве. Активно сотрудничает с ведущими режиссерами. 
          Работы как в театральных постановках, так и в кинематографе.
        </p>
        <div className="mt-12">
          <a 
            href="#projects" 
            className="inline-block text-lg border-b-2 border-black pb-1 hover:opacity-60 transition-opacity"
          >
            Смотреть работы
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
