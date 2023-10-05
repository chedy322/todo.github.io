var input = document.querySelector('.input');
var btn = document.querySelector('.btn');
var createtask = document.querySelector('.createtask');

btn.addEventListener('click', function () {
    let task = document.createElement('div');
    task.classList.add('task');
    
    let li = document.createElement('li');
    li.innerText = input.value;
    task.appendChild(li);
    
    let check = document.createElement('button');
    check.classList.add('check');
    check.innerHTML = '<i class="gg-check"></i>';
    task.appendChild(check);
    
    let cancel = document.createElement('button');
    cancel.classList.add('cancel');
    cancel.innerHTML = '<i class="gg-close-r"></i>';
    task.appendChild(cancel);

    if (!input.value) {
        alert('Please enter task');
    } else {
        createtask.appendChild(task);
    }
    input.value="";

    
check.addEventListener('click',function(){
    this.parentElement.style.textDecoration='line-through';
})
cancel.addEventListener('click',function(){
    this.parentElement.remove();
})

});
