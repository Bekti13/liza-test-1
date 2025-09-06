import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { v4 as uuidv4 } from "uuid";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

function generateNumericId(): number {
  // Берём первые 12 цифр UUID → безопасно для number
  const uuid = uuidv4().replace(/-/g, "");
  return parseInt(uuid.slice(0, 12), 16);
}

const portfolioItems: PortfolioItem[] = [
  {
    id: generateNumericId(),
    title: "Название",
    category: "Парная съемка",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/4-scaled.jpg",
    description: "Описание",
  },
  {
    id: generateNumericId(),
    title: "Название",
    category: "Парная съемка",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/3-scaled.jpg",
    description: "Описание",
  },
  {
    id: generateNumericId(),
    title: "Название",
    category: "Парная съемка",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/5-scaled.jpg",
    description: "Описание",
  },
  {
    id: generateNumericId(),
    title: "Название",
    category: "Парная съемка",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/6-scaled.jpg",
    description: "Описание",
  },
  {
    id: generateNumericId(),
    title: "Название",
    category: "Парная съемка",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/7-scaled.jpg",
    description: "Описание",
  },
  {
    id: generateNumericId(),
    title: "Название",
    category: "Парная съемка",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/8-scaled.jpg",
    description: "Описание",
  },
  {
    id: generateNumericId(),
    title: "Название",
    category: "Парная съемка",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/9-scaled.jpg",
    description: "Описание",
  },
  {
    id: generateNumericId(),
    title: "Название",
    category: "Парная съемка",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/10-scaled.jpg",
    description: "Описание",
  },
  {
    id: generateNumericId(),
    title: "Название",
    category: "Парная съемка",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/11-scaled.jpg",
    description: "Описание",
  },
  {
    id: generateNumericId(),
    title: "Название",
    category: "Парная съемка",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/12-scaled.jpg",
    description: "Описание",
  },
  {
    id: generateNumericId(),
    title: "Название",
    category: "Парная съемка",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/13-scaled.jpg",
    description: "Описание",
  },
  {
    id: generateNumericId(),
    title: "Название",
    category: "Парная съемка",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/14-scaled.jpg",
    description: "Описание",
  },
  {
    id: generateNumericId(),
    title: "Стандарт Bliss",
    category: "Стандарт",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/1-1-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "Стандарт Bliss",
    category: "Стандарт",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/2-1-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "Стандарт Bliss",
    category: "Стандарт",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/3-1-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "Стандарт Bliss",
    category: "Стандарт",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/4-1-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "Стандарт Bliss",
    category: "Стандарт",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/5-1-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "Стандарт Bliss",
    category: "Стандарт",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/6-1-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "Стандарт Bliss",
    category: "Стандарт",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/7-1-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "Стандарт Bliss",
    category: "Стандарт",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/8-1-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "Стандарт Bliss",
    category: "Стандарт",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/9-1-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "Стандарт Bliss",
    category: "Стандарт",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/10-1-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Расширенный",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/1-2-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Расширенный",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/2-2-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Расширенный",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/3-2-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Расширенный",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/4-2-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Расширенный",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/5-2-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Расширенный",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/6-2-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Расширенный",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/7-2-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Расширенный",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/8-2-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Расширенный",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/9-1-scaled.jpg",
    description: "Intimate moments between couples on their specia1l day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Расширенный",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/10-1-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Расширенный",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/11-1-scaled.jpg",
    description: "Intimate moments between couples on their special1 day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Расширенный",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/12-1-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Расширенный",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/13-1-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Premium",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/1-3-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Premium",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/2-3-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Premium",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/3-3-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Premium",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/4-3-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Premium",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/5-3-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Premium",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/6-3-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Premium",
    image: "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/7-3.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Premium",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/8-3-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
  {
    id: generateNumericId(),
    title: "название",
    category: "Premium",
    image:
      "https://tamkovaelizaveta.com/wp-content/uploads/2025/07/9-3-scaled.jpg",
    description: "Intimate moments between couples on their special day.",
  },
];

const categories = [
  "Все",
  "Парная съемка",
  "Стандарт",
  "Расширенный",
  "Premium",
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "Все"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Мое портфолио</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Познакомьтесь с моей коллекцией работ, выполненных в разных стилях и
            на разные случаи жизни. Каждое изображение рассказывает уникальную
            историю и запечатлевает особый момент времени.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="px-6 py-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm mb-2 px-3 py-1 bg-white/20 rounded-full inline-block">
                      {item.category}
                    </p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
