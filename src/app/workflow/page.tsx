"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { SendHorizontal, FileText, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function WorkflowPage() {
  const router = useRouter()
  const [activePersona, setActivePersona] = useState("po")
  const [userMessage, setUserMessage] = useState("")
  const [progress, setProgress] = useState({
    requirements: 30,
    design: 10,
    architecture: 0,
    planning: 0,
  })

  const personas = {
    po: {
      name: "Jordan",
      role: "Product Owner",
      shortCode: "PO",
      color: "amber",
      messages: [
        {
          role: "assistant",
          content:
            "Hi, I'm Jordan, your Product Owner. Let's define the product requirements based on the refined idea. What features do you think are essential for the MVP?",
        },
      ],
    },
    ux: {
      name: "Lana",
      role: "UX Designer",
      shortCode: "UX",
      color: "purple",
      messages: [
        {
          role: "assistant",
          content:
            "Hello, I'm Lana, your UX Designer. Once we have the product requirements, I can help create wireframes and design the user experience. What kind of user interface are you envisioning?",
        },
      ],
    },
    architect: {
      name: "Omar",
      role: "Technical Architect",
      shortCode: "AR",
      color: "emerald",
      messages: [
        {
          role: "assistant",
          content:
            "Hi there, I'm Omar, your Technical Architect. I'll help design the technical architecture for your project. What technologies are you considering for this project?",
        },
      ],
    },
    sm: {
      name: "Nadine",
      role: "Scrum Master",
      shortCode: "SM",
      color: "indigo",
      messages: [
        {
          role: "assistant",
          content:
            "Hello, I'm Nadine, your Scrum Master. I'll help organize the development process using agile methodologies. Let's discuss how we should structure our sprints and ceremonies.",
        },
      ],
    },
  }

  const [personaState, setPersonaState] = useState(personas)

  const handleSendMessage = () => {
    if (!userMessage.trim()) return

    // Add user message to the current persona's messages
    const updatedPersonaState = { ...personaState }
    updatedPersonaState[activePersona as keyof typeof personaState].messages.push({
      role: "user",
      content: userMessage,
    })
    setPersonaState(updatedPersonaState)

    // Simulate response based on persona
    setTimeout(() => {
      let response = ""

      switch (activePersona) {
        case "po":
          response =
            "Great input! Based on what you've shared, I'll start drafting the product requirements document. This will include user stories, acceptance criteria, and prioritization. Is there anything specific you want to ensure is included in the MVP?"
          setProgress({ ...progress, requirements: Math.min(progress.requirements + 20, 100) })
          break
        case "ux":
          response =
            "I understand your vision for the UI. I'll create wireframes that focus on user-centered design principles. Would you prefer a more minimalist approach or something feature-rich for the initial design?"
          setProgress({ ...progress, design: Math.min(progress.design + 20, 100) })
          break
        case "architect":
          response =
            "Based on your technical requirements, I recommend a stack that includes React for the frontend, Node.js for the backend, and MongoDB for the database. This will provide the scalability and performance you need. What do you think about this approach?"
          setProgress({ ...progress, architecture: Math.min(progress.architecture + 20, 100) })
          break
        case "sm":
          response =
            "I suggest we organize this project into 2-week sprints with daily standups, sprint planning, review, and retrospective meetings. This will help us maintain agility and adapt to changes quickly. Does this timeline work for your project goals?"
          setProgress({ ...progress, planning: Math.min(progress.planning + 20, 100) })
          break
      }

      updatedPersonaState[activePersona as keyof typeof personaState].messages.push({
        role: "assistant",
        content: response,
      })
      setPersonaState(updatedPersonaState)
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
    router.push("/projects")
  }

  const isWorkflowComplete = Object.values(progress).every((value) => value >= 80)

  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="flex items-center justify-between p-6 border-b">
        <div>
          <h1 className="text-2xl font-semibold">Project Workflow</h1>
          <p className="text-sm text-muted-foreground">
            Work with your team to define requirements, design, architecture, and planning
          </p>
        </div>
        {isWorkflowComplete && (
          <Button onClick={handleCreateProject}>
            Create Project
            <CheckCircle2 className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>

      <div className="grid flex-1 md:grid-cols-[300px_1fr]">
        {/* Left side - Progress and personas */}
        <div className="border-r">
          <div className="p-4 border-b">
            <h2 className="text-sm font-medium mb-4">Workflow Progress</h2>
            <div className="space-y-4">
              <ProgressItem
                label="Product Requirements"
                value={progress.requirements}
                color="amber"
                isActive={activePersona === "po"}
                onClick={() => setActivePersona("po")}
              />
              <ProgressItem
                label="UX Design"
                value={progress.design}
                color="purple"
                isActive={activePersona === "ux"}
                onClick={() => setActivePersona("ux")}
              />
              <ProgressItem
                label="Technical Architecture"
                value={progress.architecture}
                color="emerald"
                isActive={activePersona === "architect"}
                onClick={() => setActivePersona("architect")}
              />
              <ProgressItem
                label="Sprint Planning"
                value={progress.planning}
                color="indigo"
                isActive={activePersona === "sm"}
                onClick={() => setActivePersona("sm")}
              />
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-sm font-medium mb-4">Team Members</h2>
            <div className="space-y-2">
              <PersonaButton
                name="Jordan"
                role="Product Owner"
                shortCode="PO"
                color="amber"
                isActive={activePersona === "po"}
                onClick={() => setActivePersona("po")}
              />
              <PersonaButton
                name="Lana"
                role="UX Designer"
                shortCode="UX"
                color="purple"
                isActive={activePersona === "ux"}
                onClick={() => setActivePersona("ux")}
              />
              <PersonaButton
                name="Omar"
                role="Technical Architect"
                shortCode="AR"
                color="emerald"
                isActive={activePersona === "architect"}
                onClick={() => setActivePersona("architect")}
              />
              <PersonaButton
                name="Nadine"
                role="Scrum Master"
                shortCode="SM"
                color="indigo"
                isActive={activePersona === "sm"}
                onClick={() => setActivePersona("sm")}
              />
            </div>
          </div>
        </div>

        {/* Right side - Chat with current persona */}
        <div className="flex flex-col h-full">
          <Tabs value={activePersona} onValueChange={setActivePersona} className="flex-1 flex flex-col">
            <div className="px-4 border-b">
              <TabsList className="h-12">
                <TabsTrigger value="po" className="data-[state=active]:bg-amber-50">
                  Product Owner
                </TabsTrigger>
                <TabsTrigger value="ux" className="data-[state=active]:bg-purple-50">
                  UX Designer
                </TabsTrigger>
                <TabsTrigger value="architect" className="data-[state=active]:bg-emerald-50">
                  Architect
                </TabsTrigger>
                <TabsTrigger value="sm" className="data-[state=active]:bg-indigo-50">
                  Scrum Master
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="po" className="flex-1 p-0 mt-0 data-[state=active]:flex flex-col">
              <PersonaChat
                persona={personaState.po}
                userMessage={userMessage}
                setUserMessage={setUserMessage}
                handleSendMessage={handleSendMessage}
                handleKeyDown={handleKeyDown}
              />
            </TabsContent>

            <TabsContent value="ux" className="flex-1 p-0 mt-0 data-[state=active]:flex flex-col">
              <PersonaChat
                persona={personaState.ux}
                userMessage={userMessage}
                setUserMessage={setUserMessage}
                handleSendMessage={handleSendMessage}
                handleKeyDown={handleKeyDown}
              />
            </TabsContent>

            <TabsContent value="architect" className="flex-1 p-0 mt-0 data-[state=active]:flex flex-col">
              <PersonaChat
                persona={personaState.architect}
                userMessage={userMessage}
                setUserMessage={setUserMessage}
                handleSendMessage={handleSendMessage}
                handleKeyDown={handleKeyDown}
              />
            </TabsContent>

            <TabsContent value="sm" className="flex-1 p-0 mt-0 data-[state=active]:flex flex-col">
              <PersonaChat
                persona={personaState.sm}
                userMessage={userMessage}
                setUserMessage={setUserMessage}
                handleSendMessage={handleSendMessage}
                handleKeyDown={handleKeyDown}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

interface ProgressItemProps {
  label: string
  value: number
  color: string
  isActive: boolean
  onClick: () => void
}

function ProgressItem({ label, value, color, isActive, onClick }: ProgressItemProps) {
  return (
    <div
      className={`p-3 rounded-md cursor-pointer ${isActive ? `bg-${color}-50` : "hover:bg-slate-50"}`}
      onClick={onClick}
    >
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium">{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full bg-${color}-500`} style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

interface PersonaButtonProps {
  name: string
  role: string
  shortCode: string
  color: string
  isActive: boolean
  onClick: () => void
}

function PersonaButton({ name, role, shortCode, color, isActive, onClick }: PersonaButtonProps) {
  return (
    <Button
      variant="ghost"
      className={`w-full justify-start gap-3 ${isActive ? `bg-${color}-50 text-${color}-900` : ""}`}
      onClick={onClick}
    >
      <div className={`h-6 w-6 rounded-full bg-${color}-100 flex items-center justify-center`}>
        <span className={`text-xs font-medium text-${color}-600`}>{shortCode}</span>
      </div>
      <div className="text-left">
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-muted-foreground">{role}</div>
      </div>
    </Button>
  )
}

interface PersonaChatProps {
  persona: {
    name: string
    role: string
    shortCode: string
    color: string
    messages: {
      role: string
      content: string
    }[]
  }
  userMessage: string
  setUserMessage: (message: string) => void
  handleSendMessage: () => void
  handleKeyDown: (e: React.KeyboardEvent) => void
}

function PersonaChat({ persona, userMessage, setUserMessage, handleSendMessage, handleKeyDown }: PersonaChatProps) {
  return (
    <>
      <div className="flex items-center p-4 border-b">
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage src="/placeholder-user.jpg" alt={persona.name} />
          <AvatarFallback className={`bg-${persona.color}-100 text-${persona.color}-600`}>
            {persona.shortCode}
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-sm font-medium">{persona.name}</h2>
          <p className="text-xs text-muted-foreground">{persona.role}</p>
        </div>
        <Button variant="ghost" size="sm" className="ml-auto">
          <FileText className="h-4 w-4 mr-2" />
          View Document
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {persona.messages.map((message, i) => (
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
          <Input
            placeholder={`Message ${persona.name}...`}
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button size="icon" onClick={handleSendMessage}>
            <SendHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  )
}
