import { useState } from 'react';
import PageButton from './PageButton';

const Shoe = (props) =>
{

    //seperate by shoe size, like tall boots and shorter shoes
    const shoes = [
        [
            "assets/DollParts/Shoes/Bootsbuffaloblack.PNG",
            "assets/DollParts/Shoes/Bootsbuffalowhite.PNG",
            "assets/DollParts/Shoes/Bootsdestroyblack.PNG",
            "assets/DollParts/Shoes/Bootsdestroybrown.PNG",
            "assets/DollParts/Shoes/Bootspatchwork.PNG",
            "assets/DollParts/Shoes/Bootssonaxblack.PNG",
            "assets/DollParts/Shoes/Bootssonaxbrown.PNG",
            "assets/DollParts/Shoes/Bootswedgebrown.PNG",
            "assets/DollParts/Shoes/Bootswedgewhite.PNG",
            "assets/DollParts/Shoes/Sandalsstringblack.PNG",
            "assets/DollParts/Shoes/Sandalsstringbrown.PNG",
            "assets/DollParts/Shoes/Bootsganguroblack.PNG"          
        ],
        [
            
            "assets/DollParts/Shoes/Bootsgangurobrown.PNG",
            "assets/DollParts/Shoes/Bootswedgeblack.PNG"
        ],
        [
            "assets/DollParts/Shoes/Bootskojikugablack.PNG",
            "assets/DollParts/Shoes/Bootskojikugawhite.PNG",
        ],
        [
            "assets/DollParts/Shoes/Shoeskogalblack.PNG",
            "assets/DollParts/Shoes/Shoeskogalbrown.PNG"
        ],
        [
            "assets/DollParts/Shoes/ClogsBlue.png",
            "assets/DollParts/Shoes/LoafersBlack.PNG",
            "assets/DollParts/Shoes/LoafersBrown.PNG",
            "assets/DollParts/Shoes/Maryjanesblack.PNG",
            "assets/DollParts/Shoes/Maryjanessilver.PNG",
            "assets/DollParts/Shoes/Sandalsblack.PNG",
            "assets/DollParts/Shoes/Sandalsbrown.PNG",
            "assets/DollParts/Shoes/Sandalsflowerblack.PNG",
            "assets/DollParts/Shoes/Sandalsflowersilver.PNG",          
            "assets/DollParts/Shoes/Sandalswhite.PNG",
            "assets/DollParts/Shoes/StrappyHeelsBlack.PNG",
            "assets/DollParts/Shoes/StrappyHeelsSilver.PNG"
        ]
    ]

    const [page, setPage] = useState(0);

    const saveChange = (shoe) =>
    {
        props.callback("shoes", shoe);
    }

    const updatePage = (pageNumber) =>
    {
        setPage(pageNumber);
    }

    return(
        <div>
            {/* boots */}
            {page === 0 && 
                <div className='Shoe-Option'>
                    {shoes[0].map((shoe, i) => {
                        return (<div className='Tall-Boot-Image'><img className='Tall-Boot' src={shoe} alt={shoe} key={i} onClick={() => saveChange(shoe)} ></img></div>)
                    })}
                    {shoes[1].map((shoe, i) => {
                        return (<div className='Tall-Chunky-Boot-Image'><img className='Tall-Chunky-Boot' src={shoe} alt={shoe} key={i} onClick={() => saveChange(shoe)} ></img></div>)
                    })}
                    {shoes[2].map((shoe, i) => {
                        return (<div className='Medium-Chunky-Boot-Image'><img className='Medium-Chunky-Boot' src={shoe} alt={shoe} key={i} onClick={() => saveChange(shoe)} ></img></div>)
                    })}
                    {shoes[3].map((shoe, i) => {
                        return (<div className='Medium-Chunky-Boot-Image'><img className='Medium-Chunky-Boot' src={shoe} alt={shoe} key={i} onClick={() => saveChange(shoe)} ></img></div>)
                    })}
                </div>
            }
            {/* regular shoes */}
            {page === 1 && 
                <div className='Shoe-Option'>
                    {shoes[4].map((shoe, i) => {
                        return (<div className='Short-Shoe-Image'><img className='Short-Shoe' src={shoe} alt={shoe} key={i} onClick={() => saveChange(shoe)} ></img></div>)
                    })}
                </div>
            }
            <PageButton currentPage={page} pageLength={1} callback={updatePage}/>
        </div>
    )

}

export default Shoe;