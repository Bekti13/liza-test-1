import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Camera, Heart, Award, Users } from "lucide-react";

const stats = [
  { icon: Camera, label: "Лет опыта", value: "3+" },
  { icon: Heart, label: "Счастливых клиентов", value: "50+" },
  { icon: Users, label: "Фотосессий", value: "120+" },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Про меня</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Привет! Меня зовут Елизавета Тамкова, я увлечённый фотограф из
                Барселоны, с более чем трёхлетним опытом запечатления самых
                драгоценных моментов жизни. Моё путешествие началось с простой
                камеры и неиссякаемого любопытства к окружающему миру.
              </p>
              <p>
                Я специализируюсь на портретной, свадебной и пейзажной
                фотографии, всегда стремясь рассказывать подлинные истории через
                свой объектив. Каждая фотография — это возможность остановить
                время и сохранить воспоминания, которые останутся с вами на всю
                жизнь.
              </p>
              <p>
                Когда я не за камерой, вы найдёте меня исследующим новые
                локации, изучающим свет или работающим над личными проектами,
                которые бросают вызов моему творчеству. Фотография — это не
                просто моя профессия, это моя страсть и мой способ общения с
                миром.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                <ImageWithFallback
                  src="https://tamkovaelizaveta.com/wp-content/uploads/2025/09/IMG_3818-scaled.jpg"
                  alt="Elizaveta Tamkova - Professional Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <Camera className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light italic text-muted-foreground mb-6">
              «Фотография — это не камера и не настройки. Это умение увидеть
              свет, почувствовать момент и запечатлеть эмоции, которые
              рассказывают историю».
            </blockquote>
            <cite className="text-lg font-medium text-primary">
              — Елизавета Тамкова
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
