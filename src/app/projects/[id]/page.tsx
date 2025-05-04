import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projects } from "@/lib/data"
import ProjectHeader from "@/components/project-header"
import DocsView from "@/components/docs-view"
import PlanningView from "@/components/planning-view"
import PersonaView from "@/components/persona-view"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col h-full">
      <ProjectHeader project={project} />

      <Tabs defaultValue="overview" className="flex-1">
        <div className="px-6 border-b">
          <TabsList className="h-12">
            <TabsTrigger value="overview" className="data-[state=active]:bg-background">
              Project Overview
            </TabsTrigger>
            <TabsTrigger value="documentation" className="data-[state=active]:bg-background">
              Documentation
            </TabsTrigger>
            <TabsTrigger value="development" className="data-[state=active]:bg-background">
              Development
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="flex-1 p-6 mt-0 data-[state=active]:block">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Refined Idea</CardTitle>
                <CardDescription>Validated with Business Analyst</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-1">Description</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">Target Audience</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.targetAudience ||
                        "Young professionals aged 25-40 who are looking for a more efficient way to manage their daily tasks and improve productivity."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">Pain Points</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.painPoints ||
                        "Existing solutions are too complex, lack integration with common tools, and don't provide meaningful insights to improve productivity."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">Unique Value Proposition</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.uniqueValue ||
                        "An intuitive, AI-powered productivity tool that learns from user behavior and provides personalized recommendations to optimize workflow."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
                <CardDescription>Current progress and team members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-1">Progress</h3>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${project.progress}%` }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-right">{project.progress}% complete</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Team Members</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {project.team.map((member, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded-md bg-slate-50">
                          <div
                            className={`h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium`}
                          >
                            {member.initials}
                          </div>
                          <div>
                            <div className="text-sm font-medium">{member.name}</div>
                            <div className="text-xs text-muted-foreground">{member.role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documentation" className="flex-1 p-0 mt-0 data-[state=active]:flex">
          <Tabs defaultValue="requirements" orientation="vertical" className="flex-1">
            <div className="w-48 border-r h-full">
              <TabsList className="flex flex-col h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="requirements"
                  className="justify-start w-full rounded-none border-r-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Requirements
                </TabsTrigger>
                <TabsTrigger
                  value="ux"
                  className="justify-start w-full rounded-none border-r-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  UX Wireframes
                </TabsTrigger>
                <TabsTrigger
                  value="architecture"
                  className="justify-start w-full rounded-none border-r-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Architecture
                </TabsTrigger>
                <TabsTrigger
                  value="planning"
                  className="justify-start w-full rounded-none border-r-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Planning
                </TabsTrigger>
                <TabsTrigger
                  value="market"
                  className="justify-start w-full rounded-none border-r-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Market Research
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="requirements" className="flex-1 p-0 mt-0 data-[state=active]:flex">
              <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
                <DocsView title="Product Requirements" filePath="/docs/product-requirements.md" project={project} />
                <PersonaView persona="PO" project={project} />
              </div>
            </TabsContent>

            <TabsContent value="ux" className="flex-1 p-0 mt-0 data-[state=active]:flex">
              <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
                <DocsView title="UX Wireframes" filePath="/docs/ux-wireframes.md" project={project} />
                <PersonaView persona="UX" project={project} />
              </div>
            </TabsContent>

            <TabsContent value="architecture" className="flex-1 p-0 mt-0 data-[state=active]:flex">
              <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
                <DocsView title="Architecture" filePath="/docs/architecture.md" project={project} />
                <PersonaView persona="Architect" project={project} />
              </div>
            </TabsContent>

            <TabsContent value="planning" className="flex-1 p-0 mt-0 data-[state=active]:flex">
              <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
                <PlanningView project={project} />
                <PersonaView persona="PM" project={project} />
              </div>
            </TabsContent>

            <TabsContent value="market" className="flex-1 p-0 mt-0 data-[state=active]:flex">
              <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
                <DocsView title="Market Research" filePath="/docs/market-research.md" project={project} />
                <PersonaView persona="BA" project={project} />
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="development" className="flex-1 p-0 mt-0 data-[state=active]:flex">
          <div className="flex items-center justify-center flex-1 p-6">
            <div className="max-w-md p-6 text-center">
              <h3 className="mb-2 text-xl font-semibold">Development Phase</h3>
              <p className="mb-4 text-muted-foreground">
                Once documentation is complete, shift into the development phase using the process monorepo structure.
              </p>
              <Button>Initialize Development Environment</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
