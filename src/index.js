import menus from './menu.json'
import cart from './cart.hbs'
import './styles.css';

//Шаблон меню

const list = document.querySelector('.js-menu')

function bildMarkup (menus){
    const markup = menus.map(el =>cart(el)).join('')
    list.insertAdjacentHTML('beforeend', markup)
    // console.log(markup);
}

bildMarkup(menus)

//Тема
const body = document.querySelector('body')
const switchInput = document.querySelector('.js-switch-input')
// console.dir(switchInput);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


function inputClick (){
    if (switchInput.checked){
    body.classList.add(Theme.DARK)
    localStorage.setItem('key', switchInput.checked)
    return
    }else{body.classList.remove(Theme.DARK)
    body.classList.add(Theme.LIGHT)}
    localStorage.setItem('key', switchInput.checked)
    }
  
function load (){
    const feedback = localStorage.getItem('key')
    if(feedback === 'true'){
    body.classList.add(Theme.DARK)
    switchInput.checked = true
    }
}

switchInput.addEventListener('change', inputClick)
document.addEventListener('DOMContentLoaded', load)



