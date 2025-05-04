import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PersonaDefinition } from '@/lib/bmad/persona-definitions';

interface PersonaDefinitionViewProps {
  personaDefinition: PersonaDefinition;
}

export function PersonaDefinitionView({ personaDefinition }: PersonaDefinitionViewProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className={`bg-${personaDefinition.color}-50 border-b`}>
        <CardTitle className="flex items-center space-x-2">
          <span className={`text-${personaDefinition.color}-600`}>
            {personaDefinition.shortCode}
          </span>
          <span>{personaDefinition.role} - Full Definition</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ScrollArea className="h-[calc(100vh-12rem)] p-6">
          <ReactMarkdown className="prose max-w-none">{personaDefinition.fullDefinition}</ReactMarkdown>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default PersonaDefinitionView; 