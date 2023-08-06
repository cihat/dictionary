import { UploadCloud, Search, Youtube, Book, Dumbbell, GraduationCap, Gamepad, CheckSquare, Timer } from 'lucide-react';

const features = [
  {
    "name": "Dynamic Vocabulary Selection",
    "description": "Specify word length and starting letter to explore English words tailored to your preferences.",
    "icon": Search,
    comingSoon: false
  },
  {
    "name": "Interactive Video Lessons",
    "description": "Engage in immersive video lessons showcasing real-life usage of the selected words in context.",
    "icon": Youtube,
    comingSoon: true
  },
  {
    "name": "Contextual Learning",
    "description": "Understand the meaning and usage nuances of words naturally through contextual learning.",
    "icon": Book,
    comingSoon: true
  },
  {
    "name": "Personalized Learning Path",
    "description": "Receive customized learning paths to track your progress and focus on areas that need improvement.",
    "icon": Dumbbell,
    comingSoon: true
  },
  {
    "name": "Language Level Assessment",
    "description": "Take proficiency tests to determine your language level and set achievable learning goals.",
    "icon": GraduationCap,
    comingSoon: true
  },
  {
    "name": "Gamified Learning Experience",
    "description": "Enjoy learning through gamified exercises and challenges that make language acquisition fun.",
    "icon": Gamepad,
    comingSoon: true
  },
  // {
  //   "name": "Upcoming Feature",
  //   "description": "Stay tuned for our exciting upcoming feature that will revolutionize your language learning journey.",
  //   "icon": CheckSquare,
  //   comingSoon: true
  // },
  // {
  //   "name": "Coming Soon",
  //   "description": "We have more innovative features in the pipeline to enhance your learning experience.",
  //   "icon": CheckSquare,
  //   comingSoon: true
  // }
]

export default function FeatureSection() {
  return (
    <section className="bg-white py-24 sm:py-32" id='feature-section'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Learn English the Smart Way</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Exciting Features
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Unlock a world of possibilities with our cutting-edge features! From dynamic vocabulary selection to gamified learning experiences, our platform offers a wide array of tools to make your language journey enjoyable and effective. Stay ahead of the curve as we constantly add new and innovative features to enhance your language learning experience. Get ready to elevate your English vocabulary and fluency in ways you&apos;ve never imagined!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                {feature.comingSoon &&
                  <>
                    <div className="absolute right-[-10px] top-[-10px] flex  w-20 rounded-lg rotate-[35deg] bg-amber-400 px-1">
                      <p className='text-xs block text-center text-white'>Coming Soon</p>
                      <Timer className="h-6 w-6 text-white" aria-hidden="true" width={5} height={5} />
                    </div>
                  </>
                }

              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}