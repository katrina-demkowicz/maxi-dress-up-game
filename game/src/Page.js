import { Component } from 'react';
import "./DollStyle.css";
import Eyes from './Eyes';

class Page extends Component
{

    doll = {
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
    }

    constructor(props)
    {
        super(props);
        this.state = {
            dollData: this.doll
        };
    }

    updateCharacter = (prop) => (asset)=>
    {
        this.setState(prevState => ({
            dollData: {
                ...prevState.dollData,
                [prop]: asset
            }
        }));
    }

    componentDidUpdate(prevState) {
        if (this.state.dollData !== prevState.dollData) {
            this.setState({dollData: this.state.dollData});
        }
    }

    render()
    {
        if (this.state.dollData === null || this.state.dollData === "")
        {
            return(<div><p>no data to render</p></div>)
        }
        else {
        return(
            <div>
                <p>hello.</p>
                <img className="Doll" src={require(`${this.state.dollData.body}`)} alt="body" />
                <img className="Doll" src={require(`${this.state.dollData.dress}`)} alt="dress" />
                <img className="Doll" src={require(`${this.state.dollData.eyes}`)} alt="eyes" />
                <img className="Doll" src={require(`${this.state.dollData.brows}`)} alt="brows" />
                <img className="Doll" src={require(`${this.state.dollData.nose}`)} alt="nose" />
                <img className="Doll" src={require(`${this.state.dollData.lips}`)} alt="lips" />
                <img className="Doll" src={require(`${this.state.dollData.hair}`)} alt="hair" />
                {/* empty string attributes */}
                {this.state.dollData.faceDetails != "" &&
                    <img className="Doll" src={require(`${this.state.dollData.faceDetails}`)} alt="face details" />
                }
                {this.state.dollData.glasses != "" &&
                    <img className="Doll" src={require(`${this.state.dollData.glasses}`)} alt="glasses" />
                }
                {this.state.dollData.necklace != "" &&
                    <img className="Doll" src={require(`${this.state.dollData.necklace}`)} alt="necklace" />
                }
                {this.state.dollData.shoes != "" &&
                    <img className="Doll" src={require(`${this.state.dollData.shoes}`)} alt="shoes" />
                }
                <Eyes callback={this.updateCharacter}></Eyes>
            </div>
        )
    }
    }
}

export default Page;