import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/pests/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pests/"!</div>
}
