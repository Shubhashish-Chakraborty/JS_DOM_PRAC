
/*

innerText , innerHTML , textContent


*/

const with_idSelector = () => {

    const item_4 = document.getElementById("item4");

    
    // item_4.innerHTML // => '<strong>Rust</strong> '
    // item_4.innerText // => 'Rust'
    // item_4.textContent // => 'Rust'


}


const with_classSelector = () => {

    const li_items = document.getElementsByClassName("ListItem")

    li_items[0].innerHTML // => '<big>Python</big>'
    li_items[0].innerText // => 'Python'
    li_items[0].textContent // => 'Python'

}

const with_querySelector = () => {

    const li_items = document.querySelector(".ListItem")

    li_items[0].innerHTML // => '<big>Python</big>'
    li_items[0].innerText // => 'Python'
    li_items[0].textContent // => 'Python'



}


const with_querySelectorAll = () => {


    const li_items = document.querySelectorAll(".ListItem")

    li_items[2].innerHTML // => '<i>TypeScript</i>'
    li_items[2].innerText // => TypeScript
    li_items[2].textContent // => TypeScript


}


const imp_textContent = () => {

    const divImp = document.getElementById("div1")

    divImp.textContent // => '\n        I am a div Inside a DIV\n    '
    // TRY it out!

}