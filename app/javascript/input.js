function inputDetails (){
  const inputWeight = document.getElementById('input-weight');

  inputWeight.addEventListener("click", () => {
    inputWeightWindow = window.open('new', 'input_weight', 'width=500, height=400');
    const formWeight = document.getElementById("weight-input");
  });

  // const submitWeight = document.getElementById("weight-submit");
  // submitWeight.addEventListener("click", () => {
    // const formData = new FormData(formWeight);
    // const XHR = new XMLHttpRequest();
    // XHR.open("POST", "/weights", true);
    // XHR.responseType = "json";
    // XHR.send(formData);
    // inputWeightWindow.close();
  // });
};

// function postWeight (){
//   const formWeight = document.getElementById("weight-input");
//   const submitWeight = document.getElementById("weight-submit");

//   submitWeight.addEventListener("click", () => {
//     const formData = new FormData(formWeight);
//     const XHR = new XMLHttpRequest();
//     XHR.open("POST", "/weights", true);
//     XHR.responseType = "json";
//     XHR.send(formData);
//     inputWeightWindow.close();
//   });
// };

window.addEventListener('load', inputDetails)