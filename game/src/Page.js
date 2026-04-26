import { useState } from 'react'
import "./DollStyle.css";
import "./UIElementStyle.css";
import Selection from './Components/Selection';

function Page()
{

    const [doll, setDoll]= useState({
        "background": "",
        "body": "assets/DollParts/Body/Skin5.PNG",
        "eyes": "assets/DollParts/Eyes/EyesKimiko.PNG",
        "brows": "assets/DollParts/Eyebrows/BrowsLydia.PNG",
        "nose": "assets/DollParts/Noses/NoseKimiko.PNG",
        "lips": "assets/DollParts/Lips/Lipsbrown.PNG",
        "faceDetails": "",
        "necklace": "",
        "dress": "assets/DollParts/Dresses/Dressstarter.PNG",
        "shoes": "",
        "hair": "assets/DollParts/Hair/TheThelma/ThelmaGinger.PNG",
        "glasses": "",
        "gloves": ""
    });

    const updateCharacter = (prop, asset) =>
    {
        setDoll(
            {
                ...doll,
                [prop]: asset
            }
        )
    }

    if (doll === null || doll === "")
    {
        return(<div><p>no data to render</p></div>)
    }
    else {
        return(
            <div className='Game'>
                <div className='Doll-Container'>
                    {doll.background !== "" &&
                        <img className='Background-Container' src={doll.background} alt="background" />
                    }
                    <img className='Doll' src={doll.body} alt="body" />
                    {doll.shoes !== "" &&
                        <img className="Doll" src={doll.shoes} alt="shoes" />
                    }
                    {doll.gloves !== "" &&
                        <img className='Doll' src={doll.gloves} alt="gloves" />
                    } 
                    <img className='Doll' src={doll.dress} alt="dress" />
                    <img className='Doll' src={doll.eyes} alt="eyes" />
                    <img className='Doll' src={doll.brows} alt="brows" />
                    <img className='Doll' src={doll.nose} alt="nose" />
                    <img className='Doll' src={doll.lips} alt="lips" />
                    <img className='Doll' src={doll.hair} alt="hair" />
                    {/* empty string attributes */}
                    {doll.faceDetails !== "" &&
                        <img className='Doll' src={doll.faceDetails} alt="face details" />
                    }
                    {doll.necklace !== "" &&
                        <img className='Doll' src={doll.necklace} alt="necklace" />
                    } 
                    <img className='Doll' src={doll.hair} alt="hair" />
                    {doll.glasses !== "" &&
                        <img className='Doll' src={doll.glasses} alt="glasses" />
                    } 
                </div>
                <Selection callback={updateCharacter}/>
            </div>
        )
    }
}

export default Page;