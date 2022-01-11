const clc = document.querySelector('.cancel');
const arr = document.querySelector('.arr_container');
const leftt_container = document.querySelector('.left_container');

arr.addEventListener('click', ()=>{
    arr.classList.add('active_arr');
    if(leftt_container.classList.contains('off')){
        leftt_container.classList.remove('off');
        leftt_container.classList.add('active');
    }
});
    clc.addEventListener('click', ()=>{
        arr.classList.remove('active_arr');
        if(leftt_container.classList.contains('active')){
            leftt_container.classList.remove('active');
            leftt_container.classList.add('off');
        }
    });