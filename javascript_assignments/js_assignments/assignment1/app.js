const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function render(){
  list.innerHTML = '';
  tasks.forEach((t,i)=>{
    const li=document.createElement('li');
    li.textContent=t;
    li.onclick=()=>{ tasks.splice(i,1); save(); render(); };
    list.appendChild(li);
  });
}

function save(){
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

btn.onclick=()=>{
  if(input.value){
    tasks.push(input.value);
    input.value='';
    save();
    render();
  }
};

render();
