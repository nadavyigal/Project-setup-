/**
 * Utility functions for working with personas in the BMAD-METHOD system
 */

import { personaDefinitions, PersonaDefinition } from './persona-definitions';

/**
 * Get a persona definition by ID
 * @param id The persona ID (e.g., 'ba', 'pm')
 * @returns The persona definition or undefined if not found
 */
export function getPersonaDefinition(id: string): PersonaDefinition | undefined {
  return personaDefinitions[id];
}

/**
 * Check if a persona has a full definition
 * @param id The persona ID (e.g., 'ba', 'pm')
 * @returns True if the persona has a full definition
 */
export function hasFullDefinition(id: string): boolean {
  return personaDefinitions[id] !== undefined;
}

/**
 * Get all persona IDs that have full definitions
 * @returns Array of persona IDs with full definitions
 */
export function getPersonasWithDefinitions(): string[] {
  return Object.keys(personaDefinitions);
}

/**
 * Get a specific section from a persona definition
 * @param id The persona ID
 * @param sectionTitle The section title to extract (e.g., 'Core Capabilities & Goal')
 * @returns The section content or undefined if not found
 */
export function getPersonaDefinitionSection(id: string, sectionTitle: string): string | undefined {
  const definition = personaDefinitions[id];
  if (!definition) return undefined;
  
  const fullDef = definition.fullDefinition;
  const sectionRegex = new RegExp(`# ${sectionTitle}([\\s\\S]*?)(?=# |$)`, 'i');
  const match = fullDef.match(sectionRegex);
  
  return match ? match[1].trim() : undefined;
}

/**
 * Get summary information for all defined personas
 * @returns Array of simplified persona objects
 */
export function getAllPersonaSummaries(): Array<{
  id: string;
  name: string;
  role: string;
  shortCode: string;
  color: string;
  description: string;
}> {
  return Object.values(personaDefinitions).map(persona => ({
    id: persona.id,
    name: persona.name,
    role: persona.role,
    shortCode: persona.shortCode,
    color: persona.color,
    description: persona.description,
  }));
} 