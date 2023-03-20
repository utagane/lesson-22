'use strict';

// Задача 1
function task_1(){
    let task = document.getElementById('task_1');
    task.innerHTML = 'Ку-ку! А я <b>жирный</b>';
}

// Задача 2
function task_2(){
    let task = document.getElementById('task_2');
    task.outerHTML = '<h3>Абзац превратился в h3!</h3>';
}

// Задача 3
function task_3(){
    let task = document.getElementById('task_3');
    task.outerHTML = '<h3>' + task.innerHTML + '</h3>';
}

// Задача 4
function task_4(){
    let arg1 = Number( document.querySelector('#arg1').value );
    let arg2 = Number( document.querySelector('#arg2').value );
    let result = document.querySelector('#result');

    result.setAttribute('value', arg1 + arg2); 

}

// Задача 5
function task_5(){
    let task = document.querySelectorAll('.task_5');
    for(let i=0; i < task.length; i++){
        task[i].innerHTML = i;
    }
}