import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const routes = [
    {
      title: 'Золотое кольцо',
      description: 'Путешествие по древним городам России',
      duration: '7 дней',
      difficulty: 'Легко',
    },
    {
      title: 'Байкал и Иркутск',
      description: 'Самое глубокое озеро планеты',
      duration: '10 дней',
      difficulty: 'Средне',
    },
    {
      title: 'Камчатка',
      description: 'Вулканы, гейзеры и дикая природа',
      duration: '14 дней',
      difficulty: 'Сложно',
    },
    {
      title: 'Карелия',
      description: 'Озёра, водопады и северная природа',
      duration: '5 дней',
      difficulty: 'Легко',
    },
  ];

  const regions = [
    { name: 'Алтай', icon: 'Mountain', color: 'text-primary' },
    { name: 'Кавказ', icon: 'Mountain', color: 'text-secondary' },
    { name: 'Урал', icon: 'Trees', color: 'text-accent' },
    { name: 'Дальний Восток', icon: 'Sunrise', color: 'text-primary' },
    { name: 'Север', icon: 'Snowflake', color: 'text-blue-500' },
    { name: 'Поволжье', icon: 'Waves', color: 'text-secondary' },
  ];

  const tips = [
    {
      icon: 'Calendar',
      title: 'Когда ехать',
      text: 'Лучшее время — май-сентябрь. Для зимних видов спорта — декабрь-март.',
    },
    {
      icon: 'Backpack',
      title: 'Что взять',
      text: 'Удобная обувь, термос, power bank, аптечка и карты офлайн.',
    },
    {
      icon: 'Camera',
      title: 'Фотография',
      text: 'Золотой час — рассвет и закат. Не забудьте запасные батареи.',
    },
    {
      icon: 'MapPin',
      title: 'Маршруты',
      text: 'Планируйте заранее. Учитывайте расстояния и время в пути.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.5), rgba(10, 25, 47, 0.7)), url('https://cdn.poehali.dev/projects/f6c5c0c5-fb26-4863-80fd-5f23974a3187/files/8f757118-fe86-4d8f-ba4a-f985f6f75ab1.jpg')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-6 space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Открой Россию заново
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Путешествие длиной в тысячи километров начинается с одного шага
          </p>
          <Button size="lg" className="mt-8 text-lg px-8 py-6">
            Начать путешествие
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярные маршруты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выбери направление для своего следующего приключения
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <Card
                key={index}
                className="fade-on-scroll p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{route.title}</h3>
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <p className="text-muted-foreground mb-6">{route.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    {route.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={16} />
                    {route.difficulty}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Регионы России</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждый регион уникален по-своему
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {regions.map((region, index) => (
              <Card
                key={index}
                className="fade-on-scroll p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Icon
                  name={region.icon as any}
                  size={40}
                  className={`mx-auto mb-3 ${region.color}`}
                />
                <h4 className="font-semibold">{region.name}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-32 px-6 parallax"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.poehali.dev/projects/f6c5c0c5-fb26-4863-80fd-5f23974a3187/files/1201db64-fe22-45ba-9442-2e1edde81fad.jpg')`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-white fade-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Каждое путешествие — это история
          </h2>
          <p className="text-xl font-light leading-relaxed">
            От бескрайних степей до снежных вершин, от древних городов до диких
            лесов — Россия удивляет своим многообразием. Здесь каждый найдёт
            своё место для вдохновения.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Советы путешественникам</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полезная информация для комфортного путешествия
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <Card
                key={index}
                className="fade-on-scroll p-6 text-center hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={tip.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tip.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Готов к приключению?</h3>
          <p className="text-lg mb-6 opacity-90">
            Присоединяйся к тысячам путешественников, открывающих Россию
          </p>
          <Button size="lg" variant="secondary">
            Спланировать маршрут
            <Icon name="Compass" className="ml-2" size={20} />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;