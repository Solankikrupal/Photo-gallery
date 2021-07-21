const category = document.querySelectorAll('.category li');

const image = document.querySelectorAll('.images');
category.forEach((item)=>{

  item.addEventListener('click',()=>{
    var active = document.querySelector('.active');
    active.classList.remove('active');
      item.classList.add("active");
      image.forEach((img)=>{
        if(img.childNodes[1].classList.contains(item.innerHTML)){
          img.classList.add('show');
          img.classList.remove('hide')

        }
        else{
          img.classList.add('hide')
            img.classList.remove('show')
        }
      })

  })
})
