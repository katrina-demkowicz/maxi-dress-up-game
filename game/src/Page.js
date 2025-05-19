import { Component } from 'react';
import "./DollStyle.css";

class Page extends Component
{

    doll = {
        "body": "./assets/DollParts/Body/Skin5.PNG",
        "eyes": "./src/assets/DollParts/Eyes/EyesKimiko.PNG",
        "brows": "./src/assets/DollParts/Eyebrows/BrowsLydia.PNG",
        "nose": "./src/assets/DollParts/Noses/NoseKimiko.PNG",
        "lips": "./src/assets/DollParts/Lips/Lipsbrown.PNG",
        "faceDetails": "",
        "glasses": "",
        "necklace": "",
        "dress": "",
        "shoes": "",
        "hair": ""
    }

    constructor(props)
    {
        super(props);
        this.state = {
            dollData: this.doll
        };
    }

    render()
    {
        return(
            <div>
                <p>hello.</p>
                <img className="Doll" src={require(`${this.state.dollData.body}`)} alt="body" />
            </div>
        )
    }
}

export default Page;