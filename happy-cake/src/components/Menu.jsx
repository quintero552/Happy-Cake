import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='text-white nav-item nav-link active' to='./'>🏠 Home</Link>
            <Link className='text-white nav-item nav-link activ' to='contacto'>📒 Contacto</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className='text-white nav-item nav-link activ' href="/">Happy Cake 🍰</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Menu
