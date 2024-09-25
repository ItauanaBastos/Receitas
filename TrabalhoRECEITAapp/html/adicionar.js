function addReceita() {
    const nome = document.getElementById('inputNome').value.trim();
    const ingredientes = document.getElementById('inputIngredientes').value.trim();
    const receita = document.getElementById('inputReceita').value.trim();
    const categoria = document.getElementById('inputCategoria').value;

    if (nome && ingredientes && receita) {
        const areaLista = document.getElementById('areaLista');
        const div = document.createElement('div');
        div.classList.add('receita');
        
        div.innerHTML = `
            <h2>${nome}</h2>
            <h4>Categoria: ${categoria}</h4>
            <h3>Ingredientes:</h3>
            <p>${ingredientes}</p>
            <h3>Modo de Preparo:</h3>
            <p>${receita}</p>
        `;
        
        areaLista.appendChild(div);

        // Limpar os campos de input
        document.getElementById('inputNome').value = '';
        document.getElementById('inputIngredientes').value = '';
        document.getElementById('inputReceita').value = '';
        document.getElementById('inputCategoria').value = 'almoço';
    }
}

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('show');
}

function showAddForm() {
    document.getElementById('mainContent').innerHTML }