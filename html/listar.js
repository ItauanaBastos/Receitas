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

    const receitas = {
        
    };
});

document.getElementById('verificarButton').addEventListener('click', function() {
        const categoria = document.getElementById('categoriaInput').value.toLowerCase();
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = ''; // Limpa o resultado anterior

        // Verifica se a categoria existe no objeto de refeições
        if (receita[category]) {
            // Loop para exibir cada prato da categoria
            receita[category].forEach(function(item) {
                const li = document.createElement('li');
                li.textContent = item;
                resultadoElement.appendChild(li);
            });
        }
});




