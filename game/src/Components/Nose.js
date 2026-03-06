
const Nose = (props) => 
{

    const noses = [
        "/assets/DollParts/Noses/NoseBig.PNG",
        "/assets/DollParts/Noses/NoseButton.PNG",
        "/assets/DollParts/Noses/NoseGorillaz.PNG",
        "/assets/DollParts/Noses/NoseKimiko.PNG",
        "/assets/DollParts/Noses/NoseLakshmi.PNG",
        "/assets/DollParts/Noses/NoseLong.PNG",
        "/assets/DollParts/Noses/NoseLydia.PNG",
        "/assets/DollParts/Noses/NoseSmall.PNG",
        "/assets/DollParts/Noses/NoseSonya.PNG"
    ]

    const saveChange = (nose) =>
    {
        props.callback("nose", nose);
    }

    return(
        <div className="Nose-Option">
            {noses.map((nose, i) => {
                return (<div className='Image' key={i}><img className="Noses" src={nose} alt={nose} key={i} onClick={() => saveChange(nose)} ></img></div>)
            })}
        </div>
    )
}

export default Nose