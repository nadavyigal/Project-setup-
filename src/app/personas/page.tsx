import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PersonasPage() {
  const personas = [
    {
      id: "ba",
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
    },
    {
      id: "pm",
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
    },
    {
      id: "po",
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
    },
    {
      id: "ux",
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
    },
    {
      id: "architect",
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
    },
    {
      id: "sm",
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
    },
  ]

  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="flex items-center justify-between p-6 border-b">
        <div>
          <h1 className="text-2xl font-semibold">Personas</h1>
          <p className="text-sm text-muted-foreground">AI-powered team members that help you build your project</p>
        </div>
        <Button>Customize Personas</Button>
      </div>

      <div className="p-6">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Personas</TabsTrigger>
            <TabsTrigger value="step1">Step 1: Ideation</TabsTrigger>
            <TabsTrigger value="step2">Step 2: Documentation</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {personas.map((persona) => (
                <Card key={persona.id}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className={`h-12 w-12 border-2 border-${persona.color}-200`}>
                      <AvatarImage src={persona.image || "/placeholder.svg"} alt={persona.name} />
                      <AvatarFallback className={`bg-${persona.color}-100 text-${persona.color}-600`}>
                        {persona.shortCode}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{persona.name}</CardTitle>
                      <CardDescription>{persona.role}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm">{persona.description}</p>
                    <div>
                      <h4 className="mb-2 text-sm font-medium">Responsibilities:</h4>
                      <ul className="space-y-1">
                        {persona.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-baseline text-sm">
                            <div
                              className={`h-1.5 w-1.5 rounded-full bg-${persona.color}-500 mr-2 mt-1.5 flex-shrink-0`}
                            />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="step1" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {personas
                .filter((p) => p.id === "ba")
                .map((persona) => (
                  <Card key={persona.id}>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar className={`h-12 w-12 border-2 border-${persona.color}-200`}>
                        <AvatarImage src={persona.image || "/placeholder.svg"} alt={persona.name} />
                        <AvatarFallback className={`bg-${persona.color}-100 text-${persona.color}-600`}>
                          {persona.shortCode}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{persona.name}</CardTitle>
                        <CardDescription>{persona.role}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm">{persona.description}</p>
                      <div>
                        <h4 className="mb-2 text-sm font-medium">Responsibilities:</h4>
                        <ul className="space-y-1">
                          {persona.responsibilities.map((responsibility, i) => (
                            <li key={i} className="flex items-baseline text-sm">
                              <div
                                className={`h-1.5 w-1.5 rounded-full bg-${persona.color}-500 mr-2 mt-1.5 flex-shrink-0`}
                              />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="step2" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {personas
                .filter((p) => ["po", "ux", "architect", "sm"].includes(p.id))
                .map((persona) => (
                  <Card key={persona.id}>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar className={`h-12 w-12 border-2 border-${persona.color}-200`}>
                        <AvatarImage src={persona.image || "/placeholder.svg"} alt={persona.name} />
                        <AvatarFallback className={`bg-${persona.color}-100 text-${persona.color}-600`}>
                          {persona.shortCode}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{persona.name}</CardTitle>
                        <CardDescription>{persona.role}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm">{persona.description}</p>
                      <div>
                        <h4 className="mb-2 text-sm font-medium">Responsibilities:</h4>
                        <ul className="space-y-1">
                          {persona.responsibilities.map((responsibility, i) => (
                            <li key={i} className="flex items-baseline text-sm">
                              <div
                                className={`h-1.5 w-1.5 rounded-full bg-${persona.color}-500 mr-2 mt-1.5 flex-shrink-0`}
                              />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
