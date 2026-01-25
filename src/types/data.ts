export interface Destination {
    id: number
    name: string
    slug: string
    image: string
    description: string
    facts: string
    factsTable: FactsTable
    experiences: Experience[]
}
export interface Experience {
    name: string
    slug: string
    image: string
    population?: Record<string, string>
    description: string
}
export interface FactsTable {
    Capital: string
    Population: string
    Currency: string
    Language: string
    Region: string
}
export interface DestinationsData {
    destinations: Destination[]
}