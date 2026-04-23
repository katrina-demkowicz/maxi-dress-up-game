const PageButton = (props) =>
{
    let currentPage = props.currentPage;

    const pageRight = () => {
        if (currentPage < props.pageLength)
        {
            currentPage += 1
        }
        props.callback(currentPage);
    }

    const pageLeft = () => {
        if (currentPage > 0)
        {
            currentPage -= 1;
        }
        props.callback(currentPage);
    }

    return(
        <div className='NextButton'>
                <button onClick={pageLeft}>left</button>
                <button onClick={pageRight}>right</button>
        </div>
    )
}

export default PageButton