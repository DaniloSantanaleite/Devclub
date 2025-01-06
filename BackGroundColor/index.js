const element = document.getElementById("Clique")
const all = document.querySelector("body")

changeBackGround = () => {
     if (all.style.backgroundColor === "rgb(255, 255, 255)" || all.style.backgroundColor === "") {
      all.style.backgroundColor = "black";
    } else {
      
      all.style.backgroundColor = "rgb(255, 255, 255)";
    }
  };
element.addEventListener("click",changeBackGround)