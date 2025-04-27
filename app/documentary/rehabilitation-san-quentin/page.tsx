import Image from "next/image"
import Link from "next/link"
import { BookmarkIcon, HeartIcon, MessageSquareIcon, ShareIcon } from "lucide-react"

import { AdvertisementBanner } from "@/components/advertisement-banner"
import { CommentsSection } from "@/components/comments-section"
import { RelatedVideos } from "@/components/related-videos"
import { VideoPlayer } from "@/components/video-player"

export default function RehabilitationSanQuentinPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Video Hero Section */}
      <div className="relative w-full bg-black">
        <div className="container mx-auto">
          <VideoPlayer
            videoId="rehabilitation-san-quentin"
            thumbnailUrl="/san-quentin-2.jpg"
            title="Rehabilitation Programs Making a Difference at San Quentin"
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
                Rehabilitation Programs Making a Difference at San Quentin
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
                <span className="text-sm text-gray-600">987</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquareIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">245</span>
              </div>
              <div className="flex items-center gap-1">
                <ShareIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">Share</span>
              </div>
              <div className="ml-auto text-sm text-gray-600">15 min read</div>
            </div>

            {/* Article Content */}
            <div className="prose max-w-none">
              <p className="lead">
                San Quentin State Prison has become a surprising beacon of innovation in rehabilitation. This documentary
                explores the groundbreaking programs that are changing lives and challenging traditional views of
                incarceration and rehabilitation.
              </p>

              <h2>A New Approach to Rehabilitation</h2>
              <p>
                For decades, San Quentin was known primarily as California's oldest prison and the home of the state's
                only death row for male inmates. Today, however, it's gaining recognition for something entirely
                different: its innovative rehabilitation programs that are showing remarkable success in reducing
                recidivism and preparing inmates for productive lives after release.
              </p>
              <p>
                The transformation began gradually in the early 2000s, when prison administrators and community
                volunteers started implementing educational and vocational programs designed specifically to address the
                root causes of criminal behavior and provide inmates with practical skills for their eventual return to
                society.
              </p>

              {/* Program Highlight Box */}
              <div className="my-6 rounded-lg bg-green-50 p-4">
                <h3 className="mb-2 text-lg font-semibold text-green-800">PROGRAM HIGHLIGHT: THE LAST MILE</h3>
                <p className="text-green-800">
                  Founded in 2010, The Last Mile was the first program to teach coding to incarcerated individuals. The
                  program offers a rigorous curriculum that prepares participants for careers in software development.
                  Graduates have a near-zero recidivism rate, with many securing jobs at tech companies after release.
                </p>
              </div>

              <h2>Education as a Foundation</h2>
              <p>
                The Prison University Project (now Mount Tamalpais College) offers accredited college courses to San
                Quentin inmates, with classes taught by volunteer instructors from nearby universities. Students can earn
                an Associate of Arts degree and develop critical thinking skills that extend far beyond academic
                knowledge.
              </p>
              <p>
                "Education changed everything for me," says Marcus Williams, a former inmate who completed his degree
                while at San Quentin. "It wasn't just about the credential. It was about learning to think differently,
                to see possibilities I never knew existed."
              </p>

              <h2>Creative Expression and Healing</h2>
              <p>
                Some of the most transformative programs at San Quentin focus on creative expression and emotional
                processing. The prison hosts a variety of arts programs, including theater groups, music ensembles, and
                creative writing workshops.
              </p>
              <p>
                The San Quentin News, a prisoner-run newspaper established in 1940, gives inmates the opportunity to
                develop journalistic skills while providing a crucial platform for communication within the prison
                community. Similarly, the prison's podcast, "Ear Hustle," has gained national acclaim for its honest
                portrayal of life behind bars, produced by inmates working alongside prison staff.
              </p>

              {/* Image Gallery */}
              <div className="my-8">
                <h3 className="mb-4 text-xl font-semibold">Rehabilitation in Action</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Image
                      src="/san-quentin-classroom.jpg"
                      alt="San Quentin classroom"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600">
                      College students attend a lecture in San Quentin's education building.
                    </p>
                  </div>
                  <div>
                    <Image
                      src="/san-quentin-workshop.jpg"
                      alt="San Quentin vocational training"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600">
                      Participants in a vocational training program learn construction skills.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Restorative Justice</h2>
              <p>
                Perhaps the most profound work happening at San Quentin occurs through restorative justice programs.
                Initiatives like the Victim Offender Education Group (VOEG) bring inmates face-to-face with the impact of
                their crimes and help them develop empathy for their victims.
              </p>
              <p>
                "The hardest thing I've ever done was confronting what I did," explains former inmate Anthony Johnson.
                "But it was also the most important. You can't change until you truly understand the harm you've caused."
              </p>

              <h2>Measuring Success</h2>
              <p>
                The effectiveness of San Quentin's rehabilitation programs is reflected in the numbers. While
                California's overall recidivism rate hovers around 50%, participants in San Quentin's intensive programs
                show dramatically lower rates of return to prison—in some cases less than 10%.
              </p>
              <p>
                Beyond statistics, success is measured in transformed lives. Former inmates who participated in these
                programs have gone on to become counselors, advocates, entrepreneurs, and technologists. Many return to
                San Quentin as volunteers, creating a positive cycle of mentorship and support.
              </p>

              {/* Quote Box */}
              <blockquote className="border-l-4 border-red-600 bg-gray-50 p-4 italic">
                "What we're doing at San Quentin isn't just about making better prisoners; it's about making better
                neighbors, better community members. When these men leave here, they're going to be someone's employee,
                someone's neighbor, maybe someone's parent. Our job is to make sure they're ready for those roles."
                <footer className="mt-2 text-right text-sm">— Diana Kronstadt, Program Coordinator</footer>
              </blockquote>

              <h2>Challenges and Controversies</h2>
              <p>
                Despite their success, San Quentin's rehabilitation programs face ongoing challenges. Budget constraints,
                security concerns, and political pressures all threaten the sustainability of these initiatives. Critics
                question whether resources should be directed toward prisoner education and rehabilitation rather than
                other public needs.
              </p>
              <p>
                Supporters counter that these programs actually save taxpayer money in the long run by reducing
                recidivism and helping former inmates become productive, tax-paying citizens. They also point to the
                broader social benefits of reducing crime and healing communities affected by violence.
              </p>

              <h2>The Future of Prison Rehabilitation</h2>
              <p>
                San Quentin's rehabilitation programs have become a model studied by corrections officials from around
                the world. As evidence of their effectiveness grows, similar initiatives are being implemented in other
                facilities across California and beyond.
              </p>
              <p>
                The documentary concludes with a look at how these programs are changing public perception of what prison
                can and should be. Rather than simply warehousing offenders, forward-thinking institutions like San
                Quentin are demonstrating that prisons can be places of transformation and healing.
              </p>
              <p>
                As one instructor put it: "Every success story that walks out of San Quentin is proof that people can
                change, that mistakes don't have to define a life, and that our criminal justice system can be about more
                than just punishment. It can be about restoration."
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

            {/* Tags */}
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                  San Quentin
                </Link>
                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                  Rehabilitation
                </Link>
                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                  Prison Reform
                </Link>
                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                  Education
                </Link>
                <Link href="#" className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200">
                  Documentary
                </Link>
              </div>
            </div>

            {/* Comments Section */}
            <CommentsSection 
              commentCount={5}
              comments={[
                {
                  author: "Margaery Tyrell",
                  avatar: "/author-margaery.jpg",
                  time: "2 days ago",
                  content: "This documentary is incredibly moving. The way these programs transform lives shows the power of education and compassion in our justice system.",
                  likes: 87,
                  replies: 3
                },
                {
                  author: "Dylan McKenzie",
                  avatar: "/commenter-dylan.jpg",
                  time: "3 days ago",
                  content: "I've been following the San Quentin rehabilitation programs for years. The recidivism rates speak for themselves - we need more of this approach nationwide.",
                  likes: 42,
                  replies: 1
                },
                {
                  author: "Marie Daddario",
                  avatar: "/commenter-marie.jpg",
                  time: "5 days ago",
                  content: "Robert Chambers always does such thorough research. This piece really humanizes the people behind the statistics.",
                  likes: 29,
                  replies: 0
                }
              ]}
            />

            {/* Related Videos */}
            <RelatedVideos
              videos={[
                {
                  title: "Inside San Quentin: A Look at California's Oldest Prison",
                  image: "/san-quentin-1.jpg",
                  views: "328K views",
                  time: "21:34",
                  category: "Documentary",
                  url: "/documentary/inside-san-quentin",
                },
                {
                  title: "The History of San Quentin: From 1852 to Present Day",
                  image: "/san-quentin-3.jpg",
                  views: "189K views",
                  time: "24:15",
                  category: "Documentary",
                  url: "/documentary/history-san-quentin",
                },
                {
                  title: "Voices from Within: Inmates Share Their Stories",
                  image: "/san-quentin-4.jpg",
                  views: "302K views",
                  time: "32:08",
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
                      src="/featured-documentary-1.jpg"
                      alt="Documentary thumbnail"
                      width={100}
                      height={56}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <h4 className="font-medium leading-snug">
                        <Link href="/documentary/climate-solutions" className="hover:text-red-600">
                          Climate Solutions: Communities Taking Action
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500">942K views</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Image
                      src="/featured-documentary-2.jpg"
                      alt="Documentary thumbnail"
                      width={100}
                      height={56}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <h4 className="font-medium leading-snug">
                        <Link href="/documentary/sustainable-future" className="hover:text-red-600">
                          Building a Sustainable Future: Urban Planning
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500">736K views</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Image
                      src="/featured-documentary-3.jpg"
                      alt="Documentary thumbnail"
                      width={100}
                      height={56}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <h4 className="font-medium leading-snug">
                        <Link href="/documentary/community-gardens" className="hover:text-red-600">
                          Community Gardens: Growing Food and Connection
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500">524K views</p>
                    </div>
                  </div>
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
                  <button className="w-full rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700">
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
