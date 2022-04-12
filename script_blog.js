$(function() {
    $('#readmore').click(function() {
        $('#hello').animate({ height: '100%' });
        $(this).hide();
        return false;
    });
});