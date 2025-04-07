import { createLazyFileRoute } from '@tanstack/react-router'
import Landing from '../components/index/Landing'
import About from '../components/index/About'
import Services from '../components/index/Services'
import Pests from '../components/index/Pests'

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
