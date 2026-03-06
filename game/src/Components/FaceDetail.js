
const FaceDetail = (props) => 
{

    const details = [
        "/assets/DollParts/Face_Details/Bindi1.PNG",
        "/assets/DollParts/Face_Details/Bindi2.PNG",
        "/assets/DollParts/Face_Details/Blushdark.PNG",
        "/assets/DollParts/Face_Details/Blushlight.PNG",
        "/assets/DollParts/Face_Details/Blushmedium.PNG",
        "/assets/DollParts/Face_Details/Frecklesdark.PNG",
        "/assets/DollParts/Face_Details/Freckleslight.PNG",
        "/assets/DollParts/Face_Details/Frecklesmedium.PNG",
        "/assets/DollParts/Face_Details/Mole1.PNG",
        "/assets/DollParts/Face_Details/Mole2.PNG",
        "/assets/DollParts/Face_Details/Mole3.PNG"
    ]

    const saveChange = (detail) =>
    {
        props.callback("faceDetails", detail);
    }

    return(
        <div className="FaceDetail-Option">
            {details.map((detail, i) => {
                return (<div className='FaceDetail-Image' key={i}><img className="FaceDetails" src={detail} alt={detail} key={i} onClick={() => saveChange(detail)} ></img></div>)
            })}
        </div>
    )
}

export default FaceDetail