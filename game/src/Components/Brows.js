
const Brow = (props) => 
{

    const brows = [
        "/assets/DollParts/Eyebrows/BrowsAdrian.PNG",
        "/assets/DollParts/Eyebrows/BrowsCelesta.PNG",
        "/assets/DollParts/Eyebrows/BrowsDolores.PNG",
        "/assets/DollParts/Eyebrows/BrowsImogen.PNG",
        "/assets/DollParts/Eyebrows/BrowsLacramioara.PNG",
        "/assets/DollParts/Eyebrows/BrowsLakshmi.PNG",
        "/assets/DollParts/Eyebrows/BrowsLydia.PNG"
    ]

    const saveChange = (brow) =>
    {
        props.callback("brows", brow);
    }

    return(
        <div className="Brow-Option">
            {brows.map((brow, i) => {
                return (<div className='Image' key={i}><img className="Brows" src={brow} alt={brow} key={i} onClick={() => saveChange(brow)} ></img></div>)
            })}
        </div>
    )
}

export default Brow