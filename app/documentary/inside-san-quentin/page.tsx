import Image from "next/image"
import Link from "next/link"
import { BookmarkIcon, HeartIcon, MessageSquareIcon, ShareIcon } from "lucide-react"

import { AdvertisementBanner } from "@/components/advertisement-banner"
import { CommentsSection } from "@/components/comments-section"
import { RelatedVideos } from "@/components/related-videos"
import { VideoPlayer } from "@/components/video-player"

export default function InsideSanQuentinPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Video Hero Section */}
      <div className="relative w-full bg-black">
        <div className="container mx-auto">
          <VideoPlayer
            videoId="san-quentin-documentary"
            thumbnailUrl="/san-quentin-1.jpg"
            title="Inside San Quentin: A Look at California's Oldest Prison"
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
                Inside San Quentin: A Look at California's Oldest Prison
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
                <span className="text-sm text-gray-600">1.2K</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquareIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">348</span>
              </div>
              <div className="flex items-center gap-1">
                <ShareIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">Share</span>
              </div>
              <div className="ml-auto text-sm text-gray-600">12 min read</div>
            </div>

            {/* Article Content */}
            <div className="prose max-w-none">
              <p className="lead">
                San Quentin State Prison, California's oldest correctional facility, has a complex history and
                reputation. This documentary takes viewers inside the walls of this iconic institution, exploring its
                daily operations, security measures, and the lives of those who live and work there.
              </p>

              <h2>The Facility: A City Within Walls</h2>
              <p>
                Established in 1852, San Quentin sprawls across 275 acres on Point Quentin in Marin County. The prison
                houses approximately 3,000 inmates, a significant reduction from its peak population of over 5,000. The
                facility includes multiple housing units, from the imposing main cellblock to the minimum-security
                dormitories.
              </p>
              <p>
                The prison operates like a small city, complete with its own power plant, hospital, fire department, and
                various workshops. The main yard, where inmates spend their recreation time, offers a stark contrast of
                normalcy against the backdrop of high walls and guard towers.
              </p>

              {/* Tip Box */}
              <div className="my-6 rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 text-lg font-semibold text-blue-800">HISTORICAL NOTE</h3>
                <p className="text-blue-800">
                  San Quentin is the only California prison with a dedicated death row for male inmates, though
                  executions have been on moratorium since 2006. The prison's gas chamber, now converted for lethal
                  injection, remains a somber reminder of the facility's role in capital punishment.
                </p>
              </div>

              <h2>Daily Life Behind Bars</h2>
              <p>
                Our documentary team gained unprecedented access to the daily routines that define life at San Quentin.
                The day begins early, with the first count at 5:00 AM, followed by breakfast and work assignments. For
                many inmates, the structured schedule provides a framework for rehabilitation and personal development.
              </p>
              <p>
                Unlike the violent portrayal often seen in media, many areas of San Quentin operate with a level of
                autonomy and respect between staff and inmates. This relative freedom has allowed for the development of
                numerous rehabilitation programs that have gained national recognition.
              </p>

              <h2>Security and Challenges</h2>
              <p>
                Despite its progressive programs, San Quentin faces the same security challenges as any maximum-security
                prison. Our cameras captured the meticulous procedures involved in maintaining order, from cell searches
                to the careful monitoring of inmate movements.
              </p>
              <p>
                Correctional officers shared insights into their work, describing the balance they must maintain between
                security and supporting rehabilitation efforts. Many spoke of the psychological toll of the job and the
                complex relationships formed with long-term inmates.
              </p>

              {/* Comparison Image */}
              <div className="my-8 overflow-hidden rounded-lg border border-gray-200">
                <div className="bg-gray-100 px-4 py-2">
                  <span className="text-xs font-semibold uppercase text-gray-500">COMPARISON</span>
                </div>
                <Image
                  src="/san-quentin-comparison.jpg"
                  alt="San Quentin in 1925 vs. Today"
                  width={800}
                  height={400}
                  className="w-full"
                />
                <div className="bg-white p-4">
                  <p className="text-sm text-gray-600">
                    Left: San Quentin's main cellblock in 1925. Right: The same view today, showing both the preserved
                    historical architecture and modern security upgrades.
                  </p>
                </div>
              </div>

              <h2>The Changing Face of Incarceration</h2>
              <p>
                San Quentin represents both the historical challenges of America's prison system and its potential for
                evolution. Recent reforms have led to population reductions and expanded programming, though critics
                argue more fundamental changes are needed.
              </p>
              <p>
                Warden Ron Davis, interviewed extensively for this documentary, described his vision for the facility:
                "We're trying to create an environment where people can change. Public safety isn't just about keeping
                people locked up—it's about making sure they're better when they leave than when they came in."
              </p>

              <h2>Conclusion: Beyond the Walls</h2>
              <p>
                As our documentary team concluded their time at San Quentin, the complexity of the institution became
                clear. It serves as both a place of confinement and, for many, a place of transformation. The stories
                captured within these walls reflect broader questions about justice, punishment, and rehabilitation in
                American society.
              </p>
              <p>
                This documentary offers viewers a rare glimpse into a world few will experience firsthand, challenging
                preconceptions and highlighting the humanity that exists even in the most restrictive environments.
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
                  Prison Reform
                </Link>
                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                  Criminal Justice
                </Link>
                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                  Documentary
                </Link>
                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                  California
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
                  title: "Rehabilitation Programs Making a Difference at San Quentin",
                  image: "/san-quentin-2.jpg",
                  duration: "18:42",
                  views: "245K",
                  category: "Documentary",
                  url: "/documentary/rehabilitation-san-quentin",
                },
                {
                  id: "2",
                  title: "The History of San Quentin: From 1852 to Present Day",
                  image: "/san-quentin-3.jpg",
                  duration: "24:15",
                  views: "189K",
                  category: "Documentary",
                  url: "/documentary/history-san-quentin",
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
