import './less/index.less'

// Your code goes here!
//1
document.body.addEventListener('mouseover', evt =>{
    evt.target.classList.toggle('blue')
})

//2
let orderCount = 0;
window.addEventListener('keydown', evt =>{
    
    if (evt.key == 6){
        orderCount += 1;
    }
    if (orderCount >1){
        document.body.innerHTML = 'Execute Order 66'
    }
})

//3
document.body.addEventListener('wheel', evt =>{
    evt.target.classList.toggle('blue')
})

//4
window.addEventListener('load', evt =>{
    console.log('this page has been loaded' )
})

//5
document.body.addEventListener('click', evt =>{
    evt.target.style.fontWeight = 'Bold'
})

//6
document.body.addEventListener('dblclick', evt =>{
    evt.target.style.fontSize = '4rem'
})

//7
window.addEventListener('resize', evt=>{
    document.body.innerHTML = 'You can double click sections to increase font size'
    
})

//8

document.body.addEventListener('select', evt =>{
    console.log('You have highlighted ${selection}')
})

//9
document.body.addEventListener('drag', evt=>{
    evt.target.style.width = '50%';
})

//10
document.body.addEventListener('dragend', evt=>{
    evt.target.style.width = '75%';
})

//preventDefault 11
document.body.addEventListener('copy', evt =>{
    evt.preventDefault()
})