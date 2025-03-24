import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/quote')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/quote"!</div>
}
