import Image from "next/image"
import Link from "next/link"
import { BookmarkIcon, HeartIcon, MessageSquareIcon, ShareIcon } from "lucide-react"

import { AdvertisementBanner } from "@/components/advertisement-banner"
import { CommentsSection } from "@/components/comments-section"
import { RelatedVideos } from "@/components/related-videos"
import { VideoPlayer } from "@/components/video-player"

export default function HistorySanQuentinPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Video Hero Section */}
      <div className="relative w-full bg-black">
        <div className="container mx-auto">
          <VideoPlayer
            thumbnailUrl="/san-quentin-3.jpg"
            videoTitle="The History of San Quentin: From 1852 to Present Day"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Article Content - 2/3 width */}
          <div className="w-full lg:w-2/3">
            {/* Article Header */}
            <div className="mb-6">
              <div className="mb-2">
                <Link
                  href="/category/documentary"
                  className="text-sm font-semibold uppercase text-red-600 hover:text-red-700"
                >
                  DOCUMENTARY
                </Link>
              </div>
              <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
                The History of San Quentin: From 1852 to Present Day
              </h1>
              <div className="flex items-center gap-2">
                <Image src="/author-thomas.jpg" alt="Author" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-sm font-medium">Robert Chambers</p>
                  <p className="text-xs text-gray-500">SEPTEMBER 5, 2017</p>
                </div>
              </div>
            </div>

            {/* Engagement Stats */}
            <div className="mb-8 flex items-center gap-6 border-b border-t border-gray-200 py-4">
              <div className="flex items-center gap-1">
                <HeartIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">1.1K</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquareIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">287</span>
              </div>
              <div className="flex items-center gap-1">
                <ShareIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">Share</span>
              </div>
              <div className="ml-auto text-sm text-gray-600">18 min read</div>
            </div>

            {/* Article Content */}
            <div className="prose max-w-none">
              <p className="lead">
                San Quentin State Prison stands as a living monument to the evolution of America's penal system. This
                documentary traces the 165-year history of California's oldest prison, from its Gold Rush origins to its
                current status as a complex institution balancing punishment and rehabilitation.
              </p>

              <h2>The Founding Years: 1852-1880</h2>
              <p>
                San Quentin's story begins in the chaos of Gold Rush California. As the population boomed and crime
                followed, the state needed a secure facility to house its growing inmate population. In 1852, the state
                purchased Point Quentin, a small peninsula in Marin County, for $10,000.
              </p>
              <p>
                The prison's first incarnation was actually a ship—the Waban—anchored offshore and housing 40 inmates
                who worked during the day to build their own prison. By 1854, the first cellblock was completed, and San
                Quentin began its long history as a fixed institution.
              </p>

              {/* Tip Box */}
              <div className="my-6 rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 text-lg font-semibold text-blue-800">ORIGIN OF THE NAME</h3>
                <p className="text-blue-800">
                  The name "San Quentin" comes from the original Spanish land grant for the area, Rancho Punta de
                  Quentin. This was named after a Coast Miwok warrior called Quentín, who was captured at this location
                  during an 1824 military expedition.
                </p>
              </div>

              <h2>The Industrial Era: 1880-1930</h2>
              <p>
                By the late 19th century, San Quentin had evolved into an industrial prison. Inmates manufactured
                furniture, clothing, and other goods in the prison's factories. This period also saw the implementation
                of the "silent system," where prisoners worked together but were forbidden from speaking to one another.
              </p>
              <p>
                The prison expanded significantly during this era, with the construction of the iconic main cellblock
                that still dominates the facility today. Completed in 1927, this structure was then the largest prison
                cellblock in the world, with five tiers of cells stacked atop one another.
              </p>

              <h2>Reform and Punishment: 1930-1960</h2>
              <p>
                The mid-20th century brought significant changes to San Quentin. Under the leadership of Warden Clinton
                Duffy (1940-1952), the prison implemented numerous reforms, including improved medical care, educational
                programs, and the elimination of corporal punishment.
              </p>
              <p>
                Yet this was also the period when San Quentin's gas chamber saw its most active use. Between 1938 (when
                it replaced hanging as the state's method of execution) and 1967, 194 people were executed at San
                Quentin—a grim chapter in the prison's history.
              </p>

              {/* Comparison Image */}
              <div className="my-8 overflow-hidden rounded-lg border border-gray-200">
                <div className="bg-gray-100 px-4 py-2">
                  <span className="text-xs font-semibold uppercase text-gray-500">COMPARISON</span>
                </div>
                <Image
                  src="/history-comparison.jpg"
                  alt="San Quentin Through the Decades"
                  width={800}
                  height={400}
                  className="w-full"
                />
                <div className="bg-white p-4">
                  <p className="text-sm text-gray-600">
                    A visual timeline showing San Quentin's architectural evolution from the 1860s through the present
                    day, highlighting major additions and renovations to the facility.
                  </p>
                </div>
              </div>

              <h2>Turbulent Times: 1960-1980</h2>
              <p>
                The social upheaval of the 1960s and 70s reverberated within San Quentin's walls. The prison became a
                flashpoint for racial tensions, gang activity, and violence. The most notorious incident occurred on
                August 21, 1971, when George Jackson, a Black Panther Party member and inmate, was killed during an
                escape attempt that left six people dead.
              </p>
              <p>
                This period also saw the rise of prison activism. In 1968, Johnny Cash performed his famous concert at
                San Quentin, recording a live album that brought national attention to prison conditions. The following
                decade saw increased legal challenges to prison practices and the beginning of court-mandated reforms.
              </p>

              <h2>Overcrowding Crisis: 1980-2000</h2>
              <p>
                California's tough-on-crime policies in the 1980s and 90s led to explosive growth in the prison
                population. San Quentin, designed for 3,082 inmates, housed over 6,000 by the mid-1990s. This
                overcrowding created dangerous conditions for both inmates and staff.
              </p>
              <p>
                Despite these challenges, this era also saw the expansion of educational and vocational programs at San
                Quentin, laying the groundwork for the rehabilitation focus that would develop more fully in the
                following decades.
              </p>

              <h2>The Modern Era: 2000-Present</h2>
              <p>
                The 21st century has brought significant changes to San Quentin. Following federal court orders to
                reduce overcrowding, the population has decreased substantially. The prison has also become known for
                its innovative rehabilitation programs, including college courses, coding classes, and arts initiatives.
              </p>
              <p>
                The death penalty remains a contentious issue. Though San Quentin still houses California's death row,
                the state has not carried out an execution since 2006, and in 2019, Governor Gavin Newsom declared a
                moratorium on executions.
              </p>

              <h2>Preserving History While Looking Forward</h2>
              <p>
                Today, San Quentin stands as both a historical artifact and a working institution. Parts of the prison,
                like the original 1850s dungeon, have been preserved for their historical significance. Meanwhile, newer
                sections reflect modern correctional design and philosophy.
              </p>
              <p>
                The prison's museum, staffed by former correctional officers, houses artifacts spanning the facility's
                entire history—from 19th-century weapons to artwork created by current inmates. This preservation effort
                ensures that the complex legacy of San Quentin will be remembered even as the institution continues to
                evolve.
              </p>

              <h2>Conclusion: A Living Timeline</h2>
              <p>
                San Quentin's history mirrors the evolution of American attitudes toward crime and punishment. From its
                harsh beginnings to its current dual identity as both a maximum-security prison and a center for
                innovative rehabilitation, the institution embodies the tensions and contradictions of our criminal
                justice system.
              </p>
              <p>
                As one historian interviewed for our documentary noted: "If you want to understand how America has
                thought about punishment over the past century and a half, you need only look at the changing face of
                San Quentin. Its walls contain not just prisoners, but our collective memory of justice and its
                implementation."
              </p>
            </div>

            {/* Author Bio */}
            <div className="my-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-start gap-4">
                <Image src="/author-thomas.jpg" alt="Robert Chambers" width={80} height={80} className="rounded-full" />
                <div>
                  <h3 className="mb-1 text-lg font-bold">Robert Chambers</h3>
                  <p className="mb-3 text-sm text-gray-600">Documentary Filmmaker & Investigative Journalist</p>
                  <p className="text-sm text-gray-700">
                    Robert Chambers has spent over 15 years documenting America's criminal justice system. His work has
                    appeared on major networks and streaming platforms, earning him three Emmy nominations. He
                    specializes in gaining access to restricted environments and telling stories that humanize complex
                    institutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Share */}
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold">Share this story</h3>
              <div className="flex gap-2">
                <button className="rounded-full bg-[#1da1f2] p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </button>
                <button className="rounded-full bg-[#4267B2] p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </button>
                <button className="rounded-full bg-[#0077B5] p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </button>
                <button className="rounded-full bg-[#25D366] p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </button>
                <button className="rounded-full bg-[#FF4500] p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                  San Quentin
                </Link>
                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                  Prison History
                </Link>
                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                  California
                </Link>
                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                  Documentary
                </Link>
                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                  Criminal Justice
                </Link>
              </div>
            </div>

            {/* Comments Section */}
            <CommentsSection />

            {/* Related Videos */}
            <RelatedVideos
              videos={[
                {
                  id: "1",
                  title: "Inside San Quentin: A Look at California's Oldest Prison",
                  image: "/san-quentin-1.jpg",
                  duration: "21:35",
                  views: "278K",
                  category: "Documentary",
                  url: "/documentary/inside-san-quentin",
                },
                {
                  id: "2",
                  title: "Rehabilitation Programs Making a Difference at San Quentin",
                  image: "/san-quentin-2.jpg",
                  duration: "18:42",
                  views: "245K",
                  category: "Documentary",
                  url: "/documentary/rehabilitation-san-quentin",
                },
                {
                  id: "3",
                  title: "Voices from Within: Inmates Share Their Stories",
                  image: "/san-quentin-4.jpg",
                  duration: "32:08",
                  views: "302K",
                  category: "Documentary",
                  url: "/documentary/inmate-stories-san-quentin",
                },
              ]}
            />
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24">
              {/* Save Button */}
              <div className="mb-6 flex justify-end">
                <button className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                  <BookmarkIcon className="h-5 w-5" />
                  Save
                </button>
              </div>

              {/* Advertisement */}
              <div className="mb-8">
                <AdvertisementBanner />
              </div>

              {/* Recommended Videos */}
              <div className="mb-8 rounded-lg border border-gray-200 p-4">
                <h3 className="mb-4 text-lg font-semibold">Recommended</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Image
                      src="/featured-tech-1.jpg"
                      alt="Tech video thumbnail"
                      width={100}
                      height={56}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <h4 className="font-medium leading-snug">
                        <Link href="/tech/ai-machine-learning" className="hover:text-red-600">
                          AI and Machine Learning: The Future is Now
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500">1.2M views</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Image
                      src="/featured-movie-1.jpg"
                      alt="Movie video thumbnail"
                      width={100}
                      height={56}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <h4 className="font-medium leading-snug">
                        <Link href="/movie/superhero-film-evolution" className="hover:text-red-600">
                          The Evolution of Superhero Films
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500">845K views</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Image
                      src="/featured-sports-1.jpg"
                      alt="Sports video thumbnail"
                      width={100}
                      height={56}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <h4 className="font-medium leading-snug">
                        <Link href="/sports/mental-training-athletes" className="hover:text-red-600">
                          Mental Training for Elite Athletes
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500">632K views</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="mb-8 rounded-lg border border-gray-200 p-4">
                <h3 className="mb-4 text-lg font-semibold">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                    Documentary
                  </Link>
                  <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                    Criminal Justice
                  </Link>
                  <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                    Prison Reform
                  </Link>
                  <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                    Rehabilitation
                  </Link>
                  <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                    Social Justice
                  </Link>
                  <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                    California
                  </Link>
                  <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                    History
                  </Link>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-2 text-lg font-semibold">Newsletter</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Get the latest documentary updates and exclusive content delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                  <button className="w-full rounded-md bg-red-600 py-2 text-sm font-medium text-white hover:bg-red-700">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
