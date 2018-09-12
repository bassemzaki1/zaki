/*global $, document, window*/

$(document).ready(function () {
    'use strict';
    
    $('.navbar .navbar-header a.navbar-brand').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 600);
    });
    
    // Deal With Tabs => In Section Projects
    $('.tab-switch li').click(function () {
        
        // Add Selected Class To Active Link
        $(this).addClass('selected').siblings().removeClass('selected');
        // Hide All Divs
        $('.projects .projects-content > div').hide();
        // Show Divs
        $($(this).data('class')).show();
        /*window.console.log($(this).data('class'));*/
    });
    
    //Caching the scroll top element
     
    var scrollButton = $('#scroll-top');
     
    $(window).scroll(function () {
    
    // console.log($(this).scrollTop());

        if ($(this).scrollTop() >= 800) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });

    // Click on button to scroll top
    scrollButton.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 600);
    });
    
    // Smooth scroll
    
    $('.navbar ul li a').click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $($(this).attr('href')).offset().top - 10
        }, 500);
    });
    
    
    // navbar
    
    $(window).scroll(function () {
        // window.console.log($('.navbar').height());
        // window.console.log($(window).scrollTop());
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
    
});