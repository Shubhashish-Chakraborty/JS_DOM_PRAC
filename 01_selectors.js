const id_selector = () => {

    const head_div = document.getElementById("head-div-id") // Wo Particlular element SELECT HOGA
    const first_item = document.getElementById('item1')


    // head_div.style.border = "3px solid cyan"
    // head_div.style.margin = "20px"
    // head_div.style.padding = "20px"

    
}

const class_selector = () => {

    const h1_tag = document.getElementsByClassName("h1Tag")

    // This h1_tag which is selected is a HTMLCollection

    // Which need to converted to a an ARRAY

    const h1_tag_arr = Array.from(h1_tag) // HTMLCollection converted to an ARRAY

    const list_items = document.getElementsByClassName("ListItem")
    const list_items_arr = Array.from(list_items)
    

    list_items_arr.forEach(e => {

        e.style.color = "cyan"
        
    })

}


const query_selector = () => {

    // It returns the first found element ONLY
    // Nodelist or HTMLCollection ka koi sawal hi nhi paida hota


    list_items = document.querySelector("#item1") // ID

    list_items = document.querySelector(".h1Tag")
    list_items = document.querySelector(".ListItem")



}


const query_selector_all = () => {

    // This returns ALL the available elements!!!
    
    // Most IMP: IT RETURNS a NodeList

    const raw_h1 = document.querySelectorAll("h1")
    
    const list_items = document.querySelectorAll(".ListItem")

    
    // BUT HERE in The Prototype of nodelist go and check,
    // We can apply forEach LOOP!

    



}