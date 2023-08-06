const people = [
  {
    "name": "John Doe",
    "role": "Designer ✨",
    "imageurl": "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    "name": "Jane Smith",
    "role": "Software Engineer 💻",
    "imageurl": "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    "name": "Michael Johnson",
    "role": "CEO",
    "imageurl": "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    "name": "Emily Lee",
    "role": "Designer ✨",
    "imageurl": "https://randomuser.me/api/portraits/women/47.jpg"
  },
  {
    "name": "Robert Brown",
    "role": "Software Engineer 💻",
    "imageurl": "https://randomuser.me/api/portraits/men/29.jpg"
  },
  {
    "name": "Olivia White",
    "role": "Designer ✨",
    "imageurl": "https://randomuser.me/api/portraits/women/9.jpg"
  }
]

export default function TeamSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid gap-x-2 gap-y-20 px-6 lg:px-8 xl:grid-cols-2 w-full max-w-screen-2xl m-auto">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get to know our exceptional team of dedicated professionals! From talented designers who bring creativity to life, skilled developers who code with precision, to our visionary CEO guiding our path to success – each member plays a vital role in making our language learning platform extraordinary. We are committed to providing the best learning experience for you, driven by our passion for languages and innovation. Together, we embark on this journey to help you master English vocabulary and excel in your language goals. Let's learn and grow together!
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageurl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}