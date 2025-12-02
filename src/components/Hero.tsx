const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              Алиса Меликова
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8">
              Российский художник, живущая и работающая в Москве. Активно сотрудничает с ведущими режиссерами. 
              Работы как в театральных постановках, так и в кинематографе.
            </p>
            <div>
              <a 
                href="#projects" 
                className="inline-block text-lg border-b-2 border-black pb-1 hover:opacity-60 transition-opacity"
              >
                Смотреть работы
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
              <img 
                src="/placeholder.svg" 
                alt="Алиса Меликова"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;