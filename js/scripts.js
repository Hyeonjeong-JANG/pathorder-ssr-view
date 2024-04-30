/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
// 
// Scripts
// 


// // Toggle the side navigation
// const sidebarToggle = document.body.querySelector('#sidebarToggle');
// if (sidebarToggle) {
//     // Uncomment Below to persist sidebar toggle between refreshes
//     // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
//     //     document.body.classList.toggle('sb-sidenav-toggled');
//     // }
//     sidebarToggle.addEventListener('click', event => {
//         event.preventDefault();
//         document.body.classList.toggle('sb-sidenav-toggled');
//         localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
//     });
// }

// top-nav 시계
function setClock() {
    let dateInfo = new Date();
    let hour = modifyNumber(dateInfo.getHours());
    let min = modifyNumber(dateInfo.getMinutes());
    let sec = modifyNumber(dateInfo.getSeconds());
    let year = dateInfo.getFullYear();
    let month = dateInfo.getMonth() + 1;
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
    setInterval(setClock, 1000);
};

// 매장 운영 상태 변경 버튼
function storeStatus() {
    let isOpen = true; // 매장의 초기 상태 (열림)
    const storeStateColor = document.getElementById("storeStateColor");
    const storeStateText = document.getElementById("storeStateText");
    const icon = document.querySelector("#changeStoreStatusBtn i.fa-solid");
    const btnTitle = document.getElementById("storeStatusBtnText");

    document.getElementById("changeStoreStatusBtn").addEventListener("click", function () {
        isOpen = !isOpen; // 상태 토글
        if (isOpen) { // 매장이 열려있는 경우
            storeStateColor.style.backgroundColor = "rgb(93, 232, 50)";
            storeStateText.textContent = "영업중";
            icon.classList.remove("fa-door-closed");
            icon.classList.add("fa-door-open");
            btnTitle.textContent = "매장 닫기";
        } else { // 매장이 닫혀있는 경우
            storeStateColor.style.backgroundColor = "grey";
            storeStateText.textContent = "영업종료";
            icon.classList.remove("fa-door-open");
            icon.classList.add("fa-door-closed");
            btnTitle.textContent = "매장 열기";
        }
    });
}

// 주문 상세 모달
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})