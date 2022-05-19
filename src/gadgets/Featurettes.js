import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

// import feature1 from 'images/web/icon/reasoning.png'
import feature1 from 'images/web/featurettes/alloytool.png'
import feature2 from 'images/web/featurettes/drone.png'
import feature3 from 'images/web/featurettes/robustness.png'

export default function Featurettes() {
    return (
        <>
            <hr className="featurette-divider" />
            <Row className="featurette">
                <Col md="7">
                    <h2 className="featurette-heading"> <a href="https://eskang.github.io/assets/papers/fse21_alloy_max.pdf">AlloyMax: <span class="text-muted">Bringing Maximum Satisfaction to Relational Specifications</span> </a></h2>
                    <p className="lead">Latest publication by CJ, et al.</p>
                </Col>

                <Col md="5">
                    <Image className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={feature1} />
                    {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}

                </Col>
            </Row>



            <hr className="featurette-divider" />
            <Row className="featurette">
                <Col md="7" className="order-md-2">
                    <h2 className="featurette-heading"> <a href="https://eskang.github.io/assets/papers/ase20-feature-interactions.pdf">Synthesis-based Resolution of <span class="text-muted">Feature Interactions</span> in Cyber-Physical Systems</a></h2>
                    <p className="lead">Latest publication by Benjamin Gafford, et al.</p>
                </Col>

                <Col md="5" className="order-md-1">
                {/* <div class="col-md-5 order-md-1"> */}
                    <Image className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={feature2} />
                    {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                {/* </div> */}
                </Col>
            </Row>




            <hr className="featurette-divider" />
            <Row className="featurette">
                <Col md="7">
                    <h2 className="featurette-heading"><a href="https://eskang.github.io/assets/papers/fse20-robustness.pdf">A <span class="text-muted">Behavioral Notion of Robustness</span> for Software Systems </a></h2>
                    <p className="lead">publication by CJ, David Garlan, and Eunsuk Kang.</p>
                </Col>

                <Col md="5">
                    <Image className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={feature3} />
                </Col>
            </Row>

        </>
    )
}
