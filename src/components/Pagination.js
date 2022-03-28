import React from "react";

function Pagination(props) {
  let pageNumbers = [];

  for(let i = 1; i <= props.numPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination justify-content-center">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a className="page-link" href="#" onClick={() => props.paginate(number)}>{number}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
