import React from 'react'
import { Carousel, Container, Button } from 'react-bootstrap'
import placeholder from 'images/placeholder/sample_800x400.jpeg'

import pic1 from 'images/web/2021-team-outing.jpg'
import pic2 from 'images/web/2021-christmas-party.jpg'
import pic3 from 'images/web/2019-REU.jpg'

export default function Slideshow() {
  return (
    <Carousel>
      {/* <Carousel variant="dark"> */}
      <Carousel.Item>
        {/* 16:9 aspect ratio */}
        {/* https://redketchup.io/image-resizer */}
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Better together</h5>
          <p>At SoDA, we believe in deep collaboration, which allow us to innovate in a way that others cannot.</p>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Have fun... lots of it</h5>
          <p>We believe fun should be part of everything we do.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>REUSE Program</h5>
          <p>Every year, we welcome research interns to SoDA lab through the REUSE program</p>
          <p>
          <Button href="https://www.cmu.edu/scs/isr/reuse/" variant="primary" size="lg">
            Learn more
          </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}
