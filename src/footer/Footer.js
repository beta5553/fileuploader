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
                    Contenedor
                </div>
            </div>
        )
    }

}

export default Footer