
const Eyes = (props) =>
{
    const eyes = [
        "../assets/DollParts/Eyes/EyesCosmina.PNG",
        "../assets/DollParts/Eyes/EyesGyaru.PNG",
        "../assets/DollParts/Eyes/EyesImogen.PNG",
        "../assets/DollParts/Eyes/EyesKimiko.PNG",
        "../assets/DollParts/Eyes/EyesLacramioara.PNG",
        "../assets/DollParts/Eyes/EyesMargareta.PNG",
        "../assets/DollParts/Eyes/EyesSonya.PNG",
        "../assets/DollParts/Eyes/EyesTradgoth.PNG",
        "../assets/DollParts/Eyes/EyesUna.PNG"
    ]

    const saveChange = (eye) =>
    {
        props.callback("eyes", eye);
    }

    return(
        <div className="Item-Option">
            {/*The div tag is temporary, I would like to find a better solution to have the images next to 
            each other without there being space inbetween them.*/}
            {eyes.map((eye, i) => {
                return (<div className='Image'><img className="Eyes" src={require(`${eye}`)} alt={eye} key={i} onClick={() => saveChange(eye)} ></img></div>)
            })}
        </div>
    )
}

export default Eyes;