import { useState } from 'react';

const Dress = (props) =>
{
    const dresses = [
        [
            "/assets/DollParts/Dresses/Dresspinkblossom.PNG",
            "/assets/DollParts/Dresses/Dressmagenta.PNG",
            "/assets/DollParts/Dresses/Dresspinkleopard.PNG",
            "/assets/DollParts/Dresses/Dressredmini.PNG",
            "/assets/DollParts/Dresses/Dressbutterfly.PNG",
            "/assets/DollParts/Dresses/Dressstarter.PNG",
            "/assets/DollParts/Dresses/Dresspurpleflamevelvet.PNG",
            "/assets/DollParts/Dresses/Dressqipao.PNG",
            "/assets/DollParts/Dresses/DresssilverAsian.PNG",
            "/assets/DollParts/Dresses/Dressleopard.PNG",
            "/assets/DollParts/Dresses/DressRenaissanceart.PNG",
            "/assets/DollParts/Dresses/Dressdaisybuttonup.PNG"
        ],
        [
            "/assets/DollParts/Dresses/Dressgreen.PNG",
        ],
        [
            "/assets/DollParts/Dresses/Dressblackmaxisheer.PNG",
            "/assets/DollParts/Dresses/Dressredvelvetgoth.PNG",
            "/assets/DollParts/Dresses/Dressdarkblueroses.PNG"
        ]
    ]
    //useState for dress pages, each page with a list of dress
    const [page, setPage] = useState(0)

    const pageRight = () => {
        if (page < dresses.length - 1)
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

    const saveChange = (dress) =>
    {
        props.callback("dress", dress);
    }

    // className='Image' key={i}><img className="Brows"

    //render pages dynamically? - this might not be good for customization of pages
    //hard coded page rendering - easy to add different classNames
    return(
        <div>
            {/* short dresses */}
            {page == 0 && 
                <div className='Dress-Option'>
                    {dresses[0].map((dress, i) => {
                        return (<div className='Short-Dress-Image'><img className='Short-Dress' src={dress} alt={dress} key={i} onClick={() => saveChange(dress)} ></img></div>)
                    })}
                </div>
            }
            {/* medium length dresses */}
            {page == 1 && 
                <div className='Dress-Option'>
                    {dresses[1].map((dress, i) => {
                        return (<div className='Medium-Dress-Image'><img className='Medium-Dress' src={dress} alt={dress} key={i} onClick={() => saveChange(dress)} ></img></div>)
                    })}
                </div>
            }
            {/* long narrow dresses */}
            {page == 2 && 
                <div className='Dress-Option'>
                    {dresses[2].map((dress, i) => {
                        return (<div className='Long-Narrow-Dress-Image'><img className='Long-Narrow-Dress' src={dress} alt={dress} key={i} onClick={() => saveChange(dress)} ></img></div>)
                    })}
                </div>
            }
            <button onClick={pageLeft}>left</button>
            <button onClick={pageRight}>right</button>
        </div>
    )
}

export default Dress