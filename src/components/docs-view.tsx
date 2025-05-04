"use client"

import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/types"
import { Edit, Save } from "lucide-react"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"

interface DocsViewProps {
  title: string
  filePath: string
  project: Project
}

export default function DocsView({ title, filePath, project }: DocsViewProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(
    `# ${title} for ${project.name}\n\nThis document outlines the ${title.toLowerCase()} for the ${project.name} project.\n\n## Overview\n\n${project.description}\n\n## Details\n\n- Point 1\n- Point 2\n- Point 3`,
  )

  return (
    <div className="flex flex-col h-full border-r">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-medium">{title}</h2>
        <Button variant="ghost" size="sm" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save
            </>
          ) : (
            <>
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </>
          )}
        </Button>
      </div>
      <div className="flex-1 p-4 overflow-auto">
        {isEditing ? (
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[500px] font-mono text-sm"
          />
        ) : (
          <div className="prose max-w-none">
            {content.split("\n").map((line, i) => {
              if (line.startsWith("# ")) {
                return (
                  <h1 key={i} className="text-2xl font-bold mb-4">
                    {line.substring(2)}
                  </h1>
                )
              } else if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-xl font-semibold mt-6 mb-3">
                    {line.substring(3)}
                  </h2>
                )
              } else if (line.startsWith("- ")) {
                return (
                  <div key={i} className="flex items-baseline mb-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 mt-2" />
                    <p>{line.substring(2)}</p>
                  </div>
                )
              } else if (line === "") {
                return <div key={i} className="h-4" />
              } else {
                return (
                  <p key={i} className="mb-4">
                    {line}
                  </p>
                )
              }
            })}
          </div>
        )}
      </div>
    </div>
  )
}
