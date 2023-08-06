import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const quotestions = [
  {
    "question": "What is Dynamic Vocabulary Selection?",
    "answer": "Dynamic Vocabulary Selection allows you to customize your word exploration by specifying word length and starting letter. This feature ensures that you learn English words tailored to your preferences and needs."
  },
  {
    "question": "How do Interactive Video Lessons work?",
    "answer": "Interactive Video Lessons provide immersive learning experiences with real-life usage examples. Watch videos where English words are used in context, and understand their meanings, pronunciation, and usage nuances in authentic settings."
  },
  {
    "question": "What is Contextual Learning?",
    "answer": "Contextual Learning enables you to understand English words naturally by seeing them in context. Discover how words are used in sentences and gain a deeper grasp of their meanings, idiomatic expressions, and collocations."
  },
  {
    "question": "How does Personalized Learning Path help?",
    "answer": "Personalized Learning Path assesses your progress and identifies areas for improvement. Receive tailored recommendations and exercises based on your performance, allowing you to focus on areas that need attention for more effective learning."
  },
  {
    "question": "What is Language Level Assessment?",
    "answer": "Language Level Assessment offers proficiency tests to determine your current language level. Assess your skills, set realistic learning goals, and track your progress as you advance through different language levels."
  },
  {
    "question": "What can I expect from the Gamified Learning Experience?",
    "answer": "Gamified Learning Experience makes language learning fun and engaging. Complete challenges, earn rewards, and compete with friends to reinforce your vocabulary, grammar, and language skills in a playful and interactive way."
  }
]

export function CardAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-screen-2xl m-auto my-12">
      {
        quotestions.map((question, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{question.question}</AccordionTrigger>
            <AccordionContent>
              {question.answer}
            </AccordionContent>
          </AccordionItem>
        ))
      }
      {/* <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. Its animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  )
}
