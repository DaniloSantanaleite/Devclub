const element = document.getElementById("Clique")
const all = document.querySelector("body")
const square = document.getElementById("quadrado");


changeBackGround = () => {
     if (all.style.backgroundColor === "rgb(255, 255, 255)" || all.style.backgroundColor === "") {
      all.style.backgroundColor = "black";
    } else {
      
      all.style.backgroundColor = "rgb(255, 255, 255)";
    }
  }

  const changeBackGroundSquare = () => {
    if (all.style.backgroundColor === "rgb(255, 255, 255)" || all.style.backgroundColor === "") {
      square.style.backgroundColor = "black"  
    } else {
      square.style.backgroundColor = "rgb(255, 255, 255)"  
  }
}
  
element.addEventListener("click",changeBackGround)
element.addEventListener("click",changeBackGroundSquare)


 