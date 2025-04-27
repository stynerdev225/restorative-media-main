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

export default function SuperheroFilmEvolutionArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="superhero-film-evolution"
              thumbnailUrl="/featured-movie-1.jpg"
              title="The Evolution of Superhero Films: From Comics to Blockbusters"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Article Header */}
              <div className="mb-6">
                <span className="bg-restorative-gold text-white px-2 py-1 text-xs font-bold uppercase">MOVIE</span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                  The Evolution of Superhero Films: From Comics to Blockbusters
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
                    <span className="text-sm">3.8k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">142</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">10 min read</span>
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
                  Superhero films have transformed from niche genre offerings into the dominant force of modern
                  Hollywood, generating billions at the box office and reshaping the entire entertainment industry. This
                  remarkable evolution spans nearly eight decades, reflecting changing cultural attitudes, technological
                  advancements, and shifting audience expectations. From low-budget serials to sprawling cinematic
                  universes, the journey of superhero films mirrors the growth of both cinema itself and the expanding
                  influence of comic book culture on mainstream entertainment.
                </p>

                <h2>The Early Days: Serials and First Adaptations (1940s-1970s)</h2>
                <p>
                  The earliest superhero adaptations appeared as movie serials in the 1940s, with characters like
                  Batman, Captain America, and Superman making their screen debuts in episodic adventures shown before
                  feature films. These low-budget productions featured simplistic plots, rudimentary special effects,
                  and costumes that often looked homemade compared to today's standards. Nevertheless, they established
                  the visual language for bringing comic book characters to life and proved there was an audience eager
                  to see their favorite heroes in action.
                </p>

                <p>
                  The 1950s saw the debut of "Superman and the Mole Men" (1951), which served as a pilot for the
                  "Adventures of Superman" television series starring George Reeves. While television became the primary
                  home for superheroes during this era, the groundwork was being laid for future cinematic adaptations.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🦸</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Superhero Film Eras</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Early Adaptations (1940s-1970s): Movie serials and first feature films",
                        "Superman Era (1978-1987): Defined by Richard Donner's Superman and its sequels",
                        "Batman Renaissance (1989-1997): Tim Burton's gothic vision and Joel Schumacher's camp",
                        "Marvel's First Steps (1998-2007): Blade, X-Men, and Spider-Man establish Marvel properties",
                        "The Dark Knight Era (2005-2012): Christopher Nolan's grounded, realistic approach",
                        "MCU Dominance (2008-Present): Marvel's interconnected cinematic universe",
                        "Genre Diversification (2016-Present): R-rated films, animation, and multiverse storytelling",
                      ].map((era, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{era}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p>
                  The true watershed moment came in 1978 with Richard Donner's "Superman: The Movie," starring
                  Christopher Reeve. With its tagline "You'll believe a man can fly," the film delivered on its promise
                  through groundbreaking special effects, a stirring John Williams score, and Reeve's iconic
                  performance. It treated its source material with unprecedented respect and seriousness, establishing a
                  template for superhero films that would influence generations of filmmakers.
                </p>

                <p>
                  "Superman" proved that comic book adaptations could be both critically acclaimed and commercially
                  successful, grossing over $300 million worldwide (equivalent to over $1 billion today when adjusted
                  for inflation). It spawned three sequels of varying quality, with "Superman II" (1980) generally
                  regarded as worthy of its predecessor, while "Superman III" (1983) and "Superman IV: The Quest for
                  Peace" (1987) marked a steep decline in both critical reception and box office returns.
                </p>

                <div className="my-6">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/superhero-film-timeline.jpg"
                        alt="Timeline of major superhero film releases from 1978 to present"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          TIMELINE
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        Visual timeline showing the evolution of superhero films from Richard Donner's Superman (1978)
                        to the modern Marvel and DC cinematic universes
                      </p>
                    </div>
                  </div>
                </div>

                <h2>The Batman Renaissance (1989-1997)</h2>
                <p>
                  The next major evolution came with Tim Burton's "Batman" (1989), which presented a darker, more gothic
                  vision of the Caped Crusader that contrasted sharply with the campy 1960s television series. With
                  Michael Keaton as Batman, Jack Nicholson as the Joker, and production design by Anton Furst, the film
                  created a stylized Gotham City that felt both timeless and distinctly Burton-esque.
                </p>

                <p>
                  "Batman" was a cultural phenomenon, grossing over $400 million worldwide and sparking a merchandising
                  bonanza dubbed "Batmania." Its success led to Burton's "Batman Returns" (1992), which pushed the
                  darkness and weirdness even further, featuring memorable performances from Michelle Pfeiffer as
                  Catwoman and Danny DeVito as the Penguin.
                </p>

                <p>
                  When Warner Bros. sought a more family-friendly approach for the franchise, Joel Schumacher took over
                  directing duties for "Batman Forever" (1995) and "Batman & Robin" (1997). These films embraced a
                  campier aesthetic with neon colors, outlandish set designs, and increasingly cartoonish villains.
                  While "Batman Forever" performed well at the box office, "Batman & Robin" was a critical disaster that
                  effectively killed the franchise for nearly a decade. Its failure would later inform studios'
                  approaches to superhero adaptations, with many executives becoming wary of straying too far from the
                  source material's tone.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🎬</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Landmark Superhero Films</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Superman (1978): Proved superhero films could be both critically and commercially successful",
                        "Batman (1989): Established a darker, more serious tone for comic book adaptations",
                        "Blade (1998): First successful Marvel character film, opened doors for R-rated superhero content",
                        "X-Men (2000): Launched the modern era of ensemble superhero films",
                        "Spider-Man (2002): Demonstrated the massive box office potential of beloved characters",
                        "The Dark Knight (2008): Elevated the genre to critical acclaim and Oscar recognition",
                        "The Avengers (2012): Proved the viability of the shared universe model",
                        "Black Panther (2018): Cultural phenomenon that broke barriers for representation",
                      ].map((film, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{film}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>Marvel's First Steps (1998-2007)</h2>
                <p>
                  While DC Comics characters dominated the early superhero film landscape, Marvel struggled to bring its
                  heroes to the big screen. The company had licensed its characters to various studios, resulting in a
                  fragmented approach to adaptation. The breakthrough came with "Blade" (1998), starring Wesley Snipes
                  as the vampire hunter. Though not as well-known as Spider-Man or the X-Men, Blade proved that Marvel
                  properties could succeed at the box office, especially with the right star and a distinctive visual
                  style.
                </p>

                <p>
                  The true game-changer was Bryan Singer's "X-Men" (2000), which successfully translated the complex
                  world of Marvel's mutants to film. With a stellar cast including Patrick Stewart, Ian McKellen, and
                  Hugh Jackman (in his star-making role as Wolverine), "X-Men" balanced character development, social
                  commentary, and action sequences in a way that appealed to both fans and general audiences. Its
                  success paved the way for "X2" (2003), widely regarded as one of the best superhero sequels ever made.
                </p>

                <p>
                  Sam Raimi's "Spider-Man" (2002) took Marvel's cinematic presence to new heights, grossing over $800
                  million worldwide and proving that superhero films could be genuine blockbusters. Tobey Maguire's
                  earnest performance as Peter Parker/Spider-Man and the film's emphasis on the character's personal
                  struggles resonated with audiences. "Spider-Man 2" (2004) built on this foundation with a compelling
                  villain in Alfred Molina's Doctor Octopus and deeper exploration of Peter's dual identity, earning it
                  a reputation as one of the greatest superhero films ever made.
                </p>

                <p>
                  This period also saw attempts to launch other Marvel properties, with mixed results. "Daredevil"
                  (2003), "Hulk" (2003), "The Punisher" (2004), "Elektra" (2005), and "Ghost Rider" (2007) all failed to
                  match the critical or commercial success of the X-Men and Spider-Man franchises. Meanwhile, the
                  "Fantastic Four" films (2005 and 2007) performed adequately at the box office but were largely
                  dismissed by critics and hardcore fans.
                </p>

                <h2>The Dark Knight Era (2005-2012)</h2>
                <p>
                  After the failure of "Batman & Robin," Warner Bros. sought to reinvent its flagship superhero with a
                  more grounded, realistic approach. Christopher Nolan's "Batman Begins" (2005) rebooted the franchise
                  by exploring Bruce Wayne's origins and training, emphasizing the character's psychology and the
                  real-world implications of a vigilante operating in a corrupt city. Christian Bale's intense
                  performance as Batman and a supporting cast including Michael Caine, Gary Oldman, and Liam Neeson lent
                  the film gravitas, while Nolan's direction kept the focus on character and story rather than
                  spectacle.
                </p>

                <p>
                  "The Dark Knight" (2008) elevated the superhero genre to unprecedented critical heights, with Heath
                  Ledger's posthumous Oscar-winning performance as the Joker standing as one of the most memorable
                  villain portrayals in cinema history. The film transcended its comic book origins to become a crime
                  thriller that explored complex themes of chaos, order, and the thin line between hero and vigilante.
                  Grossing over $1 billion worldwide, it demonstrated that superhero films could be both commercially
                  successful and critically acclaimed.
                </p>

                <p>
                  Nolan completed his trilogy with "The Dark Knight Rises" (2012), which brought Bruce Wayne's story to
                  a conclusion while introducing new villains in Tom Hardy's Bane and Anne Hathaway's Catwoman. While
                  not quite reaching the heights of its predecessor, the film was still a massive success and cemented
                  Nolan's Batman trilogy as a landmark achievement in superhero filmmaking.
                </p>

                <p>
                  The influence of Nolan's approach extended beyond Batman, with many studios seeking to apply a similar
                  "dark and gritty" aesthetic to other properties. Zack Snyder's "Watchmen" (2009) adapted Alan Moore
                  and Dave Gibbons' seminal graphic novel with slavish visual fidelity, while "Man of Steel" (2013)
                  reimagined Superman in a more somber, conflicted light.
                </p>

                <h2>The Marvel Cinematic Universe (2008-Present)</h2>
                <p>
                  While Nolan was redefining Batman, Marvel Studios was embarking on an unprecedented experiment in
                  cinematic storytelling. Having regained the film rights to many of its characters (though notably not
                  Spider-Man or the X-Men), Marvel decided to produce its own films under the leadership of Kevin Feige.
                  The ambitious plan was to create an interconnected universe of films, mirroring the shared continuity
                  of Marvel Comics.
                </p>

                <p>
                  "Iron Man" (2008) launched this vision with Robert Downey Jr.'s charismatic performance as Tony Stark.
                  Directed by Jon Favreau, the film balanced humor, action, and character development while establishing
                  a more colorful, optimistic tone than the brooding superhero films that had dominated the previous
                  decade. A post-credits scene featuring Samuel L. Jackson as Nick Fury hinted at a larger universe,
                  though few could have predicted the scale of what would follow.
                </p>

                <p>
                  After introducing characters in individual films like "The Incredible Hulk" (2008), "Thor" (2011), and
                  "Captain America: The First Avenger" (2011), Marvel brought them together in Joss Whedon's "The
                  Avengers" (2012). The unprecedented crossover event was a massive gamble that paid off spectacularly,
                  grossing over $1.5 billion worldwide and proving the viability of the shared universe model.
                </p>

                <p>
                  The success of the Marvel Cinematic Universe (MCU) continued through multiple "phases" of films, each
                  building toward major crossover events. "Avengers: Infinity War" (2018) and "Avengers: Endgame" (2019)
                  represented the culmination of a 22-film saga, with "Endgame" becoming the highest-grossing film of
                  all time upon its release (later surpassed by "Avatar" when it was re-released).
                </p>

                <p>
                  The MCU's success can be attributed to several factors: consistent quality control under Feige's
                  supervision, a balance of respect for source material with willingness to adapt for the screen,
                  strategic casting decisions, and a tone that blends humor, action, and emotion. The studio also
                  demonstrated remarkable flexibility, successfully incorporating cosmic adventures ("Guardians of the
                  Galaxy"), mysticism ("Doctor Strange"), and Afrofuturism ("Black Panther") into its expanding
                  universe.
                </p>

                <h2>DC's Extended Universe and Beyond</h2>
                <p>
                  Warner Bros. attempted to replicate Marvel's success with its own shared universe of DC Comics
                  characters, beginning with "Man of Steel" and continuing with "Batman v Superman: Dawn of Justice"
                  (2016) and "Suicide Squad" (2016). However, the DC Extended Universe (DCEU) faced critical challenges,
                  with many films receiving mixed or negative reviews despite commercial success.
                </p>

                <p>
                  A turning point came with Patty Jenkins' "Wonder Woman" (2017), which earned strong reviews and
                  demonstrated the appeal of the character with Gal Gadot's portrayal of Diana Prince. The film's World
                  War I setting and optimistic tone provided a refreshing contrast to the darker DCEU films that
                  preceded it.
                </p>

                <p>
                  After the disappointing reception to "Justice League" (2017), which underwent significant reshoots and
                  a change of director from Zack Snyder to Joss Whedon, Warner Bros. shifted its approach to focus more
                  on individual films rather than an interconnected universe. This strategy yielded successes like
                  "Aquaman" (2018), "Shazam!" (2019), and "Joker" (2019), the latter of which won Joaquin Phoenix an
                  Oscar for his portrayal of the iconic villain in a standalone story outside the DCEU continuity.
                </p>

                <h2>Genre Diversification and the Future</h2>
                <p>
                  As superhero films have become the dominant force in Hollywood blockbuster filmmaking, the genre has
                  begun to diversify in terms of tone, style, and content. R-rated entries like "Deadpool" (2016),
                  "Logan" (2017), and "Joker" (2019) have proven that superhero films can successfully target adult
                  audiences with more mature themes and content.
                </p>

                <p>
                  Animation has also emerged as a vibrant medium for superhero storytelling, with "Spider-Man: Into the
                  Spider-Verse" (2018) winning an Academy Award for its innovative visual style and multiverse
                  narrative. The film's success paved the way for more animated superhero features and influenced the
                  visual language of live-action films as well.
                </p>

                <p>
                  The concept of the multiverse has become increasingly prominent in recent superhero films, allowing
                  for creative storytelling possibilities and the integration of different iterations of characters.
                  "Spider- Man: No Way Home" (2021) brought together three generations of Spider-Man actors, while "The
                  Flash" (2023) incorporated elements from various DC film adaptations.
                </p>

                <p>
                  Representation and diversity have also become more important in superhero filmmaking. "Black Panther"
                  (2018) celebrated African culture and featured a predominantly Black cast, becoming a cultural
                  phenomenon and proving that diverse superhero films could achieve massive commercial success. "Captain
                  Marvel" (2019) and "Wonder Woman" demonstrated the appeal of female-led superhero films, while
                  "Shang-Chi and the Legend of the Ten Rings" (2021) showcased Asian representation in the genre.
                </p>

                <h2>The Legacy and Impact of Superhero Films</h2>
                <p>
                  The rise of superhero films has had profound effects on the film industry and popular culture. These
                  effects include:
                </p>

                <h3>Industry Transformation</h3>
                <p>
                  Superhero films have reshaped Hollywood's business model, with studios increasingly focusing on
                  franchise filmmaking and shared universes. The emphasis on established intellectual property has come
                  at the expense of mid-budget original films, leading some filmmakers and critics to express concern
                  about the homogenization of mainstream cinema.
                </p>

                <h3>Technological Innovation</h3>
                <p>
                  The genre has driven advancements in visual effects, from "Superman's" groundbreaking flying sequences
                  to the sophisticated digital characters and environments of modern Marvel films. These innovations
                  have benefited filmmaking as a whole, providing new tools for visual storytelling across genres.
                </p>

                <h3>Cultural Impact</h3>
                <p>
                  Superhero films have brought comic book characters and concepts into the mainstream, with characters
                  like Iron Man, Black Panther, and Wonder Woman becoming cultural icons recognized around the world.
                  Comic conventions have transformed from niche gatherings into major cultural events, while superhero
                  imagery permeates advertising, fashion, and everyday discourse.
                </p>

                <h3>Narrative Expansion</h3>
                <p>
                  The success of superhero films has led to expansion into television and streaming, with shows like
                  "WandaVision," "The Boys," and "Peacemaker" exploring different aspects of superhero storytelling.
                  This cross-media approach allows for deeper character development and exploration of themes that might
                  not fit within the constraints of a feature film.
                </p>

                <p>
                  As we look to the future, the superhero genre continues to evolve. While some predict eventual
                  audience fatigue, the genre's ability to reinvent itself and incorporate elements from other film
                  traditions—from spy thrillers to cosmic adventures to period pieces—suggests it will remain a
                  significant part of the cinematic landscape for years to come.
                </p>

                <p>
                  From the primitive serials of the 1940s to the multibillion-dollar franchises of today, superhero
                  films have come to embody the power of cinema to transport audiences to fantastic worlds while
                  reflecting our own hopes, fears, and values. As these characters continue their journey from page to
                  screen, they carry with them the enduring appeal of heroism, adventure, and the extraordinary
                  possibilities of the human imagination.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/superhero-films" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  superhero films
                </Link>
                <Link href="/tag/marvel" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  marvel
                </Link>
                <Link href="/tag/dc-comics" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  dc comics
                </Link>
                <Link href="/tag/comic-book-movies" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  comic book movies
                </Link>
                <Link href="/tag/film-history" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  film history
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
                        Margaery is a film historian and critic specializing in genre cinema. With a background in both
                        film studies and comic book culture, she brings unique insights into the evolution of superhero
                        films and their place in the broader context of cinema history.
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
                      href="/tag/superhero-movies"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      superhero movies
                    </Link>
                    <Link
                      href="/tag/marvel"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      marvel
                    </Link>
                    <Link
                      href="/tag/dc"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      dc
                    </Link>
                    <Link
                      href="/tag/comic-books"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      comic books
                    </Link>
                    <Link
                      href="/tag/film-analysis"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      film analysis
                    </Link>
                    <Link
                      href="/tag/batman"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      batman
                    </Link>
                    <Link
                      href="/tag/avengers"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      avengers
                    </Link>
                    <Link
                      href="/tag/cinema-history"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      cinema history
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest movie news and exclusive content delivered to your inbox
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
