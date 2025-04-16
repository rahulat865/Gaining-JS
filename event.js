

// function changeText(){
//     let para = document.getElementById('fpara')
//     para.textContent = 'this is bharat'
// }

// let fpara = document.getElementById('fpara')
// fpara.addEventListener('click' , changeText)

// let anchor = document.getElementById('fanchor')

// function nochange(event){
//     event.preventDefault()
//     anchor.textContent = "kitna video dekhoge"
// }

// anchor.addEventListener('click' , nochange)


//let para = document.querySelectorAll('p');

function alertpara(event){
    alert("this is para: " + event.target.textContent);
}

// for(let i = 0; i < para.length; i++){
//     let paras = para[i]
//     paras.addEventListener('click', alertpara);
// }

let mydiv = document.getElementById('mydiv')

document.addEventListener('click' , alertpara)