$(document).ready(function(){
   $('.block-content').hide();

    $('.wellsRelease').on('click', '.btn', function() {
        $(this).prev().slideToggle('slow');
    });
    $('.wellsVault').on('click', '.btn', function() {
        $(this).prev().slideToggle('slow');
    });
    $('.wellsVaultClerk').on('click', '.btn', function() {
        $(this).prev().slideToggle('slow');
    });
    $('.wellsData').on('click', '.btn', function() {
        $(this).prev().slideToggle('slow');
    });
    $('.education').on('click', '.btn', function() {
        $(this).prev().slideToggle('slow');
    });
    $('.skills').on('click', '.btn', function() {
        $(this).prev().slideToggle('slow');
    });
});