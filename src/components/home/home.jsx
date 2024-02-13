import {React} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './page.css';
import data from '../jsonfile/game_homepage.json';

let images = data["Game_homepage"].map((item,i)=> item["image"]);
let names = data["Game_homepage"].map((item,i)=> item["name"]);
let details = data["Game_homepage"].map((item,i)=> item["detail"]);

const Hero = ({item}) => {
  
  const notify = () =>toast.success('😊 Thanks for your bay!', {position: "bottom-right",autoClose: 3000,});
  const notify1 = () =>toast.warn('🧐 Good choice', {position: "bottom-right",autoClose: 3000,});

  return (
   <div>
     <body>

     <div className="album py-5 bg-body-tertiary">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {images.map((item,i)=>
      <div className="col">
      <div className="card shadow-sm">
        <img src={item} style={{width:'100%',height:'225px'}}></img>
        <div className="card-body">
          <div className='forn-cen'>{names[i]}</div>
          <p className="card-text">{details[i]}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-success">Buy</button>
              <button type="button" className="btn btn-sm btn-outline-warning">Add to your wishlist</button>
            </div>
            <small className="text-body-secondary">2019</small>
         
          </div>
        </div>
      </div>
    </div>
      
    )
    }
        

        
      </div>
    </div>
  </div>

    <footer class="text-body-secondary py-5">
      <div class="container">
      <p class="float-end mb-1">
      <a href="#">Back to top</a>
      </p>
    <p class="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
    <p class="mb-0">Power By Bootstrap <a href="/register">Visit the homepage</a> Suport User : Contact Admin <a href="/report">Report Problem</a>
    
    </p>
    </div>
    </footer>
          <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  </body>

   </div>

  );
};

export default Hero;
