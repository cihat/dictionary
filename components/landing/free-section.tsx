import { Github } from "lucide-react"

export default function FreeSection() {
  return (
    <section className="bg-white py-24 sm:py-32" id='feature-section'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Learn English the Smart Way</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Free and Open Source! - Unlock the Power of Language Learning
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to our language learning platform where learning English is both accessible and completely free! Immerse yourself in a rich linguistic experience without any cost or limitations. As an open source project, we embrace collaboration and community contributions. Join us in shaping the future of language education. Contribute, enhance, and grow together with us on this journey to create an inclusive and dynamic language learning platform for everyone. Let&apos;s learn, share, and build a brighter language learning future, together!
          </p>
        <div className="mt-10">
          <a
            target="_blank"
            href="https://github.com/cihat/dictionary/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Github className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            Contribute on Github
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}