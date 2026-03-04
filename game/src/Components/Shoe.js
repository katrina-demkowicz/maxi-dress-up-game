import { useState } from 'react';

const Shoe = (props) =>
{
    //tall chunky
    // "/assets/DollParts/Shoes/Bootskojikugablack.PNG",
    //         "/assets/DollParts/Shoes/Bootskojikugawhite.PNG",
    //medium chunky
    // "/assets/DollParts/Shoes/Bootsganguroblack.PNG",
    //         "/assets/DollParts/Shoes/Bootsgangurobrown.PNG",
    //         "/assets/DollParts/Shoes/Bootswedgeblack.PNG",
    //medium tall
    // "/assets/DollParts/Shoes/Shoeskogalblack.PNG",
    //         "/assets/DollParts/Shoes/Shoeskogalbrown.PNG",

    //seperate by shoe size, like tall boots and shorter shoes
    const shoes = [
        [
            "/assets/DollParts/Shoes/Bootsbuffaloblack.PNG",
            "/assets/DollParts/Shoes/Bootsbuffalowhite.PNG",
            "/assets/DollParts/Shoes/Bootsdestroyblack.PNG",
            "/assets/DollParts/Shoes/Bootsdestroybrown.PNG",
            "/assets/DollParts/Shoes/Bootspatchwork.PNG",
            "/assets/DollParts/Shoes/Bootssonaxblack.PNG",
            "/assets/DollParts/Shoes/Bootssonaxbrown.PNG",
            "/assets/DollParts/Shoes/Bootswedgebrown.PNG",
            "/assets/DollParts/Shoes/Bootswedgewhite.PNG",
            "/assets/DollParts/Shoes/Sandalsstringblack.PNG",
            "/assets/DollParts/Shoes/Sandalsstringbrown.PNG"            
        ],
        [
            "/assets/DollParts/Shoes/ClogsBlue.png",
            "/assets/DollParts/Shoes/LoafersBlack.PNG",
            "/assets/DollParts/Shoes/LoafersBrown.PNG",
            "/assets/DollParts/Shoes/Maryjanesblack.PNG",
            "/assets/DollParts/Shoes/Maryjanessilver.PNG",
            "/assets/DollParts/Shoes/Sandalsblack.PNG",
            "/assets/DollParts/Shoes/Sandalsbrown.PNG",
            "/assets/DollParts/Shoes/Sandalsflowerblack.PNG",
            "/assets/DollParts/Shoes/Sandalsflowersilver.PNG",          
            "/assets/DollParts/Shoes/Sandalswhite.PNG",
            "/assets/DollParts/Shoes/StrappyHeelsBlack.PNG",
            "/assets/DollParts/Shoes/StrappyHeelsSilver.PNG"
        ]
    ]

    const [page, setPage] = useState(0);

    
    const pageRight = () => {
        if (page < shoes.length - 1)
        {
            setPage(page + 1);
        }
    }

    const pageLeft = () => {
        if (page > 0)
        {
            setPage(page - 1);
        }
    }

    const saveChange = (shoe) =>
    {
        props.callback("shoes", shoe);
    }

    return(
        <div>
            {/* tall boots */}
            {page === 0 && 
                <div className='Shoe-Option'>
                    {shoes[0].map((shoe, i) => {
                        return (<div className='Tall-Boot-Image'><img className='Tall-Boot' src={shoe} alt={shoe} key={i} onClick={() => saveChange(shoe)} ></img></div>)
                    })}
                </div>
            }
            {page === 1 && 
                <div className='Shoe-Option'>
                    {shoes[1].map((shoe, i) => {
                        return (<div className='Short-Shoe-Image'><img className='Short-Shoe' src={shoe} alt={shoe} key={i} onClick={() => saveChange(shoe)} ></img></div>)
                    })}
                </div>
            }
            <button onClick={pageLeft}>left</button>
            <button onClick={pageRight}>right</button>
        </div>
    )

}

export default Shoe;