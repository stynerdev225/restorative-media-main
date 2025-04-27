import Link from "next/link"
import { CalendarDays, Clock, ArrowLeft, Share2, Bookmark, ThumbsUp, MessageSquare, Tag } from "lucide-react"

export default function ReturningToSanQuentinPage() {
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
          Returning to San Quentin: A Full Circle Moment
        </h1>
        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            February 20, 2025
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            15 min read
          </span>
          <span className="flex items-center gap-1">
            <Tag className="h-4 w-4" />
            Personal
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
          style={{ backgroundImage: "url('/prison-documentary.png')" }}
        ></div>
      </div>

      {/* Article Content */}
      <div className="mx-auto mb-12 max-w-3xl">
        <div className="prose prose-lg prose-invert max-w-none">
          <p>
            Last week, I walked through the gates of San Quentin State Prison. The heavy metal door clanged shut behind
            me—a sound that once signified the separation between me and freedom. But this time was different. This
            time, I was there by choice, carrying camera equipment instead of prison-issued belongings.
          </p>

          <p>
            Seven years after my release, I returned to the place where I spent nearly two decades of my life. Not as an
            inmate, but as a filmmaker and mentor for the current participants in the San Quentin Media Center—the same
            program that changed my life.
          </p>

          <h2>The Weight of Memory</h2>

          <p>
            Walking through those familiar corridors was surreal. Every corner held memories—some painful, some
            transformative. The yard where I exercised daily to maintain my physical and mental health. The education
            building where I first learned to operate a camera. The chapel where I found moments of peace amid chaos.
          </p>

          <p>
            The prison looked largely the same, yet I saw it through entirely different eyes. Details I once overlooked
            now stood out with stark clarity—the way sunlight filtered through barred windows, creating patterns on the
            concrete floor; the distinct institutional smell that never quite leaves your memory; the sound of keys
            jangling as officers moved through the facility.
          </p>

          <blockquote>
            "The most profound transformations often occur in the most unlikely places. San Quentin was both my prison
            and my classroom."
          </blockquote>

          <p>
            What struck me most was how the men reacted to my return. Some were old friends who remained incarcerated,
            their faces lighting up with genuine joy at seeing my success. Others were new to the program, men who had
            heard my story and were inspired by the possibility it represented.
          </p>

          <h2>The Media Workshop</h2>

          <p>
            I was there to lead a three-day workshop on documentary filmmaking. The irony wasn't lost on me—teaching
            skills I had first learned in this very place, now enhanced by years of professional experience on the
            outside.
          </p>

          <p>
            The classroom was filled with fifteen men of various ages and backgrounds, all united by their interest in
            media and storytelling. Some had been in the program for years, while others were just beginning their
            journey.
          </p>

          <p>
            We covered technical aspects of filmmaking—framing shots, capturing clean audio, basic editing principles.
            But the most valuable discussions centered around the ethics and purpose of documentary work. How do you
            tell someone else's story responsibly? How do you balance artistic vision with journalistic integrity? How
            can media be used as a tool for social change?
          </p>

          <p>
            These men understood something that many professional filmmakers take years to grasp: the profound
            responsibility that comes with amplifying voices and shaping narratives. When you've been misrepresented or
            ignored by mainstream media, you develop a keen awareness of storytelling's power.
          </p>

          <h2>Moments of Connection</h2>

          <p>
            During lunch breaks, I sat in the yard with program participants, sharing stories and advice. One young man,
            serving a 15-year sentence, showed me scripts he'd been writing—thoughtful reflections on redemption and
            second chances.
          </p>

          <p>
            "I never thought I could be creative," he told me. "Before this program, I just thought I was my crime.
            Nothing else."
          </p>

          <p>
            His words echoed my own journey. I remembered the first time someone called me a "filmmaker" instead of an
            "inmate"—how that simple shift in language had opened up new possibilities for how I saw myself.
          </p>

          <p>
            Another participant, a man in his fifties nearing the end of a 25-year sentence, asked detailed questions
            about the media industry. How had it changed? What skills would be most valuable upon release? What
            challenges might he face?
          </p>

          <p>
            I answered honestly, sharing both the opportunities and obstacles that awaited. The technological landscape
            had transformed dramatically since his incarceration, but the core principles of storytelling remained
            constant. His life experience, I assured him, would be his greatest asset.
          </p>

          <h2>The Documentary Project</h2>

          <p>
            The workshop culminated in a collaborative project—a short documentary about the impact of arts programming
            in prison. The men worked in teams, conducting interviews with fellow incarcerated individuals, program
            facilitators, and even a few prison administrators who supported these initiatives.
          </p>

          <p>
            Watching them work was profoundly moving. They approached the project with seriousness and creativity,
            navigating the unique challenges of filming in a prison environment. Limited access to locations. Strict
            time constraints. The need for multiple approvals.
          </p>

          <p>
            Despite these obstacles, they captured compelling footage and thoughtful interviews. One particularly
            powerful moment came when a participant interviewed a correctional officer who had initially been skeptical
            of arts programming but had witnessed its positive effects firsthand.
          </p>

          <p>
            "I used to think these programs were a waste of taxpayer money," the officer admitted on camera. "Now I see
            they're one of the few things that actually work."
          </p>

          <h2>Full Circle</h2>

          <p>
            On the final day, we screened the rough cuts of their work. The room filled with pride as each team
            presented their segment. The footage wasn't perfect—some shots were shaky, some audio could have been
            cleaner—but the authenticity and insight were undeniable.
          </p>

          <p>
            As I prepared to leave, a staff member who had been with the program since my time there pulled me aside.
            "You know," he said, "the guys talk about you all the time. You're proof that what we're doing here
            matters."
          </p>

          <p>
            Walking out through those gates—this time toward freedom rather than away from it—I felt the weight of both
            privilege and responsibility. The privilege of having received a second chance that many never get. The
            responsibility to create opportunities for others still waiting for theirs.
          </p>

          <p>
            My journey has come full circle, but the circle continues to widen. Each person who finds their voice, who
            tells their story, who challenges prevailing narratives about incarceration and redemption—they all expand
            what's possible.
          </p>

          <p>
            San Quentin will always be part of my story. Not just as a place that confined me, but as the unexpected
            beginning of a path that would lead to purpose and meaning. In returning, I was reminded that transformation
            isn't about leaving your past behind—it's about integrating it into a larger narrative of growth and
            contribution.
          </p>

          <p>
            As I continue my work in restorative media, I carry with me the voices and stories of those still inside.
            Their perspectives matter. Their creativity matters. Their humanity matters. And I am committed to creating
            platforms where they can be heard.
          </p>
        </div>
      </div>

      {/* Article Actions */}
      <div className="mx-auto mb-12 flex max-w-3xl items-center justify-between border-y border-gray-800 py-4">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white">
            <ThumbsUp className="h-5 w-5" />
            <span>215</span>
          </button>
          <button className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white">
            <MessageSquare className="h-5 w-5" />
            <span>42</span>
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
          <Link href="/troy-williams-journal/finding-my-voice" className="group">
            <div className="overflow-hidden rounded-xl">
              <div
                className="h-48 w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: "url('/confident-speaker.png')" }}
              ></div>
            </div>
            <div className="mt-4">
              <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-yellow-500">
                Finding My Voice: From Incarceration to Inspiration
              </h3>
              <p className="text-sm text-gray-400">
                My journey of discovering the power of storytelling and how it transformed my life after incarceration.
              </p>
            </div>
          </Link>

          {/* Entry 2 */}
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

          {/* Entry 3 */}
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
        </div>
      </div>
    </div>
  )
}
