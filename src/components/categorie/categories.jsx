import { useState } from 'react';
import { useLocation } from 'react-router';
import data from '../jsonfile/game_example.json';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './categories.css';
import '../text/a-box.css';
import Card_show from '../card/card-show';
import SlideShow from '../slide_show/slide_show';
import Slide from '../slide_show/slide';

let itemss = data['Game_example'];

function Categories() {
  const location = useLocation();

  const [categories_name] = useState(location.state.links);
  return (
    <div className="body-category">
      <div className="container-card-show">
        <div className="a-box" style={{ margin: '1rem 0.5rem' }}>
          <h2>
            <a>{categories_name}</a>
          </h2>
        </div>
        <div className="container-cardshows2">
          <Slide slides={itemss} />
        </div>
        <div className="container-cardshows">
          <SlideShow slides={itemss} />
        </div>
        <br />
        <br />
        <div className="a-box" style={{ margin: '1rem 0.5rem' }}>
          <h2>
            <a>All game</a>
          </h2>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <Card_show className="card-shows" items={itemss} />
      </div>
    </div>
  );
}
export default Categories;
