"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { SendHorizontal, FileText, Info } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useParams, useRouter } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import PersonaDefinitionView from "@/components/persona-definition-view"
import { getPersonaDefinition, hasFullDefinition } from "@/lib/bmad/personas"

export default function PersonaPage() {
  const params = useParams()
  const router = useRouter()
  const role = params.role as string
  const [userMessage, setUserMessage] = useState("")
  const [showDefinition, setShowDefinition] = useState(false)

  const personas = {
    ba: {
      name: "Priya",
      role: "Business Analyst",
      shortCode: "BA",
      color: "rose",
      description: "Focuses on idea validation and market research.",
      responsibilities: [
        "Validate business ideas",
        "Conduct market research",
        "Identify user pain points",
        "Analyze competitors",
        "Create business cases",
      ],
      image: "/placeholder-user.jpg",
      messages: [
        {
          role: "assistant",
          content:
            "Hi, I'm Priya, your Business Analyst. I can help you validate your business ideas and conduct market research. What would you like to work on today?",
        },
      ],
    },
    pm: {
      name: "Marcus",
      role: "Project Manager",
      shortCode: "PM",
      color: "blue",
      description: "Manages project timelines, resources, and delivery.",
      responsibilities: [
        "Create project plans",
        "Manage resources",
        "Track progress",
        "Identify and mitigate risks",
        "Facilitate communication",
      ],
      image: "/placeholder-user.jpg",
      messages: [
        {
          role: "assistant",
          content:
            "Hello, I'm Marcus, your Project Manager. I can help you plan and track your project progress. What project would you like to discuss?",
        },
      ],
    },
    po: {
      name: "Jordan",
      role: "Product Owner",
      shortCode: "PO",
      color: "amber",
      description: "Defines product vision, requirements, and priorities.",
      responsibilities: [
        "Define product vision",
        "Create product requirements",
        "Prioritize features",
        "Manage product backlog",
        "Ensure business value delivery",
      ],
      image: "/placeholder-user.jpg",
      messages: [
        {
          role: "assistant",
          content:
            "Hi there, I'm Jordan, your Product Owner. I can help define your product vision and requirements. What product are we working on?",
        },
      ],
    },
    ux: {
      name: "Lana",
      role: "UX Designer",
      shortCode: "UX",
      color: "purple",
      description: "Creates user-centered designs and experiences.",
      responsibilities: [
        "Design user interfaces",
        "Create wireframes and prototypes",
        "Conduct user research",
        "Define user flows",
        "Ensure accessibility",
      ],
      image: "/placeholder-user.jpg",
      messages: [
        {
          role: "assistant",
          content:
            "Hello, I'm Lana, your UX Designer. I can help create user-centered designs for your product. What design challenges are you facing?",
        },
      ],
    },
    ar: {
      name: "Omar",
      role: "Technical Architect",
      shortCode: "AR",
      color: "emerald",
      description: "Designs technical solutions and system architecture.",
      responsibilities: [
        "Design system architecture",
        "Select technologies",
        "Define data models",
        "Ensure scalability and performance",
        "Guide technical implementation",
      ],
      image: "/placeholder-user.jpg",
      messages: [
        {
          role: "assistant",
          content:
            "Hi, I'm Omar, your Technical Architect. I can help design the technical architecture for your project. What system are we building?",
        },
      ],
    },
    sm: {
      name: "Nadine",
      role: "Scrum Master",
      shortCode: "SM",
      color: "indigo",
      description: "Facilitates agile processes and removes impediments.",
      responsibilities: [
        "Facilitate Scrum ceremonies",
        "Remove impediments",
        "Coach team on agile practices",
        "Protect team from distractions",
        "Foster continuous improvement",
      ],
      image: "/placeholder-user.jpg",
      messages: [
        {
          role: "assistant",
          content:
            "Hello, I'm Nadine, your Scrum Master. I can help facilitate your agile processes and remove impediments. How can I help your team today?",
        },
      ],
    },
  }

  const currentPersona = personas[role as keyof typeof personas] || personas.ba
  const personaHasDefinition = hasFullDefinition(role)
  const personaDefinition = getPersonaDefinition(role)

  const handleSendMessage = () => {
    if (!userMessage.trim()) return

    // In a real app, this would send the message to an AI backend
    // For now, we'll just simulate a response
    setTimeout(() => {
      const response = `I understand your question about "${userMessage}". As a ${currentPersona.role}, I would approach this by...`

      // This would be updated with the actual response from the AI
      console.log(response)
    }, 1000)

    setUserMessage("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handlePersonaChange = (value: string) => {
    router.push(`/personas/${value}`)
  }

  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="flex items-center justify-between p-6 border-b">
        <div>
          <h1 className="text-2xl font-semibold">Persona: {currentPersona.role}</h1>
          <p className="text-sm text-muted-foreground">Work with {currentPersona.name} to develop your project</p>
        </div>
      </div>

      <div className="grid flex-1 md:grid-cols-[300px_1fr]">
        {/* Left side - Persona details */}
        <div className="border-r">
          <div className="p-4 border-b">
            <Tabs defaultValue={role} onValueChange={handlePersonaChange}>
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="ba" className="data-[state=active]:bg-rose-50">
                  BA
                </TabsTrigger>
                <TabsTrigger value="pm" className="data-[state=active]:bg-blue-50">
                  PM
                </TabsTrigger>
                <TabsTrigger value="po" className="data-[state=active]:bg-amber-50">
                  PO
                </TabsTrigger>
                <TabsTrigger value="ux" className="data-[state=active]:bg-purple-50">
                  UX
                </TabsTrigger>
                <TabsTrigger value="ar" className="data-[state=active]:bg-emerald-50">
                  AR
                </TabsTrigger>
                <TabsTrigger value="sm" className="data-[state=active]:bg-indigo-50">
                  SM
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex flex-col items-center mb-6">
              <Avatar className={`h-20 w-20 mb-4 border-2 border-${currentPersona.color}-200`}>
                <AvatarImage src={currentPersona.image || "/placeholder.svg"} alt={currentPersona.name} />
                <AvatarFallback className={`bg-${currentPersona.color}-100 text-${currentPersona.color}-600 text-xl`}>
                  {currentPersona.shortCode}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">{currentPersona.name}</h2>
              <p className="text-sm text-muted-foreground">{currentPersona.role}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">About</h3>
              <p className="text-sm text-muted-foreground">{currentPersona.description}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Responsibilities</h3>
              <ul className="space-y-1">
                {currentPersona.responsibilities.map((responsibility, i) => (
                  <li key={i} className="flex items-baseline text-sm">
                    <div
                      className={`h-1.5 w-1.5 rounded-full bg-${currentPersona.color}-500 mr-2 mt-1.5 flex-shrink-0`}
                    />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <Button variant="outline" className="w-full">
              <FileText className="h-4 w-4 mr-2" />
              View Documentation
            </Button>
            
            {personaHasDefinition && (
              <Dialog open={showDefinition} onOpenChange={setShowDefinition}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Info className="h-4 w-4 mr-2" />
                    View Full Definition
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[90vh]">
                  {personaDefinition && <PersonaDefinitionView personaDefinition={personaDefinition} />}
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>

        {/* Right side - Chat with persona */}
        <div className="flex flex-col h-full">
          <ScrollArea className="flex-1 p-4">
            {currentPersona.messages.map((message, i) => (
              <div key={i} className={`mb-4 ${message.role === "assistant" ? "pr-12" : "pl-12"}`}>
                <div
                  className={`p-3 rounded-lg ${message.role === "assistant" ? `bg-${currentPersona.color}-50 text-${currentPersona.color}-900` : "bg-muted"
                    }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                placeholder={`Ask ${currentPersona.name} a question...`}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={!userMessage.trim()}>
                <SendHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
