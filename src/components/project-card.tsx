import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Helper function to determine the status color class
  const getStatusColorClass = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "planning":
        return "bg-amber-500"
      default:
        return "bg-slate-500"
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${getStatusColorClass(project.status)}`}
            />
            <Badge variant={project.status === "active" ? "default" : "secondary"}>
              {project.status === "active" ? "Active" : project.status === "planning" ? "Planning" : "Draft"}
            </Badge>
          </div>
          <span className="text-xs text-muted-foreground">Updated {project.lastUpdated}</span>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{project.description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Progress</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-1" />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="flex -space-x-2">
          {project.team.map((member, i) => (
            <div
              key={i}
              className="h-6 w-6 rounded-full border-2 border-background bg-slate-200 flex items-center justify-center text-[10px] font-medium"
              title={member.role}
            >
              {member.initials}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Step {project.currentStep}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
