import { useState } from 'react';

const Hair = (props) =>
{
    const styles = {
        "Black": [
            "/assets/DollParts/Hair/TheAlice/Aliceblack.PNG",
            "/assets/DollParts/Hair/TheAyumi/Ayumiblack.PNG",
            "/assets/DollParts/Hair/TheButterfly/Butterflyblack.PNG",
            "/assets/DollParts/Hair/TheCelesta/CelestaBlack.PNG",
            "/assets/DollParts/Hair/TheCloud/CloudBlack.PNG",
            "/assets/DollParts/Hair/TheCosmina/Cosminablack.PNG",
            "/assets/DollParts/Hair/TheDonna/Donnablack.PNG",
            "/assets/DollParts/Hair/TheHestia/HestiaBlack.PNG",
            "/assets/DollParts/Hair/TheImogen/ImogenBlack.PNG",
            "/assets/DollParts/Hair/TheIrina/IrinaBlack.PNG",
            "/assets/DollParts/Hair/TheKimiko/Kimikoblack.PNG",
            "/assets/DollParts/Hair/TheLacramioara/LacramioaraBlack.PNG",
            "/assets/DollParts/Hair/TheLavender/Lavenderblack.PNG",
            "/assets/DollParts/Hair/TheLeopard/Leopardblack.PNG",
            "/assets/DollParts/Hair/TheLydia/LydiaBlack.PNG",
            "/assets/DollParts/Hair/TheMagdalena/Magdalenablack.PNG",
            "/assets/DollParts/Hair/TheSonya/Sonyablack.PNG",
            "/assets/DollParts/Hair/TheThelma/Thelmablack.PNG",
            "/assets/DollParts/Hair/TheVera/Verablack.PNG",
            "/assets/DollParts/Hair/TheYukari/YukariBlack.PNG"
        ],
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
        ],
        "Olive": [
            "/assets/DollParts/Hair/TheAlice/AliceOlive.PNG",
            "/assets/DollParts/Hair/TheAyumi/AyumiOlive.PNG",
            "/assets/DollParts/Hair/TheButterfly/Butterflyolive.PNG",
            "/assets/DollParts/Hair/TheCelesta/CelestaOlive.PNG",
            "/assets/DollParts/Hair/TheCloud/CloudOlive.PNG",
            "/assets/DollParts/Hair/TheCosmina/Cosminaolive.PNG",
            "/assets/DollParts/Hair/TheDonna/Donnaolive.PNG",
            "/assets/DollParts/Hair/TheHestia/HestiaOlive.PNG",
            "/assets/DollParts/Hair/TheImogen/ImogenOlive.PNG",
            "/assets/DollParts/Hair/TheIrina/IrinaOlive.PNG",
            "/assets/DollParts/Hair/TheKimiko/Kimikoolive.PNG",
            "/assets/DollParts/Hair/TheLacramioara/LacramioaraOlive.PNG",
            "/assets/DollParts/Hair/TheLavender/Lavenderolive.PNG",
            "/assets/DollParts/Hair/TheLeopard/Leopardolive.PNG",
            "/assets/DollParts/Hair/TheLydia/LydiaOlive.PNG",
            "/assets/DollParts/Hair/TheMagdalena/Magdalenaolive.PNG",
            "/assets/DollParts/Hair/TheSonya/Sonyaolive.PNG",
            "/assets/DollParts/Hair/TheThelma/Thelmaolive.PNG",
            "/assets/DollParts/Hair/TheVera/Veraolive.PNG",
            "/assets/DollParts/Hair/TheYukari/YukariOlive.PNG"
        ]
    }

    const [color, setColor] = useState("Brown")

    const changeColor = (newColor) => {
        if (newColor != color)
        {
            setColor(newColor)
        }
    }

    const saveChange = (style) =>
    {
        props.callback("hair", style);
    }

    return(
        <div>
            {color == "Black" && 
                <div className='Hair-Option'>
                    {styles["Black"].map((style, i) => {
                        return(<div className='Hair-Image'><img className='Hair' src={style} alt={style} key={i} onClick={() => saveChange(style)} ></img></div>)
                    }
                )}
                </div>
            }
            {color == "Brown" && 
                <div className='Hair-Option'>
                    {styles["Brown"].map((style, i) => {
                        return(<div className='Hair-Image'><img className='Hair' src={style} alt={style} key={i} onClick={() => saveChange(style)} ></img></div>)
                    }
                )}
                </div>
            }
            {color == "Olive" && 
                <div className='Hair-Option'>
                    {styles["Olive"].map((style, i) => {
                        return(<div className='Hair-Image'><img className='Hair' src={style} alt={style} key={i} onClick={() => saveChange(style)} ></img></div>)
                    }
                )}
                </div>
            }
            <button onClick={() => changeColor("Black")}>Black</button>
            <button onClick={() => changeColor("Brown")}>Brown</button>
            <button onClick={() => changeColor("Olive")}>Olive</button>
            <button onClick={() => changeColor("Red")}>Red</button>
            <button onClick={() => changeColor("Blonde")}>Blonde</button>
        </div>
    )
}

export default Hair