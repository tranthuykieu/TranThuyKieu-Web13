// $(document).ready(function(){
        // put all code here when 
        //    <script src="./main.js"></script> is put in <head> tag of file .html
// });   

var pageToken = '';
var isLoading = false;
var debounceTimeout;

$("#search").on("input", function(e) {
   var keyword = $("#keyword").val();
   pageToken = '';

   clearTimeout(debounceTimeout); 
    debounceTimeout = setTimeout(function(){
        if(keyword){
            $("#result-list").html(``); // delete all old results when user has new submit 
            $(".lds-roller").css("opacity", "1");
            search(keyword); 
        } else 
            $(".lds-roller").css("opacity", "0");
    },1000);

    
});

$(window).on("scroll", function() {
    if ($(document).height() - $(window).height() - $(window).scrollTop() < 300){
        if (pageToken && !isLoading){
            isLoading = true;
            var keyword = $("#keyword").val();
            search(keyword);
        }
    } 
});


function search(keyword) {
    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q= 
              ${keyword}&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pagetoken=${pageToken}`,
        type: 'GET',
        success: function(response){
             pageToken = response.nextPageToken ? response.nextPageToken : null;
 
            for(var i = 0; i < response.items.length; i++){
                 if(response.items[i].id.kind == "youtube#video"){
                     $("#result-list").append(`
                         <a class="result col-md-12" 
                                 href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}?autoplay=true" 
                                 target="_self">
                         <img src="${response.items[i].snippet.thumbnails.default.url}" alt="">
                         <div class="video_info">
                             <h2 class="title">${response.items[i].snippet.title}</h2>
                             <p class="description">${response.items[i].snippet.description}</p>
                             <span>View </span>
                         </div>
                         </a>
                     `);
                } 
            }
            isLoading = false;
        },   
    });
}

