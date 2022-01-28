import { Link } from 'react-router-dom'

function Header () {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Pokédex</Link>
          </li>
          <li>
            <h1>Test</h1>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
