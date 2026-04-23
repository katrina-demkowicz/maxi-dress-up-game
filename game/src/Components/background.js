const Background = (props) => 
{

    const background = [
        "assets/DollParts/Backgrounds/BgAdrian.PNG",
        "assets/DollParts/Backgrounds/BgAmar.PNG",
        "assets/DollParts/Backgrounds/BgAyumi.PNG",
        "assets/DollParts/Backgrounds/BgBlaire.PNG",
        "assets/DollParts/Backgrounds/BgBrandon.PNG",
        "assets/DollParts/Backgrounds/BgDamian.PNG",
        "assets/DollParts/Backgrounds/BgDante.PNG",
        "assets/DollParts/Backgrounds/BgDolores.PNG",
        "assets/DollParts/Backgrounds/BgGabriel.PNG",
        "assets/DollParts/Backgrounds/BgHaru.PNG",
        "assets/DollParts/Backgrounds/BgHestia.PNG",
        "assets/DollParts/Backgrounds/BgImogen.PNG",
        "assets/DollParts/Backgrounds/BgJamie.PNG",
        "assets/DollParts/Backgrounds/BgKeiko.PNG",
        "assets/DollParts/Backgrounds/BgLacramioara.PNG",
        "assets/DollParts/Backgrounds/BgLavender.PNG",
        "assets/DollParts/Backgrounds/BgLydia.PNG",
        "assets/DollParts/Backgrounds/BgMagdalena.PNG",
        "assets/DollParts/Backgrounds/BgNevada.PNG",
        "assets/DollParts/Backgrounds/BgOrion.PNG",
        "assets/DollParts/Backgrounds/BgPetru.PNG",
        "assets/DollParts/Backgrounds/BgReza.PNG",
        "assets/DollParts/Backgrounds/BgShinta.PNG",
        "assets/DollParts/Backgrounds/BgSiim.PNG",
        "assets/DollParts/Backgrounds/BgSoda.PNG",
        "assets/DollParts/Backgrounds/BgSonya.PNG",
        "assets/DollParts/Backgrounds/BgUna.PNG",
        "assets/DollParts/Backgrounds/BgVera.PNG",
        "assets/DollParts/Backgrounds/BgWilfred.PNG"
    ]

    const saveChange = (background) =>
    {
        props.callback("background", background);
    }

    const remove = () =>
    {
        props.callback("background", "")
    }

    return(
        <div className='Background-Option'>
            {background.map((background, i) => {
                return (<div className='Background-Image' key={i}><img className='Background' src={background} alt={background} key={i} onClick={() => saveChange(background)} ></img></div>)
            })}
            <div className='Background-Image'><img className='RemoveBackground'  src={"assets/UI_elements/black_x.png"} alt={"remove background"} onClick={remove} ></img></div>
        </div>
    )
}

export default Background