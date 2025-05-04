import { ArrowLeft, Book, FileText, Github, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 py-12 mx-auto">
        <Link href="/" className="inline-flex items-center mb-8 text-sm text-slate-600 hover:text-slate-900">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="grid gap-12 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <div className="hidden md:block">
            <div className="sticky top-24">
              <h3 className="mb-4 text-lg font-semibold">Documentation</h3>
              <nav className="flex flex-col space-y-1">
                <Link href="/docs" className="px-3 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-md">
                  Introduction
                </Link>
                <Link
                  href="/docs/getting-started"
                  className="px-3 py-2 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-50"
                >
                  Getting Started
                </Link>
                <Link
                  href="/docs/project-structure"
                  className="px-3 py-2 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-50"
                >
                  Project Structure
                </Link>
                <Link
                  href="/docs/ai-personas"
                  className="px-3 py-2 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-50"
                >
                  AI Personas
                </Link>
                <Link
                  href="/docs/integration"
                  className="px-3 py-2 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-50"
                >
                  Integration Guide
                </Link>
                <Link
                  href="/docs/api-reference"
                  className="px-3 py-2 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-50"
                >
                  API Reference
                </Link>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Introduction to BMAD Method</h1>

            <div className="prose max-w-none">
              <p className="lead">
                The BMAD Method (Breakthrough Method Agile-AI Driven-Development) is a comprehensive approach to
                integrate AI agents into your agile development process.
              </p>

              <h2>What is the BMAD Method?</h2>
              <p>
                This method outlines how to create and pair with Custom Agile Persona Agents to follow the Breakthrough
                Method Agile-AI Driven-Development (B.M.A.D. Method). It's designed to enhance developer productivity by
                leveraging AI agents as specialized team members.
              </p>

              <h2>Key Components</h2>
              <ul>
                <li>
                  <strong>Custom AI Personas</strong>: Create specialized AI agents tailored to your project needs
                </li>
                <li>
                  <strong>Agile Integration</strong>: Seamlessly integrate AI agents into your existing agile workflow
                </li>
                <li>
                  <strong>IDE Compatibility</strong>: Works with any IDE, with specialized support for Cursor
                </li>
                <li>
                  <strong>Development Workflow</strong>: Structured approach to AI-assisted development
                </li>
              </ul>

              <h2>Getting Started</h2>
              <p>To get started with the BMAD Method, you'll need to:</p>
              <ol>
                <li>Clone the GitHub repository</li>
                <li>Understand the project structure</li>
                <li>Set up your environment variables</li>
                <li>Run the frontend and backend locally</li>
                <li>Create your first AI persona</li>
              </ol>

              <div className="flex flex-col gap-4 p-6 my-8 border rounded-lg bg-slate-50 sm:flex-row sm:items-center">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-purple-600 rounded-full">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Pro Tip</h3>
                  <p className="text-sm text-slate-600">
                    Start with a simple AI persona that handles a specific task in your workflow, then gradually expand
                    to more complex personas as you become familiar with the method.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Book className="w-4 h-4 mr-2" />
                Continue Reading
              </Button>
              <Button variant="outline">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
