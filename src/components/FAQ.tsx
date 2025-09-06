// import { useLanguage } from "../contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  //   const { t } = useLanguage();

  const faqs = [
    {
      question: "1. Как проходит фотосессия?",
      answer:
        "Перед съемкой мы обсуждаем все детали: стиль, локацию, образы. В день съемки я помогаю с позированием и создаю комфортную атмосферу, чтобы фотографии получились естественными и живыми.",
    },
    {
      question: "2. Что надеть на фотосессию?",
      answer:
        "Лучше выбирать одежду в спокойных тонах без крупных принтов и надписей. Главное — комфорт и гармония с выбранной локацией. Я всегда помогу с подбором образов!",
    },
    {
      question: "3. А если я не умею позировать?",
      answer:
        "Это моя работа — помочь вам выглядеть уверенно и красиво! Я подскажу, как лучше встать, куда смотреть и как расслабиться перед камерой.",
    },
    {
      question: "4. Сколько длится фотосессия?",
      answer:
        "Все зависит от выбранного пакета услуг. В среднем съемка длится от 1 часа до 2 часов.",
    },
    {
      question: "5. Когда я получу готовые фотографии?",
      answer:
        "Обработанные снимки я отправляю в течение 7-14 дней. Если нужно срочно, можно обсудить экспресс-обработку.",
    },
    {
      question: "6. В каком формате я получу фото?",
      answer:
        "Вы получите фотографии в цифровом формате (JPEG) в максимальном качестве. По желанию можно заказать печатные снимки.",
    },
    {
      question: "7. Делаете ли вы ретушь фотографий?",
      answer:
        "Да, все фото проходят цветокоррекцию и базовую ретушь. По запросу возможна более детальная обработка.",
    },
    {
      question:
        "8. Вы фотографируете только в студии или возможны выездные съемки?",
      answer:
        "Я работаю и в студии, и на улице, и на любых ваших локациях. Вместе подберем идеальное место для съемки!",
    },
    {
      question: "9. Можно ли взять с собой реквизит?",
      answer:
        "Конечно! Любые аксессуары, цветы, книги или даже домашние животные сделают кадры более интересными и индивидуальными.",
    },
    {
      question: "10. Как записаться на фотосессию?",
      answer:
        "Напишите мне в личные сообщения, оставьте заявку или позвоните, и мы обсудим все детали! Лучше бронировать дату заранее, особенно если съемка приурочена к важному событию.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Часто задаваемые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              style={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb", // соответствует Tailwind border
                borderRadius: "0.5rem", // rounded-lg
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)", // shadow-sm
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)")
              } // hover:shadow-md
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)")
              }
            >
              <AccordionTrigger
                style={{ padding: "1.25rem 1.5rem", textAlign: "left" }}
              >
                <span style={{ paddingRight: "1rem" }}>{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent
                style={{
                  padding: "0 1.5rem 1.25rem",
                  color: "#4b5563",
                  lineHeight: "140%",
                }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
