// $('#readmore').click(function() {
//     $('#hello').animate({ height: '100%' });
//     $(this).hide();
//     $('#readless').show(function() {
//         $('#readless').click(function() {
//             $('#hello').animate({ height: '100px' });
//             $(this).hide();
//             $('#readmore').show();
//         });
//     });
// });

// $('.readmore').click(function() {
//     $('.hello').animate({ height: '100%' });
//     $(this).hide();
//     $('.readless').show(function() {
//         $('.readless').click(function() {
//             $('.hello').animate({ height: '200px' });
//             $(this).hide();
//             $('.readmore').show();
//             $('.hello img').css("height", "fit-content");
//         });
//     });
// });


$('.readmore').click(function() {
    $('.hello').animate({ height: '100%' });
    $(this).hide();
    $(this).next().show()
});

$('.readless').click(function() {
    $('.hello').animate({ height: '200px' });
    $(this).hide();
    $(this).prev().show();
    $('.hello img').css("height", "fit-content");
});