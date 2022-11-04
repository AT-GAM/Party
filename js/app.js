$("document").ready(function(){
    /*navbar animation */
// globel variable for NavBar
let navBar = $("nav");
let heading = $(".heading");
let linksNavBar = $("nav a");
let navXIcon = $("nav i");
// this function hide the navbar when you click in the X icon
navXIcon.click(function () {
    navBar.animate({ width: "0%", padding: "0px" }, 1000, function () {
        navBar.hide();

    })
    heading.animate({ width: "100%" }, 1000);
    linksNavBar.hide(900);
    navXIcon.hide(900);
})
// this function hide or show the navbar when you click in the open icon
$("header#Home span").click(function () {
    if (navBar.width() == 0) {
        console.log("hello");
        navBar.show();
        navBar.animate({ width: "250px" , padding: "16px"}, 1000);
        heading.animate({ width: "85%" }, 1000);
        navXIcon.show(1000);
        linksNavBar.show(1000);


    }
    else {
        navBar.animate({ width: "0%", padding: "0px" }, 1000, function () {
            navBar.hide();

        })
        linksNavBar.hide(900);
        navXIcon.hide(900);



        heading.animate({ width: "100%" }, 1000);

    }
})
/* singer siction animation */
  let signers=$("section.signer .row h3");
  let signerDisc=$("section.signer .row .disappear")

  signers.click(function(){
    if(this.nextElementSibling.style.height!="0px"  ){
    $(this.nextElementSibling).slideToggle(800); 

    }
    else{
        $(this.nextElementSibling).slideToggle(800);
    }

  })
// counter down
function countdown() {
    let currentDay = new Date().getTime();
    let eventDay = new Date(2022, 12, 28).getTime();
    let remTime = eventDay - currentDay;

    let sec = Math.floor(remTime / 1000);
    let min = Math.floor(sec / 60);
    let hou = Math.floor(min / 60);
    let day = Math.floor(hou / 24) - 30;
    hou %= 24;
    min %= 60;
    sec %= 60;

    hou = (hou < 10) ? "0" + hou : hou;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    $("#days h3").html(  day + " D" );
    $("#days h3").html(  day + " D" );

    $("#hours h3").html(  hou + " h" );
    $("#minutes h3").html(  min + " m" );
    $("#seconds h3").html(  sec + " s" );

    setTimeout(countdown, 1000);
}

countdown();


// text area character counter

$(".inputs #massageFormControlTextarea1").keyup(function(e){
document.querySelector(".inputs #massageFormControlTextarea1").maxLength=100;
    if(this.value.length!==100){
        $("#counter").html(`${100-this.value.length} <span class="text-danger">character remained</span>`)

    }
    else{

        $("#counter").html(`<span class="text-danger">your available character finished </span> Characyer Reamining`)


    }

})

})