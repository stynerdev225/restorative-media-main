import Image from "next/image"
import Link from "next/link"
import { Clock, ThumbsUp, MessageSquare, Share2, Facebook, Twitter, Mail, Bookmark, Check } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { VideoPlayer } from "@/components/video-player"
import { RelatedVideos } from "@/components/related-videos"
import { RecommendedVideos } from "@/components/recommended-videos"
import { AdvertisementBanner } from "@/components/advertisement-banner"
import { CommentsSection } from "@/components/comments-section"

export default function AlbumProductionArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="album-production"
              thumbnailUrl="/featured-music-1.jpg"
              title="Behind the Scenes: How Your Favorite Albums Are Produced"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Article Header */}
              <div className="mb-6">
                <span className="bg-restorative-gold text-white px-2 py-1 text-xs font-bold uppercase">MUSIC</span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                  Behind the Scenes: How Your Favorite Albums Are Produced
                </h1>

                <div className="flex items-center mt-4 mb-6">
                  <Image
                    src="/author-margaery.jpg"
                    alt="Margaery Tyrell"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="text-sm">
                      by{" "}
                      <Link href="/author/margaery-tyrell" className="font-medium hover:text-restorative-gold">
                        Margaery Tyrell
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">September 3, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">2.4k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">73</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">8 min read</span>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-500">SHARE:</span>
                    <button className="bg-[#3b5998] text-white p-2 rounded">
                      <Facebook className="h-4 w-4" />
                    </button>
                    <button className="bg-[#1da1f2] text-white p-2 rounded">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded">
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className="bg-gray-200 text-gray-700 p-2 rounded">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed">
                  When you press play on your favorite album, you're experiencing the culmination of months—sometimes
                  years—of creative work, technical expertise, and countless decisions made by a team of professionals.
                  The journey from an artist's initial idea to the polished tracks in your playlist is a fascinating
                  process that combines artistry, technology, psychology, and business acumen. Let's pull back the
                  curtain and explore how modern albums are produced, from conception to release.
                </p>

                <h2>Pre-Production: Where Albums Begin</h2>
                <p>
                  Long before anyone steps into a recording studio, the pre-production phase lays the groundwork for a
                  successful album. This crucial stage involves songwriting, arranging, and planning the overall vision
                  for the project.
                </p>

                <p>
                  For many artists, songwriting is a deeply personal process that can take various forms. Some
                  songwriters prefer to work alone, crafting lyrics and melodies in private before bringing them to
                  collaborators. Others thrive in co-writing sessions, where multiple writers bounce ideas off each
                  other. In today's music industry, it's common for artists to work with professional songwriters who
                  specialize in creating hits for specific genres or markets.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🎵</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">The Album Production Process</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Pre-Production: Songwriting, arranging, demos, selecting a producer and studio",
                        "Recording: Tracking instruments and vocals, often starting with rhythm section",
                        "Editing: Cleaning up performances, comping takes, and time/pitch correction",
                        "Mixing: Balancing levels, adding effects, and creating the sonic landscape",
                        "Mastering: Final polish for consistent sound across all platforms",
                        "Release: Distribution, marketing, and promotion",
                      ].map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p>
                  Once a collection of songs begins to take shape, artists typically create demo recordings. These rough
                  versions help communicate the vision to producers, record labels, and other collaborators. Demos range
                  from simple voice memos recorded on a smartphone to more elaborate home recordings that capture the
                  essence of the song.
                </p>

                <p>
                  Selecting the right producer is one of the most important decisions in the album-making process. A
                  producer serves as both creative director and project manager, helping to shape the sound of the album
                  while keeping the project on track. Some producers are known for a signature sound (like Rick Rubin's
                  raw authenticity or Max Martin's pop polish), while others are valued for their ability to adapt to an
                  artist's vision.
                </p>

                <h2>The Recording Studio: Where Magic Happens</h2>
                <p>
                  When pre-production is complete, it's time to enter the recording studio. Modern studios range from
                  sprawling facilities with multiple rooms and vintage equipment to compact digital setups that can fit
                  in a backpack. Regardless of size, all studios serve the same purpose: to capture performances in the
                  highest possible quality.
                </p>

                <div className="my-6">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/recording-studio-layout.jpg"
                        alt="Typical recording studio layout showing control room and live room"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          STUDIO LAYOUT
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        A typical recording studio layout showing the control room with mixing console and the live room
                        where instruments are recorded
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  The recording process typically begins with tracking the rhythm section—drums, bass, and rhythm
                  guitars. These instruments provide the foundation upon which everything else is built. In some genres,
                  like electronic music, this foundation might be created with programmed beats and synthesizers rather
                  than live instruments.
                </p>

                <p>
                  Once the rhythm tracks are complete, additional instruments are layered on top. Lead guitars,
                  keyboards, strings, horns, and other elements add color and texture to the arrangement. Throughout
                  this process, the producer and engineer make countless decisions about microphone selection,
                  placement, and processing to capture the desired sound.
                </p>

                <p>
                  Vocal recording often comes last, allowing the singer to respond to the emotional landscape created by
                  the instrumental tracks. Vocal sessions can be intense, as producers push for authentic performances
                  that convey the emotion of the lyrics. It's common for vocalists to record multiple takes of each
                  section, which will later be compiled into a composite or "comped" performance that combines the best
                  moments from each take.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🎚️</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Legendary Producers & Their Techniques</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Rick Rubin: Known for stripping productions back to their essence and focusing on emotional authenticity",
                        "Quincy Jones: Master of arrangement who blends genres seamlessly (Michael Jackson's 'Thriller')",
                        "Dr. Dre: Pioneer of the G-funk sound with immaculate low-end and meticulous attention to detail",
                        "Brian Eno: Ambient music innovator who uses the studio as an instrument and embraces happy accidents",
                        "Max Martin: Pop hitmaker who crafts mathematically perfect hooks and pristine productions",
                        "Timbaland: Revolutionary beatmaker known for unexpected sounds and complex rhythmic patterns",
                      ].map((producer, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{producer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>Post-Production: Shaping the Sound</h2>
                <p>
                  Once all the performances have been captured, the post-production phase begins. This includes editing,
                  mixing, and mastering—processes that transform raw recordings into polished, professional tracks.
                </p>

                <h3>Editing: Perfecting the Performances</h3>
                <p>
                  Modern digital recording allows for extensive editing capabilities that were unimaginable in the
                  analog era. Engineers can correct timing issues, tune vocals, replace drum hits, and even move
                  individual notes. The level of editing varies greatly depending on the genre and the artist's
                  preferences—some embrace a more natural, imperfect sound, while others aim for technical perfection.
                </p>

                <p>
                  A controversial tool in modern production is Auto-Tune, which corrects pitch inaccuracies in vocal
                  performances. While it was originally designed to subtly fix minor tuning issues, it has also become a
                  creative effect in its own right, creating the distinctive robotic vocal sound heard in much of
                  contemporary pop and hip-hop.
                </p>

                <h3>Mixing: Creating the Sonic Landscape</h3>
                <p>
                  Mixing is where the individual tracks are balanced and processed to create a cohesive whole. A skilled
                  mix engineer uses tools like equalization, compression, reverb, and delay to give each element its own
                  space in the frequency spectrum and stereo field.
                </p>

                <p>
                  The mixing process involves both technical expertise and artistic judgment. Engineers must ensure that
                  all the important elements can be heard clearly while maintaining the emotional impact of the
                  performances. They also add effects that enhance the mood and character of the song, from subtle
                  ambience to dramatic sonic transformations.
                </p>

                <p>
                  In today's music industry, it's common for albums to be mixed by specialists who focus exclusively on
                  this craft. Top mix engineers like Serban Ghenea (Taylor Swift, The Weeknd), Andrew Scheps (Adele, Red
                  Hot Chili Peppers), and Manny Marroquin (Rihanna, Bruno Mars) are sought after for their ability to
                  bring clarity and excitement to recordings.
                </p>

                <h3>Mastering: The Final Polish</h3>
                <p>
                  Mastering is the final step in the production process, where the mixed tracks are prepared for
                  distribution. A mastering engineer optimizes the sound for various playback systems, ensures
                  consistency across the album, and addresses any technical issues that might have been missed during
                  mixing.
                </p>

                <p>
                  The mastering process typically involves subtle adjustments to equalization, dynamics, and stereo
                  imaging. It's also where the final loudness level is determined—a contentious issue in the so-called
                  "loudness wars," where commercial recordings have become increasingly compressed to maximize perceived
                  volume.
                </p>

                <p>
                  Like mixing, mastering has become a specialized field with dedicated professionals who bring a fresh
                  perspective and specialized equipment to the process. Legendary mastering engineers like Bob Ludwig,
                  Bernie Grundman, and Emily Lazar have put their sonic fingerprints on countless classic albums.
                </p>

                <h2>The Evolution of Production Techniques</h2>
                <p>
                  Album production has evolved dramatically over the decades, driven by technological innovations and
                  changing artistic sensibilities. Let's explore some key developments that have shaped the sound of
                  modern music:
                </p>

                <h3>From Analog to Digital</h3>
                <p>
                  For most of recording history, music was captured on analog tape, which imparted a warm, slightly
                  compressed sound that many still cherish. The transition to digital recording in the 1980s and 90s
                  brought unprecedented clarity and editing capabilities but was initially criticized for sounding cold
                  and clinical.
                </p>

                <p>
                  Today, many productions blend analog and digital approaches, using vintage equipment for character and
                  digital tools for convenience and precision. Some artists record to tape before transferring to
                  digital for editing, while others use software emulations of classic analog gear.
                </p>

                <h3>The Rise of Home Studios</h3>
                <p>
                  Advances in technology have democratized music production, allowing artists to create
                  professional-quality recordings outside of traditional studios. Digital audio workstations (DAWs) like
                  Pro Tools, Logic Pro, and Ableton Live have put powerful production tools within reach of independent
                  musicians.
                </p>

                <p>
                  This shift has changed the economics of the industry and enabled more diverse voices to be heard.
                  Albums like Billie Eilish's Grammy-winning "When We All Fall Asleep, Where Do We Go?" were largely
                  produced in bedroom studios, proving that commercial success no longer requires access to expensive
                  facilities.
                </p>

                <h3>Collaborative Production</h3>
                <p>
                  Modern album production is increasingly collaborative, with artists working with multiple producers
                  and songwriters to create a diverse collection of tracks. It's common for major albums to credit
                  dozens of contributors, each bringing their unique skills and perspectives to the project.
                </p>

                <p>
                  Digital technology has facilitated this collaboration, allowing files to be shared instantly across
                  the globe. A track might begin in a producer's studio in Los Angeles, receive vocal contributions from
                  an artist in New York, and be mixed by an engineer in London—all without the collaborators ever being
                  in the same room.
                </p>

                <h2>The Human Element in a Digital World</h2>
                <p>
                  Despite all the technological advances in music production, the most important element remains human
                  creativity and connection. The best producers understand that their primary job is to help artists
                  express themselves authentically and connect with listeners on an emotional level.
                </p>

                <p>
                  Rick Rubin, one of the most successful producers of all time, is known for his minimalist approach and
                  focus on capturing honest performances. "My job is to do whatever needs to be done to help the artist
                  make the best work they can," he has said. "Sometimes that means doing very little."
                </p>

                <p>
                  Similarly, legendary producer Quincy Jones, who helmed Michael Jackson's "Thriller"—the best-selling
                  album of all time—emphasizes the importance of emotional truth in music. "You can't make music just
                  with technology," he once remarked. "You can't make music just with the head. You have to make music
                  with the heart."
                </p>

                <h2>The Future of Album Production</h2>
                <p>As we look to the future, several trends are shaping the evolution of album production:</p>

                <p>
                  <strong>Artificial Intelligence</strong> is beginning to play a role in music creation, with tools
                  that can generate melodies, suggest chord progressions, and even mimic the styles of specific artists.
                  While AI is unlikely to replace human creativity, it may become an increasingly important collaborator
                  in the production process.
                </p>

                <p>
                  <strong>Immersive audio formats</strong> like Dolby Atmos and Sony 360 Reality Audio are creating new
                  possibilities for spatial sound design. These technologies allow producers to place sounds not just
                  from left to right but also above, below, and around the listener, creating a more three-dimensional
                  experience.
                </p>

                <p>
                  <strong>Virtual collaboration tools</strong> continue to improve, enabling real-time interaction
                  between musicians in different locations. As these technologies develop, we may see new forms of
                  creative collaboration that transcend geographical boundaries.
                </p>

                <p>
                  Despite these technological advances, the fundamental goal of album production remains unchanged: to
                  create a compelling musical experience that resonates with listeners. Whether working with
                  cutting-edge digital tools or vintage analog equipment, the best producers will continue to serve as
                  guides and facilitators in the artistic process, helping artists bring their visions to life.
                </p>

                <p>
                  The next time you listen to your favorite album, take a moment to appreciate the countless hours of
                  creative work and technical expertise that went into its creation. Behind every great record is a team
                  of dedicated professionals working together to craft an experience that moves, inspires, and connects
                  with audiences around the world.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/music-production" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  music production
                </Link>
                <Link href="/tag/recording-studio" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  recording studio
                </Link>
                <Link href="/tag/album-making" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  album making
                </Link>
                <Link href="/tag/music-industry" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  music industry
                </Link>
                <Link href="/tag/audio-engineering" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  audio engineering
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10">
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/author-margaery.jpg"
                        alt="Margaery Tyrell"
                        width={80}
                        height={80}
                        className="rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-restorative-gold text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
                        <span className="text-sm">✍️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Margaery Tyrell</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Margaery is a music journalist with a background in audio engineering. She has spent time in
                        recording studios around the world, observing the production process firsthand and interviewing
                        renowned producers and engineers about their craft.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Link
                          href="/author/margaery-tyrell"
                          className="text-restorative-gold hover:text-restorative-gold/80 hover:underline text-sm font-medium flex items-center gap-1 transition-colors"
                        >
                          <span>View all posts</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <CommentsSection />

              {/* Related Videos Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
                <RelatedVideos />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Sticky Sidebar */}
              <div className="lg:sticky lg:top-20">
                {/* Save Button */}
                <div className="mb-6 flex justify-end">
                  <button className="flex items-center gap-2 bg-white hover:bg-gray-50 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                    <Bookmark className="h-4 w-4" />
                    <span className="text-sm font-medium">Save</span>
                  </button>
                </div>

                {/* Advertisement */}
                <div className="mb-8">
                  <div className="text-xs text-gray-500 uppercase mb-2">Advertisement</div>
                  <div className="relative w-full h-[90px] bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl overflow-hidden flex items-center justify-between px-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
                    <div className="text-white">
                      <div className="text-sm">Smart & Responsive</div>
                      <div className="text-xl font-bold">ADVERTISEMENT</div>
                    </div>
                    <div className="text-white text-2xl font-bold">728×90</div>
                  </div>
                </div>

                {/* Recommended Videos */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Recommended</h3>
                  <RecommendedVideos />
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/tag/music"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      music
                    </Link>
                    <Link
                      href="/tag/music-production"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      music production
                    </Link>
                    <Link
                      href="/tag/recording"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      recording
                    </Link>
                    <Link
                      href="/tag/studio"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      studio
                    </Link>
                    <Link
                      href="/tag/producers"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      producers
                    </Link>
                    <Link
                      href="/tag/mixing"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      mixing
                    </Link>
                    <Link
                      href="/tag/mastering"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      mastering
                    </Link>
                    <Link
                      href="/tag/audio-engineering"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      audio engineering
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest music news and exclusive content delivered to your inbox
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-restorative-gold focus:ring-restorative-gold/20"
                    />
                    <button
                      type="submit"
                      className="w-full bg-restorative-gold hover:bg-restorative-gold/90 text-white py-2 rounded-lg font-medium shadow-lg hover:shadow-xl hover:shadow-restorative-gold/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AdvertisementBanner />
      </main>
      <SiteFooter />
    </div>
  )
}
