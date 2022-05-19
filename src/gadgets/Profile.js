import React from 'react'
import { Image } from 'react-bootstrap'

// profile for person
// hack: https://stackoverflow.com/questions/51506015/loading-imagesrequire-doesnt-work-using-string-variable
export default function Profile({ name, title, src }) {
    if (name && title && src) {
    return (
        <div class="column">
            <div class="card">
                <Image src={require('images/people/' + src)} />
                <div class="container">
                    <h3 class="typography-body block-link profile-name">
                        {name}
                    </h3>
                    <h4 class="typography-body typography-profile-title">
                        {title}
                    </h4>
                </div>
            </div>
        </div>
    )
    } else {
        return null
    }
}
