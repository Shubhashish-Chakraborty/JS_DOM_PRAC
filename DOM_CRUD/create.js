
// TO CREATE OR ADD ELEMENTS TO THE WEBPAGE WE USE -> createElement



const createElement = () => {

    const div_toCreate = document.createElement('div');

    // Now the created element is only in our memory not displayed / rendered on the webpage

    // Lets add some properties to the DIV

    div_toCreate.id = "createdDiv-id"
    div_toCreate.className = "createdDiv-class"

    div_toCreate.style.backgroundColor = "black"
    div_toCreate.style.color = "cyan"

    div_toCreate.style.width = "400px"
    div_toCreate.style.height = "400px"

    div_toCreate.style.border = "4px solid lightblue"
    div_toCreate.style.borderRadius = "40px"

    div_toCreate.style.display = "flex"
    div_toCreate.style.justifyContent = "center"
    div_toCreate.style.alignItems = "center"

    div_toCreate.appendChild(document.createTextNode("Hello World!"))


    // Now ab ye div ko webpage me render/show/add/display kerwana hai:

    // You have to specify all the parents first and then uss child ko append kerwana hai uss parent ke under

    document.body.appendChild(div_toCreate)


}
