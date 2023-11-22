/* eslint-disable react/prop-types */
export const Pagination = (
    {totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage}
) => {
    let pages = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pages.push(i)
    }
  return (
    <div className="pagination">
         {pages.map((page, index) => 
                 (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                )
            )}
    </div>
  )
}
