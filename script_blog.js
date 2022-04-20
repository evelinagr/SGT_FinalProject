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


$('.readmore').click(function(event) {
    let elem = $(event.target);
    console.log(elem);
    let articleId = elem.data('articleId');
    console.log(articleId);
    $('#blogPost' + articleId + ' .readless').show();
    $('#blogPost' + articleId + ' .hello').animate({ height: '100%' });
    $('#blogPost' + articleId + ' .readmore').hide();

});

$('.readless').click(function(event) {
    let elem = $(event.target);
    console.log(elem);
    let articleId = elem.data('articleId');
    console.log(articleId);
    $('#blogPost' + articleId + ' .readless').hide();
    $('#blogPost' + articleId + ' .hello').animate({ height: '200px' });
    $('#blogPost' + articleId + ' .readmore').show();

});