const Glasses = (props) =>
{

    const glasses = [
        "assets/DollParts/Glasses/Glassesrectangleblack.PNG",
        "assets/DollParts/Glasses/Glassesrectangleblue.PNG",
        "assets/DollParts/Glasses/Glassesrectanglered.PNG",
        "assets/DollParts/Glasses/Glassesrectanglewhite.PNG",
        "assets/DollParts/Glasses/Glassesrectangleyellow.PNG",
        "assets/DollParts/Glasses/Glassesroundblack.PNG",
        "assets/DollParts/Glasses/Glassesroundblue.PNG",
        "assets/DollParts/Glasses/Glassesroundred.PNG",
        "assets/DollParts/Glasses/Glassesroundwhite.PNG",
        "assets/DollParts/Glasses/Glassesroundyellow.PNG"
    ]

    const saveChange = (glasses) =>
    {
        props.callback("glasses", glasses);
    }

    const remove = () =>
    {
        props.callback("glasses", "")
    }

    return(
        <div className='Glasses-Option'>
            {glasses.map((glasses, i) => {
                return (<div className='Glasses-Image' key={i}><img className='Glasses' src={glasses} alt={glasses} key={i} onClick={() => saveChange(glasses)} ></img></div>)
            })}
            <div className='FaceDetail-Image'><img className='RemoveGlasses'  src={"assets/UI_elements/black_x.png"} alt={"remove necklace"} onClick={remove} ></img></div>
        </div>
        
    )
}

export default Glasses;