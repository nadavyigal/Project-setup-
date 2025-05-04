"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SendHorizontal, Lightbulb, Save, ArrowRight } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter } from "next/navigation"

export default function IdeaPage() {
  const router = useRouter()
  const [ideaTitle, setIdeaTitle] = useState("")
  const [ideaDescription, setIdeaDescription] = useState("")
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I'm Priya, your Business Analyst. I can help you refine your idea and validate it. What's your initial concept?",
    },
  ])
  const [userMessage, setUserMessage] = useState("")
  const [isRefining, setIsRefining] = useState(true)
  const [refinedIdea, setRefinedIdea] = useState({
    title: "",
    description: "",
    targetAudience: "",
    painPoints: "",
    uniqueValue: "",
    marketSize: "",
    competition: "",
    feasibility: "",
  })

  const handleSendMessage = () => {
    if (!userMessage.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: userMessage }])

    // Simulate BA response
    setTimeout(() => {
      let response = ""

      if (userMessage.toLowerCase().includes("idea") || messages.length === 1) {
        response =
          "That's an interesting concept! Let me ask a few questions to help refine it:\n\n1. Who is your target audience?\n2. What problem are you solving for them?\n3. What makes your solution unique?\n4. Have you researched competitors in this space?"
      } else if (userMessage.toLowerCase().includes("audience") || userMessage.toLowerCase().includes("target")) {
        response =
          "Great! Understanding your audience is crucial. Can you tell me more about their pain points and how your solution addresses them?"
      } else if (userMessage.toLowerCase().includes("competitor") || userMessage.toLowerCase().includes("market")) {
        response =
          "Market research is essential. Based on what you've shared, I think we should document this idea more formally. Would you like me to help create a structured idea validation document?"
      } else {
        response =
          "I've analyzed your input and I think we have enough to start formalizing this idea. Let's document what we know so far and identify areas for further research. Would you like to move to the idea validation document?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    }, 1000)

    setUserMessage("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleCreateProject = () => {
    // In a real app, this would save to a database
    // For now, we'll just navigate to the projects page
    router.push("/projects")
  }

  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="flex items-center justify-between p-6 border-b">
        <div>
          <h1 className="text-2xl font-semibold">Idea Refinement</h1>
          <p className="text-sm text-muted-foreground">Work with Priya (BA) to refine and validate your idea</p>
        </div>
        {!isRefining && (
          <Button onClick={handleCreateProject}>
            Create Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>

      <div className="grid flex-1 md:grid-cols-2">
        {/* Left side - Chat with BA */}
        <div className="flex flex-col h-full border-r">
          <div className="flex items-center p-4 border-b">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src="/placeholder-user.jpg" alt="Priya" />
              <AvatarFallback className="bg-rose-100 text-rose-600">BA</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-sm font-medium">Priya</h2>
              <p className="text-xs text-muted-foreground">Business Analyst</p>
            </div>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, i) => (
                <div key={i} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Textarea
                placeholder="Describe your idea to Priya..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="min-h-[60px]"
              />
              <Button size="icon" onClick={handleSendMessage}>
                <SendHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right side - Idea documentation */}
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
              <h2 className="text-sm font-medium">Idea Documentation</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsRefining(!isRefining)}>
              {isRefining ? (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Complete Refinement
                </>
              ) : (
                <>
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Continue Refining
                </>
              )}
            </Button>
          </div>

          <div className="p-4 overflow-auto">
            {isRefining ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="idea-title" className="text-sm font-medium">
                    Idea Title
                  </label>
                  <Input
                    id="idea-title"
                    value={ideaTitle}
                    onChange={(e) => setIdeaTitle(e.target.value)}
                    placeholder="Give your idea a clear, concise title"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="idea-description" className="text-sm font-medium">
                    Description
                  </label>
                  <Textarea
                    id="idea-description"
                    value={ideaDescription}
                    onChange={(e) => setIdeaDescription(e.target.value)}
                    placeholder="Describe your idea in detail"
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="target-audience" className="text-sm font-medium">
                    Target Audience
                  </label>
                  <Input
                    id="target-audience"
                    value={refinedIdea.targetAudience}
                    onChange={(e) => setRefinedIdea({ ...refinedIdea, targetAudience: e.target.value })}
                    placeholder="Who will use your product/service?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="pain-points" className="text-sm font-medium">
                    Pain Points
                  </label>
                  <Textarea
                    id="pain-points"
                    value={refinedIdea.painPoints}
                    onChange={(e) => setRefinedIdea({ ...refinedIdea, painPoints: e.target.value })}
                    placeholder="What problems does your idea solve?"
                    className="min-h-[80px]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="unique-value" className="text-sm font-medium">
                    Unique Value Proposition
                  </label>
                  <Textarea
                    id="unique-value"
                    value={refinedIdea.uniqueValue}
                    onChange={(e) => setRefinedIdea({ ...refinedIdea, uniqueValue: e.target.value })}
                    placeholder="What makes your idea unique?"
                    className="min-h-[80px]"
                  />
                </div>
              </div>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>{ideaTitle || "Your Refined Idea"}</CardTitle>
                  <CardDescription>Validated and refined with Priya (BA)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-1">Description</h3>
                    <p className="text-sm text-muted-foreground">{ideaDescription || "No description provided yet."}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">Target Audience</h3>
                    <p className="text-sm text-muted-foreground">
                      {refinedIdea.targetAudience || "Not specified yet."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">Pain Points</h3>
                    <p className="text-sm text-muted-foreground">{refinedIdea.painPoints || "Not specified yet."}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">Unique Value Proposition</h3>
                    <p className="text-sm text-muted-foreground">{refinedIdea.uniqueValue || "Not specified yet."}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-muted-foreground">
                    This idea has been refined and is ready to move to the next stage of the process.
                  </p>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
