import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

import icon1 from 'images/web/icon/reasoning.png'
import icon2 from 'images/web/icon/cps.png'
import icon3 from 'images/web/icon/swe.png'

export default function Snapshot() {
    return (
        <>
            {/* spacing */}
            {/* <div className='mt-5'></div> */}

            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="4">
                        <Image src={icon1} roundedCircle width="140" height="140" />
                        <h2>Formal Methods</h2>
                        <p>Formal methods, a mathematically rigorous technique for software design and analysis, is at the core of our group's research.</p>
                        <p><a class="btn btn-secondary" href="https://en.wikipedia.org/wiki/Formal_methods">View details &raquo;</a></p>
                    </Col>

                    <Col lg="4">
                        <Image src={icon2} roundedCircle width="140" height="140" />
                        <h2>Cyber-Physical Systems</h2>
                        <p>Self-driving cars, drones, robotics systems, IoT devices will soon be ubiquitous. Their trustworthiness is more important than ever. Our group focuses on new techniques on verifying CPS.</p>
                        <p><a class="btn btn-secondary" href="https://en.wikipedia.org/wiki/Cyber-physical_system">View details &raquo;</a></p>
                    </Col>

                    <Col lg="4">
                        <Image src={icon3} roundedCircle width="140" height="140" />
                        <h2>Software Engineering</h2>
                        <p>Our group aims at designing better processes and workflow to help software professionals to develop high-quality software systems.</p>
                        <p><a class="btn btn-secondary" href="https://en.wikipedia.org/wiki/Software_engineering">View details &raquo;</a></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
