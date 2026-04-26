const Gloves = (props) =>
{

    const gloves = [
        [
            "assets/DollParts/Arm_Accessories/ArmWarmerBlack.PNG",
            "assets/DollParts/Arm_Accessories/ArmWarmerBlue.PNG",
        ],
        [
            "assets/DollParts/Arm_Accessories/ArmWarmerGreen.PNG",
            "assets/DollParts/Arm_Accessories/ArmWarmerPurple.PNG",
            "assets/DollParts/Arm_Accessories/ArmWarmerSheer.PNG",
            "assets/DollParts/Arm_Accessories/GlovesBlack.PNG",
            "assets/DollParts/Arm_Accessories/GlovesSheer.PNG",
            "assets/DollParts/Arm_Accessories/GlovesWhite.PNG"
        ],
        [
            "assets/DollParts/Arm_Accessories/FurSleevesBlack.PNG",
            "assets/DollParts/Arm_Accessories/FurSleevesBrown.PNG",
            "assets/DollParts/Arm_Accessories/FurSleevesWhite.PNG"
        ]
    ]

    const saveChange = (gloves) =>
    {
        props.callback("gloves", gloves);
    }

    const remove = () =>
    {
        props.callback("gloves", "")
    }

    return(
        <div className='Gloves-Option'>
            {gloves[0].map((gloves, i) => {
                return (<div className='Gloves-Image' key={i}><img className='Gloves' src={gloves} alt={gloves} key={i} onClick={() => saveChange(gloves)} ></img></div>)
            })}
            <div className='Gloves-Image'><img className='RemoveGloves'  src={"assets/UI_elements/black_x.png"} alt={"remove necklace"} onClick={remove} ></img></div>
            {gloves[1].map((gloves, i) => {
                return (<div className='Gloves-Image' key={i}><img className='Gloves' src={gloves} alt={gloves} key={i} onClick={() => saveChange(gloves)} ></img></div>)
            })}
            {gloves[2].map((gloves, i) => {
                return (<div className='Gloves-Image' key={i}><img className='Long-Gloves' src={gloves} alt={gloves} key={i} onClick={() => saveChange(gloves)} ></img></div>)
            })}
        </div>
        
    )
}

export default Gloves;