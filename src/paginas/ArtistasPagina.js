import React from "react"
import ListaArtistas from "../componentes/ListaArtistas"

export default class ArtistasPagina extends React.Component {

    artistas = [
        {
            nombre: 'Canserbero',
            img: '/img/Canserbero.jpg'
        },
        {
            nombre: 'Asap Rocky',
            img: '/img/Asap.jpg'

        },
        {
            nombre: 'Craneo',
            img: '/img/Craneo.jpg'

        }
    ]

    render() {
        return(
            <>
                <h2> Artistas </h2>
                <ListaArtistas artistas={this.artistas} />            
            </>
        )
    }
}