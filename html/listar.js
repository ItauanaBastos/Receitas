$(document).ready(function(){

    //agregando classe no primeiro enlace====
    $('.categoty_list .categoryItem[category="all"]').addClass('ct_item-active');

    $('.categoryItem').click(function(){
        var catReceita =$(this).attr('category');
        console.log(catReceita);

        //agregando classe a repetição selecionada
        $('.categoryItem').removeClass('ct_item-active');
        $(this).addClass('ct_item-active')

        //ocultando produtos
        $('product-item').hide();

        //mostrando produtos 
        $('.product-item[category="'+catReceita+'"]').show();

    });
    $('category_item[category="all"]').click(function(){
        $('product-item').show();
    });




});