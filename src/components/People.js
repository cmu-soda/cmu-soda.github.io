import React from 'react'

import Profile from 'gadgets/Profile'
import 'custom-css/people.css'
import { Row, Col, Container } from 'react-bootstrap'
import eunsuk from 'images/people/eunsuk-kang.png'

export default function People() {
    return (

        <Container>
            <br />
            <h2>Faculty</h2>
            <br />

            <Row>
                {/* image file must be under images/people/ folder */}
                <Profile name="Eunsuk Kang" title="Principle Investigator" src='eunsuk-kang.png' />
                <Profile name="David Garlan" title="Co-Investigator" src='david-garlan.png' />
                <Profile name="Rohan Padhye" title="Co-Investigator" src='rohan-padhye.png' />
                <Profile name="Gabriel Moreno" title="Co-Investigator" src='gabriel-moreno.png' />
            </Row>


            <hr />
            <h2>Students</h2>
            <br />

            <Row>
                <Profile name="" title="" src='.png' />
                <Profile name="" title="" src='.png' />
                <Profile name="" title="" src='.png' />
                <Profile name="" title="" src='.png' />
            </Row>

            <Row>
                <Profile name="Rômulo Meira Goes" title="Postdoctoral Student" src='romulo-goes.png' />
                <Profile name="Simon Chu" title="PhD Student" src='simon-chu.png' />
                <Profile name="Benjamin Gafford" title="PhD Student" src='ben-gafford.png' />
                <Profile name="Parv Kapoor" title="PhD Student" src='parv-kapoor.png' />
            </Row>

            <Row>
                <Profile name="Changjian Zhang" title="PhD Student" src='changjian-zhang.png' />
                <Profile name="Emma Shedden" title="Research Assistant" src='emma-shedden.png' />
                <Profile name="" title="" src='.png' />
                <Profile name="" title="" src='.png' />
            </Row>

            <hr />
            <h2>Alumni</h2>
            <br />

            <Row>
                <Profile name="Tarang Saluja" title="Research Assistant" src='tarang-saluja.png' />
                <Profile name="Paul Smith" title="Research Assistant" src='paul-smith.png' />
                <Profile name="Lucy Wang" title="Research Assistant" src='lucy-wang.png' />
                <Profile name="" title="" src='.png' />
            </Row>
            <Profile name="" title="" src='.png' />




        </Container >
    )
}
