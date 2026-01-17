"use client"

import { Badge } from "@unicorn-ui/ui"

export interface PropItem {
  name: string
  type: string
  default?: string
  required?: boolean
  description: string
}

interface PropsTableProps {
  data: PropItem[]
}

export function PropsTable({ data }: PropsTableProps) {
  return (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-border">
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="border-b border-border bg-surface-elevated">
            <th className="px-4 py-3 text-left font-semibold">Prop</th>
            <th className="px-4 py-3 text-left font-semibold">Type</th>
            <th className="px-4 py-3 text-left font-semibold">Default</th>
            <th className="px-4 py-3 text-left font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((prop, index) => (
            <tr
              key={index}
              className="border-b border-border last:border-0 hover:bg-surface-elevated/50 transition-colors"
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <code className="rounded bg-surface-elevated px-2 py-1 text-xs font-mono">
                    {prop.name}
                  </code>
                  {prop.required && (
                    <Badge variant="destructive" className="text-[10px] px-1.5 py-0">
                      required
                    </Badge>
                  )}
                </div>
              </td>
              <td className="px-4 py-3">
                <code className="text-xs font-mono text-brand">{prop.type}</code>
              </td>
              <td className="px-4 py-3">
                {prop.default ? (
                  <code className="rounded bg-surface-elevated px-2 py-1 text-xs font-mono">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-foreground-secondary">-</span>
                )}
              </td>
              <td className="px-4 py-3 text-foreground-secondary">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
