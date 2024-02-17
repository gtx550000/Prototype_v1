import { React } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../jsonfile/game_homepage.json';
import datas from '../jsonfile/category_page.json';
import { colors } from '@mui/material';
import '../text/a-box.css';
import './page.css';
import { useNavigate } from 'react-router';
import Card_show from '../card/card-show';
import Card_category from '../card/card-category';

let items = data['Game_homepage'];
let category_item = datas['Category'];

const Hero = ({ item }) => {
  const navigate = useNavigate();
  const category = (event, links) =>
    navigate('/categories', { replace: true, state: { links } });
  const notify = () =>
    toast.success('😊 Thanks for your bay!', {
      position: 'bottom-right',
      autoClose: 3000,
    });
  const notify1 = () =>
    toast.warn('🧐 Good choice', { position: 'bottom-right', autoClose: 3000 });

  return (
    <div>
      <body>
        <div className="bigimage-container">
          <img src={items[0].image} className="bigimage"></img>
        </div>

        <div className="album py-5 bg-body-tertiary">
          <div class="a-box">
            <h2>
              <a>Category</a>
            </h2>
          </div>
          <div className="gameListContainer-responsive">
            <button
              type="button"
              onClick={(event) => category(event, 'Action')}
              class="btn btn-primary"
            >
              Action
            </button>
            <button
              type="button"
              onClick={(event) => category(event, 'Adventure')}
              class="btn btn-secondary"
            >
              Adventure
            </button>
            <button
              type="button"
              onClick={(event) => category(event, 'RPG')}
              class="btn btn-success"
            >
              RPG
            </button>
            <button
              type="button"
              onClick={(event) => category(event, 'Racing')}
              class="btn btn-danger"
            >
              Racing
            </button>
            <button
              type="button"
              onClick={(event) => category(event, 'Cooking')}
              class="btn btn-warning"
            >
              Cooking
            </button>
            <button
              type="button"
              onClick={(event) => category(event, 'Survival')}
              class="btn btn-info"
            >
              Survival
            </button>
            <button
              type="button"
              onClick={(event) => category(event, 'Story')}
              class="btn btn-light"
            >
              Story
            </button>
            <button
              type="button"
              onClick={(event) => category(event, 'Horror')}
              class="btn btn-dark"
            >
              Horror
            </button>
          </div>
          <Card_category items={category_item} />
          <div class="a-box">
            <h2>
              <a>Trending game</a>
            </h2>
          </div>
          <div className="container">
            <Card_show items={items} />
          </div>
        </div>

        <footer class="text-body-secondary py-5">
          <div class="container">
            <p class="float-end mb-1">
              <a href="#">Back to top</a>
            </p>
            <p class="mb-1">
              Album example is &copy; Bootstrap, but please download and
              customize it for yourself!
            </p>
            <p class="mb-0">
              Power By Bootstrap <a href="/register">Visit the homepage</a>{' '}
              Suport User : Contact Admin <a href="/report">Report Problem</a>
            </p>
          </div>
        </footer>
        <script
          src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>
      </body>
    </div>
  );
};

export default Hero;
