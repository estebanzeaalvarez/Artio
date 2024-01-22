import React from "react";

export default class LanzamientosPagina extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lanzamientos: null,
        };
    }

    componentDidMount() {
        fetch("https://musicbrainz.org/ws/2/release/81242780-a696-4a69-bdff-8315ce68d65b?inc=aliases%2Bartist-credits%2Blabels%2Bdiscids%2Brecordings&fmt=json")
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                this.setState({
                    lanzamientos: result.media[0].tracks.map((track) => ({
                        title: track.title,
                        date: result.date,
                    })),
                });
            });
    }

    render() {
        return (
            <div style={{ textAlign: "center", margin: "20px" }}>
                {this.state.lanzamientos ? (
                    this.state.lanzamientos.map((lanzamiento, index) => (
                        <p key={index}>{lanzamiento.title} ({lanzamiento.date})</p>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    }
}
