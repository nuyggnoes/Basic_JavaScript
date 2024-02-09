const number_box = document.getElementsByTagName("div");
const list = document.getElementsByTagName("li");

function handleMouseClick(event){
    console.log(event);
    let text = event.target.innerText;
    let num = parseInt(text);
    event.target.innerText = num + 1;
}


function handleMouseOver(event){
}

function handleMouseLeave(event){

}

for(let i = 0; i < number_box.length; i++){
    number_box[i].addEventListener("click", handleMouseClick);
    number_box[i].addEventListener("mouseover", handleMouseOver);
    number_box[i].addEventListener("mouseleave", handleMouseLeave);
}
