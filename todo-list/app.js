'use strict';

/* 
<label class="todo__item">
    <input type="checkbox">
    <div>teste de item 1</div>
    <input type="button" value="X">
</label>
*/
// let banco = [
//     {'tarefa' : 'estudar js', 'status': ''},
//     {'tarefa' : 'Netflix', 'status': 'checked'}
// ]

const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco)) ?? [];

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');

    item.innerHTML = `
        <input type="checkbox" ${status} data-indice = ${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X">
    `
    document.getElementById('todo_list').appendChild(item);
}

const limparTarefas = () =>{
    const todoList = document.getElementById('todo_list');
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild)
    }
}

const atualizarTela = () =>{
    limparTarefas();
    const banco = getBanco();
    banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    const text = evento.target.value;

    if(tecla === 'Enter'){
        const banco = getBanco();
        banco.push( {'tarefa' : text, 'status': ''})
        setBanco(banco);
        atualizarTela();
        evento.target.value = ''; // Limpa a tarefa nova
    }
   
}

const removerItem = (indice) =>{
    const banco = getBanco();
    banco.splice(indice, 1);
    setBanco(banco);
    atualizarTela();
}

const atualizarItem = (indice)=>{
    const banco = getBanco();
    banco[indice].status = banco[indice].status==='' ? 'checked' : ''; 
    setBanco(banco);
    atualizarTela(); 
}

const clickItem = (evento) =>{
    const elemento = evento.target;

    if(elemento.type === 'button'){
        const indice = elemento.dataset.indice;
        removerItem(indice);
    }
    else if(elemento.type === 'checkbox'){
        const indice = elemento.dataset.indice;
        atualizarItem(indice);
    }
}
document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todo_list').addEventListener('click', clickItem);
atualizarTela();