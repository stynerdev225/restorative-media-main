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

export default function SourdoughArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="sourdough-bread-making"
              thumbnailUrl="/featured-food-1.jpg"
              title="The Art of Sourdough: Mastering Bread Making at Home"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Article Header */}
              <div className="mb-6">
                <span className="bg-restorative-gold text-white px-2 py-1 text-xs font-bold uppercase">FOOD</span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                  The Art of Sourdough: Mastering Bread Making at Home
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
                    <div className="text-xs text-gray-500">September 4, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">3.1k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">87</span>
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
                  There's something almost magical about the process of creating sourdough bread. From the bubbling
                  starter to the satisfying crackle of a freshly baked crust, sourdough baking connects us to thousands
                  of years of human culinary tradition. While commercial yeast has dominated bread making for the past
                  century, the ancient art of sourdough fermentation is experiencing a remarkable renaissance in home
                  kitchens around the world.
                </p>

                <h2>The Science Behind the Magic</h2>
                <p>
                  At its core, sourdough bread relies on a symbiotic culture of wild yeasts and lactic acid bacteria
                  that naturally occur in flour and the environment. Unlike commercial bread that uses isolated yeast
                  strains, sourdough harnesses a complex ecosystem of microorganisms that not only leaven the bread but
                  also develop its distinctive flavor profile and improve its nutritional qualities.
                </p>

                <p>
                  The fermentation process breaks down complex carbohydrates, making the bread more digestible for many
                  people. It also reduces phytic acid, which can inhibit mineral absorption, and creates a lower
                  glycemic response compared to commercial yeasted breads. The lactic and acetic acids produced during
                  fermentation contribute to sourdough's characteristic tang while naturally preserving the bread.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🍞</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Sourdough Starter Basics</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Mix equal parts flour and water by weight (100g each is a good starting point)",
                        "Keep at room temperature (70-75°F/21-24°C) and feed daily by discarding half and adding fresh flour and water",
                        "A healthy starter should double in size within 4-8 hours after feeding",
                        "Look for a pleasant, yogurt-like sour smell (not acetone or nail polish remover)",
                        "A mature starter typically takes 7-14 days to develop",
                        "Once established, it can be refrigerated and fed weekly if not baking regularly",
                      ].map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>Creating Your Sourdough Starter</h2>
                <p>
                  The journey into sourdough baking begins with creating a starter, the natural leavening agent that
                  will bring your bread to life. While you can purchase established starters online or get some from a
                  friend, there's something deeply satisfying about creating your own from scratch.
                </p>

                <p>
                  To begin, mix equal parts (by weight) of whole grain flour and water in a clean jar. Whole grain flour
                  works best for establishing a starter because it contains more microorganisms than refined flour. Stir
                  vigorously to incorporate air, then loosely cover and let sit at room temperature for 24 hours.
                </p>

                <p>
                  For the next 7-14 days, you'll "feed" your starter daily by discarding about half of it and adding
                  fresh flour and water in equal parts by weight. This regular feeding schedule helps establish a
                  healthy microbial community. Eventually, your starter will begin to show signs of life: bubbles
                  forming throughout, a pleasant sour smell, and a predictable rise and fall after feeding.
                </p>

                <div className="my-6">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/sourdough-stages.jpg"
                        alt="The stages of sourdough bread making from starter to finished loaf"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          PROCESS
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        The complete sourdough process: active starter, autolyse, bulk fermentation, shaping, proofing,
                        scoring, and baking
                      </p>
                    </div>
                  </div>
                </div>

                <h2>The Basic Sourdough Recipe</h2>
                <p>
                  Once your starter is reliably doubling in size within 4-8 hours after feeding, it's ready to make
                  bread. While there are countless variations of sourdough recipes, here's a basic formula that serves
                  as an excellent foundation:
                </p>

                <ul>
                  <li>500g bread flour (about 4 cups)</li>
                  <li>350g water (about 1½ cups)</li>
                  <li>100g active sourdough starter (about ½ cup)</li>
                  <li>10g salt (about 1½ teaspoons)</li>
                </ul>

                <p>
                  This creates a dough with approximately 70% hydration, which is manageable for beginners while still
                  producing excellent results. As you gain experience, you can experiment with higher hydration levels
                  for more open crumb structure.
                </p>

                <h2>The Sourdough Process</h2>
                <p>
                  Unlike commercial yeasted bread that can be mixed, risen, and baked in a few hours, sourdough is a
                  slow food in the truest sense. The entire process typically spans 24-36 hours, though most of that is
                  hands-off time. Here's a breakdown of the key stages:
                </p>

                <h3>1. Autolyse</h3>
                <p>
                  Begin by mixing just the flour and water, then letting this mixture rest for 30 minutes to several
                  hours. This step, called autolyse, allows the flour to fully hydrate and begins the development of
                  gluten. It results in a more extensible dough that requires less kneading.
                </p>

                <h3>2. Building Strength</h3>
                <p>
                  After the autolyse, add your active starter and salt, then incorporate them thoroughly. Rather than
                  traditional kneading, most artisan bakers use a technique called "stretch and fold." Every 30 minutes
                  for the first 2-3 hours of fermentation, gently stretch the dough and fold it over itself from all
                  four sides. This develops gluten strength while preserving the delicate air bubbles created by
                  fermentation.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">⏱️</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Sourdough Timeline</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Day 1, Morning: Feed your starter to prepare it for baking",
                        "Day 1, Evening: Mix dough, perform stretch and folds, bulk ferment at room temperature",
                        "Day 1, Night: Shape dough and place in banneton, refrigerate overnight",
                        "Day 2, Morning: Preheat oven with Dutch oven inside to 500°F (260°C)",
                        "Day 2, Baking: Score dough, bake covered for 20 minutes, then uncovered for 20-25 minutes",
                        "Day 2, Cooling: Allow bread to cool completely for at least 2 hours before slicing",
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

                <h3>3. Bulk Fermentation</h3>
                <p>
                  After the initial stretch and folds, allow the dough to continue fermenting until it has increased in
                  volume by about 50%. Depending on the temperature and the activity of your starter, this can take
                  anywhere from 4 to 12 hours. Look for a dough that has visible bubbles on the surface and feels puffy
                  and alive.
                </p>

                <h3>4. Shaping</h3>
                <p>
                  Once the bulk fermentation is complete, gently turn the dough onto a lightly floured surface. Without
                  degassing it too much, shape it into a round (boule) or oval (batard) loaf. This step creates surface
                  tension that helps the bread rise upward rather than outward during baking.
                </p>

                <h3>5. Final Proof</h3>
                <p>
                  Place your shaped dough into a proofing basket (banneton) or a bowl lined with a well-floured kitchen
                  towel. Cover and let it proof at room temperature for 30 minutes to an hour, then transfer to the
                  refrigerator for 8-16 hours. This cold fermentation slows down yeast activity while allowing the
                  bacteria to continue developing flavor and acidity.
                </p>

                <h3>6. Baking</h3>
                <p>
                  Preheat your oven to 500°F (260°C) with a Dutch oven or baking stone inside. When ready to bake, turn
                  your dough out onto parchment paper, score the top with a sharp blade to control the expansion, and
                  transfer it to the preheated Dutch oven. Bake covered for 20 minutes to create steam, which helps
                  develop a crisp crust, then uncover and continue baking for another 20-25 minutes until deeply golden.
                </p>

                <h2>Troubleshooting Common Issues</h2>
                <p>
                  Even experienced bakers encounter challenges with sourdough. Here are solutions to some common issues:
                </p>

                <h3>Flat Loaves</h3>
                <p>
                  If your bread spreads out rather than rising upward, it could be due to insufficient gluten
                  development, overproofing, or shaping without enough surface tension. Try building more strength
                  during bulk fermentation, shortening your proof time, or practicing your shaping technique.
                </p>

                <h3>Dense Crumb</h3>
                <p>
                  A dense loaf can result from underproofing, insufficient hydration, or not allowing the dough to
                  ferment long enough. Extend your bulk fermentation time, increase the water in your recipe, or ensure
                  your starter is at peak activity before mixing the dough.
                </p>

                <h3>Gummy Texture</h3>
                <p>
                  Gumminess often indicates that the bread is underbaked or was cut while still warm. Ensure your oven
                  is properly calibrated, extend the baking time if necessary, and always allow your bread to cool
                  completely (at least 2 hours) before slicing.
                </p>

                <h2>Beyond the Basic Loaf</h2>
                <p>
                  Once you've mastered the basic sourdough boule, a world of possibilities opens up. Experiment with
                  different flour combinations—rye, whole wheat, spelt, or einkorn—each bringing its own flavor and
                  texture. Add mix-ins like olives, nuts, dried fruits, or herbs. Try different shapes, from baguettes
                  to focaccia to sandwich loaves.
                </p>

                <p>
                  Don't limit your sourdough adventures to bread alone. Your starter can be used to create pancakes,
                  waffles, pizza dough, crackers, and even chocolate cake. The natural fermentation process enhances the
                  flavor and digestibility of all these foods.
                </p>

                <h2>The Sourdough Community</h2>
                <p>
                  One of the most beautiful aspects of sourdough baking is the community that has formed around it.
                  Bakers around the world share their knowledge, troubleshoot problems together, and even mail portions
                  of their starters to help others begin their journey. Social media platforms are filled with stunning
                  images of home-baked loaves and tips for improvement.
                </p>

                <p>
                  This spirit of sharing reflects the nature of sourdough itself—a living culture that thrives when
                  divided and passed along. Many bakers name their starters and speak of them almost as pets or family
                  members, recognizing the unique relationship we form with these microbial communities that transform
                  simple flour and water into nourishing food.
                </p>

                <h2>A Journey, Not a Destination</h2>
                <p>
                  Mastering sourdough is a lifelong pursuit. Even after years of baking, you'll continue to learn,
                  adjust, and improve. Each loaf teaches you something new about the interplay of time, temperature,
                  ingredients, and technique.
                </p>

                <p>
                  In our fast-paced world, sourdough offers a welcome opportunity to slow down and connect with an
                  ancient culinary tradition. The rhythms of feeding your starter and the patience required for
                  fermentation can become a meditative practice, a reminder that some of life's most rewarding
                  experiences can't be rushed.
                </p>

                <p>
                  So flour your hands, embrace the journey, and discover the profound satisfaction that comes from
                  transforming the simplest ingredients into something truly extraordinary. Your perfect loaf awaits.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/sourdough" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  sourdough
                </Link>
                <Link href="/tag/bread-making" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  bread making
                </Link>
                <Link href="/tag/fermentation" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  fermentation
                </Link>
                <Link href="/tag/baking" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  baking
                </Link>
                <Link href="/tag/artisan-bread" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  artisan bread
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
                        Margaery is a food writer and avid home baker who has been nurturing the same sourdough starter
                        for over a decade. With a background in food science and a passion for traditional cooking
                        methods, she specializes in making ancient techniques accessible to modern home cooks.
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
                      href="/tag/baking"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      baking
                    </Link>
                    <Link
                      href="/tag/sourdough"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      sourdough
                    </Link>
                    <Link
                      href="/tag/bread"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      bread
                    </Link>
                    <Link
                      href="/tag/fermentation"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      fermentation
                    </Link>
                    <Link
                      href="/tag/recipes"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      recipes
                    </Link>
                    <Link
                      href="/tag/cooking"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      cooking
                    </Link>
                    <Link
                      href="/tag/artisan-food"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      artisan food
                    </Link>
                    <Link
                      href="/tag/homemade"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      homemade
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest recipes and cooking tips delivered to your inbox
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
