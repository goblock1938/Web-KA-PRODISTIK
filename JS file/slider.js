const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

next.addEventListener('click', () =>{
    initslider ('next');
})
prev.addEventListener('click', () =>{
    initslider ('prev');
})
const initslider = (type) => {
    const slideritem = list.querySelectorAll('.item');
    const thumbnailitem = thumbnail. querySelectorAll('.image');
    // jika click next
    if(type === 'next'){
        list.append(slideritem[0])
        thumbnail.append(thumbnailitem[0])
        slider.classList.add('next')
    } 
    // jika click previous
    else {
        const lastitem = slideritem.length - 1;
        list.prepend(slideritem[lastitem])
        thumbnail.prepend(thumbnailitem[lastitem])
        slider.classList.add('prev')
    }
    setTimeout(() => {
        slider.classList.remove('next');
        slider.classList.remove('prev');
    },1000)
}