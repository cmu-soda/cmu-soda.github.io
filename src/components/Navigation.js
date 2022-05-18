import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Navigation() {
  return (
      <>
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/">SoDA</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/people">People</Nav.Link>
          <Nav.Link href="/research">Research</Nav.Link>
          <Nav.Link href="/publication">Publication</Nav.Link>
        </Nav>
        </Container>
  </Navbar>
    </>
  )
}
