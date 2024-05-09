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


}
