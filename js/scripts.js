/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
// 
// Scripts
// 


// Toggle the side navigation
const sidebarToggle = document.body.querySelector('#sidebarToggle');
if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    });
}

function setClock() {
    let dateInfo = new Date();
    let hour = modifyNumber(dateInfo.getHours());
    let min = modifyNumber(dateInfo.getMinutes());
    let sec = modifyNumber(dateInfo.getSeconds());
    let year = dateInfo.getFullYear();
    let month = dateInfo.getMonth() + 1; //monthIndex를 반환해주기 때문에 1을 더해준다.
    let date = dateInfo.getDate();
    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
    document.getElementById("date").innerHTML = year + "년 " + month + "월 " + date + "일";
}
function modifyNumber(time) {
    if (parseInt(time) < 10) {
        return "0" + time;
    }
    else
        return time;
}
window.onload = function () {
    setClock();
    setInterval(setClock, 1000); //1초마다 setClock 함수 실행
};
