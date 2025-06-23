import { use, useState } from 'react';
import Eyes from './Eyes';
import Nose from './Nose';
import Lip from './Lip';
import Brow from './Brows';
import FaceDetail from './FaceDetail';
import Tone from './Tone';
import SelectionButton from './SelectionButtons';

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

        <div>
            {buttons.map((button, i) => {
                return (<SelectionButton name={button} callback={() => updateSelection(button)} />)
            })}
            {selection == "Face" && 
                    <div className='Item-Option'>
                        <Brow callback={updateCharacter}/>
                        <Eyes callback={updateCharacter}/>
                        <Nose callback={updateCharacter}/>
                        <Lip callback={updateCharacter}/>
                        <FaceDetail callback={updateCharacter}/>
                        <Tone callback={updateCharacter}/>
                    </div>
                }
        </div>
    )
}

export default Selection