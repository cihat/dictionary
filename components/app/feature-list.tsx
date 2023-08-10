import Link from 'next/link'
import Container from '../ui/container'
import { Youtube, Book, Dumbbell, GraduationCap, Gamepad, Link as LinkIcon } from 'lucide-react'
import Image from 'next/image'
import cx from '@/lib/cx'

type FeatureType = {
  name: string
  description: string
  href: string
  icon: any
  buttonText?: string
  image?: string
  comingSoon?: boolean
  blank?: boolean
}

const features: FeatureType[] = [
  {
    "name": 'Learn with Videos',
    "description": 'Expand your vocabulary and improve language skills by learning with engaging videos tailored to your level. Our video lessons offer real-life conversations, interactive exercises, and subtitles for better comprehension. Start your language journey with the power of visual learning!',
    "href": '/learn/with-videos',
    "icon": Youtube,
    "buttonText": 'Start Learning',
    "image": '/images/learn-with-videos.png',
    "comingSoon": false,
  },
  {
    "name": "Learn with Voscreen",
    "description": "Learn new words and improve your listening skills with Voscreen. Voscreen is a free app that helps you learn English through short video clips. It's fun, easy, and effective!",
    "href": "https://voscreen.com/",
    blank: true,
    "icon": LinkIcon,
    "buttonText": "Let's Watch and Learn",
    "image": '/images/voscreen.png',
    "comingSoon": false,

  },
  {
    "name": "Contextual Learning",
    "description": "Understand the meaning and usage nuances of words naturally through contextual learning.",
    "icon": Book,
    "href": "/learn",
    "buttonText": "Start Learning",
    "comingSoon": true
  },
  {
    "name": "Personalized Learning Path",
    "description": "Receive customized learning paths to track your progress and focus on areas that need improvement.",
    "href": "/learn",
    "buttonText": "Start Learning",
    "icon": Dumbbell,
    "comingSoon": true
  },
  {
    "name": "Language Level Assessment",
    "description": "Take proficiency tests to determine your language level and set achievable learning goals.",
    "href": "/learn",
    "icon": GraduationCap,
    "buttonText": "Start Learning",
    "comingSoon": true
  },
  {
    "name": "Gamified Learning Experience",
    "description": "Enjoy learning through gamified exercises and challenges that make language acquisition fun.",
    "href": "/learn",
    "icon": Gamepad,
    "buttonText": "Start Learning",
    "comingSoon": true
  },
]

export default function FeatureList() {
  return (
    <Container as="section" size="default" className='md:my-10  mx-auto'>
      <h1 className='text-2xl font-bold mb-8'>Some Good Resources on the Power of Visual Learning</h1>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
        {features.map((feature: FeatureType) =>
          <Link target={feature.blank ? "_blank" : "_self"} href={!feature.comingSoon ? feature.href : "/learn"} key={feature.name} className={
            cx(
              "bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[300px] relative",
              feature.comingSoon && "blur-sm cursor-not-allowed hover:cursor-not-allowed hover:blur-none"
            )
          }>
            {feature.image &&
              feature.image.length > 0 &&
              <Image width={1000} height={1000} className="rounded-t-lg" src={feature.image} alt={feature.name} />
            }
            <div className="p-5">
              <div >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{feature.name}</h5>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{feature.description}</p>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <feature.icon className="h-6 w-6 text-white mr-2" aria-hidden="true" />
                {feature.buttonText}
              </div>
            </div>
            {
              feature.comingSoon &&
              <div className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1">Coming Soon</div>
            }
          </Link>
        )}

      </div>
    </Container>
  )
}
