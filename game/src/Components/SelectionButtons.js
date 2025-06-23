
const SelectionButton = (props) =>
{
    const reportSelection = () =>
    {
        props.callback(props.name)
    }

    return(
        <div>
            <button onClick={reportSelection}>{props.name}</button>
        </div>
    )
}

export default SelectionButton