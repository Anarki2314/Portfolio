


function getMenu(element){
    let id=element.parentElement.parentElement.id
    let text=element.innerHTML
    let parent_type=element.parentElement.parentElement.getAttribute('class')
    if (id != 1){
        prev_active=document.getElementById(`${String(Number(id)-1)}`).querySelector('.active').innerHTML
        text+=`_${prev_active}`
    }


    let next=document.getElementById(`${String(Number(id)+1)}`).children[0]
    let next_types=type[parent_type][text]
    for (let index = Number(id)+1; index < 6; index++) {
        let remove=document.getElementById(`${String(index)}`)
        remove.children[0].innerHTML=''
    }
    for (let index = 0; index < next_types.length; index++) {
        const elem = next_types[index];
        if (id == 4){
            let p =document.createElement('p')
            let img= document.createElement('img')
            img.setAttribute('src',`assets/img/${element.innerHTML}.png`)
            let img_container=document.querySelector('.work_img_container')
            img_container.innerHTML=''
            img_container.append(img)
            p.innerHTML=elem
            next.append(p)
            return
        }
        let p = document.createElement('li');
        p.innerHTML=elem
        p.addEventListener('click', arrow(p))
        p.setAttribute('onclick','getMenu(this)')
        next.append(p)
    }
}
const arrow=(element)=>{
    element.addEventListener('click', function(e){
        let list=this.parentElement.children;
    for (let index = 0; index < list.length; index++) {
        list[index].classList.remove("active");

    }
    this.classList.add('active');
    })
}

let arrows= document.querySelectorAll('li');
arrows.forEach(element => {
    element.addEventListener('click',arrow(element))
});

let menu=document.querySelectorAll('.description_menu ul li')
menu.forEach(element => {
    element.addEventListener('click', function(e){
        let content=menu_list[this.innerHTML]
        let block= document.querySelector('.description_content p')
        block.innerHTML=content
    })
});
