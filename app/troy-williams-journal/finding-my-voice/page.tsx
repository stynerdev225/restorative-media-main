import Link from "next/link"
import { CalendarDays, Clock, ArrowLeft, Share2, Bookmark, ThumbsUp, MessageSquare, Tag } from "lucide-react"

export default function FindingMyVoicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <Link
        href="/troy-williams-journal"
        className="mb-8 inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Journal
      </Link>

      {/* Article Header */}
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          Finding My Voice: From Incarceration to Inspiration
        </h1>
        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            April 15, 2025
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />8 min read
          </span>
          <span className="flex items-center gap-1">
            <Tag className="h-4 w-4" />
            Personal Reflections
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="h-12 w-12 rounded-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/thoughtful-gaze.png')" }}
          ></div>
          <div>
            <p className="font-medium">Troy Williams</p>
            <p className="text-sm text-gray-400">Journalist & Filmmaker</p>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-8 overflow-hidden rounded-xl">
        <div
          className="h-[400px] w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/confident-speaker.png')" }}
        ></div>
      </div>

      {/* Article Content */}
      <div className="mx-auto mb-12 max-w-3xl">
        <div className="prose prose-lg prose-invert max-w-none">
          <p>
            The first time I held a microphone, my hands trembled. Not from fear of public speaking, but from the weight
            of what that moment represented. After years of silence, I was finally being heard.
          </p>

          <p>
            My journey into media began in an unlikely place—San Quentin State Prison. Incarcerated at 23, I found
            myself in a system designed to silence and isolate. But within those walls, I discovered something
            unexpected: the power of storytelling.
          </p>

          <h2>Finding Purpose Through Media</h2>

          <p>
            In 2012, I joined the San Quentin Media Center, a program that allowed incarcerated individuals to create
            radio programs, documentaries, and written pieces. At first, it was just something to pass the time. I had
            no idea it would become my life's calling.
          </p>

          <p>
            My first project was a short radio piece about family visitations. I interviewed fellow incarcerated men
            about what those precious hours with loved ones meant to them. The vulnerability in their voices, the raw
            emotion—it struck me how rarely these perspectives were heard in mainstream media.
          </p>

          <blockquote>
            "The most powerful form of rehabilitation is being able to tell your own story, in your own words, and have
            someone truly listen."
          </blockquote>

          <p>
            As I developed my skills, I began to understand media's dual nature. It could reinforce harmful stereotypes
            about incarcerated people, or it could humanize us. It could perpetuate fear, or it could build bridges of
            understanding. The difference often came down to who was holding the microphone.
          </p>

          <h2>The Transformation</h2>

          <p>
            Learning to craft stories changed how I saw myself. No longer defined solely by my worst mistakes, I became
            a storyteller, a journalist, someone with something valuable to contribute. This shift in identity was
            profound and healing.
          </p>

          <p>
            I worked on increasingly complex projects, eventually co-producing a documentary about rehabilitation
            programs that was screened at film festivals. From behind prison walls, I was reaching people, changing
            perceptions, making an impact.
          </p>

          <p>
            When I was released in 2018, I faced the challenge many formerly incarcerated individuals encounter:
            rebuilding a life from scratch. But unlike many, I had a clear purpose and a set of skills that could open
            doors.
          </p>

          <h2>Creating Restorative Media</h2>

          <p>
            The concept of restorative media grew from my experiences. Traditional media often focuses on the
            sensational aspects of crime and punishment, rarely following up with stories of redemption, healing, or
            community rebuilding.
          </p>

          <p>
            I envisioned a different approach—one that acknowledged harm but also highlighted restoration. One that gave
            voice to all stakeholders in a story, especially those most marginalized. One that didn't just expose
            problems but explored solutions.
          </p>

          <p>
            Today, my work focuses on creating these balanced narratives. Whether I'm producing a documentary about
            community-based alternatives to incarceration or mentoring young journalists from underrepresented
            backgrounds, the goal remains the same: to use media as a tool for healing and transformation.
          </p>

          <h2>Lessons Learned</h2>

          <p>My journey has taught me several key lessons about finding one's voice:</p>

          <ul>
            <li>
              <strong>Authenticity matters.</strong> The most powerful stories come from lived experience and genuine
              emotion.
            </li>
            <li>
              <strong>Technical skills can be learned.</strong> Don't let lack of experience stop you from starting.
            </li>
            <li>
              <strong>Community is essential.</strong> No one finds their voice in isolation—we need mentors,
              collaborators, and audiences.
            </li>
            <li>
              <strong>Purpose drives persistence.</strong> When your work connects to a deeper mission, you'll find the
              strength to overcome obstacles.
            </li>
          </ul>

          <p>
            Finding my voice wasn't a single moment but a process that continues to unfold. Each project, each story I
            help tell, each person who finds their own voice through my mentorship—all of these expand what's possible.
          </p>

          <p>
            If you're searching for your own voice, especially after experiencing silencing or marginalization, know
            this: your story matters. The world needs your unique perspective. And when you speak your truth, you create
            space for others to do the same.
          </p>

          <p>
            That's the true power of voice—it echoes, amplifies, and inspires. From one microphone to many, from silence
            to a chorus of diverse perspectives. This is how change begins.
          </p>
        </div>
      </div>

      {/* Article Actions */}
      <div className="mx-auto mb-12 flex max-w-3xl items-center justify-between border-y border-gray-800 py-4">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white">
            <ThumbsUp className="h-5 w-5" />
            <span>127</span>
          </button>
          <button className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white">
            <MessageSquare className="h-5 w-5" />
            <span>24</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white">
            <Bookmark className="h-5 w-5" />
            <span className="hidden sm:inline">Save</span>
          </button>
          <button className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white">
            <Share2 className="h-5 w-5" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>

      {/* Related Entries */}
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-2xl font-bold">More Journal Entries</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Entry 1 */}
          <Link href="/troy-williams-journal/media-representation" className="group">
            <div className="overflow-hidden rounded-xl">
              <div
                className="h-48 w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: "url('/community-gathering.png')" }}
              ></div>
            </div>
            <div className="mt-4">
              <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-yellow-500">
                The Power of Representation in Media
              </h3>
              <p className="text-sm text-gray-400">
                Why authentic representation matters and how it can change narratives around marginalized communities.
              </p>
            </div>
          </Link>

          {/* Entry 2 */}
          <Link href="/troy-williams-journal/documentary-filmmaking" className="group">
            <div className="overflow-hidden rounded-xl">
              <div
                className="h-48 w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: "url('/film-camera-documentary-crew.png')" }}
              ></div>
            </div>
            <div className="mt-4">
              <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-yellow-500">
                The Art of Documentary Filmmaking
              </h3>
              <p className="text-sm text-gray-400">
                Lessons I've learned about capturing authentic stories and giving voice to those who need to be heard.
              </p>
            </div>
          </Link>

          {/* Entry 3 */}
          <Link href="/troy-williams-journal/returning-to-san-quentin" className="group">
            <div className="overflow-hidden rounded-xl">
              <div
                className="h-48 w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: "url('/prison-documentary.png')" }}
              ></div>
            </div>
            <div className="mt-4">
              <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-yellow-500">
                Returning to San Quentin: A Full Circle Moment
              </h3>
              <p className="text-sm text-gray-400">
                Reflections on returning to San Quentin State Prison as a filmmaker and mentor rather than an inmate.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
