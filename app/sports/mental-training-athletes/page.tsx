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

export default function MentalTrainingAthletesArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="mental-training-athletes"
              thumbnailUrl="/featured-sports-1.png"
              title="Inside the Mind of Champions: Mental Training for Athletes"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Article Header */}
              <div className="mb-6">
                <span className="bg-restorative-gold text-white px-2 py-1 text-xs font-bold uppercase">SPORTS</span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                  Inside the Mind of Champions: Mental Training for Athletes
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
                    <span className="text-sm">2.6k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">94</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">7 min read</span>
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
                  When we marvel at elite athletes performing at the highest levels, we're often captivated by their
                  physical prowess—the lightning-fast sprint, the perfect golf swing, or the gravity-defying slam dunk.
                  Yet behind these extraordinary physical feats lies an equally impressive but less visible component:
                  mental strength. In the high-stakes world of competitive sports, the difference between good and
                  great, between silver and gold, often comes down to what happens between the ears.
                </p>

                <h2>The Mental Game: More Than Just Positive Thinking</h2>
                <p>
                  "The mental game is everything," says Michael Phelps, the most decorated Olympian of all time with 28
                  medals. "If you can't control what's going on in your head, you can't control what's going on in your
                  body." This sentiment is echoed by champions across sporting disciplines, from tennis courts to soccer
                  fields, from boxing rings to basketball arenas.
                </p>

                <p>
                  Mental training for athletes encompasses a wide range of psychological skills and techniques designed
                  to enhance performance, build resilience, and maintain focus under pressure. Far from being just
                  positive thinking or visualization, it's a sophisticated discipline that draws from sports psychology,
                  neuroscience, and performance coaching.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🧠</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Core Mental Skills for Athletes</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Goal Setting: Creating specific, measurable, achievable, relevant, and time-bound objectives",
                        "Visualization: Mentally rehearsing performance with vivid, detailed imagery",
                        "Focus Control: Developing the ability to concentrate on relevant cues and ignore distractions",
                        "Arousal Regulation: Managing energy levels and emotional states for optimal performance",
                        "Self-Talk: Using internal dialogue to maintain confidence and overcome challenges",
                        "Routine Development: Establishing consistent pre-performance rituals to enhance readiness",
                        "Mindfulness: Cultivating present-moment awareness without judgment",
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>The Science Behind Mental Training</h2>
                <p>
                  Recent advances in neuroscience have provided fascinating insights into how mental training affects
                  the brain. When athletes visualize performing their sport, they activate many of the same neural
                  pathways used during actual physical performance. This mental rehearsal strengthens neural
                  connections, essentially "priming" the brain for the real thing.
                </p>

                <p>
                  Research using functional magnetic resonance imaging (fMRI) has shown that elite athletes' brains
                  often display different activation patterns compared to novices. Top performers typically show greater
                  efficiency in areas related to motor control and decision-making, along with reduced activity in
                  regions associated with self-consciousness and doubt.
                </p>

                <div className="my-6">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/athlete-mental-training.jpg"
                        alt="Athlete performing visualization techniques with brain activity illustration"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          NEUROSCIENCE
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        Visualization activates similar neural pathways as physical performance, strengthening
                        connections in the brain that are essential for athletic excellence
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  Studies on stress hormones like cortisol have demonstrated that mental training techniques such as
                  mindfulness meditation can significantly reduce physiological stress responses. This is crucial for
                  athletes, as excessive stress can impair fine motor control, decision-making, and recovery.
                </p>

                <h2>Inside the Champion's Mind: Key Mental Strategies</h2>
                <p>
                  Let's explore some of the core mental training techniques used by elite athletes across different
                  sports:
                </p>

                <h3>Goal Setting: The Foundation of Mental Training</h3>
                <p>
                  Effective goal setting provides direction, motivation, and a framework for measuring progress. Sports
                  psychologists typically recommend that athletes set three types of goals:
                </p>

                <ul>
                  <li>
                    <strong>Outcome goals:</strong> These focus on the end result, such as winning a championship or
                    achieving a specific ranking.
                  </li>
                  <li>
                    <strong>Performance goals:</strong> These target objective standards independent of other
                    competitors, like running a marathon in under three hours.
                  </li>
                  <li>
                    <strong>Process goals:</strong> These concentrate on the specific actions needed to succeed, such as
                    improving a particular technique or maintaining form during fatigue.
                  </li>
                </ul>

                <p>
                  Serena Williams, winner of 23 Grand Slam singles titles, is known for her meticulous goal-setting
                  approach. "I've always been a goal-setter," she explains. "I like to write down my goals and check
                  them off. It gives me something to strive for beyond just winning."
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🏆</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Champion Mindset Quotes</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        '"I\'ve failed over and over again in my life. And that is why I succeed." — Michael Jordan',
                        "\"It's not whether you get knocked down; it's whether you get up.\" — Vince Lombardi",
                        '"Pressure is a privilege." — Billie Jean King',
                        '"The more difficult the victory, the greater the happiness in winning." — Pelé',
                        '"You miss 100% of the shots you don\'t take." — Wayne Gretzky',
                        '"Champions keep playing until they get it right." — Billie Jean King',
                        '"The difference between the impossible and the possible lies in a person\'s determination." — Tommy Lasorda',
                      ].map((quote, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700 italic">{quote}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3>Visualization: Mental Rehearsal for Physical Excellence</h3>
                <p>
                  Visualization, or imagery, involves creating vivid mental images of performing skills or achieving
                  goals. Elite athletes use all their senses to make these mental rehearsals as realistic as possible,
                  imagining not just what they'll see, but also what they'll hear, feel, and even smell during
                  competition.
                </p>

                <p>
                  Jack Nicklaus, widely regarded as one of the greatest golfers of all time, famously said, "I never hit
                  a shot, not even in practice, without having a very sharp, in-focus picture of it in my head." Before
                  each shot, Nicklaus would visualize the ball's entire flight path, from the moment of impact to where
                  it would land.
                </p>

                <p>
                  Olympic gymnasts are particularly known for their use of visualization. You'll often see them with
                  their eyes closed before a routine, mentally rehearsing every flip, twist, and landing. This mental
                  practice helps program muscle memory and builds confidence by creating a sense of familiarity with the
                  performance.
                </p>

                <h3>Focus Control: Mastering Attention</h3>
                <p>
                  The ability to direct and maintain attention on relevant cues while filtering out distractions is
                  crucial in sports. Different activities require different types of focus—from the narrow, internal
                  focus of a golfer preparing to putt to the broad, external awareness of a soccer midfielder scanning
                  the field.
                </p>

                <p>
                  Tennis champion Novak Djokovic demonstrates remarkable focus control, particularly in high-pressure
                  situations. His ability to block out crowd noise, ignore scoreboard pressure, and concentrate solely
                  on the present point has helped him win 20 Grand Slam titles. Djokovic uses specific breathing
                  techniques and pre-point routines to center his attention and maintain focus throughout long, grueling
                  matches.
                </p>

                <h3>Arousal Regulation: Finding the Optimal Zone</h3>
                <p>
                  Every athlete has an optimal zone of arousal—the sweet spot of energy and activation where they
                  perform best. Too little arousal leads to lethargy and disengagement; too much results in anxiety and
                  muscle tension. Mental training helps athletes recognize their ideal arousal level and develop
                  techniques to adjust their energy accordingly.
                </p>

                <p>
                  Some sports, like weightlifting or sprinting, benefit from higher arousal states, which is why you'll
                  often see athletes in these disciplines using energizing techniques like listening to upbeat music,
                  slapping their faces, or shouting before competing. In contrast, sports requiring fine motor control,
                  such as archery or golf, typically demand lower arousal levels, with athletes using calming strategies
                  like deep breathing or meditation.
                </p>

                <p>
                  NBA star Stephen Curry is known for his pre-game routine that helps regulate his arousal to the
                  perfect level. His methodical dribbling drills and shooting practice not only warm up his body but
                  also calibrate his mental state for optimal performance.
                </p>

                <h3>Self-Talk: The Internal Dialogue of Champions</h3>
                <p>
                  The conversations athletes have with themselves profoundly impact their performance. Negative
                  self-talk ("Don't miss this shot") often creates anxiety and actually increases the likelihood of
                  failure. In contrast, positive, instructional self-talk ("Smooth follow-through") focuses attention on
                  the process rather than the outcome.
                </p>

                <p>
                  Sports psychologists work with athletes to identify unhelpful thought patterns and replace them with
                  more productive internal dialogue. This might involve creating specific cue words or phrases that
                  trigger proper technique or mindset. For example, a swimmer might use the word "glide" to remind
                  themselves to maintain streamlined form, while a basketball player might repeat "quick feet" during
                  defensive drills.
                </p>

                <p>
                  Serena Williams is known for her use of positive self-talk during matches. After making an error, she
                  often gives herself a brief pep talk or uses affirmative gestures to reset her mindset for the next
                  point. This ability to quickly move past mistakes is a hallmark of mental toughness in elite athletes.
                </p>

                <h2>Mental Training in Action: Case Studies</h2>
                <p>
                  To understand how these mental skills come together in real-world competition, let's look at a few
                  notable examples:
                </p>

                <h3>Michael Jordan: The Ultimate Competitor</h3>
                <p>
                  Michael Jordan's mental approach to basketball is legendary. Beyond his physical gifts, Jordan's
                  competitive mindset set him apart. He was known for his ability to use perceived slights—whether real
                  or imagined—as motivation. In his Hall of Fame speech, Jordan revealed how he would create "enemies"
                  in his mind to fuel his competitive fire.
                </p>

                <p>
                  Jordan also demonstrated remarkable focus under pressure. His famous "flu game" in the 1997 NBA
                  Finals, where he scored 38 points despite being severely ill, showcased his ability to
                  compartmentalize physical discomfort and maintain performance. His pre-game visualization routine was
                  equally important—Jordan would mentally rehearse various game situations, preparing his mind for any
                  scenario that might arise.
                </p>

                <h3>Simone Biles: Mental Health and Performance</h3>
                <p>
                  Gymnastics star Simone Biles brought attention to the mental side of sports in a different way during
                  the 2020 Tokyo Olympics (held in 2021). When she withdrew from several events citing mental health
                  concerns and the "twisties"—a dangerous condition where gymnasts lose spatial awareness during aerial
                  moves—it sparked a global conversation about psychological well-being in elite sports.
                </p>

                <p>
                  Biles' decision highlighted an important aspect of mental training that's often overlooked: knowing
                  when to step back. Mental strength isn't just about pushing through; it's also about recognizing
                  limitations and making difficult decisions to protect long-term health and performance. Biles later
                  returned to win a bronze medal on balance beam, demonstrating her resilience and ability to
                  recalibrate her mental approach.
                </p>

                <h3>Roger Federer: The Zen Master of Tennis</h3>
                <p>
                  Tennis legend Roger Federer is renowned for his calm demeanor on court, regardless of the score or
                  situation. This emotional control is no accident—it's the result of deliberate mental training.
                  Federer works with his team to maintain perspective and focus on process rather than outcomes.
                </p>

                <p>
                  "I try to be the same person on and off the court," Federer has said. This consistency in approach
                  helps him manage the emotional highs and lows of tennis. His pre-match routines are designed to create
                  a sense of familiarity and comfort, reducing anxiety and allowing his natural abilities to shine.
                  Federer's longevity in the sport—winning Grand Slam titles well into his late 30s—is a testament to
                  his mental approach as much as his physical conditioning.
                </p>

                <h2>Implementing Mental Training: From Elite to Everyday</h2>
                <p>
                  While the examples above focus on elite athletes, mental training principles can benefit competitors
                  at all levels, from professional to recreational. Here's how these approaches can be implemented:
                </p>

                <h3>Working with Sports Psychologists</h3>
                <p>
                  Many professional teams and Olympic programs now employ full-time sports psychologists who work
                  directly with athletes to develop personalized mental training programs. These specialists assess each
                  athlete's psychological strengths and weaknesses, then design interventions to address specific needs.
                </p>

                <p>
                  The relationship between athlete and sports psychologist is highly individualized. Some athletes
                  benefit from regular, structured sessions, while others prefer a more as-needed approach. The key is
                  finding a professional who understands both the psychological principles and the specific demands of
                  the sport.
                </p>

                <h3>Technology and Mental Training</h3>
                <p>
                  Advances in technology have created new opportunities for mental training. Virtual reality systems
                  allow athletes to experience competitive scenarios in controlled environments, practicing their mental
                  skills while receiving immediate feedback. Biofeedback devices measure physiological markers of stress
                  and arousal, helping athletes learn to regulate their internal states more effectively.
                </p>

                <p>
                  Mobile apps focused on mindfulness, visualization, and goal tracking have made basic mental training
                  techniques accessible to athletes at all levels. These digital tools can't replace personalized
                  coaching, but they provide valuable resources for developing and maintaining mental skills.
                </p>

                <h3>Integrating Mental and Physical Training</h3>
                <p>
                  The most effective approach to athletic development integrates mental and physical training rather
                  than treating them as separate domains. Coaches are increasingly incorporating psychological elements
                  into regular practice sessions, creating pressure situations that challenge athletes mentally while
                  they perform physical skills.
                </p>

                <p>
                  For example, a basketball coach might simulate end-of-game scenarios, complete with crowd noise and
                  scoreboard pressure, to help players develop focus and emotional control. A golf instructor might
                  assign points to practice shots, creating competitive stakes that mimic tournament conditions.
                </p>

                <h2>The Future of Mental Training in Sports</h2>
                <p>
                  As our understanding of the brain continues to advance, mental training for athletes will likely
                  become even more sophisticated and personalized. Several emerging trends point to the future of this
                  field:
                </p>

                <p>
                  <strong>Neurofeedback training</strong>, which allows athletes to observe and eventually regulate
                  their own brain activity, shows promise for enhancing focus and performance under pressure. Early
                  research suggests that this approach may help athletes achieve optimal brain states more consistently.
                </p>

                <p>
                  <strong>Genetic insights</strong> may eventually allow for more personalized mental training programs.
                  Research is beginning to identify genetic factors that influence how individuals respond to stress,
                  learn new skills, and recover from setbacks—all crucial elements of athletic performance.
                </p>

                <p>
                  <strong>Cultural shifts</strong> around mental health in sports continue to evolve, with more athletes
                  openly discussing psychological challenges and seeking support. This increased awareness is helping
                  reduce stigma and encouraging younger athletes to develop mental skills alongside physical ones.
                </p>

                <h2>The Mental Edge: Where Champions Are Made</h2>
                <p>
                  As technology and training methods continue to advance, physical differences between elite athletes
                  become increasingly marginal. In this environment, the mental game often provides the decisive edge.
                  The athlete who can maintain focus under pressure, bounce back from setbacks, and perform consistently
                  in high-stakes situations will prevail over equally talented competitors who lack these psychological
                  skills.
                </p>

                <p>
                  "The physical abilities are the foundation of what makes a champion, but the mental skills are the
                  refinement," says sports psychologist Dr. Jim Loehr. "At the highest levels, everyone has physical
                  talent. The mind is what separates the good from the great."
                </p>

                <p>
                  For aspiring athletes at any level, this insight offers both a challenge and an opportunity. The
                  challenge is to dedicate time and effort to developing mental skills that may be less visible and
                  immediately rewarding than physical improvements. The opportunity is to gain a competitive advantage
                  in an area that many competitors neglect.
                </p>

                <p>
                  The next time you watch an elite athlete perform under immense pressure—sinking a putt to win a major
                  championship, serving for an Olympic gold medal, or making a game-winning shot as time
                  expires—remember that you're witnessing not just physical excellence, but the culmination of thousands
                  of hours of mental preparation. In those crucial moments, the battle is won or lost in the six inches
                  between the ears.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/sports-psychology" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  sports psychology
                </Link>
                <Link href="/tag/mental-training" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  mental training
                </Link>
                <Link href="/tag/elite-athletes" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  elite athletes
                </Link>
                <Link href="/tag/performance" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  performance
                </Link>
                <Link href="/tag/visualization" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  visualization
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
                        Margaery is a sports journalist with a background in sports psychology. She has interviewed
                        numerous elite athletes and coaches about their mental preparation techniques and has consulted
                        with professional teams on implementing psychological skills training programs.
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
                      href="/tag/sports-psychology"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      sports psychology
                    </Link>
                    <Link
                      href="/tag/mental-training"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      mental training
                    </Link>
                    <Link
                      href="/tag/athlete-mindset"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      athlete mindset
                    </Link>
                    <Link
                      href="/tag/visualization"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      visualization
                    </Link>
                    <Link
                      href="/tag/performance"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      performance
                    </Link>
                    <Link
                      href="/tag/focus"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      focus
                    </Link>
                    <Link
                      href="/tag/elite-athletes"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      elite athletes
                    </Link>
                    <Link
                      href="/tag/mindfulness"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      mindfulness
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest sports news and exclusive content delivered to your inbox
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
