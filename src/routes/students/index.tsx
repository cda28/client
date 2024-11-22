import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/students/')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /students/!'
}
