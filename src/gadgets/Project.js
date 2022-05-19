import React from 'react'
import { Card, Button, CardGroup, Container, Row, Col } from 'react-bootstrap'

export default function Project({ title, intro, author, imageSrc, pageSrc }) {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={require('images/pages/research/' + imageSrc)} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{intro}</Card.Text>
                    <Card.Text>{author}</Card.Text>
                    <Button variant="primary" href={"/#/research/" + pageSrc}>Learn more</Button>
                </Card.Body>
            </Card>

        </Col>
    )
}
