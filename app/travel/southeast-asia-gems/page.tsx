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

export default function SoutheastAsiaArticle() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="southeast-asia-gems"
              thumbnailUrl="/featured-travel-1.jpg"
              title="10 Hidden Gems in Southeast Asia You Need to Visit"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Article Header */}
              <div className="mb-6">
                <span className="bg-restorative-gold text-white px-2 py-1 text-xs font-bold uppercase">TRAVEL</span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                  10 Hidden Gems in Southeast Asia You Need to Visit
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
                    <span className="text-sm">2.9k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">64</span>
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
                  Southeast Asia has long been a favorite destination for travelers seeking exotic cultures, stunning
                  landscapes, and unforgettable experiences. While places like Bali, Phuket, and Angkor Wat draw
                  millions of visitors each year, the region is filled with lesser-known treasures waiting to be
                  discovered. From secluded islands to remote mountain villages, here are ten hidden gems in Southeast
                  Asia that deserve a spot on your travel bucket list.
                </p>

                <h2>1. Koh Rong Samloem, Cambodia</h2>
                <p>
                  While neighboring Koh Rong has gained popularity in recent years, its smaller sister island Koh Rong
                  Samloem remains a peaceful paradise. With pristine white sand beaches, crystal-clear waters, and a
                  laid-back atmosphere, this island offers the quintessential tropical getaway without the crowds.
                  Saracen Bay on the eastern side features a handful of rustic bungalows and restaurants, while Lazy
                  Beach and Sunset Beach on the western side provide even more seclusion.
                </p>

                <p>
                  The island has no roads, ATMs, or convenience stores, making it the perfect place to disconnect from
                  the modern world. Spend your days snorkeling among colorful coral reefs, kayaking through mangrove
                  forests, or simply relaxing in a hammock with a good book. At night, witness the magical
                  bioluminescent plankton that illuminates the shoreline with a blue glow.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🏝️</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Traveler's Tips: Island Escapes</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Pack biodegradable sunscreen to protect coral reefs when swimming or snorkeling",
                        "Bring enough cash as ATMs are scarce on remote islands",
                        "Consider a dry bag for boat transfers and water activities",
                        "Pack a headlamp or flashlight for islands with limited electricity",
                        "Research ferry schedules in advance as they can be infrequent",
                        "Respect local customs and dress modestly when visiting villages",
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

                <h2>2. Phong Nha-Kẻ Bàng National Park, Vietnam</h2>
                <p>
                  While Ha Long Bay and Sapa attract hordes of tourists, Phong Nha-Kẻ Bàng National Park in central
                  Vietnam remains relatively undiscovered. This UNESCO World Heritage Site is home to the oldest karst
                  mountains in Asia and some of the world's most spectacular caves, including Hang Son Doong, the
                  largest cave ever discovered.
                </p>

                <p>
                  The small town of Phong Nha serves as the gateway to this natural wonderland. From here, you can
                  explore Paradise Cave with its breathtaking stalactites and stalagmites, take a boat through the
                  underground river of Phong Nha Cave, or embark on a multi-day trek through the jungle to reach the
                  remote Hang En Cave, where you can camp beneath a massive skylight.
                </p>

                <div className="my-6">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/southeast-asia-map.jpg"
                        alt="Map of hidden gems in Southeast Asia"
                        width={800}
                        height={450}
                        className="w-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-restorative-gold/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase rounded shadow-md">
                          DESTINATION MAP
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 m-0">
                        Map highlighting the 10 hidden gems across Southeast Asia featured in this article
                      </p>
                    </div>
                  </div>
                </div>

                <h2>3. Hsipaw, Myanmar</h2>
                <p>
                  While Bagan and Inle Lake have become fixtures on the Myanmar tourist trail, the small town of Hsipaw
                  in the northern Shan State offers a glimpse into authentic rural life. Surrounded by rolling hills,
                  tea plantations, and traditional Shan villages, Hsipaw is perfect for travelers seeking cultural
                  immersion and outdoor adventure.
                </p>

                <p>
                  The journey to Hsipaw is an experience in itself, as the train from Mandalay crosses the spectacular
                  Gokteik Viaduct, a colonial-era engineering marvel. Once there, trek through the hills to visit ethnic
                  minority villages, boat along the peaceful Dokhtawady River, or cycle through the surrounding
                  countryside dotted with ancient stupas.
                </p>

                <h2>4. Nong Khiaw, Laos</h2>
                <p>
                  Nestled along the Nam Ou River and surrounded by dramatic limestone karsts, Nong Khiaw offers the same
                  stunning scenery as the more popular Vang Vieng but without the party atmosphere. This sleepy village
                  is the perfect place to experience the laid-back Laotian lifestyle and connect with nature.
                </p>

                <p>
                  Hike to the Pha Daeng Peak viewpoint for breathtaking panoramas of the river valley, kayak to nearby
                  villages, or explore the mysterious Pha Tok Caves that served as shelters during the Secret War. For
                  an even more remote experience, take a boat upriver to Muang Ngoi Neua, a village accessible only by
                  water.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">🌏</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Best Times to Visit</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Cambodia (Koh Rong Samloem): November to April for dry weather and calm seas",
                        "Vietnam (Phong Nha): February to August for cave exploration (avoid rainy season)",
                        "Myanmar (Hsipaw): October to March for comfortable trekking temperatures",
                        "Laos (Nong Khiaw): November to February for cool, dry conditions",
                        "Indonesia (Sumba): April to October for the dry season",
                        "Philippines (Siquijor): February to April for optimal diving conditions",
                      ].map((season, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{season}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>5. Sumba Island, Indonesia</h2>
                <p>
                  While Bali continues to draw millions of visitors, Sumba Island in eastern Indonesia remains largely
                  untouched by mass tourism. With its rugged coastline, pristine beaches, and unique megalithic culture,
                  Sumba offers an authentic Indonesian experience that's increasingly hard to find.
                </p>

                <p>
                  The island is known for its distinctive traditional villages with high-peaked thatched houses, ancient
                  stone tombs, and the annual Pasola festival, a ritual harvest celebration featuring mounted spear
                  fights. Along the coast, you'll find world-class surf breaks at Nihiwatu Beach and stunning natural
                  features like the Weekuri Lagoon, a saltwater lake connected to the ocean by an underground channel.
                </p>

                <h2>6. Siquijor, Philippines</h2>
                <p>
                  Known locally as the "Island of Fire," Siquijor has long been associated with mystic traditions and
                  healing arts. This reputation has kept many tourists away, leaving its white sand beaches, turquoise
                  waters, and lush forests relatively untouched.
                </p>

                <p>
                  Circumnavigate the small island by motorbike to discover hidden waterfalls like Cambugahay Falls,
                  where you can swing from ropes into refreshing natural pools. Explore the mysterious Cantabon Cave
                  with its impressive stalactite formations, or snorkel among vibrant coral gardens at Tubod Marine
                  Sanctuary. Don't miss the chance to visit a traditional healer or "mambabarang" to learn about the
                  island's unique folk medicine practices.
                </p>

                <h2>7. Kampot, Cambodia</h2>
                <p>
                  This charming riverside town in southern Cambodia moves at a leisurely pace, with French colonial
                  architecture lining sleepy streets and the mist-shrouded Bokor Mountain looming in the background.
                  Kampot is famous for its pepper plantations, which produce some of the world's finest pepper, coveted
                  by chefs globally.
                </p>

                <p>
                  Rent a bicycle to explore the surrounding countryside, take a sunset cruise on the Kampot River, or
                  kayak through the mangrove forests of Kampot's estuary. For a unique experience, visit the abandoned
                  Bokor Hill Station, a French resort from the 1920s that now stands as a haunting reminder of
                  Cambodia's colonial past.
                </p>

                <h2>8. Mrauk U, Myanmar</h2>
                <p>
                  Once a powerful kingdom and trading port, Mrauk U is now a remote archaeological site in Myanmar's
                  western Rakhine State. Unlike the more famous temples of Bagan, Mrauk U's stone temples and stupas are
                  scattered among villages where life continues much as it has for centuries.
                </p>

                <p>
                  The journey to Mrauk U is an adventure in itself, typically involving a flight to Sittwe followed by a
                  boat journey up the Kaladan River. The effort is rewarded with the opportunity to explore ancient
                  temples without the crowds, where local children might serve as impromptu guides and farmers herd
                  cattle among centuries-old ruins.
                </p>

                <h2>9. Con Dao Islands, Vietnam</h2>
                <p>
                  This remote archipelago off Vietnam's southern coast has a dark history as a former prison colony but
                  is now emerging as an eco-tourism destination. With pristine beaches, healthy coral reefs, and dense
                  forests protected as a national park, Con Dao offers natural beauty alongside historical significance.
                </p>

                <p>
                  The islands are a crucial nesting site for endangered sea turtles, and visitors can join nighttime
                  conservation efforts during nesting season. Hike through the national park to spot endemic species,
                  dive among vibrant coral gardens, or visit the sobering prison complexes that now serve as memorials
                  to those who suffered during colonial rule.
                </p>

                <h2>10. Nan Province, Thailand</h2>
                <p>
                  In Thailand's remote northeastern corner, Nan Province offers a glimpse into traditional Thai life
                  that's increasingly rare in more developed regions. Surrounded by mountains and bordering Laos, this
                  former independent kingdom maintains a distinct cultural identity and relaxed pace of life.
                </p>

                <p>
                  Explore the ornate temples of Nan town, including Wat Phumin with its unique cruciform layout and
                  exquisite murals. Drive through mist-shrouded mountains to visit ethnic minority villages, trek
                  through Doi Phu Kha National Park to see rare Chomphu Phu Kha trees that bloom only once a year, or
                  time your visit for the fascinating Boat Racing Festival held annually in late October.
                </p>

                <h2>Embracing Authentic Southeast Asia</h2>
                <p>
                  These hidden gems offer travelers the chance to experience Southeast Asia's incredible diversity away
                  from the well-worn tourist path. As these destinations gradually gain recognition, they provide a
                  glimpse into what places like Bali and Phuket were like decades ago, before mass tourism transformed
                  them.
                </p>

                <p>
                  When visiting these special places, remember that their charm lies in their authenticity and unspoiled
                  nature. Travel responsibly by respecting local customs, supporting community-based tourism
                  initiatives, and minimizing your environmental impact. By doing so, you'll not only have a more
                  meaningful experience but also help preserve these hidden gems for future travelers to discover.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/southeast-asia" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  southeast asia
                </Link>
                <Link href="/tag/travel" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  travel
                </Link>
                <Link href="/tag/hidden-gems" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  hidden gems
                </Link>
                <Link
                  href="/tag/off-the-beaten-path"
                  className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm"
                >
                  off the beaten path
                </Link>
                <Link href="/tag/adventure-travel" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  adventure travel
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
                        Margaery is a travel writer and photographer who has spent the last decade exploring Southeast
                        Asia's hidden corners. With a passion for authentic cultural experiences and sustainable
                        tourism, she specializes in uncovering destinations that remain off the typical tourist radar.
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
                      href="/tag/travel"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      travel
                    </Link>
                    <Link
                      href="/tag/southeast-asia"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      southeast asia
                    </Link>
                    <Link
                      href="/tag/adventure"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      adventure
                    </Link>
                    <Link
                      href="/tag/beaches"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      beaches
                    </Link>
                    <Link
                      href="/tag/islands"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      islands
                    </Link>
                    <Link
                      href="/tag/backpacking"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      backpacking
                    </Link>
                    <Link
                      href="/tag/cultural-travel"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      cultural travel
                    </Link>
                    <Link
                      href="/tag/eco-tourism"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      eco-tourism
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest travel tips and destination guides delivered to your inbox
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
