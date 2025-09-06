import { Camera, Heart, Users, Mountain, Building, Baby } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const services = [
  {
    icon: Camera,
    title: "Стандарт",
    description:
      "Фотосессия в Барселоне для одного образа с базовой ретушью и цветокоррекцией.",
    features: [
      "1 час съемки в Барселоне",
      "1 локация",
      "40 фото в цветокоррекции",
      "Помощь по подбору образа и локации",
      "10 фото в полной ретуши",
    ],
    price: "120€",
  },
  {
    icon: Users,
    title: "Расширенный",
    description:
      "Двухчасовая съемка на нескольких локациях с расширенным пакетом фото.",
    features: [
      "2 часа съемки",
      "2 локации",
      "50–80 фото в цветокоррекции",
      "Помощь по подборке одежды и локации",
      "15 фото в полной ретуши",
    ],
    price: "170€",
  },
  {
    icon: Mountain,
    title: "Премиум",
    description:
      "Максимальное количество фото и разнообразие образов для полного результата.",
    features: [
      "2,5–3 часа съемки",
      "Несколько локаций",
      "От 100 фото в цветокоррекции",
      "Подбор локаций и помощь в подборе нескольких образов",
      "20 фото в полной ретуши",
    ],
    price: "220€",
  },
  {
    icon: Heart,
    title: "Свадьба и мероприятия",
    description:
      "Фотосъемка свадеб и мероприятий с большим количеством снимков и ретуши.",
    features: [
      "3 часа съемки",
      "От 200 фото в цветокоррекции",
      "+1 час за 70€",
      "40 фото в полной ретуши",
    ],
    price: "350€",
  },
  {
    icon: Building,
    title: "Brand съемка",
    description:
      "Имиджевая и предметная фотосъемка для брендов и коммерческих проектов.",
    features: [
      "2–3 часа съемки",
      "От 40 фото в цветокоррекции",
      "10 фото в ретуши",
      "Съемка в двух локациях",
      "Предметная съемка",
    ],
    price: "150€",
  },
];

export function Services() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Мои услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональные услуги фотосъемки, разработанные специально для
            того, чтобы запечатлеть ваши самые важные моменты с креативностью,
            мастерством и вниманием к деталям.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-xl font-bold text-primary">
                    {service.price}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={scrollToContact}
                    className="hover:bg-primary hover:text-white"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Нужно что-то особенное? Я с удовольствием обсужу ваши уникальные
            потребности в фотографии.
          </p>
          <Button size="lg" onClick={scrollToContact} className="px-8 py-3">
            Получить индивидуальное предложение
          </Button>
        </div>
      </div>
    </section>
  );
}
