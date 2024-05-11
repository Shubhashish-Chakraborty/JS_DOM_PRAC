
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