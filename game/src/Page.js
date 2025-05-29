import { useState } from 'react'
import "./DollStyle.css";
import Eyes from './Eyes';

function Page()
{

    const [doll, setDoll]= useState({
        "body": "./assets/DollParts/Body/Skin5.PNG",
        "eyes": "./assets/DollParts/Eyes/EyesKimiko.PNG",
        "brows": "./assets/DollParts/Eyebrows/BrowsLydia.PNG",
        "nose": "./assets/DollParts/Noses/NoseKimiko.PNG",
        "lips": "./assets/DollParts/Lips/Lipsbrown.PNG",
        "faceDetails": "",
        "glasses": "",
        "necklace": "",
        "dress": "./assets/DollParts/Dresses/Dressstarter.PNG",
        "shoes": "",
        "hair": "./assets/DollParts/Hair/TheThelma/ThelmaGinger.PNG"
    });

    //update to useState
    // const updateCharacter = (prop, asset) =>
    // {
    //     this.setState(prevState => ({
    //         dollData: {
    //             ...prevState.dollData,
    //             [prop]: asset
    //         }
    //     }));
    // }

    // componentDidUpdate(prevState) {
    //     if (this.state.dollData !== prevState.dollData) {
    //         this.setState({dollData: this.state.dollData});
    //     }
    // }


    if (doll === null || doll === "")
    {
        return(<div><p>no data to render</p></div>)
    }
    else {
        return(
            <div>
                <p>hello.</p>
                <img className="Doll" src={require(`${doll.body}`)} alt="body" />
                <img className="Doll" src={require(`${doll.dress}`)} alt="dress" />
                <img className="Doll" src={require(`${doll.eyes}`)} alt="eyes" />
                <img className="Doll" src={require(`${doll.brows}`)} alt="brows" />
                <img className="Doll" src={require(`${doll.nose}`)} alt="nose" />
                <img className="Doll" src={require(`${doll.lips}`)} alt="lips" />
                <img className="Doll" src={require(`${doll.hair}`)} alt="hair" />
                {/* empty string attributes */}
                {doll.faceDetails != "" &&
                    <img className="Doll" src={require(`${doll.faceDetails}`)} alt="face details" />
                }
                {doll.glasses != "" &&
                    <img className="Doll" src={require(`${doll.glasses}`)} alt="glasses" />
                }
                {doll.necklace != "" &&
                    <img className="Doll" src={require(`${doll.necklace}`)} alt="necklace" />
                }
                {doll.shoes != "" &&
                    <img className="Doll" src={require(`${doll.shoes}`)} alt="shoes" />
                }
                {/* callback={this.updateCharacter} */}
                <Eyes />
            </div>
        )
    }
}

export default Page;