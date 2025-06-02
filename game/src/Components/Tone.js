
const Tone = (props) => 
{
    const tones = [
        {
            "tone": "/assets/DollParts/Tones/Tone1.PNG",
            "body": "/assets/DollParts/Body/Skin1.PNG"
        },
        {
            "tone": "/assets/DollParts/Tones/Tone2.PNG",
            "body": "/assets/DollParts/Body/Skin2.PNG"
        },
        {
            "tone": "/assets/DollParts/Tones/Tone3.PNG",
            "body": "/assets/DollParts/Body/Skin3.PNG"
        },
        {
            "tone": "/assets/DollParts/Tones/Tone4.PNG",
            "body": "/assets/DollParts/Body/Skin4.PNG"
        },
        {
            "tone": "/assets/DollParts/Tones/Tone5.PNG",
            "body": "/assets/DollParts/Body/Skin5.PNG"
        },
        {
            "tone": "/assets/DollParts/Tones/Tone6.PNG",
            "body": "/assets/DollParts/Body/Skin6.PNG"
        },
        {
            "tone": "/assets/DollParts/Tones/Tone7.PNG",
            "body": "/assets/DollParts/Body/Skin7.PNG"
        },
        {
            "tone": "/assets/DollParts/Tones/Tone8.PNG",
            "body": "/assets/DollParts/Body/Skin8.PNG"
        },
        {
            "tone": "/assets/DollParts/Tones/Tone9.PNG",
            "body": "/assets/DollParts/Body/Skin9.PNG"
        },
        {
            "tone": "/assets/DollParts/Tones/Tone10.PNG",
            "body": "/assets/DollParts/Body/Skin10.PNG"
        },
    ]

    const saveChange = (body) =>
    {
        props.callback("body", body);
    }

    return(
        <div className="Tone-Option">
            {tones.map((tone, i) => {
                return (<div className="Tone-Image" key={i}><img className="Tones" src={tone.tone} alt={tone.tone} key={i} onClick={() => saveChange(tone.body)} ></img></div>)
            })}
        </div>
    )
}

export default Tone