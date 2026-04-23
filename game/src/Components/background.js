const Background = (props) => 
{

    const background = [
        ["assets/DollParts/Backgrounds/BgAdrian.PNG", "assets/UI_elements/BGIcons/BgAdrian.ico"],
        ["assets/DollParts/Backgrounds/BgAmar.PNG", "assets/UI_elements/BGIcons/BgAmar.ico"],
        ["assets/DollParts/Backgrounds/BgAyumi.PNG", "assets/UI_elements/BGIcons/BgAyumi.ico"],
        ["assets/DollParts/Backgrounds/BgBlaire.PNG", "assets/UI_elements/BGIcons/BgBlaire.ico"],
        ["assets/DollParts/Backgrounds/BgBrandon.PNG", "assets/UI_elements/BGIcons/BgBrandon.ico"],
        ["assets/DollParts/Backgrounds/BgDamian.PNG", "assets/UI_elements/BGIcons/BgDamian.ico"],
        ["assets/DollParts/Backgrounds/BgDante.PNG", "assets/UI_elements/BGIcons/BgDante.ico"],
        ["assets/DollParts/Backgrounds/BgDolores.PNG", "assets/UI_elements/BGIcons/BgDolores.ico"],
        ["assets/DollParts/Backgrounds/BgGabriel.PNG", "assets/UI_elements/BGIcons/BgGabriel.ico"],
        ["assets/DollParts/Backgrounds/BgHaru.PNG", "assets/UI_elements/BGIcons/BgHaru.ico"],
        ["assets/DollParts/Backgrounds/BgHestia.PNG", "assets/UI_elements/BGIcons/BgHestia.ico"],
        ["assets/DollParts/Backgrounds/BgImogen.PNG", "assets/UI_elements/BGIcons/BgImogen.ico"],
        ["assets/DollParts/Backgrounds/BgJamie.PNG", "assets/UI_elements/BGIcons/BgJamie.ico"],
        ["assets/DollParts/Backgrounds/BgKeiko.PNG", "assets/UI_elements/BGIcons/BgKeiko.ico"],
        ["assets/DollParts/Backgrounds/BgLacramioara.PNG", "assets/UI_elements/BGIcons/BgLacramioara.ico"],
        ["assets/DollParts/Backgrounds/BgLavender.PNG", "assets/UI_elements/BGIcons/BgLavender.ico"],
        ["assets/DollParts/Backgrounds/BgLydia.PNG", "assets/UI_elements/BGIcons/BgLydia.ico"],
        ["assets/DollParts/Backgrounds/BgMagdalena.PNG", "assets/UI_elements/BGIcons/BgMagdalena.ico"],
        ["assets/DollParts/Backgrounds/BgNevada.PNG", "assets/UI_elements/BGIcons/BgNevada.ico"],
        ["assets/DollParts/Backgrounds/BgOrion.PNG", "assets/UI_elements/BGIcons/BgOrion.ico"],
        ["assets/DollParts/Backgrounds/BgPetru.PNG", "assets/UI_elements/BGIcons/BgPetru.ico"],
        ["assets/DollParts/Backgrounds/BgReza.PNG", "assets/UI_elements/BGIcons/BgReza.ico"],
        ["assets/DollParts/Backgrounds/BgShinta.PNG", "assets/UI_elements/BGIcons/BgShinta.ico"],
        ["assets/DollParts/Backgrounds/BgSiim.PNG", "assets/UI_elements/BGIcons/BgSiim.ico"],
        ["assets/DollParts/Backgrounds/BgSoda.PNG", "assets/UI_elements/BGIcons/BgSoda.ico"],
        ["assets/DollParts/Backgrounds/BgSonya.PNG", "assets/UI_elements/BGIcons/BgSonya.ico"],
        ["assets/DollParts/Backgrounds/BgUna.PNG", "assets/UI_elements/BGIcons/BgUna.ico"],
        ["assets/DollParts/Backgrounds/BgVera.PNG", "assets/UI_elements/BGIcons/BgVera.ico"],
        ["assets/DollParts/Backgrounds/BgWilfred.PNG", "assets/UI_elements/BGIcons/BgWilfred.ico"]
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
                return (<div className='Background-Image' key={i}><img className='Background' src={background[1]} alt={background} key={i} onClick={() => saveChange(background[0])} ></img></div>)
            })}
            <div className='Background-Image'><img className='RemoveBackground'  src={"assets/UI_elements/black_x.png"} alt={"remove background"} onClick={remove} ></img></div>
        </div>
    )
}

export default Background