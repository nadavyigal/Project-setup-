import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/types"
import { Plus } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface PlanningViewProps {
  project: Project
}

export default function PlanningView({ project }: PlanningViewProps) {
  const backlogItems = [
    {
      id: "TASK-1",
      title: "Set up project repository",
      priority: "High",
      status: "Done",
      assignee: "AR",
    },
    {
      id: "TASK-2",
      title: "Create initial wireframes",
      priority: "High",
      status: "In Progress",
      assignee: "UX",
    },
    {
      id: "TASK-3",
      title: "Define MVP requirements",
      priority: "High",
      status: "In Progress",
      assignee: "PO",
    },
    {
      id: "TASK-4",
      title: "Market research analysis",
      priority: "Medium",
      status: "Done",
      assignee: "BA",
    },
    {
      id: "TASK-5",
      title: "Technical architecture document",
      priority: "Medium",
      status: "To Do",
      assignee: "AR",
    },
    {
      id: "TASK-6",
      title: "Sprint planning",
      priority: "Medium",
      status: "To Do",
      assignee: "SM",
    },
  ]

  return (
    <div className="flex flex-col h-full border-r">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-medium">Project Backlog</h2>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>
      <div className="flex-1 p-4 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Task</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Assignee</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {backlogItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>
                  <Badge variant={item.priority === "High" ? "destructive" : "secondary"}>{item.priority}</Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "Done" ? "outline" : item.status === "In Progress" ? "default" : "secondary"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end">
                    <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium">
                      {item.assignee}
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
