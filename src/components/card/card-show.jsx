import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card-show.css";
import PropTypes from "prop-types";

function Card_show(props) {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const items = props.items;

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the items array to get the items for the current page
  const displayedItems = items.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (endIndex < items.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {displayedItems.map((item, i) => (
          <div className="col" key={i}>
            <div className="card shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  maxHeight: "225px",
                }}
              ></img>
              <div className="card-body">
                <div className="forn-cen">{item.name}</div>
                <p className="card-text">{item.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-success"
                    >
                      Buy
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-warning"
                    >
                      Add to your wishlist
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                    >
                      <div>
                        <a href="/gamedetail">View game</a>
                      </div>
                    </button>
                  </div>
                  <small className="text-body-secondary">2019</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button
          type="button"
          className="btn btn-outline-secondary me-2"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleNextPage}
          disabled={endIndex >= items.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

Card_show.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default Card_show;
