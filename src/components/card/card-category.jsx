import {React} from 'react';
import { useNavigate } from 'react-router';
import './card-category.css';

function Card_category(props){
    const items = props.items;
    const navigates = useNavigate();
    const categorys = (event,links) => (navigates('/categories',{replace:true,state:{links}}));
    return(
        <div class="gameListContainer">
            {items.map((item,i)=>
            <div class="game" onClick={event => categorys(event,item.name)} state={{ category:  item.name }} style={{background: item.color}} >
                <h1 className='h1-game_category'>{item.name}</h1>
            </div>
            
            )}
            
        </div>
    );
}
export default Card_category;
