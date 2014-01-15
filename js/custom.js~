/***************************************************
                ON LOAD ACTIONS
***************************************************/
jQuery(window).load(function () {
  $('.main').fadeIn(1000);
});

/***************************************************
                 ON WINDOW RESIZE ACIONS
***************************************************/

jQuery(window).resize(function() {
	menu_auto_width();
});

jQuery(document).ready(function() {


/***************************************************
                 NAVIGATION 
***************************************************/

// main nav functionality
$('.nav li a').on('click',function(e){
  e.preventDefault();
	 // Scroll to top on click
    $('body,html').animate({
        scrollTop: 0
    }, 0); 
    
    var anchor = $(this);
    var anchor_id = anchor.attr('href');


    $('.content_wrap').slideUp(500);

    $('.navigation_wrap').addClass('active');
    $('.hidden_data').fadeIn(600);

    $('.content_box').slideUp(550);
    $(anchor_id+'.content_box').slideDown(600);
    $('.hideable').hide();	

    $('.nav li').removeClass('active');
    anchor.parent().addClass('active');

    if(anchor_id == '#resume' || anchor_id == ''){
        loadSkills();
        $('.under_wrap').slideDown();
    }
    else{
        $('.under_wrap').slideUp();
    }

    if(anchor_id ==''){
        $('#top').fadeIn();
        $('.hideable').show();
    }
   
   //Activate Gmap
   if ($('#map_canvas').parent().parent().is(':visible')) {
		initialize_gmap();
	 } 
   
}); 

// close all other divs and return to start
$('#logo').on('click', function(e){
    e.preventDefault();

    $('.content_box ').slideUp(550);
    $('.content_wrap').slideDown(500);

    $('.hidden_data').fadeOut(600);
    $('.under_wrap').slideUp();
    $('.hideable').hide();  

    $('.navigation_wrap').removeClass('active');
    $('#top').fadeOut();

    $('.nav li').removeClass('active');

});

// scroll body to 0px on click
$('#top').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 800);
  return false;
});

// on window change detect screen size
if (matchMedia) {
    var mq = window.matchMedia("only screen and (max-width: 600px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// main nav functionality when nav is responsive




});

/*-----------------------------------------------------------------------------------*/
/*  LOAD SKILLS
/*-----------------------------------------------------------------------------------*/

function loadSkills(){

    $('.skill_set').each(function() {
        var skill = $(this);
        var skill_width = $(this).attr('data-skill');  

       // skill.css('width', skill_width+'%');     
        skill.animate({
            width: skill_width+'%'
        },2000);

    });

}

/*-----------------------------------------------------------------------------------*/
/*  MATCH MEDIA RESPONSIVE jQUERY PLUGIN
/*-----------------------------------------------------------------------------------*/

function WidthChange(mq) {
    if (mq.matches) {       
        $('.navigation_wrap').addClass('responsive');
    }
    menu_auto_width();
}

/*-----------------------------------------------------------------------------------*/
/*  AUTO RESIZE MENU
/*-----------------------------------------------------------------------------------*/

function menu_auto_width(){
	var main_width = $('div.main').width();
	var num_items = $('.nav li').length;
	var nav_width = (main_width - (num_items - 1)) / num_items;
	var last_width = main_width - (num_items - 1) - ((num_items - 1) * nav_width) - 0.5;
	$('.nav li').width(nav_width);
	$('.nav li:last-child').width(last_width);
}
