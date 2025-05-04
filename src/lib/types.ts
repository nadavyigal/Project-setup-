export interface Project {
  id: string
  name: string
  description: string
  status: "draft" | "planning" | "active" | "completed"
  progress: number
  currentStep: number
  lastUpdated: string
  team: {
    name: string
    role: string
    initials: string
  }[]
  // New fields for refined idea
  targetAudience?: string
  painPoints?: string
  uniqueValue?: string
  marketSize?: string
  competition?: string
  feasibility?: string
}
