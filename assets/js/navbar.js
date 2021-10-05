function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function jump()
{
$('#Timeline').scrollTop(0);
}

// $('html, body').hide();

// // $(document).ready(function()
// // {
// //     $('a[href="^=#]"').bind("click", jump);

// //     if (location.hash){
// //         setTimeout(function(){
// //             $('html, body').scrollTop(0).show();
// //             jump();
// //         }, 0);
// //     }else{
// //         $('html, body').show();
// //     }
// // });
