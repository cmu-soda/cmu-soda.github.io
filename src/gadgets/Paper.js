// store a single publication
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Paper({ title, conf, pdfSrc }) {
    return (
        <>
            <Row className="justify-content-md-left">
                <Col md="2">{conf}</Col>
                <Col md="10">{title}</Col>
            </Row>
            <Row className="justify-content-md-left">
                <Col md="2"></Col>
                <Col md="10">
                    {/* remember to require the resources for PDFs */}
                    <a href={require('assets/pdfs/' + pdfSrc)}>PDF</a>
                </Col>
            </Row>
        </>
    )
}
