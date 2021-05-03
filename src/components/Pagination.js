import React from'react';

const Pagination = (props)=>{
    const {leftClick, rightClick, page, totalpage}= props;
    const left='<';
    const right='>';
    return(
        <div className="pagination">
          <button className="pagination-page-btn" onClick={leftClick}>
          {left}
          </button>
          <div className="pagination-page-curent">{page} de {totalpage}</div>
          <button className="pagination-page-btn" onClick={rightClick}>
            {right}
          </button>
        </div>

    )
}
export default Pagination