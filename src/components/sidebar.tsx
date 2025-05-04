import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart2, Briefcase, Home, Settings, Lightbulb, ArrowRight } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 w-64 border-r bg-background hidden md:block", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">V</span>
            </div>
            <h2 className="text-lg font-semibold tracking-tight">VibeLab</h2>
          </Link>
        </div>
        <div className="px-3">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/idea">
                <Lightbulb className="mr-2 h-4 w-4" />
                New Idea
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/workflow">
                <ArrowRight className="mr-2 h-4 w-4" />
                Workflow
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/projects">
                <Briefcase className="mr-2 h-4 w-4" />
                Projects
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/analytics">
                <BarChart2 className="mr-2 h-4 w-4" />
                Analytics
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h3 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">Personas</h3>
          <div className="space-y-1">
            <Link href="/personas/ba" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
              <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center">
                <span className="text-sm font-medium text-rose-600">BA</span>
              </div>
              <span className="text-sm">Business Analyst</span>
            </Link>
            <Link href="/personas/pm" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">PM</span>
              </div>
              <span className="text-sm">Project Manager</span>
            </Link>
            <Link href="/personas/po" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
              <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-sm font-medium text-amber-600">PO</span>
              </div>
              <span className="text-sm">Product Owner</span>
            </Link>
            <Link href="/personas/ux" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-sm font-medium text-purple-600">UX</span>
              </div>
              <span className="text-sm">UX Designer</span>
            </Link>
            <Link href="/personas/ar" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
              <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-sm font-medium text-emerald-600">AR</span>
              </div>
              <span className="text-sm">Architect</span>
            </Link>
            <Link href="/personas/sm" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-sm font-medium text-indigo-600">SM</span>
              </div>
              <span className="text-sm">Scrum Master</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-3 absolute bottom-4 left-0 right-0">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </Button>
      </div>
    </div>
  )
}
