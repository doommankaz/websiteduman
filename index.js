/*eslint-env browser*/
/*jslint devel: true */
// When the user scrolls the page, execute myFunction 
function myFunction() {
    "use strict";
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

window.onscroll = function () {
    "use strict";
    myFunction();
};

window.onload = function () {
    "use strict";
    var js = document.getElementsByTagName("img")[7],
        css = document.getElementsByTagName("img")[6],
        cssPos = document.getElementsByTagName("h2")[5],
        cssCol = document.getElementsByTagName("h2")[6],
        html1 = document.getElementsByTagName("img")[5],
        html2 = document.getElementsByTagName("img")[4],
        html3 = document.getElementsByTagName("img")[3],
        js1 = document.getElementsByTagName("img")[8];

    js.addEventListener("mouseover", function () {
        js.style.opacity = "30%";
        document.getElementById("jsText1").style.display = "block";
    });
    js.addEventListener("mouseout", function () {
        js.style.opacity = "100%";
        document.getElementById("jsText1").style.display = "none";
    });
    js1.addEventListener("mouseover", function () {
        js1.style.opacity = "30%";
        document.getElementById("jsText2").style.display = "block";
    });
    js1.addEventListener("mouseout", function () {
        js1.style.opacity = "100%";
        document.getElementById("jsText2").style.display = "none";
    });
    css.addEventListener("mouseover", function () {
        css.style.opacity = "30%";
        document.getElementById("cssText1").style.display = "block";
    });
    css.addEventListener("mouseout", function () {
        css.style.opacity = "100%";
        document.getElementById("cssText1").style.display = "none";
    });
    cssPos.addEventListener("click", function () {
        var rand1 = Math.floor(Math.random() * 3);
        if (rand1 === 0) {
            cssPos.style.transform = "translate(400px, 0px)";
            cssPos.style.transition = "all 1s";
        } else if (rand1 === 1) {
            cssPos.style.transform = "translate(-400px, 0px)";
            cssPos.style.transition = "all 1s";
        } else {
            cssPos.style.transform = "translate(0)";
            cssPos.style.transition = "all 1s";
        }
    });
    cssCol.addEventListener("click", function () {
        var rand = Math.floor(Math.random() * 4);
        if (rand === 0) {
            cssCol.style.color = "black";
        } else if (rand === 1) {
            cssCol.style.color = "#7a9b8c";
        } else if (rand === 2) {
            cssCol.style.color = "#df43f2";
        } else {
            cssCol.style.color = "#3c5da1";
        }
    });
    html1.addEventListener("mouseover", function () {
        html1.style.opacity = "100%";
        html1.style.transform = "scale(1.2)";
        html1.style.transition = "all 3s";
        html2.style.opacity = "10%";
        html3.style.opacity = "10%";
    });
    html1.addEventListener("mouseout", function () {
        css.style.opacity = "100%";
        html1.style.transform = "scale(1)";
        html1.style.transition = "all 3s";
        html2.style.opacity = "90%";
        html3.style.opacity = "80%";
    });
    html2.addEventListener("mouseover", function () {
        html2.style.opacity = "100%";
        html2.style.transform = "scale(1.2)";
        html2.style.transition = "all 3s";
        html1.style.opacity = "10%";
        html3.style.opacity = "10%";
    });
    html2.addEventListener("mouseout", function () {
        html2.style.opacity = "90%";
        html2.style.transform = "scale(1)";
        html2.style.transition = "all 3s";
        html1.style.opacity = "100%";
        html3.style.opacity = "80%";
    });
    html3.addEventListener("mouseover", function () {
        html3.style.opacity = "100%";
        html3.style.transform = "scale(1.2)";
        html3.style.transition = "all 3s";
        html1.style.opacity = "10%";
        html2.style.opacity = "10%";
    });
    html3.addEventListener("mouseout", function () {
        html3.style.opacity = "80%";
        html3.style.transform = "scale(1)";
        html3.style.transition = "all 3s";
        html1.style.opacity = "100%";
        html2.style.opacity = "90%";
    });
    document.getElementById("buttonSlide1").addEventListener("click", function () {
        alert("Create!");
    });
    document.getElementById("buttonSlide2").addEventListener("click", function () {
        alert("Explore!");
    });
    document.getElementById("buttonSlide3").addEventListener("click", function () {
        alert("Overcome!");
    });
};
