import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/types"
import { MoreHorizontal, Share } from "lucide-react"

interface ProjectHeaderProps {
  project: Project
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="flex items-center justify-between p-6 border-b">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">{project.name}</h1>
          <div
            className={`h-2 w-2 rounded-full bg-${project.status === "active" ? "green" : project.status === "planning" ? "amber" : "slate"}-500`}
          />
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          <Share className="h-4 w-4 mr-2" />
          Share
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
