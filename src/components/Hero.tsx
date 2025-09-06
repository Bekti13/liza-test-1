import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 text-lg text-muted-foreground">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Запечатлейте прекрасные
                <span className="block text-4xl md:text-6xl mt-2">
                  моменты жизни
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl ">
                Профессиональный фотограф, специализирующийся на портретной,
                свадебной и лайфстайл-фотографии. Позвольте мне рассказать вашу
                историю с помощью потрясающих визуальных образов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={scrollToPortfolio}
                  className="text-lg px-8 py-3 text-white hover:bg-gray-100 hover:text-black"
                >
                  Портфолио
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToContact}
                  className="text-lg px-8 py-3 border-white  hover:bg-white hover:text-black"
                >
                  Забронировать сессию
                </Button>
              </div>
            </div>

            {/* Stats */}
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                <ImageWithFallback
                  src="https://tamkovaelizaveta.com/wp-content/uploads/2025/05/main-scaled.jpg"
                  alt="Elizaveta Tamkova - Professional Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
