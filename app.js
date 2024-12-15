const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".list-group");
const clearBtn = document.querySelector(".clear-tasks");


loadEventlisteners();
function loadEventlisteners() {
     form.addEventListener('submit' , addTask);
     taskList.addEventListener('click', removeTask);
     clearBtn.addEventListener('click' , cleartask)
     filter.addEventListener('keyup' , filtertask)
     
 }

 

function addTask(e){
    if (taskInput.value === "") {
        alert ("برای افزودن فیلتر لطفا عنوان فیلتر را وارد نمایید")
        
    } else {

    const li = document.createElement('li');
    li.className= 'list-group-item d-flex align-items-center';
    li.appendChild(document.createTextNode(taskInput.value));
    const i = document.createElement('i');
    i.className='fas fa-times text-danger mr-auto delete-item';
    li.appendChild(i);
    taskList.appendChild(li);
    taskInput.value= '';
    e.preventDefault();

    }
} 


function removeTask(e){
    if (e.target.classList.contains('delete-item')) {
        if (confirm("ایا برای حذف فیلتر مطمعن هستید؟")) {
            
            e.target.parentElement.remove();
            
        }
        
    }
}


function cleartask(e){
    if (confirm("ایا برای حذف فیلتر ها مطمعن هستید؟")) {
    taskList.innerHTML=""
    }
}

function filtertask(e){
const text = e.target.value.toLowerCase();


document.querySelectorAll('.list-group-item').forEach(function(task){
    const item = task.textContent;

    if (item.toLowerCase().indexOf(text)!= -1) {
        task.classList.add("d-flex");
    } else {
        task.classList.remove("d-flex");
        task.style.display='none'
        
    }
})



}