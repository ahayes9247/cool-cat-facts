import { Container, Navbar } from 'react-bootstrap';

function BrandNavbar() {
  return (
    <>
      <Navbar bg="light" id="navbar">
        <Container>
          <Navbar.Brand href="/" id="navbar-logo">Cool Cat Facts</Navbar.Brand>
        </Container>
      </Navbar>

    </>
  );
}

export default BrandNavbar;