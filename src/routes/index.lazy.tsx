import { createLazyFileRoute } from '@tanstack/react-router'
import Landing from '../components/Landing'
import About from '../components/About'
import Services from '../components/Services'
import Pests from '../components/Pests'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Landing />
      <About />
      <Services />
      <Pests />
    </>
  )
}
