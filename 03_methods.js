const do_Styling = () => {


    const languages = document.querySelectorAll(".ListItem")
    const languages_div = document.querySelectorAll(".list-div")


    languages.forEach((e) => {

        e.style.backgroundColor = "black"
        e.style.color = "cyan"
        
        e.style.border = "4px solid red"
        e.style.borderRadius = "50px"


        
    })

    
}


const about_getAttribute = () => {

    const paras = document.querySelectorAll(".para")


    // element.getAttribute("Specify which attribute you want")


    paras.forEach(e => {

        // console.log(e.getAttribute('id'))
        alert(e.innerText)

        // Will get The attribte ID for the paras
    })


}