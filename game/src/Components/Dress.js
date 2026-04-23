import { useState } from 'react';
import PageButton from './PageButton';

const Dress = (props) =>
{
    const dresses = [
        [
            "assets/DollParts/Dresses/Dresspinkblossom.PNG",
            "assets/DollParts/Dresses/Dressmagenta.PNG",
            "assets/DollParts/Dresses/Dresspinkleopard.PNG",
            "assets/DollParts/Dresses/Dressredmini.PNG",
            "assets/DollParts/Dresses/Dressbutterfly.PNG",
            "assets/DollParts/Dresses/DressBlackShortFloral.PNG",
            "assets/DollParts/Dresses/Dresspurpleflamevelvet.PNG",
            "assets/DollParts/Dresses/Dressqipao.PNG",
            "assets/DollParts/Dresses/DresssilverAsian.PNG",
            "assets/DollParts/Dresses/Dressleopard.PNG",
            "assets/DollParts/Dresses/DressRenaissanceart.PNG",
            "assets/DollParts/Dresses/Dressdaisybuttonup.PNG"
        ],
        [
            "assets/DollParts/Dresses/Dressgreen.PNG",
            "assets/DollParts/Dresses/Dressiceblueasymmetrical.PNG",
            "assets/DollParts/Dresses/Dressbluelace.PNG",
            "assets/DollParts/Dresses/Dressblackfloral.PNG",
            "assets/DollParts/Dresses/Dress80sruffle.PNG",
            "assets/DollParts/Dresses/Dress80sgreen.PNG",
        ],
        [
            "assets/DollParts/Dresses/Dressblackmaxisheer.PNG",
            "assets/DollParts/Dresses/Dressredvelvetgoth.PNG",
            "assets/DollParts/Dresses/Dressgothsinister.PNG",
            "assets/DollParts/Dresses/Dressdarkblueroses.PNG",
            "assets/DollParts/Dresses/Dresspurplefur.PNG",
            "assets/DollParts/Dresses/Dresslightblueroses.PNG"
        ],
        [
            "assets/DollParts/Dresses/Dressbluemaxi.PNG",
            "assets/DollParts/Dresses/Dresspurplemaxi.PNG",
            "assets/DollParts/Dresses/Dressredmaxi.PNG",
            "assets/DollParts/Dresses/Dressorange.PNG",
            "assets/DollParts/Dresses/Dress70sdaisy.PNG",
            "assets/DollParts/Dresses/Dress70sGunneSax.PNG"
            // "/assets/DollParts/Dresses/Dressbluesparkle.PNG"
        ]
    ]
    
    //useState for dress pages, each page with a list of dresses
    const [page, setPage] = useState(0)

    const saveChange = (dress) =>
    {
        props.callback("dress", dress);
    }

    const updatePage = (pageNumber) =>
    {
        setPage(pageNumber);
    }

    //render pages dynamically? - this might not be good for customization of pages
    //hard coded page rendering - easy to add different classNames
    //structure like shoes
    return(
        <div className='Dress-Container'>
            {/* short dresses */}
            {page === 0 && 
                <div className='Short-Dress-Option'>
                    {dresses[0].map((dress, i) => {
                        return (<div className='Short-Dress-Image'><img className='Short-Dress' src={dress} alt={dress} key={i} onClick={() => saveChange(dress)} ></img></div>)
                    })}
                </div>
            }
            {/* medium length dresses */}
            {page === 1 && 
                <div className='Medium-Dress-Option'>
                    {dresses[1].map((dress, i) => {
                        if (dress === "/assets/DollParts/Dresses/Dress80sruffle.PNG") {
                            return (<div className='Short-Dress-Image'><img className='Eighties-Ruffle' src={dress} alt={dress} key={i} onClick={() => saveChange(dress)} ></img></div>)
                        }
                        else if (dress === "/assets/DollParts/Dresses/Dress80sgreen.PNG") {
                            return (<div className='Short-Dress-Image'><img className='Eighties-Green' src={dress} alt={dress} key={i} onClick={() => saveChange(dress)} ></img></div>)
                        }
                        else {
                            return (<div className='Medium-Dress-Image'><img className='Medium-Dress' src={dress} alt={dress} key={i} onClick={() => saveChange(dress)} ></img></div>)
                        }
                    })}
                </div>
            }
            {/* long narrow dresses */}
            {page === 2 && 
                <div className='Long-Dress-Option'>
                    {dresses[2].map((dress, i) => {
                        return (<div className='Long-Narrow-Dress-Image'><img className='Long-Narrow-Dress' src={dress} alt={dress} key={i} onClick={() => saveChange(dress)} ></img></div>)
                    })}
                </div>
            }
            {/* second page of long narrow dresses */}
            {page === 3 && 
                <div className='Dress-Option'>
                    {dresses[3].map((dress, i) => {
                        return (<div className='Long-Narrow-Dress-Image'><img className='Long-Narrow-Dress' src={dress} alt={dress} key={i} onClick={() => saveChange(dress)} ></img></div>)
                    })}
                </div>
            }
            <PageButton currentPage={page} pageLength={2} callback={updatePage}/>
        </div>
    )
}

export default Dress