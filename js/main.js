// jQuery must be loaded - or this code will not work
// keep the next line at the very TOP of all your jQuery code
$(document).ready(() => {


// jQuery effects
// https://www.codecademy.com/learn/learn-jquery

// show/hide group +++

    $('.hide-button').on('click', () => {
        $('.first-div').hide();
    });

    $('.show-button').on('click', () => {
        $('.first-div').show();
    });

    $('.toggle-button').on('click', () => {
        $('.first-div').toggle();
    });

// fade group +++

    $('.fade-out-button').on('click', () => {
        $('.fade-div').fadeOut('slow');
    });

    $('.fade-in-button').on('click', () => {
        $('.fade-div').fadeIn('slow');
    });

    $('.fade-toggle-button').on('click', () => {
        $('.fade-div').fadeToggle('slow');
    });

// slide group +++

    $('.up-button').on('click', () => {
        $('.slide-div').slideUp();
    });

    $('.down-button').on('click', () => {
        $('.slide-div').slideDown();
    });

    $('.slide-toggle-button').on('click', () => {
        $('.slide-div').slideToggle();
    });

// mouseenter/mouseleave group +++

    $('.in-and-out').on('mouseenter', () => {
        $('.square1').hide();
    }).on('mouseleave', () => {
        $('.square1').show();
    });

// mouseup/mousedown group +++

    $('.up-and-down').on('mousedown', () => {
        $('.square2').hide();
    }).on('mouseup', () => {
        $('.square2').show();
    });


// mousemove group +++

// note: the area ('.moving' div) cannot have any top margin
// code below moves top left corner of square to cursor postion -
// while the cursor is inside the area ('.moving' div)

    // get top and left corner coordinates for the area
    let areaTop = $('.moving').position().top;
    let areaLeft = $('.moving').position().left;

    // set limits so square cannot go far outside the area
    let bottomBoundary = areaTop + $('.moving').height() - $('.square3').height() / 2;
    let rightBoundary = areaLeft + $('.moving').width() - $('.square3').width() / 2;

    // event handler detects every movement of the mouse
    $('.moving').on('mousemove', (event) => {
        // event.pageY and event.pageX are the mouse coordinates
        // relative to the entire page
        // square is INSIDE area, so adjust
        let pointY = event.pageY - areaTop;
        let pointX = event.pageX - areaLeft;

        // change position of square within boundaries
        if (event.pageY <= bottomBoundary && event.pageX <= rightBoundary) {
            $('.square3').css('top', pointY + 'px');
            $('.square3').css('left', pointX + 'px');
        }
    });

    // to reset the square's position, click the text
    $('.reset-square').on('click', () => {
        // note, we must get rid of the top value
        $('.square3').css('top', '');
        // change back to original values
        $('.square3').css('bottom', '2em');
        $('.square3').css('left', '2em');
    });

    // end of mousemove group +++


// keep the next line at the very bottom, below all your jQuery code
});
