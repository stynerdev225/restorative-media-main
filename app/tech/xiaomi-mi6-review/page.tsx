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

export default function XiaomiMi6Article() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Video Hero Section */}
        <div className="w-full bg-black">
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              videoId="xiaomi-mi6-review"
              thumbnailUrl="/crimson-phone.png"
              title="Xiaomi Mi6 hands on: it's as good as the iPhone 7 Plus"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Article Header */}
              <div className="mb-6">
                <span className="bg-restorative-gold text-white px-2 py-1 text-xs font-bold uppercase">TECH</span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                  Xiaomi Mi6 hands on: it's as good as the iPhone 7 Plus
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
                    <div className="text-xs text-gray-500">September 5, 2017</div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">3.4k</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">112</span>
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
                  Xiaomi has been making waves in the smartphone industry with its high-spec, low-price devices, and the
                  Mi6 represents the company's most ambitious flagship yet. After spending two weeks with the device,
                  I'm convinced that it not only competes with but in many ways matches or exceeds the iPhone 7 Plus at
                  nearly half the price.
                </p>

                <h2>Design and Build Quality: Premium in Every Way</h2>
                <p>
                  The Xiaomi Mi6 features a stunning design that combines glass and metal in a seamless package. The
                  front and back are covered in curved glass that meets a stainless steel frame, creating a premium feel
                  that rivals devices costing twice as much. At 7.45mm thick and weighing 168g, it strikes a nice
                  balance between substantial and comfortable to hold.
                </p>

                <p>
                  Our review unit came in the striking "Bright Red" color, which features a mirror-like finish that
                  catches the light beautifully. Xiaomi also offers the device in Black, Blue, and White, as well as a
                  special Ceramic Edition with 18K gold camera trim for those seeking something even more exclusive.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">📱</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Xiaomi Mi6 Specifications</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Display: 5.15-inch 1080p IPS LCD with 600 nits brightness",
                        "Processor: Qualcomm Snapdragon 835 octa-core @ 2.45GHz",
                        "RAM: 6GB LPDDR4X",
                        "Storage: 64GB/128GB UFS 2.1 (non-expandable)",
                        "Rear Camera: Dual 12MP (wide-angle f/1.8 + telephoto f/2.6) with 2x optical zoom",
                        "Front Camera: 8MP f/2.0",
                        "Battery: 3,350mAh with Quick Charge 3.0",
                        "OS: MIUI 8 based on Android 7.1.1 Nougat",
                      ].map((spec, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>Performance: Flagship Power Without Compromise</h2>
                <p>
                  The Mi6 is powered by Qualcomm's top-tier Snapdragon 835 processor, the same chip found in premium
                  devices like the Samsung Galaxy S8 and Sony Xperia XZ Premium. Paired with 6GB of RAM, the Mi6
                  delivers exceptional performance in every scenario, from everyday tasks to demanding games and
                  multitasking.
                </p>

                <p>
                  In benchmark tests, the Mi6 consistently scored on par with or better than other Snapdragon 835
                  devices, and the real-world performance matches these impressive numbers. Apps open instantly, games
                  run smoothly even at the highest settings, and the device remains cool even under heavy load thanks to
                  its efficient thermal design.
                </p>

                <div className="my-6">
                  <div className="bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="relative">
                      <Image
                        src="/xiaomi-mi6-comparison.jpg"
                        alt="Xiaomi Mi6 compared to iPhone 7 Plus and Samsung Galaxy S8"
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
                        Left to right: Xiaomi Mi6, iPhone 7 Plus, and Samsung Galaxy S8 showing design and size
                        differences
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Camera: Dual Lenses Done Right</h2>
                <p>
                  Following the trend set by the iPhone 7 Plus, the Mi6 features a dual-camera system with a 12MP
                  wide-angle lens and a 12MP telephoto lens that enables 2x optical zoom. The primary wide-angle camera
                  features a large f/1.8 aperture and 1.25μm pixel size, allowing for excellent low-light performance,
                  while the telephoto lens has an f/2.6 aperture.
                </p>

                <p>
                  In good lighting, the Mi6 captures stunning photos with excellent detail, accurate colors, and good
                  dynamic range. The camera app is fast and responsive, with a simple interface that makes it easy to
                  switch between the two lenses. The phone also includes a portrait mode that creates a pleasing
                  background blur effect, similar to the iPhone 7 Plus.
                </p>

                <p>
                  Low-light performance is where many smartphone cameras struggle, but the Mi6 holds its own remarkably
                  well. While it doesn't quite match the Google Pixel's night photography capabilities, it comes
                  surprisingly close, capturing usable images even in challenging lighting conditions.
                </p>

                <h2>Display: Bright, Vibrant, and Efficient</h2>
                <p>
                  The Mi6 features a 5.15-inch 1080p IPS LCD display that strikes a good balance between sharpness,
                  color accuracy, and power efficiency. While it's not a QHD panel like those found in some competing
                  flagships, the smaller screen size means that pixel density remains high at 428 PPI, making individual
                  pixels indistinguishable in normal use.
                </p>

                <p>
                  With a maximum brightness of 600 nits, the display is easily visible even in bright sunlight, and the
                  reading mode reduces blue light for more comfortable nighttime use. Color reproduction is excellent,
                  with the option to adjust the color temperature to your preference in the settings.
                </p>

                <div className="my-6">
                  <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-restorative-gold h-10 w-10 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xl">⚡</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Mi6 vs. iPhone 7 Plus</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Price: Mi6 ($360-420) vs iPhone 7 Plus ($769-969)",
                        "Performance: Both feature top-tier processors with the Mi6's Snapdragon 835 matching or exceeding the iPhone's A10 Fusion in many benchmarks",
                        "Camera: Both feature dual 12MP cameras with 2x optical zoom and portrait mode",
                        "Battery: Mi6 (3,350mAh) offers significantly better battery life than iPhone 7 Plus (2,900mAh)",
                        "Storage: iPhone offers 32/128/256GB options vs Mi6's 64/128GB",
                        "Software: iOS 10 vs MIUI 8 (Android 7.1.1) - different ecosystems with their own strengths",
                      ].map((comparison, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-restorative-gold/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="h-4 w-4 text-restorative-gold" />
                          </div>
                          <span className="text-gray-700">{comparison}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2>Battery Life: All-Day and Then Some</h2>
                <p>
                  The Mi6 packs a substantial 3,350mAh battery into its compact frame, and combined with the efficient
                  Snapdragon 835 processor and 1080p display, this results in exceptional battery life. In my testing,
                  the phone consistently lasted through a full day of heavy use with 30-40% battery remaining.
                </p>

                <p>
                  With more moderate usage, two full days between charges is entirely possible. When you do need to
                  recharge, Qualcomm's Quick Charge 3.0 technology can take the battery from empty to about 70% in just
                  30 minutes, though it's worth noting that the Mi6 doesn't support wireless charging.
                </p>

                <h2>Software: MIUI 8 - A Different Take on Android</h2>
                <p>
                  The Mi6 runs Xiaomi's MIUI 8 interface on top of Android 7.1.1 Nougat. MIUI is a comprehensive
                  redesign of Android that takes some inspiration from iOS, with no app drawer and a focus on clean,
                  minimalist design. While this may be jarring for Android purists, the interface is polished and
                  cohesive.
                </p>

                <p>
                  MIUI adds a number of useful features, including a robust theme engine, a one-handed mode, dual app
                  support (allowing you to run two instances of apps like WhatsApp), and extensive customization
                  options. Xiaomi also regularly updates MIUI with new features and improvements, though major Android
                  version updates tend to arrive somewhat later than on Google's own devices.
                </p>

                <h2>The Drawbacks: Not Quite Perfect</h2>
                <p>
                  Despite all its strengths, the Mi6 isn't without its flaws. The most notable omission is the lack of a
                  3.5mm headphone jack, following Apple's controversial lead. While Xiaomi includes a USB-C to 3.5mm
                  adapter in the box, this remains an inconvenience for many users.
                </p>

                <p>
                  The Mi6 also lacks microSD card expansion, so you'll need to choose between the 64GB or 128GB models
                  carefully based on your storage needs. Additionally, while the phone is splash-resistant, it doesn't
                  carry an official IP rating for water and dust resistance like many competing flagships.
                </p>

                <p>
                  Finally, availability remains a challenge for many potential buyers. Xiaomi has limited official
                  presence outside of Asia, meaning that customers in North America and Europe often need to import the
                  device through third-party retailers, potentially affecting warranty support and cellular band
                  compatibility.
                </p>

                <h2>Conclusion: Flagship Experience at a Midrange Price</h2>
                <p>
                  The Xiaomi Mi6 represents an exceptional value proposition in today's smartphone market. It delivers
                  true flagship performance, build quality, and features at a price point that's significantly lower
                  than its competitors from Apple, Samsung, and others.
                </p>

                <p>
                  For those willing to look beyond the established brands and deal with potential import hassles, the
                  Mi6 offers an experience that rivals or exceeds the iPhone 7 Plus in many respects, while costing
                  nearly half as much. It's a powerful reminder that premium smartphones don't need to come with premium
                  price tags.
                </p>

                <p>
                  With the Mi6, Xiaomi has created a device that doesn't just compete with the established flagships but
                  genuinely challenges the notion that you need to spend $700+ to get a truly premium smartphone
                  experience. That alone makes it one of the most important devices of 2017.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <Link href="/tag/xiaomi" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  xiaomi
                </Link>
                <Link href="/tag/mi6" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  mi6
                </Link>
                <Link href="/tag/smartphone-review" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  smartphone review
                </Link>
                <Link href="/tag/android" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  android
                </Link>
                <Link href="/tag/iphone-comparison" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                  iphone comparison
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
                        Margaery is a tech journalist specializing in smartphone and gadget reviews. With over a decade
                        of experience testing the latest devices, she brings a critical eye and practical perspective to
                        her analysis of consumer technology.
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
                      href="/tag/smartphones"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      smartphones
                    </Link>
                    <Link
                      href="/tag/android"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      android
                    </Link>
                    <Link
                      href="/tag/xiaomi"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      xiaomi
                    </Link>
                    <Link
                      href="/tag/iphone"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      iphone
                    </Link>
                    <Link
                      href="/tag/tech-reviews"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      tech reviews
                    </Link>
                    <Link
                      href="/tag/mobile-photography"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      mobile photography
                    </Link>
                    <Link
                      href="/tag/snapdragon-835"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      snapdragon 835
                    </Link>
                    <Link
                      href="/tag/flagship-killers"
                      className="bg-white hover:bg-gray-50 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow transition-all duration-300"
                    >
                      flagship killers
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest tech news and exclusive content delivered to your inbox
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
