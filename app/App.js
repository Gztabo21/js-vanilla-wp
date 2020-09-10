import api from './helpers/wp_api.js';
import {ajax}  from './helpers/ajax.js';
import {PostCard} from './components/post-card.js';
import {title} from './components/title.js';
import {loader} from './components/loaders.js';

export function app() {
    console.log("hola Mundo",api.NAME)
    const doc = document
    const $root = doc.getElementById('root');
    const $posts = doc.createElement('section');
    
    $posts.id = "posts";
    $posts.classList.add('grid-fluid');
    // code
    //insertar componentes
    $root.appendChild(title());
    $root.appendChild($posts);
    $root.appendChild(loader());

    let html ="";
    ajax({url:api.POSTS,
        cbSucess:(posts)=>{
            console.log(posts)
            posts.forEach(post => html+= PostCard(post));
            $posts.innerHTML = html;
        }}); 
}

