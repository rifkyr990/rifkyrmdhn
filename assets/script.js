//  Ini Fungsi Button Navigation
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//  Ini Fungsi Button Whatsapp
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function url() {
    location.replace("https://i.pinimg.com/474x/73/a0/82/73a0826086f487e5e77ee060db1c0785.jpg");
}