import { useState } from 'react';
import Eyes from './Eyes';
import Nose from './Nose';
import Lip from './Lip';
import Brow from './Brows';
import FaceDetail from './FaceDetail';
import Tone from './Tone';

const Selection = (props) =>
{
    const [selection, setSelection] = useState("face")

    const updateCharacter = (prop, asset) => {
        props.callback(prop, asset)
    }

    return(
        <div>
            {selection == "face" && 
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