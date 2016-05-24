//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(function(){
  $("#nav-burger-id").on("click", function(event){
    event.preventDefault();
    // Change active tab
    $(".menu-left").toggleClass('menu-transition-visible');
  });
});

$(function(){
  $("#return-item").on("click", function(event){
    event.preventDefault();
    //remove class visible
    $(".menu-left").removeClass('menu-transition-visible');
  });
});



/*
    //start by hiding all of them
    $(".tab-content").addClass('hidden'); // How do I ad§d an 'exception rule for selected content tab?'

    var target = clicked_tab.data('target');
    //show the one that needs to be shown
    var click_tab_content = $(target);
    click_tab_content.removeClass('hidden');
    */
