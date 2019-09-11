var allcookies = document.cookie;
var pos = allcookies.indexOf("idWorks=");
console.log(document.cookie);

let currentPageRight = 1;
let currentPageLeft = 2;
let idWorks = pos;
let lastPage = 8;
function draw(){
    
    //左側ページの描写
    let leftpage_a = document.getElementById("leftpage_a");
    let leftpage_img = document.createElement("img");
    leftpage_img.setAttribute("src", `./img/${idWorks}/${currentPageLeft}.jpg`);
    leftpage_img.setAttribute("id", "imgLeft");
    leftpage_img.setAttribute("style", "height:100vh;width:auto;");

    leftpage_a.appendChild(leftpage_img);

    //右側ページの描写
    let rightpage_a = document.getElementById("rightpage_a");
    let rightpage_img = document.createElement("img");
    rightpage_img.setAttribute("src", `./img/${idWorks}/${currentPageRight}.jpg`);
    rightpage_img.setAttribute("id", "imgRight");
    rightpage_img.setAttribute("style", "height:100vh;width:auto;");

    rightpage_a.appendChild(rightpage_img);

}