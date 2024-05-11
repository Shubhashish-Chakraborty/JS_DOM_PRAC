const do_Styling = () => {


    const languages = document.querySelectorAll(".ListItem")
    const languages_div = document.querySelectorAll(".list-div")


    languages.forEach((e) => { // try Out with language_div too

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


const about_setAttribute = () => {

    // setAttribute("id", "testID")
    // setAttribute('class' , 'testClasss')

    // CAN ADD OR CHANGE an ATTRIBUTE or ITS DATA TOO!!!!

    const lonelyDiv = document.querySelectorAll("div")[2]

    // lonelyDiv.setAttribute("id" , "lonely-div-id")
    // lonelyDiv.setAttribute("class" , "lonely-div-class")

    // CAN ADD STYLING ALSO
    lonelyDiv.setAttribute("style", "color: red")


}

const about_Child_parent = () => {

    const parent = document.querySelector(".week")

    // parent.childElementCount // => 7

    // parent.children // => Will return a HTMLcollection

    const daysList = Array.from(parent.children)

    // daysList[0,1,2,...] // => Now by indexing Get the Children

    // More Properties:

    // console.log(parent.firstElementChild);
    // console.log(parent.lastElementChild);


    // const dayone = document.querySelector(".day")

    // console.log(dayone);
    // console.log(dayone.parentElement);
    // console.log(dayone.nextElementSibling);


    // console.log("Nodes:" , parent.childNodes); // Saare nodes document ke means Line break , spaces , text etc etc sub kuch gina jaega!



}