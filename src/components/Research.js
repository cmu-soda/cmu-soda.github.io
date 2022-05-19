import React from 'react'

import { Card, Button, CardGroup, Container, Row, Col } from 'react-bootstrap'
// import pic from 'images/web/2021-team-outing.jpg'
import pic1 from 'images/pages/research/fi-cps.gif'
import Project from "gadgets/Project"

export default function Research() {
  return (
    <Container>
      <br />
      <h2>Research</h2>
      <br />

      <Row xs={1} md={3} className="g-4">
        <Project
          title="Feature Interaction Problem in Cyber-Physical Systems"
          intro="Check out our latest project tackling feature interaction problem using requirement weakening"
          author="Simon Chu"
          imageSrc="fi-cps.gif"
          pageSrc="feature-interaction" />

        <Project
          title="Safe Robotics "
          intro="Safety is crucial in robotics applications. Checkout my latest research on STL in robotics"
          author="Parv Kapoor"
          imageSrc="fi-cps.gif"
          pageSrc="feature-interaction" />
        {/* note that everytime a page is added, App.js must be adjusted to route the new page to the corresponding view */}
      </Row>

    </Container>
  )
}
