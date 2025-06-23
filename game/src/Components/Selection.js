import { use, useState } from 'react';
import Eyes from './Eyes';
import Nose from './Nose';
import Lip from './Lip';
import Brow from './Brows';
import FaceDetail from './FaceDetail';
import Tone from './Tone';
import SelectionButton from './SelectionButtons';
import Dress from './Dress';
import Hair from './Hair';

const Selection = (props) =>
{
    const buttons = [
        "Face",
        "Hair",
        "Dresses"
    ]

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
                {buttons.map((button, i) => {
                    return (<SelectionButton name={button} callback={() => updateSelection(button)} />)
                })}
            </div>
            {selection == "Face" && 
                <div>
                    <Brow callback={updateCharacter}/>
                    <Eyes callback={updateCharacter}/>
                    <Nose callback={updateCharacter}/>
                    <Lip callback={updateCharacter}/>
                    <FaceDetail callback={updateCharacter}/>
                    <Tone callback={updateCharacter}/>
                </div>
            }
            {selection == "Hair" && 
                <div>
                    <Hair callback={updateCharacter}/>
                </div>
            }
            {selection == "Dresses" && 
                <div>
                    <Dress callback={updateCharacter}/>
                </div>
            }
        </div>
    )
}

export default Selection