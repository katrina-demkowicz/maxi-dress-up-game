import { useState } from 'react';
import Eyes from './Eyes';
import Nose from './Nose';
import Lip from './Lip';
import Brow from './Brows';
import FaceDetail from './FaceDetail';
import Tone from './Tone';
import SelectionButton from './SelectionButtons';
import Dress from './Dress';
import Hair from './Hair';
import Shoe from './Shoe';
import Glasses from './Glasses';
import Credits from './Credits';
import Background from './Background';

const Selection = (props) =>
{
    const buttons = {        
        "Face": "assets/UI_elements/navigationButtons/faceButton.png",
        "Hair": "assets/UI_elements/navigationButtons/hairButton.png",
        "Dresses": "assets/UI_elements/navigationButtons/dressButton.png",
        "Shoes": "assets/UI_elements/navigationButtons/shoeButton.png",
        "Glasses": "assets/UI_elements/navigationButtons/glassesButton.png",
        "Necklaces": "assets/UI_elements/navigationButtons/necklaceButton.png",
        "Gloves": "assets/UI_elements/navigationButtons/gloveButton.png",
        "Background": "assets/UI_elements/navigationButtons/backgroundButton.png"
    }

    const [selection, setSelection] = useState("Face")

    const updateCharacter = (prop, asset) => {
        props.callback(prop, asset)
    }

    const updateSelection = (buttonName) =>
    {
        setSelection(buttonName)
    }

    return(
        <div className='Item-Option'>
            <div className='Selection-Button-Container'>
                {Object.entries(buttons).map(([buttonName, filepath]) => {
                    return (<SelectionButton name={buttonName} source={filepath} callback={() => updateSelection(buttonName)} />)
                })}
            </div>
            {selection === "Face" && 
                <div className='Face-Selection-Container'>
                    <Brow callback={updateCharacter}/>
                    <Eyes callback={updateCharacter}/>
                    <Nose callback={updateCharacter}/>
                    <Lip callback={updateCharacter}/>
                    <FaceDetail callback={updateCharacter}/>
                    <Tone callback={updateCharacter}/>
                </div>
            }
            {selection === "Hair" && 
                <div>
                    <Hair callback={updateCharacter}/>
                </div>
            }
            {selection === "Dresses" && 
                <div>
                    <Dress callback={updateCharacter}/>
                </div>
            }
            {selection === "Shoes" &&
                <div>
                    <Shoe callback={updateCharacter}/>
                </div>
            }
            {selection === "Glasses" &&
                <div>
                    <Glasses callback={updateCharacter}/>
                </div>
            }
            {selection === "Background" &&
                <div>
                    <Background callback={updateCharacter}/>
                </div>
            }
            {selection === "Credits" &&
                <div>
                    <Credits/>
                </div>
            }
        </div>
    )
}

export default Selection