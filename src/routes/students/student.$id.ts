import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/students/student/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /students/student/$id!'
}
