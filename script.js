let txt = document.getElementById("input");
let submit = document.querySelector('#submit');

submit.addEventListener('click', ()=>{
    
    let cont = document.getElementById('input');
    let allTasks = localStorage.getItem('allTasks');
    if(allTasks == null){
        waitTask = [];
    }else{
        waitTask = JSON.parse(allTasks);
    }
    waitTask.push(cont.value);
    localStorage.setItem('allTasks', JSON.stringify(waitTask));
    input.value = "";
myNotes();
})

function myNotes  (){
    let allTasks = localStorage.getItem('allTasks');
    if(allTasks == null){
        waitTask = [];
    }else{
        waitTask = JSON.parse(allTasks);
    }
    let index = "";
    waitTask.forEach(function(showThis){
        index +=`
        <ul>
                        <li>a</li><a href=""><i class="fa fa-ellipsis-h">${showThis}</i></a>
                        <li>a</li><a href=""><i class="fa fa-ellipsis-h">${showThis}</i></a>
                        <li>a</li><a href=""><i class="fa fa-ellipsis-h">${showThis}</i></a>
        </ul>`
    });
    
}

 

