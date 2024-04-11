import { Container } from 'react-bootstrap'

const Inicio = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <h1 style={{ height: '150px' }}>🎂</h1>
    </Container>
  )
}

export default Inicio
