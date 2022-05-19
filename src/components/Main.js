import React from 'react'

import 'custom-css/carousel.css'

import Slideshow from 'gadgets/Slideshow'
import Snapshot from 'gadgets/Snapshot'
import Featurettes from 'gadgets/Featurettes'

// https://getbootstrap.com/docs/4.0/examples/carousel/

export default function Main() {
    return (
        <>
            <Slideshow />
            <Snapshot />
            <Featurettes />

        </>
    )
}
