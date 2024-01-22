import React from "react"
import Artista from '../componentes/Artista'

export default class InicioPagina extends React.Component {

    render() {
        return(
            <>
                <h2>Inicio</h2>
                <p>Bienvenidos a Mi pagina de artistas Aquí encontrarás reseñas apasionadas sobre artistas que han dejado huella en la música. Desde leyendas consagradas hasta nuevas promesas, descubre conmigo el universo emocionante de estos talentos que me inspiran.</p>

                <Artista 
                nombre="Canserbero" 
                img="/img/Canserbero.jpg"
                descripcion="Canserbero fue un rapero venezolano conocido por su música intensamente lírica y sus letras profundas que exploraban temas sociales y emocionales. Aunque su vida terminó trágicamente en 2015, su legado perdura a través de su impactante obra musical."/>
            
                <Artista 
                nombre="Asap Rocky"
                img="/img/Asap.jpg"
                descripcion="ASAP Rocky, rapero innovador y figura clave en la cultura contemporánea, fusiona moda y música con estilo único. Su impacto en la escena del hip-hop se refleja en su música creativa y colaboraciones destacadas, además de su influencia en la moda y el arte visual."/>
                
                <Artista 
                nombre="Craneo" 
                img="/img/Craneo.jpg"
                descripcion="Craneo, Su estilo único fusiona ritmos urbanos con letras cautivadoras, creando canciones que resuenan con autenticidad y frescura. Con un enfoque distintivo en sus letras y un sonido que mezcla diversos géneros, Craneo ha logrado destacarse en la escena musical contemporánea."/>
            </>

        )
    }
}