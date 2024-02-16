import {React,useState } from 'react';
import { useLocation } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './categories.css';
import '../text/a-box.css';
import data from '../jsonfile/game_homepage.json';
import Card_show from '../card/card-show';
import SlideShow from '../slide_show/slide_show';
import Slide from '../slide_show/slide';
let items = [
    {
        image: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
        title: "Lossless Youths",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim."
    },
    {
        image: 'https://i.redd.it/tc0aqpv92pn21.jpg',
        title:  "Estrange Bond",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim."
    },
    {
        image: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
        title: "The Gate Keeper",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim."
    }
]
let itemss = data["Game_homepage"];

function Categories(props){
    const location = useLocation();
    
    const [categories_name,setcategories_name] = useState(location.state.links);
    return(
        <div className='body-category'>
            
            <div className='container-card-show'>
                <div className='a-box' style={{margin: '1rem 0.5rem'}}>
                    <h2 >
                        <a>{categories_name}</a>
                    </h2>
                </div>
                <div className='container-cardshows2'> 
                    <Slide slides={items}/>           
                </div>
                <div className='container-cardshows'> 
                    <SlideShow slides={items}/> 
                </div>
                <br/>
                <br/>
                <div className='a-box' style={{margin: '1rem 0.5rem'}}>
                    <h2 >
                        <a>All game</a>
                    </h2>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='container'>
                <Card_show className='card-shows'items={itemss}/>
            </div>
            
        </div>
    );
}
export default Categories;