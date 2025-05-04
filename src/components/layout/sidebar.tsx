"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Home,
  Lightbulb,
  GitBranch,
  FolderKanban,
  Users2,
  BarChart3,
  Settings,
} from "lucide-react"

const sidebarItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "New Idea", href: "/new-idea", icon: Lightbulb },
  { name: "Workflow", href: "/workflow", icon: GitBranch },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Personas", href: "/personas", icon: Users2 },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
]

const personas = [
  { code: "BA", name: "Business Analyst", color: "bg-red-100 text-red-600" },
  { code: "PM", name: "Project Manager", color: "bg-blue-100 text-blue-600" },
  { code: "PO", name: "Product Owner", color: "bg-yellow-100 text-yellow-600" },
  { code: "UX", name: "UX Designer", color: "bg-purple-100 text-purple-600" },
  { code: "AR", name: "Architect", color: "bg-green-100 text-green-600" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-64 border-r bg-white">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
            V
          </div>
          <span className="text-xl font-semibold">VibeLab</span>
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t">
        <div className="mb-2 px-3 text-xs font-semibold text-gray-400 uppercase">
          Personas
        </div>
        <div className="space-y-1">
          {personas.map((persona) => (
            <Link
              key={persona.code}
              href={`/personas/${persona.code.toLowerCase()}`}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <div className={cn("w-6 h-6 rounded flex items-center justify-center text-xs font-medium", persona.color)}>
                {persona.code}
              </div>
              <span>{persona.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="p-4 border-t">
        <Link
          href="/settings"
          className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar 