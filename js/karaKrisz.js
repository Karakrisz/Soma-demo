$(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready
    //console.log("document is ready");
    $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open');
        $('.orientation').animate({
            width: "toggle"
        }, 300, 'linear');
    })
    // document ready  
});

// window.onload = function () {
//     // executes when complete page is fully loaded, including all frames, objects and images
//     console.log("window is loaded");
//     // window load  
// };