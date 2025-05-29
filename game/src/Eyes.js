
const Eyes = () =>
{
    const eyes = [
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

    // saveChange = (eye) =>
    // {
    //     this.props.callback("eyes", eye);
    // }

    return(
        <div>
            {eyes.map((eye, i) => {
                return (
                    <button key={i} onClick={() => this.saveChange(eye)} ><img src={require(`${eye}`)} alt={eye}></img></button>
                )
            })}
        </div>
    )
}

export default Eyes;