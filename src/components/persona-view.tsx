import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/types"
import { SendHorizontal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface PersonaViewProps {
  persona: string
  project: Project
}

export default function PersonaView({ persona, project }: PersonaViewProps) {
  const personaDetails = {
    BA: {
      name: "Priya",
      role: "Business Analyst",
      color: "rose",
      image: "/placeholder-user.jpg",
    },
    PM: {
      name: "Marcus",
      role: "Project Manager",
      color: "blue",
      image: "/placeholder-user.jpg",
    },
    PO: {
      name: "Jordan",
      role: "Product Owner",
      color: "amber",
      image: "/placeholder-user.jpg",
    },
    UX: {
      name: "Lana",
      role: "UX Designer",
      color: "purple",
      image: "/placeholder-user.jpg",
    },
    Architect: {
      name: "Omar",
      role: "Technical Architect",
      color: "emerald",
      image: "/placeholder-user.jpg",
    },
    SM: {
      name: "Nadine",
      role: "Scrum Master",
      color: "indigo",
      image: "/placeholder-user.jpg",
    },
  }

  const currentPersona = personaDetails[persona as keyof typeof personaDetails]

  const messages = [
    {
      role: "assistant",
      content: `Hi, I'm ${currentPersona.name}, your ${currentPersona.role}. How can I help with the ${project.name} project today  your ${currentPersona.role}. How can I help with the ${project.name} project today?`,
    },
    {
      role: "user",
      content: `Can you help me validate the market need for this project?`,
    },
    {
      role: "assistant",
      content: `To validate the market need for ${project.name}, I recommend we take the following steps:

1. Identify the target audience and their pain points
2. Analyze competitors and their offerings
3. Conduct user interviews or surveys
4. Create a value proposition canvas
5. Develop a minimum viable product (MVP) hypothesis

Would you like me to help you with any of these specific areas?`,
    },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center p-4 border-b">
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage src={currentPersona.image || "/placeholder.svg"} alt={currentPersona.name} />
          <AvatarFallback className={`bg-${currentPersona.color}-100 text-${currentPersona.color}-600`}>
            {persona.substring(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-sm font-medium">{currentPersona.name}</h2>
          <p className="text-xs text-muted-foreground">{currentPersona.role}</p>
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
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input placeholder={`Ask ${currentPersona.name} a question...`} />
          <Button size="icon">
            <SendHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
