'use strict';

const imgs = [
    {'id' : '1', 'url': './img/chrono.jpg'},
    {'id' : '2', 'url': './img/inuyasha.jpg'},
    {'id' : '3', 'url': './img/ippo.png'},
    {'id' : '4', 'url': './img/tenchi.jpg'},
    {'id' : '5', 'url': './img/tenjhotenge.jpg'},
    {'id' : '6', 'url': './img/yuyuhakusho.jpg'},
]

const conteinerItens = document.querySelector('#conteiner')

const  loadImgs = (imgs, conteiner)=>{
    imgs.forEach(img => {
        conteiner.innerHTML +=
        `<div class='item'>
        <img src='${img.url}'>
        </div>`
    });
}

loadImgs( imgs, conteinerItens);

let itens = document.querySelectorAll('.item')

const previous = () =>{
    conteinerItens.appendChild( itens[0])
    itens = document.querySelectorAll('.item')
}

const next = () =>{
    const lastItem = itens[itens.length -1]
    conteinerItens.insertBefore( lastItem, itens[0])
    itens = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)