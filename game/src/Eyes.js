import { Component } from "react";

class Eyes extends Component
{
    eyes = [
        "./assets/DollParts/Eyes/EyesCosmina.PNG",
        "./assets/DollParts/Eyes/EyesGyaru.PNG",
        "./assets/DollParts/Eyes/EyesImogen.PNG",
        "./assets/DollParts/Eyes/EyesKimiko.PNG",
        "./assets/DollParts/Eyes/EyesLacramioara.PNG",
        "./assets/DollParts/Eyes/EyesMargareta.PNG",
        "./assets/DollParts/Eyes/EyesSonya.PNG",
        "./assets/DollParts/Eyes/EyesTradgoth.PNG",
        "./assets/DollParts/Eyes/EyesUna.PNG"
    ]

    constructor(props)
    {
        super(props);
        this.state = {
            eyeData: this.eyes
        };
    }

    saveChange = (eye) =>
    {
        this.props.callback("eyes", eye);
    }

    render()
    {
        return(
            <div>
                {this.state.eyeData.map((eye, i) => {
                    return (
                        <button key={i} onClick={() => this.saveChange(eye)} ><img src={require(`${eye}`)} alt={eye}></img></button>
                    )
                })}
            </div>
        )
    }
}

export default Eyes;