import { useState } from 'react';

const Hair = (props) =>
{
    const styles = {
        "Brown": [
            "/assets/DollParts/Hair/TheAlice/Alicebrown.PNG",
            "/assets/DollParts/Hair/TheAyumi/Ayumibrown.PNG",
            "/assets/DollParts/Hair/TheButterfly/Butterflybrown.PNG",
            "/assets/DollParts/Hair/TheCelesta/CelestaBrown.PNG",
            "/assets/DollParts/Hair/TheCloud/CloudBrown.PNG",
            "/assets/DollParts/Hair/TheCosmina/Cosminabrown.PNG",
            "/assets/DollParts/Hair/TheDonna/Donnabrown.PNG",
            "/assets/DollParts/Hair/TheHestia/HestiaBrown.PNG",
            "/assets/DollParts/Hair/TheImogen/ImogenBrown.PNG",
            "/assets/DollParts/Hair/TheIrina/IrinaBrown.PNG",
            "/assets/DollParts/Hair/TheKimiko/Kimikobrown.PNG",
            "/assets/DollParts/Hair/TheLacramioara/LacramioaraBrown.PNG",
            "/assets/DollParts/Hair/TheLavender/Lavenderbrown.PNG",
            "/assets/DollParts/Hair/TheLeopard/Leopardbrown.PNG",
            "/assets/DollParts/Hair/TheLydia/LydiaBrown.PNG",
            "/assets/DollParts/Hair/TheMagdalena/Magdalenabrown.PNG",
            "/assets/DollParts/Hair/TheSonya/Sonyabrown.PNG",
            "/assets/DollParts/Hair/TheThelma/Thelmabrown.PNG",
            "/assets/DollParts/Hair/TheVera/Verabrown.PNG",
            "/assets/DollParts/Hair/TheYukari/YukariBrown.PNG"
        ]
    }

    const [color, setColor] = useState("Brown")

    const saveChange = (style) =>
    {
        props.callback("hair", style);
    }

    return(
        <div>
            {color == "Brown" && 
                <div className='Hair-Option'>
                    {styles["Brown"].map((style, i) => {
                        return(<div className='Hair-Image'><img className='Hair' src={style} alt={style} key={i} onClick={() => saveChange(style)} ></img></div>)
                    }
                )}
                </div>
            }
        </div>
    )
}

export default Hair