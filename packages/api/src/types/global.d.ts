type Dictionary<T> = Record<string, T>

interface JSON {
  parse<T>(text: string): T
}

type Security = Array<{
  [securityLabel: string]: string[]
}>
