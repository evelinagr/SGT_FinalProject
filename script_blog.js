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

$('#readmore').click(function() {
    $('#hello').animate({ height: '100%' });
    $(this).hide();
    $('#readless').show(function() {
        $('#readless').click(function() {
            $('#hello').animate({ height: '100px' });
            $(this).hide();
            $('#readmore').show();
        });
    });
});