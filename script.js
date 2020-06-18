const reviews = [
    {
    id: 1,
    name: 'Thor',
    job: 'Kick Butt',
    text: 'I am the first product by product and of something from Asgard'
    },
    {
    id: 2,
    name: 'Tony Stark',
    job: 'Pick a fight',
    text: 'I created Iron Man and stark industries'
    },
    {
    id: 3,
    name: 'John Snow',
    job: 'I hate sitting on this wall',
    text: 'I killed the white walkers'
    },
    {
    id: 4,
    name: 'Vision',
    job: 'Obviously, to see you',
    text: 'I see Youuuuuuuuuuuuuuuuuu !!!!!!!!!!!!!'
    },
]

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const rndBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//window on load
window.addEventListener("DOMContentLoaded", function(){
    // const item = reviews[currentItem];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
   // showPerson(currentItem);
})


function showPerson(person){
    const item = reviews[currentItem];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;   
}

next.addEventListener('click', function(){
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

rndBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length)
  //  console.log(currentItem);
    showPerson(currentItem);
})

prev.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0 ){
        currentItem = reviews.length-1;
    }
    showPerson(currentItem);
})