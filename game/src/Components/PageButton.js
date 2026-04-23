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
            {currentPage !== 0 &&
                <button onClick={pageLeft}>previous</button>
            }
            {currentPage !== props.pageLength &&
                <button onClick={pageRight}>next</button>
            }
        </div>
    )
}

export default PageButton