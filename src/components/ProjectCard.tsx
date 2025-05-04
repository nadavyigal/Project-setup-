'use client';

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  status: "Active" | "Planning" | "Draft";
  progress: number;
  updatedAt: string;
  tags: Array<{
    code: string;
    color: string;
  }>;
  step: string;
}

export function ProjectCard({
  title,
  description,
  status,
  progress,
  updatedAt,
  tags,
  step,
}: ProjectCardProps) {
  const statusColors = {
    Active: "bg-purple-100 text-purple-700",
    Planning: "bg-orange-100 text-orange-700",
    Draft: "bg-gray-100 text-gray-700",
  };

  return (
    <Link href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className={cn("px-2 py-1 rounded-full text-xs font-medium", statusColors[status])}>
              {status}
            </span>
          </div>
          <span className="text-sm text-gray-500">Updated {updatedAt}</span>
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="space-y-4">
          <div className="flex items-center gap-1">
            {tags.map((tag) => (
              <div
                key={tag.code}
                className={cn("px-2 py-0.5 rounded text-xs font-medium", tag.color)}
              >
                {tag.code}
              </div>
            ))}
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-xs text-gray-500">
              Step {step}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 