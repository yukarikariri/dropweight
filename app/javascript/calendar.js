function input (){

  console.log("load ok");
 
  const exerciseIcon = document.getElementsByClassName("top-page");

  exerciseIcon = addEventListener("mouseover", () => {
    console.log("mouseover")
  });
};

window.addEventListener('load', input);