"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Upload,
  ScrollText,
  Shield,
  Clock,
  CheckCircle,
  Users,
  TrendingUp,
  HelpCircle,
  Award,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PitchYourContentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/professional-recording-studio.png')",
            filter: "brightness(0.6)",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-4">PITCH YOUR CONTENT</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Share your creative work with our community and get a chance to be featured on Restorative Media
          </p>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="bg-black py-8 border-y border-restorative-gold/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex flex-col items-center text-center p-4 transition-transform hover:scale-105">
              <Users className="h-8 w-8 mb-2 text-restorative-gold" />
              <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-restorative-gold to-amber-500">
                2.5M+
              </span>
              <span className="text-sm text-gray-300">Monthly Viewers</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 transition-transform hover:scale-105">
              <TrendingUp className="h-8 w-8 mb-2 text-restorative-gold" />
              <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-restorative-gold to-amber-500">
                150K+
              </span>
              <span className="text-sm text-gray-300">Content Shares</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 transition-transform hover:scale-105">
              <Award className="h-8 w-8 mb-2 text-restorative-gold" />
              <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-restorative-gold to-amber-500">
                500+
              </span>
              <span className="text-sm text-gray-300">Featured Creators</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 transition-transform hover:scale-105">
              <Clock className="h-8 w-8 mb-2 text-restorative-gold" />
              <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-restorative-gold to-amber-500">
                72hrs
              </span>
              <span className="text-sm text-gray-300">Average Review Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Process */}
      <section className="container mx-auto py-10 px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-restorative-gold to-amber-500">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined submission process makes it easy to get your content featured on Restorative Media
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 text-center relative group">
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-restorative-gold to-amber-500 flex items-center justify-center text-black font-bold">
              1
            </div>
            <div className="h-12 w-12 mx-auto mb-4 text-restorative-gold">
              <Upload className="h-12 w-12" />
            </div>
            <h3 className="font-bold mb-2">Submit</h3>
            <p className="text-sm text-muted-foreground">Fill out the form and upload your content or provide a link</p>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 text-center relative group">
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-restorative-gold to-amber-500 flex items-center justify-center text-black font-bold">
              2
            </div>
            <div className="h-12 w-12 mx-auto mb-4 text-restorative-gold">
              <Clock className="h-12 w-12" />
            </div>
            <h3 className="font-bold mb-2">Review</h3>
            <p className="text-sm text-muted-foreground">Our editorial team reviews your submission within 72 hours</p>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 text-center relative group">
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-restorative-gold to-amber-500 flex items-center justify-center text-black font-bold">
              3
            </div>
            <div className="h-12 w-12 mx-auto mb-4 text-restorative-gold">
              <CheckCircle className="h-12 w-12" />
            </div>
            <h3 className="font-bold mb-2">Approval</h3>
            <p className="text-sm text-muted-foreground">If approved, we'll contact you to discuss next steps</p>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 text-center relative group">
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-restorative-gold to-amber-500 flex items-center justify-center text-black font-bold">
              4
            </div>
            <div className="h-12 w-12 mx-auto mb-4 text-restorative-gold">
              <Award className="h-12 w-12" />
            </div>
            <h3 className="font-bold mb-2">Featured</h3>
            <p className="text-sm text-muted-foreground">Your content gets featured on our platform and promoted</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="container mx-auto py-10 px-4 md:px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="mb-8 transform transition-all">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4 hover:translate-x-[-2px] transition-transform"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
          <h2 className="text-2xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-restorative-gold to-amber-500">
            Content Submission
          </h2>
          <p className="text-muted-foreground">
            Fill out the form below to submit your content for review by our editorial team
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div className="space-y-6">
            <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm bg-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-restorative-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-restorative-gold h-5 w-1 mr-2 rounded-full"></span>
                  Submission Guidelines
                </h2>
                <div className="space-y-4 text-sm">
                  <p>
                    We're looking for unique, high-quality content that aligns with our mission of providing restorative
                    media experiences.
                  </p>
                  <div>
                    <h3 className="font-medium mb-2 text-restorative-gold">What we're looking for:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Original content you've created</li>
                      <li>High-quality videos, articles, or podcasts</li>
                      <li>Content that inspires, educates, or entertains</li>
                      <li>Topics related to our featured categories</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 text-restorative-gold">Technical requirements:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Videos: 1080p or higher, MP4 format</li>
                      <li>Images: High resolution, JPG or PNG format</li>
                      <li>Audio: High quality, MP3 format</li>
                      <li>Text: Well-edited, original writing</li>
                    </ul>
                  </div>
                  <p>
                    Our editorial team reviews all submissions. If selected, we'll contact you to discuss featuring your
                    content on our platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm bg-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-restorative-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-restorative-gold h-5 w-1 mr-2 rounded-full"></span>
                  Benefits of Publishing
                </h2>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start transform transition-transform hover:translate-x-1">
                    <span className="bg-gradient-to-r from-restorative-gold to-amber-500 text-black rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 shadow-md">
                      ✓
                    </span>
                    <span>Exposure to our growing audience of engaged viewers</span>
                  </li>
                  <li className="flex items-start transform transition-transform hover:translate-x-1">
                    <span className="bg-gradient-to-r from-restorative-gold to-amber-500 text-black rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 shadow-md">
                      ✓
                    </span>
                    <span>Potential for revenue sharing on popular content</span>
                  </li>
                  <li className="flex items-start transform transition-transform hover:translate-x-1">
                    <span className="bg-gradient-to-r from-restorative-gold to-amber-500 text-black rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 shadow-md">
                      ✓
                    </span>
                    <span>Professional feedback from our editorial team</span>
                  </li>
                  <li className="flex items-start transform transition-transform hover:translate-x-1">
                    <span className="bg-gradient-to-r from-restorative-gold to-amber-500 text-black rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 shadow-md">
                      ✓
                    </span>
                    <span>Opportunity to build your personal brand</span>
                  </li>
                  <li className="flex items-start transform transition-transform hover:translate-x-1">
                    <span className="bg-gradient-to-r from-restorative-gold to-amber-500 text-black rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 shadow-md">
                      ✓
                    </span>
                    <span>Join our community of content creators</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Consent Agreement Card */}
            <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 backdrop-blur-sm bg-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-restorative-gold/10 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-restorative-gold h-5 w-1 mr-2 rounded-full"></span>
                  Content Agreement
                </h2>

                <div className="flex items-center space-x-2 mb-3">
                  <ScrollText className="h-4 w-4 text-restorative-gold" />
                  <p className="text-sm font-medium">Please review our terms before submitting</p>
                </div>

                <div className="relative">
                  <div className="absolute top-0 right-0 left-0 h-6 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute bottom-0 right-0 left-0 h-6 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>

                  <div className="border rounded-md p-4 h-48 overflow-y-auto text-xs text-muted-foreground scrollbar-thin scrollbar-thumb-restorative-gold/20 scrollbar-track-muted/20 relative">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Shield className="h-4 w-4 text-restorative-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="text-sm font-medium text-foreground">1. Content Ownership</h3>
                          <p>
                            By submitting content to Restorative Media, you confirm that you own or have the necessary
                            rights, licenses, and permissions to the content you are submitting. You retain ownership of
                            your content, but grant Restorative Media a non-exclusive, worldwide, royalty-free license
                            to use, reproduce, distribute, and display your content on our platform and related
                            promotional materials.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Shield className="h-4 w-4 text-restorative-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="text-sm font-medium text-foreground">2. Content Guidelines</h3>
                          <p>
                            You agree that your content does not violate any laws or regulations, does not infringe on
                            the rights of any third party, and complies with our content guidelines. Restorative Media
                            reserves the right to reject or remove any content that violates these guidelines or that we
                            deem inappropriate for our platform.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Shield className="h-4 w-4 text-restorative-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="text-sm font-medium text-foreground">3. Revenue Sharing</h3>
                          <p>
                            If your content is selected for our revenue sharing program, you will be entitled to a
                            percentage of the revenue generated by your content as outlined in a separate agreement.
                            Revenue sharing terms will be provided to you if your content is selected for this program.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Shield className="h-4 w-4 text-restorative-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="text-sm font-medium text-foreground">4. Editorial Discretion</h3>
                          <p>
                            Restorative Media has complete editorial discretion over all content on our platform. We may
                            edit, format, or modify your content to fit our platform requirements or to improve its
                            presentation. We will make reasonable efforts to maintain the integrity of your content.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Shield className="h-4 w-4 text-restorative-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="text-sm font-medium text-foreground">5. Content Removal</h3>
                          <p>
                            You may request the removal of your content from our platform at any time by contacting our
                            content team. We will make reasonable efforts to remove your content within a reasonable
                            timeframe, subject to any existing agreements or obligations.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Shield className="h-4 w-4 text-restorative-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="text-sm font-medium text-foreground">6. Liability</h3>
                          <p>
                            You agree to indemnify and hold Restorative Media harmless from any claims, damages, or
                            liabilities arising from your content or your violation of these terms. Restorative Media is
                            not responsible for any loss, damage, or harm resulting from the use or display of your
                            content.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Shield className="h-4 w-4 text-restorative-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="text-sm font-medium text-foreground">7. Term and Termination</h3>
                          <p>
                            These terms remain in effect as long as your content is on our platform. Restorative Media
                            reserves the right to terminate this agreement and remove your content at any time for any
                            reason, including but not limited to violations of these terms or our content guidelines.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-start space-x-2 p-3 rounded-lg bg-muted/30 border border-muted">
                  <Checkbox
                    id="consent-agreement"
                    className="border-restorative-gold text-restorative-gold data-[state=checked]:bg-restorative-gold data-[state=checked]:text-black"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label htmlFor="consent-agreement" className="text-sm font-medium leading-none cursor-pointer">
                      I have read and agree to the Content Agreement
                    </label>
                    <p className="text-xs text-muted-foreground">
                      You must agree to these terms before submitting your content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl border bg-card p-8 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 backdrop-blur-sm bg-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-restorative-gold via-amber-500 to-restorative-gold"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-restorative-gold to-amber-500">
                  Content Submission Form
                </h2>
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2 group">
                      <Label htmlFor="first-name" className="group-hover:text-restorative-gold transition-colors">
                        First name
                      </Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        required
                        className="transition-all focus:border-restorative-gold focus:ring-restorative-gold/20 hover:border-restorative-gold/50"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="last-name" className="group-hover:text-restorative-gold transition-colors">
                        Last name
                      </Label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        required
                        className="transition-all focus:border-restorative-gold focus:ring-restorative-gold/20 hover:border-restorative-gold/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="email" className="group-hover:text-restorative-gold transition-colors">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="transition-all focus:border-restorative-gold focus:ring-restorative-gold/20 hover:border-restorative-gold/50"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="content-title" className="group-hover:text-restorative-gold transition-colors">
                      Content title
                    </Label>
                    <Input
                      id="content-title"
                      placeholder="Enter the title of your content"
                      required
                      className="transition-all focus:border-restorative-gold focus:ring-restorative-gold/20 hover:border-restorative-gold/50"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="category" className="group-hover:text-restorative-gold transition-colors">
                      Content category
                    </Label>
                    <Select>
                      <SelectTrigger className="transition-all focus:border-restorative-gold focus:ring-restorative-gold/20 hover:border-restorative-gold/50">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="movie">Movie & TV</SelectItem>
                        <SelectItem value="gaming">Gaming</SelectItem>
                        <SelectItem value="food">Food</SelectItem>
                        <SelectItem value="travel">Travel</SelectItem>
                        <SelectItem value="music">Music</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="documentary">Documentary</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="content-type" className="group-hover:text-restorative-gold transition-colors">
                      Content type
                    </Label>
                    <RadioGroup defaultValue="video" className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted/50 transition-colors">
                        <RadioGroupItem
                          value="video"
                          id="video"
                          className="border-restorative-gold text-restorative-gold"
                        />
                        <Label htmlFor="video" className="font-normal cursor-pointer">
                          Video
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted/50 transition-colors">
                        <RadioGroupItem
                          value="article"
                          id="article"
                          className="border-restorative-gold text-restorative-gold"
                        />
                        <Label htmlFor="article" className="font-normal cursor-pointer">
                          Article
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted/50 transition-colors">
                        <RadioGroupItem
                          value="podcast"
                          id="podcast"
                          className="border-restorative-gold text-restorative-gold"
                        />
                        <Label htmlFor="podcast" className="font-normal cursor-pointer">
                          Podcast
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted/50 transition-colors">
                        <RadioGroupItem
                          value="other"
                          id="other-type"
                          className="border-restorative-gold text-restorative-gold"
                        />
                        <Label htmlFor="other-type" className="font-normal cursor-pointer">
                          Other
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="description" className="group-hover:text-restorative-gold transition-colors">
                      Content description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Provide a brief description of your content"
                      className="min-h-[120px] transition-all focus:border-restorative-gold focus:ring-restorative-gold/20 hover:border-restorative-gold/50"
                      required
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="upload" className="group-hover:text-restorative-gold transition-colors">
                      Upload content or preview
                    </Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition-all hover:border-restorative-gold/50 group-hover:shadow-lg">
                      <div className="flex flex-col items-center gap-1">
                        <Upload className="h-8 w-8 text-muted-foreground mb-2 group-hover:text-restorative-gold transition-colors" />
                        <p className="text-sm font-medium">Drag and drop files here or click to browse</p>
                        <p className="text-xs text-muted-foreground">Upload your content or a preview (max 100MB)</p>
                        <Input id="upload" type="file" className="hidden" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="link" className="group-hover:text-restorative-gold transition-colors">
                      Or provide a link to your content
                    </Label>
                    <Input
                      id="link"
                      placeholder="https://"
                      className="transition-all focus:border-restorative-gold focus:ring-restorative-gold/20 hover:border-restorative-gold/50"
                    />
                    <p className="text-xs text-muted-foreground">
                      For large files, you can provide a link to Google Drive, Dropbox, YouTube, etc.
                    </p>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="additional-info" className="group-hover:text-restorative-gold transition-colors">
                      Additional information
                    </Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Any other details you'd like to share about your content or yourself"
                      className="min-h-[100px] transition-all focus:border-restorative-gold focus:ring-restorative-gold/20 hover:border-restorative-gold/50"
                    />
                  </div>

                  <div className="flex items-start space-x-2 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                    <Checkbox
                      id="terms"
                      className="border-restorative-gold text-restorative-gold data-[state=checked]:bg-restorative-gold data-[state=checked]:text-black"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        I agree to the terms and conditions
                      </label>
                      <p className="text-xs text-muted-foreground">
                        By submitting, you confirm this is your original content and grant us permission to review it.
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-restorative-gold to-amber-500 text-black hover:from-amber-500 hover:to-restorative-gold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Submit Content
                  </Button>
                </form>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm bg-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-restorative-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-restorative-gold h-5 w-1 mr-2 rounded-full"></span>
                  Questions?
                </h2>
                <p className="text-sm mb-4">
                  If you have any questions about the submission process or need assistance, please contact our content
                  team.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-restorative-gold/50 hover:bg-restorative-gold/10 hover:border-restorative-gold transition-all"
                >
                  Contact Content Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="bg-zinc-700 py-12 border-y border-restorative-gold/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-restorative-gold to-amber-500">
              Success Stories
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Hear from content creators who've grown their audience on Restorative Media
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-restorative-gold to-amber-500"></div>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex -space-x-3">
                    <Image
                      src="/author-margaery.jpg"
                      alt="Sarah J."
                      width={64}
                      height={64}
                      className="rounded-full border-2 border-background h-12 w-12 object-cover"
                    />
                  </div>
                </div>
                <blockquote className="flex-1 text-sm text-muted-foreground mb-4 italic">
                  "After my cooking tutorials were featured on Restorative Media, my channel subscribers grew by 400% in
                  just three months. The exposure has been incredible for my career!"
                </blockquote>
                <div>
                  <p className="font-semibold">Sarah J.</p>
                  <p className="text-xs text-muted-foreground">Food Content Creator</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-restorative-gold to-amber-500"></div>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex -space-x-3">
                    <Image
                      src="/commenter-dylan.jpg"
                      alt="Miguel R."
                      width={64}
                      height={64}
                      className="rounded-full border-2 border-background h-12 w-12 object-cover"
                    />
                  </div>
                </div>
                <blockquote className="flex-1 text-sm text-muted-foreground mb-4 italic">
                  "Being featured in the gaming section helped me connect with a whole new audience. The team provided
                  valuable feedback that improved my content quality significantly."
                </blockquote>
                <div>
                  <p className="font-semibold">Miguel R.</p>
                  <p className="text-xs text-muted-foreground">Gaming Streamer</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-restorative-gold to-amber-500"></div>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex -space-x-3">
                    <Image
                      src="/author-thomas.jpg"
                      alt="Aisha T."
                      width={64}
                      height={64}
                      className="rounded-full border-2 border-background h-12 w-12 object-cover"
                    />
                  </div>
                </div>
                <blockquote className="flex-1 text-sm text-muted-foreground mb-4 italic">
                  "My documentary series found its home on Restorative Media. The platform's focus on quality content
                  has helped me build a loyal following of documentary enthusiasts."
                </blockquote>
                <div>
                  <p className="font-semibold">Aisha T.</p>
                  <p className="text-xs text-muted-foreground">Documentary Filmmaker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-restorative-gold to-amber-500">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our content submission process
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <HelpCircle className="h-5 w-5 text-restorative-gold" />
              </div>
              <div>
                <h3 className="font-bold text-base group-hover:text-restorative-gold transition-colors">
                  How long does the review process take?
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Our editorial team typically reviews submissions within 72 hours. For more complex content or during
                  high submission periods, it may take up to 5 business days.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <HelpCircle className="h-5 w-5 text-restorative-gold" />
              </div>
              <div>
                <h3 className="font-bold text-base group-hover:text-restorative-gold transition-colors">
                  What happens if my content is selected?
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  If your content is selected, we'll reach out to discuss featuring options, potential revenue sharing,
                  and any additional information we need. We'll work with you to showcase your content in the best
                  possible way.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <HelpCircle className="h-5 w-5 text-restorative-gold" />
              </div>
              <div>
                <h3 className="font-bold text-base group-hover:text-restorative-gold transition-colors">
                  Can I submit multiple pieces of content?
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Yes! You can submit multiple pieces of content. Each submission will be reviewed individually. We
                  recommend focusing on your best work first to establish a relationship with our platform.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <HelpCircle className="h-5 w-5 text-restorative-gold" />
              </div>
              <div>
                <h3 className="font-bold text-base group-hover:text-restorative-gold transition-colors">
                  How does revenue sharing work?
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  For selected content, we offer revenue sharing based on views, engagement, and ad revenue. The exact
                  terms vary depending on the content type and exclusivity arrangements. Full details will be provided
                  if your content is selected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-12 border-t border-restorative-gold/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Share Your Content?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join our community of creators and share your unique perspective with our growing audience
          </p>
          <Button
            className="bg-gradient-to-r from-restorative-gold to-amber-500 text-black hover:from-amber-500 hover:to-restorative-gold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg px-8 py-6 h-auto"
            onClick={() => {
              document.querySelector("#content-submission-form")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Submit Your Content Now
          </Button>
        </div>
      </section>
    </>
  )
}
