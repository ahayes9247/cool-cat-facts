import { Container, Navbar } from 'react-bootstrap';

function BrandNavbar() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">Cool Cat Facts</Navbar.Brand>
        </Container>
      </Navbar>

    </>
  );
}

export default BrandNavbar;