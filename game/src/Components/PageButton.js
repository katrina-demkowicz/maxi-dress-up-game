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
        <div>
            {currentPage !== 0 &&
                <div className='LeftButton'>
                    <img src="assets/UI_elements/ButtonLeft.png" alt="left" onClick={pageLeft}/>
                </div>  
            }
            {currentPage !== props.pageLength &&
                <div className='RightButton'>
                    <img src="assets/UI_elements/ButtonRight.png" alt="rught" onClick={pageRight}/>
                </div>
            }
        </div>        
    )
}

export default PageButton