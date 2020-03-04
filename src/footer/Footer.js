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
                    Contenedor, mas informacion aqui para probar el nuevo repo.
                    vamos a hacer mas de un cambio aqui para ver como sincronizar desde otra computadora usando git. <br /> 

                    Aqui vamos a agreagar mas contenido para nuestro proyecto.
                </div>
            </div>
        )
    }
}

export default Footer