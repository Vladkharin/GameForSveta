
const btns = document.querySelectorAll('.firstBlock__grid-text')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.remove('notActive')
    })
})


const nextBtn = document.querySelector('.img')

const slidesItem = document.querySelectorAll('.firstBlock__item')
const slidesFieldBlock = document.querySelector('.firstBlock__items')
let widthThirdBlock = window.getComputedStyle(slidesFieldBlock).width;

let slideIndexThirdBlock = 1;
let offsetThirdBlock = 0;

slidesFieldBlock.style.width = 100 * slidesItem.length + (slidesItem.length * 2000) + '%';
slidesFieldBlock.style.transition = "0.5s all"

slidesItem.forEach((slide) => {
    slide.style.width = widthThirdBlock;
});

widthThirdBlock = +widthThirdBlock.slice(0, widthThirdBlock.length - 2) + 2000

nextBtn.addEventListener('click', () => {
    console.log(nextBtn)
    if (offsetThirdBlock == widthThirdBlock * (slidesItem.length - 1)) {
        offsetThirdBlock = 0
    } else {
        offsetThirdBlock += widthThirdBlock
    }
    
    
    slidesFieldBlock.style.transform = `translateX(-${offsetThirdBlock}px)`
})


