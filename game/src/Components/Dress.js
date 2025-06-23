import { useState } from 'react';
const Dress = (props) =>
{
    const dresses = [
        [
            "/assets/DollParts/Dresses/Dresspinkblossom.PNG",
            "/assets/DollParts/Dresses/Dressbutterfly.PNG"
        ],
        [
            "/assets/DollParts/Dresses/Dressgreen.PNG",
            "/assets/DollParts/Dresses/Dressblackmaxisheer.PNG"
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
            {page == 0 && 
                <div>
                    {dresses[0].map((dress, i) => {
                        return (<div ><img src={dress} alt={dress} key={i} onClick={() => saveChange(dress)} ></img></div>)
                    })}
                </div>
            }
            {page == 1 && 
                <div>
                    {dresses[1].map((dress, i) => {
                        return (<div ><img src={dress} alt={dress} key={i} onClick={() => saveChange(dress)} ></img></div>)
                    })}
                </div>
            }
            <button onClick={pageLeft}>left</button>
            <button onClick={pageRight}>right</button>
        </div>
    )
}

export default Dress