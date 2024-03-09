import "bootstrap/dist/css/bootstrap.min.css";
import "./card-show.css";

import PropTypes from "prop-types";
function Card_show(props) {
  const items = props.items;
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {items.map((item, i) => (
        <div className="col" key={i}>
          <div className="card shadow-sm">
            <img
              src={item.image}
              style={{ width: "100%", height: "225px" }}
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
  );
}
Card_show.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired),
};
export default Card_show;
