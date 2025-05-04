import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="flex items-center justify-between p-6 border-b">
        <div>
          <h1 className="text-2xl font-semibold">Projects</h1>
          <p className="text-sm text-muted-foreground">Manage your vibe coding projects</p>
        </div>
        <Button>
          <PlusCircle className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
