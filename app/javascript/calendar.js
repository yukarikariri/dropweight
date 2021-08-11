function input (){
  let calendarPrevious = document.getElementById('calender_previous');
  calendarPrevious.addEventListener('click', () => {
    const XHR = new XMLHttpRequest();
    XHR.open('GET', "/weight", true);
    XHR.responseType = "json";
    });
};

window.addEventListener('load', input);