function clickme() {
    // document.getElementsByClassName('right-navbar').item(0).setAttribute('style','display:block')
    document.getElementsByClassName('right-navbar').item(0).setAttribute('class','test')

}

const nav = document.querySelector('.navbar')
    fetch('HomeFurniture/extern.html')
    .then(res => res.text())
    .then(data =>{
        nav.innerHTML = data;
    })
 