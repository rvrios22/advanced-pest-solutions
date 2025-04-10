import QuoteButton from '../QuoteButton'
import { Link } from '@tanstack/react-router'
function Navbar() {
  return (
    <nav>
      <div>
        <Link to='/'>APS</Link>
      </div>
      <div className='nav-item-right'>
        <p className="general-text">
          <Link to='/pests'>Pest Library</Link>
        </p>
        <QuoteButton />
      </div>
    </nav>
  )
}

export default Navbar