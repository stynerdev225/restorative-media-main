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

export default function FarmToTableArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="farm-to-table"
              thumbnailUrl="/farm-to-table-hero.jpg"
              title="Farm to Table: The Journey of Sustainable Cuisine"
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
                  Farm to Table: The Journey of Sustainable Cuisine
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
                    <div className="text-xs text-gray-500">September 2, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">3.5k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">92</span>
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
                    <button className="bg-[#1da1f2] text-white p-2 rounded"></button>
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
                  The farm-to-table movement represents a profound shift in our relationship with food, reconnecting
                  consumers with the origins of what they eat and the people who produce it. More than just a culinary
                  trend, it's a holistic approach to food that prioritizes freshness, sustainability, and community
                  support. As concerns about industrial agriculture, food miles, and nutritional quality continue to
                  grow, farm-to-table has emerged as a compelling alternative that benefits farmers, chefs, diners, and
                  the environment alike.
                </p>

                <h2>The Evolution of Farm-to-Table</h2>
                <p>
                  While the term "farm-to-table" gained popularity in the early 2000s, the concept itself is hardly new.
                  For most of human history, eating locally and seasonally was simply the norm, not a movement. The
                  industrialization of agriculture in the 20th century, with its emphasis on mass production,
                  standardization, and global distribution, created an unprecedented disconnect between consumers and
                  food production. Produce began traveling thousands of miles before reaching dinner plates, selected
                  more for shipping durability than flavor or nutrition.
                </p>

                <p>
                  The modern farm-to-table movement emerged as a reaction to this industrialized food system. Pioneered
                  by visionaries like Alice Waters, whose restaurant Chez Panisse began sourcing directly from local
                  farmers in the 1970s, the movement emphasized the superior quality and environmental benefits of
                  locally grown, seasonal ingredients. What began as a niche practice among high-end restaurants has now
                  expanded to influence everything from school cafeterias to hospital food services.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🌱</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Benefits of Farm-to-Table</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Superior flavor and nutritional value from freshly harvested produce",
                        "Reduced environmental impact through fewer food miles and less packaging",
                        "Support for local economies and small-scale farmers",
                        "Preservation of agricultural biodiversity and heritage varieties",
                        "Greater transparency in food production methods",
                        "Seasonal eating that connects diners to natural cycles",
                        "Reduced food waste through whole-animal butchery and creative use of all produce",
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>From Soil to Plate: The Journey of Farm-to-Table Food</h2>
                <p>
                  The farm-to-table journey begins with thoughtful agricultural practices. Many farms supplying the
                  farm-to-table movement employ sustainable methods such as organic farming, regenerative agriculture,
                  permaculture, or biodynamic techniques. These approaches focus on building healthy soil, conserving
                  water, promoting biodiversity, and reducing or eliminating synthetic inputs. The result is not just
                  environmentally responsible food production, but often superior flavor and nutritional profiles in the
                  harvested crops.
                </p>

                <p>
                  Unlike conventional agriculture, which often prioritizes varieties bred for uniformity, shelf life,
                  and shipping durability, farm-to-table producers frequently cultivate heirloom and heritage varieties
                  selected primarily for flavor. These diverse crops not only offer unique culinary experiences but also
                  help preserve agricultural biodiversity that might otherwise be lost to industrial standardization.
                </p>

                <div className="my-6">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/farm-to-table-comparison.jpg"
                        alt="Comparison of conventional food supply chain versus farm to table approach"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          COMPARISON
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        Conventional food supply chain versus farm-to-table approach: steps, time, and environmental
                        impact
                      </p>
                    </div>
                  </div>
                </div>

                <h3>Direct Relationships</h3>
                <p>
                  The hallmark of farm-to-table is the direct relationship between producers and end users, whether
                  they're chefs or consumers. By eliminating or reducing intermediaries, farmers receive a larger share
                  of the food dollar, while restaurants and consumers gain access to fresher ingredients and greater
                  transparency about production methods.
                </p>

                <p>
                  These relationships take many forms. Chefs may visit farms personally to select produce, farmers might
                  deliver directly to restaurants, or consumers might purchase through CSA (Community Supported
                  Agriculture) programs, farmers' markets, or farm stands. Some restaurants even maintain their own
                  gardens or partner with urban farming initiatives to source ingredients from just steps away from
                  their kitchens.
                </p>

                <h3>Culinary Creativity</h3>
                <p>
                  For chefs, farm-to-table cooking presents both challenges and opportunities. The emphasis on
                  seasonality means constantly adapting menus to what's available rather than demanding specific
                  ingredients year-round. This constraint fosters creativity and a deeper understanding of ingredients
                  at their peak. Many farm-to-table restaurants change their menus daily or weekly based on what farmers
                  have harvested.
                </p>

                <p>
                  Farm-to-table cooking often embraces whole-animal butchery and nose-to-tail cooking, using every part
                  of livestock to minimize waste. Similarly, vegetables that might be discarded in conventional kitchens
                  find creative uses—carrot tops become pesto, broccoli stems are pickled, and fruit scraps transform
                  into vinegars or preserves.
                </p>

                <h2>Beyond Restaurants: The Expanding Farm-to-Table Ecosystem</h2>
                <p>
                  While restaurants were early adopters of farm-to-table principles, the movement has expanded far
                  beyond fine dining. Today, farm-to-table influences can be found throughout the food system:
                </p>

                <h3>Farmers' Markets and CSAs</h3>
                <p>
                  The number of farmers' markets in the United States has more than doubled since 2000, providing direct
                  sales outlets for small and mid-sized farms. Community Supported Agriculture programs, where consumers
                  purchase "shares" of a farm's harvest in advance, provide farmers with stable income and consumers
                  with regular deliveries of ultra-fresh produce.
                </p>

                <h3>Farm-to-School Programs</h3>
                <p>
                  Initiatives to bring local produce into school cafeterias not only improve the nutritional quality of
                  student meals but also serve as educational opportunities. School gardens and farm field trips help
                  children understand where food comes from and develop healthier eating habits.
                </p>

                <h3>Food Hubs and Cooperatives</h3>
                <p>
                  These organizations aggregate, distribute, and market locally produced food, helping small farms reach
                  larger markets while maintaining the direct connection between producer and consumer. By pooling
                  resources, farmers can access facilities for washing, packing, and processing that might be
                  prohibitively expensive for individual operations.
                </p>

                <h3>Institutional Procurement</h3>
                <p>
                  Hospitals, universities, corporate cafeterias, and government facilities increasingly incorporate
                  local sourcing into their food service operations. These large-scale buyers can have a significant
                  impact on regional food systems when they commit to supporting local agriculture.
                </p>

                <h2>Challenges and Criticisms</h2>
                <p>
                  Despite its many benefits, the farm-to-table movement faces significant challenges and has drawn some
                  valid criticisms:
                </p>

                <h3>Accessibility and Affordability</h3>
                <p>
                  Farm-to-table restaurants and direct-market produce can be more expensive than conventional
                  alternatives, raising concerns about equity and accessibility. Critics argue that the movement
                  primarily serves affluent consumers while failing to address broader issues of food insecurity and
                  access.
                </p>

                <h3>Scalability</h3>
                <p>
                  The direct relationships that define farm-to-table can be difficult to scale. As demand for local food
                  grows, maintaining the personal connections and transparency that give the movement its value becomes
                  increasingly challenging.
                </p>

                <h3>Seasonality and Geography</h3>
                <p>
                  In many regions, strict adherence to local sourcing would mean severely limited options during winter
                  months. Geographic constraints also mean that some areas simply cannot produce certain foods locally,
                  requiring a more nuanced approach to the concept of "local."
                </p>

                <h3>Greenwashing</h3>
                <p>
                  As farm-to-table has gained popularity, the term has sometimes been co-opted for marketing purposes
                  without substantive commitments to local sourcing or sustainable practices. This "local-washing" can
                  mislead consumers and dilute the movement's impact.
                </p>

                <h2>The Future of Farm-to-Table</h2>
                <p>As the farm-to-table movement continues to evolve, several trends point to its future direction:</p>

                <h3>Technology Integration</h3>
                <p>
                  Digital platforms are making it easier to connect farmers with buyers, track food from field to plate,
                  and verify claims about production methods. These technologies can help scale farm-to-table principles
                  while maintaining transparency and direct relationships.
                </p>

                <h3>Urban Agriculture</h3>
                <p>
                  Innovations in urban farming, from rooftop gardens to vertical farms, are bringing food production
                  closer to population centers. These approaches can reduce transportation distances even further while
                  making fresh produce more accessible in urban food deserts.
                </p>

                <h3>Policy Support</h3>
                <p>
                  Government policies at local, state, and federal levels increasingly recognize the economic,
                  environmental, and public health benefits of regional food systems. Programs supporting small farms,
                  farm-to-institution initiatives, and infrastructure for local food distribution are expanding.
                </p>

                <h3>Equity and Inclusion</h3>
                <p>
                  Growing awareness of disparities in food access is driving efforts to make farm-to-table principles
                  more inclusive. Initiatives like subsidized CSA shares, double-value programs at farmers' markets for
                  SNAP recipients, and community-based urban agriculture are working to ensure that the benefits of
                  local, sustainable food are widely shared.
                </p>

                <h2>Embracing the Farm-to-Table Philosophy</h2>
                <p>
                  For those inspired to incorporate farm-to-table principles into their own lives, there are many entry
                  points:
                </p>

                <ul>
                  <li>Shop at farmers' markets or join a CSA to access fresh, local produce</li>
                  <li>Plant a garden, even if it's just a few herbs on a windowsill</li>
                  <li>Learn to cook seasonally, adapting menus to what's available locally</li>
                  <li>Preserve seasonal abundance through canning, freezing, or fermenting</li>
                  <li>Ask restaurants and grocers about their sourcing practices</li>
                  <li>Support policies that strengthen regional food systems</li>
                </ul>

                <p>
                  The farm-to-table movement reminds us that food is not merely fuel but a profound connection to place,
                  season, and community. By shortening the distance from soil to plate, we not only enjoy more delicious
                  and nutritious meals but also participate in building more resilient, sustainable, and equitable food
                  systems. Whether experienced through a meal at a local restaurant, a visit to a farmers' market, or
                  vegetables grown in one's own garden, farm-to-table offers a more mindful and satisfying way to
                  nourish ourselves and our communities.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/farm-to-table" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  farm-to-table
                </Link>
                <Link href="/tag/sustainable-food" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  sustainable food
                </Link>
                <Link href="/tag/local-food" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  local food
                </Link>
                <Link href="/tag/organic" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  organic
                </Link>
                <Link href="/tag/seasonal-eating" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  seasonal eating
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
                        Margaery is a food writer and sustainable cuisine advocate who has spent years exploring the
                        connections between farms, kitchens, and dining tables. With a background in culinary arts and
                        environmental studies, she brings a holistic perspective to her writing about food systems and
                        the people who make them work.
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
                      href="/tag/food"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      food
                    </Link>
                    <Link
                      href="/tag/farm-to-table"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      farm-to-table
                    </Link>
                    <Link
                      href="/tag/sustainable"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      sustainable
                    </Link>
                    <Link
                      href="/tag/organic"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      organic
                    </Link>
                    <Link
                      href="/tag/local"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      local
                    </Link>
                    <Link
                      href="/tag/seasonal"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      seasonal
                    </Link>
                    <Link
                      href="/tag/agriculture"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      agriculture
                    </Link>
                    <Link
                      href="/tag/cooking"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      cooking
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest food trends and sustainable eating tips delivered to your inbox
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
