const Necklace = (props) =>
{

    const necklaces = [
        [
            "assets/DollParts/Necklaces/Chokerblackflower.PNG",
            "assets/DollParts/Necklaces/Chokerdragonfly.PNG",
            "assets/DollParts/Necklaces/Chokergothicrosary.PNG",
            "assets/DollParts/Necklaces/Chokerwaterfall.PNG",
            "assets/DollParts/Necklaces/Chokeryshape.PNG"
        ],
        [
            "assets/DollParts/Necklaces/Necklaceankhsilver.PNG",
        ],
        [
            "assets/DollParts/Necklaces/Chokerankh.PNG",
            "assets/DollParts/Necklaces/Chokercross.PNG"
        ],
        [
            "assets/DollParts/Necklaces/Chokerlace.PNG",
            "assets/DollParts/Necklaces/Chokerthickplain.PNG",
            "assets/DollParts/Necklaces/Chokerthinplain.PNG"
        ], 
        [
            "assets/DollParts/Necklaces/Chokerpurpleflower.PNG",
            "assets/DollParts/Necklaces/Chokersilvercurved.PNG"
        ],
        [
            "assets/DollParts/Necklaces/Necklacebutterfly.PNG"
        ]
    ]

    const saveChange = (necklace) =>
    {
        props.callback("necklace", necklace);
    }

    const remove = () =>
    {
        props.callback("necklace", "")
    }

    return(
        <div className='Necklace-Option'>
            {necklaces[0].map((necklace, i) => {
                return (<div className='Necklace-Image' key={i}><img className='Short-Necklace' src={necklace} alt={necklace} key={i} onClick={() => saveChange(necklace)} ></img></div>)
            })}
            {necklaces[1].map((necklace, i) => {
                return (<div className='Necklace-Image' key={i}><img className='Long-Necklace' src={necklace} alt={necklace} key={i} onClick={() => saveChange(necklace)} ></img></div>)
            })}
            {necklaces[2].map((necklace, i) => {
                return (<div className='Necklace-Image' key={i}><img className='ChokerwPendent-Necklace' src={necklace} alt={necklace} key={i} onClick={() => saveChange(necklace)} ></img></div>)
            })}
            {necklaces[3].map((necklace, i) => {
                return (<div className='Necklace-Image' key={i}><img className='Choker-Necklace' src={necklace} alt={necklace} key={i} onClick={() => saveChange(necklace)} ></img></div>)
            })}
            {necklaces[4].map((necklace, i) => {
                return (<div className='Necklace-Image' key={i}><img className='Thin-Necklace' src={necklace} alt={necklace} key={i} onClick={() => saveChange(necklace)} ></img></div>)
            })}
            {necklaces[5].map((necklace, i) => {
                return (<div className='Necklace-Image' key={i}><img className='Medium-Necklace' src={necklace} alt={necklace} key={i} onClick={() => saveChange(necklace)} ></img></div>)
            })}
            <div className='Necklace-Image'><img className='RemoveNecklace'  src={"assets/UI_elements/black_x.png"} alt={"remove necklace"} onClick={remove} ></img></div>
        </div>
    )
}

export default Necklace;