import React, { PureComponent } from 'react'
import { LightBulb } from '../canvas'

class Hero extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <section>
                <LightBulb />
            </section>
        )
    }
}

export default Hero