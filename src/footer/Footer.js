import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {

    render () {
        return (
            <div>
                footer component here
                <br />
                Aqui unos links o algo
                <a>Link here</a>

                <div className="bottomBar"> 
                    Contenedor, mas informacion aqui para probar el nuevo repo
                </div>
            </div>
        )
    }

}

export default Footer