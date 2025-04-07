import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pests/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pests/$name"!</div>
}
