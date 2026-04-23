
const SelectionButton = (props) =>
{
    const reportSelection = () =>
    {
        props.callback(props.name)
    }

    return(
        <div className='Selection-Button-Image'>
            <img src={props.source} alt={props.name} onClick={reportSelection}/>
        </div>
    )
}

export default SelectionButton