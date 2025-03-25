import { createLazyFileRoute } from '@tanstack/react-router'
import Landing from '../components/Landing'
import About from '../components/About'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Landing />
      <About />
    </>
  )
}
