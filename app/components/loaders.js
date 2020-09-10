import api from '../helpers/wp_api.js'

export function loader(){
    const $loader = document.createElement('img');
    $loader.alt = "Cargando..";
    $loader.src = "app/assets/loaders.svg";
    $loader.classList.add("loader");
    return $loader;
}