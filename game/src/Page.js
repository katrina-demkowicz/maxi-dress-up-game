import { useState } from 'react'
import "./DollStyle.css";
import Eyes from './Components/Eyes';
import Nose from './Components/Nose';

function Page()
{

    const [doll, setDoll]= useState({
        "body": "/assets/DollParts/Body/Skin5.PNG",
        "eyes": "/assets/DollParts/Eyes/EyesKimiko.PNG",
        "brows": "/assets/DollParts/Eyebrows/BrowsLydia.PNG",
        "nose": "/assets/DollParts/Noses/NoseKimiko.PNG",
        "lips": "/assets/DollParts/Lips/Lipsbrown.PNG",
        "faceDetails": "",
        "necklace": "",
        "dress": "/assets/DollParts/Dresses/Dressstarter.PNG",
        "shoes": "",
        "hair": "/assets/DollParts/Hair/TheThelma/ThelmaGinger.PNG",
        "glasses": ""
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
                    <img className="Doll" src={doll.body} alt="body" />
                        <img className="Doll" src={doll.dress} alt="dress" />
                        <img className="Doll" src={doll.eyes} alt="eyes" />
                        <img className="Doll" src={doll.brows} alt="brows" />
                        <img className="Doll" src={doll.nose} alt="nose" />
                        <img className="Doll" src={doll.lips} alt="lips" />
                        <img className="Doll" src={doll.hair} alt="hair" />
                        {/* empty string attributes */}
                        {doll.faceDetails != "" &&
                            <img className="Doll" src={doll.faceDetails} alt="face details" />
                        }
                        {doll.glasses != "" &&
                            <img className="Doll" src={doll.glasses} alt="glasses" />
                        }
                        {doll.necklace != "" &&
                            <img className="Doll" src={doll.necklace} alt="necklace" />
                        }
                        {doll.shoes != "" &&
                            <img className="Doll" src={doll.shoes} alt="shoes" />
                        }
                </div>
                <div className='Item-Option'>
                    <Eyes callback={updateCharacter}/>
                    <Nose callback={updateCharacter}/>
                </div>
            </div>
        )
    }
}

export default Page;