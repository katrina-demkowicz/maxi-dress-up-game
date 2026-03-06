
const Lip = (props) => 
{

    const lips = [
        "/assets/DollParts/Lips/Lipsblack.PNG",
        "/assets/DollParts/Lips/Lipsbrown.PNG",
        "/assets/DollParts/Lips/Lipsdarkbrown.PNG",
        "/assets/DollParts/Lips/Lipshotpink.PNG",
        "/assets/DollParts/Lips/Lipslightpink.PNG",
        "/assets/DollParts/Lips/Lipsorange.PNG",
        "/assets/DollParts/Lips/Lipspurple.PNG",
        "/assets/DollParts/Lips/Lipsred.PNG",
        "/assets/DollParts/Lips/Lipswhite.PNG"
    ]

    const saveChange = (lip) =>
    {
        props.callback("lips", lip);
    }

    return(
        <div className="Lip-Option">
            {lips.map((lip, i) => {
                return (<div className='Image' key={i}><img className="Lips" src={lip} alt={lip} key={i} onClick={() => saveChange(lip)} ></img></div>)
            })}
        </div>
    )
}

export default Lip