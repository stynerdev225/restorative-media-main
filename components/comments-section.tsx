"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ThumbsUp, MessageSquare, Flag, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

interface CommentProps {
  id: string
  author: {
    name: string
    image: string
    url?: string
  }
  content: string
  date: string
  isPinned?: boolean
  replies?: CommentProps[]
}

function Comment({ comment }: { comment: CommentProps }) {
  const [showReplies, setShowReplies] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Initialize like count on client-side only, but use a deterministic value
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      // Use the comment id to generate a deterministic like count rather than random
      const stableCount = parseInt(comment.id) % 10 || 5;
      setLikeCount(stableCount);
    }
  }, [mounted, comment.id]);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setIsLiked(!isLiked)
  }

  return (
    <div className="py-4">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="relative">
            <Image
              src={comment.author.image || "/placeholder.svg"}
              alt={comment.author.name}
              width={48}
              height={48}
              className="rounded-full object-cover ring-2 ring-white shadow-md"
            />
            {comment.isPinned && (
              <div className="absolute -top-1 -right-1 bg-restorative-gold text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                <span>📌</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white p-5 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] border border-gray-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {comment.isPinned && (
                  <div className="bg-restorative-gold text-white text-xs px-2 py-0.5 rounded-full">Pinned</div>
                )}
                <Link
                  href={comment.author.url || "#"}
                  className="font-medium hover:text-restorative-gold transition-colors"
                >
                  {comment.author.name}
                </Link>
                <span className="text-xs text-gray-500">{comment.date}</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
            <div className="text-gray-700 mb-4">{comment.content}</div>
            <div className="flex items-center gap-5 text-sm text-gray-500">
              <button
                className={`flex items-center gap-1 hover:text-gray-700 transition-colors ${isLiked ? "text-restorative-gold" : ""
                  }`}
                onClick={handleLike}
              >
                <ThumbsUp className={`h-4 w-4 ${isLiked ? "fill-restorative-gold" : ""}`} />
                <span>{likeCount}</span>
              </button>
              <button
                className="flex items-center gap-1 hover:text-gray-700 transition-colors"
                onClick={() => setShowReplies(!showReplies)}
              >
                <MessageSquare className="h-4 w-4" />
                <span>{comment.replies?.length || 0}</span>
              </button>
              <button className="flex items-center gap-1 hover:text-gray-700 transition-colors">
                <Flag className="h-4 w-4" />
                <span>Report</span>
              </button>
              <button className="text-restorative-gold hover:underline transition-colors">Reply</button>
            </div>
          </div>

          {/* Replies */}
          {comment.replies && comment.replies.length > 0 && showReplies && (
            <div className="mt-4 pl-6 border-l-2 border-restorative-gold/30">
              {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface Comment {
  author: string
  avatar: string
  time: string
  content: string
  likes: number
  replies: number
}

interface CommentsSectionProps {
  commentCount: number
  comments: Comment[]
}

export function CommentsSection({ commentCount, comments }: CommentsSectionProps) {
  const defaultComments: CommentProps[] = [
    {
      id: "1",
      author: {
        name: "Margaery Tyrell",
        image: "/author-margaery.jpg",
        url: "/author/margaery-tyrell",
      },
      content:
        "Share a little biographical information to fill out your profile. This may be shown publicly. My name is Margaery Tyrell and I'm a 20-year-old independent blogger with a passion for sharing about my hobby.",
      date: "2 days ago",
      isPinned: true,
      replies: [],
    },
    {
      id: "2",
      author: {
        name: "Marie Daddario",
        image: "/commenter-marie.jpg",
      },
      content:
        "Say good bye to the old-school refreshing page way to view changes on your website. With JNews advance customizer, you can view directly what changed and how's the effect on your website.",
      date: "8 years ago",
      replies: [],
    },
    {
      id: "3",
      author: {
        name: "Dylan McKenzie",
        image: "/commenter-dylan.jpg",
      },
      content: "Thanks for your kind words.",
      date: "8 years ago",
      replies: [
        {
          id: "3-1",
          author: {
            name: "Chef Gordon",
            image: "/commenter-gordon.jpg",
          },
          content: "I've been making scrambled eggs this way for years. It's the only proper way to do it!",
          date: "8 years ago",
          replies: [],
        },
      ],
    },
    {
      id: "4",
      author: {
        name: "Marie Daddario",
        image: "/commenter-marie.jpg",
      },
      content:
        "JNews have great looking and easy to configure with import demo and style feature. I can easily setup it to get your website up fast. Support is also excellent!",
      date: "8 years ago",
      replies: [],
    },
    {
      id: "5",
      author: {
        name: "Dylan McKenzie",
        image: "/commenter-dylan.jpg",
      },
      content: "Don't forget to check our Header Builder and Frontend Editor features.",
      date: "8 years ago",
      replies: [],
    },
  ];

  // Map new comment format to the format expected by the Comment component
  const formattedComments: CommentProps[] = comments
    ? comments.map((comment, index) => ({
      id: `comment-${index}`,
      author: {
        name: comment.author,
        image: comment.avatar,
      },
      content: comment.content,
      date: comment.time,
      replies: [],
    }))
    : defaultComments;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        Comments{" "}
        <span className="ml-2 text-sm bg-restorative-gold/10 text-restorative-gold px-3 py-1 rounded-full">
          {commentCount || formattedComments.length}
        </span>
      </h2>

      {/* Comments List */}
      <div className="divide-y divide-gray-100">
        {formattedComments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>

      {/* Leave a Reply Form */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Leave a Reply</h3>
        <p className="text-gray-500 text-sm mb-6">
          Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
        </p>

        <form className="space-y-5 bg-white p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100">
          <div>
            <label htmlFor="comment" className="block text-sm font-medium mb-2">
              Comment <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="comment"
              rows={6}
              className="w-full border-gray-200 rounded-lg focus:border-restorative-gold focus:ring-restorative-gold/20"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                className="border-gray-200 rounded-lg focus:border-restorative-gold focus:ring-restorative-gold/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                className="border-gray-200 rounded-lg focus:border-restorative-gold focus:ring-restorative-gold/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium mb-2">
              Website
            </label>
            <Input
              id="website"
              className="border-gray-200 rounded-lg focus:border-restorative-gold focus:ring-restorative-gold/20"
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="save-info" className="text-restorative-gold rounded focus:ring-restorative-gold/20" />
            <label htmlFor="save-info" className="text-sm text-gray-600">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>

          <Button className="bg-restorative-gold hover:bg-restorative-gold/90 uppercase shadow-lg hover:shadow-xl hover:shadow-restorative-gold/20 transition-all duration-300 transform hover:-translate-y-1">
            Post Comment
          </Button>
        </form>
      </div>
    </div>
  )
}
