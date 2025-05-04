import { Bot, Brain, Code, Download, FileCode, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TemplatesPage() {
  const templates = [
    {
      id: 1,
      title: "Developer Persona",
      description: "A general-purpose developer AI persona that can assist with coding tasks.",
      category: "Development",
      icon: Code,
    },
    {
      id: 2,
      title: "Code Reviewer",
      description: "Specialized in reviewing code for bugs, performance issues, and best practices.",
      category: "Quality Assurance",
      icon: FileCode,
    },
    {
      id: 3,
      title: "Product Manager",
      description: "Helps with user stories, requirements gathering, and feature prioritization.",
      category: "Management",
      icon: User,
    },
    {
      id: 4,
      title: "DevOps Engineer",
      description: "Assists with CI/CD pipelines, infrastructure, and deployment strategies.",
      category: "Operations",
      icon: Bot,
    },
    {
      id: 5,
      title: "UX Designer",
      description: "Provides guidance on user experience, interface design, and accessibility.",
      category: "Design",
      icon: Brain,
    },
    {
      id: 6,
      title: "Technical Writer",
      description: "Helps create documentation, tutorials, and technical guides.",
      category: "Documentation",
      icon: FileCode,
    },
  ]

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">AI Persona Templates</h1>
        <p className="text-lg text-slate-600">
          Ready-to-use templates for creating different types of AI personas for your development team
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input type="search" placeholder="Search templates..." className="pl-10" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <div key={template.id} className="flex flex-col p-6 border rounded-xl">
            <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-purple-600 rounded-lg">
              <template.icon className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{template.title}</h3>
            <p className="mb-2 text-sm text-slate-600">{template.description}</p>
            <div className="mt-auto pt-4">
              <div className="mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  {template.category}
                </span>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <Download className="w-4 h-4 mr-2" />
                Download Template
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
