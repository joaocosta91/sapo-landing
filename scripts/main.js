$( document ).ready(function() {
    console.log( "ready!" )
    
    //// template
    // Menu open
    var overlay = document.getElementById('overlay');
    var closeMenu = document.getElementById('close-menu');
    var openMenu = document.getElementById('open-menu');
    
    openMenu.addEventListener('click', () => {
        overlay.classList.add('show-menu');
    })

    closeMenu.addEventListener('click', () => {
        overlay.classList.remove('show-menu')
    })
    
    // Collapse text
    $('.hidden-text').hide()
    $('#more').on("click", function() {
        $('.hidden-text').toggle()
    })
    
    //// template desktop
    if ($(window).width() >= 1200) {
        $('.responsive-text').insertBefore('#responsive-text')
    }

    //// change color
    $('.green').on("click", function() {
        $(this).addClass('current').css('order', '2')
        $('.orange').removeClass('current').css('order', '1')
        $('.blue').removeClass('current').css('order', '3')
        $('#circle').css({ stroke: "#33CC99" })
        $('#square-one').css({ stroke: "#33CC99" })
        $('#square-two').css({ stroke: "#33CC99" })
        $('#triangle-two').css({ stroke: "#33CC99" })
        $('#triangle-one').css({ stroke: "#33CC99" })
        $('#triangle-tree').css({ stroke: "#33CC99" })
    })
    $('.blue').on("click", function() {
        $(this).addClass('current').css('order', '2')
        $('.orange').removeClass('current').css('order', '3')
        $('.green').removeClass('current').css('order', '1')
        $('#circle').css({ stroke: "#3399CC" })
        $('#square-one').css({ stroke: "#3399CC" })
        $('#square-two').css({ stroke: "#3399CC" })
        $('#triangle-one').css({ stroke: "#3399CC" })
        $('#triangle-two').css({ stroke: "#3399CC" })
        $('#triangle-tree').css({ stroke: "#3399CC" })
    })
    $('.orange').on("click", function() {
        $(this).addClass('current').css('order', '2')
        $('.green').removeClass('current').css('order', '1')
        $('.blue').removeClass('current').css('order', '3')
        $('#circle').css({ stroke: "#FF9933" })
        $('#square-one').css({ stroke: "#FF9933" })
        $('#square-two').css({ stroke: "#FF9933" })
        $('#triangle-one').css({ stroke: "#FF9933" })
        $('#triangle-two').css({ stroke: "#FF9933" })
        $('#triangle-tree').css({ stroke: "#FF9933" })
    }) 
})