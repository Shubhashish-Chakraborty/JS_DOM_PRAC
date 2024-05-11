const about_getAttribute = () => {

    const paras = document.querySelectorAll(".para")


    // element.getAttribute("Specify which attribute you want")


    paras.forEach(e => {

        // console.log(e.getAttribute('id'))
        alert(e.innerText)

        // Will get The attribte ID for the paras
    })


}