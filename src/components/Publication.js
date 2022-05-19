import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Paper from 'gadgets/Paper'

export default function Publication() {
  const myString = '@inproceedings{ShypulaSuperoptimization2022,\
    author = \{Shypula, Alexander G. and Yin, Pengcheng and Lacomis, Jeremy and {Le~Goues}, Claire and Schwartz, Edward J. and Neubig, Graham},\
    title = \{Learning to Superoptimize Real-World Programs\},\
    booktitle = \{Deep Learning for Code Workshop\},\
    year = {2022},\
    series = \{DL4C \'22\}\
  \}'
  return (
    <Container>
      <br />
      <h2>2021</h2>
      <br />

      <Paper title="AlloyMax: Bringing Maximum Satisfaction to Relational Specifications" conf="FSE" pdfSrc="zhang21.pdf"/>

      <br />
      <h2>2020</h2>
      <br />

      <Paper title="A Behavior Notion of Robustness for Software Systems" conf="FSE" pdfSrc="zhang20.pdf" />
      <Paper title="Synthesis-Based Resolution of Feature Interactions in Cyber-Physical Systems" conf="ASE" pdfSrc="gafford20.pdf" />

    </Container>
  )
}
