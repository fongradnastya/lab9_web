const animItems = document.querySelectorAll("._anim_items");

if (animItems.length > 0){
    window.addEventListener('scroll', animate);
}

function animate(){
    for(let i = 0; i < animItems.length; i++){
        animOnScroll(animItems[i]);
    }
}

function animOnScroll(animItem){
    const animHeight = animItem.offsetHeight;
    const animPos = getTopPos(animItem);
    const animStart = 4;
    let animItemPoint = window.innerHeight - animHeight / animStart;
    if(animHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }
    if(scrollY > animPos - animItemPoint && scrollY < animPos + animHeight){
        animItem.classList.add('_active');
    }
    else{
        animItem.classList.remove('_active');
    }
}

function getTopPos(el){
    const rect = el.getBoundingClientRect(),
    scrolltop = window.pageYOffset || document.documentElement.scrolltop;
    return rect.top + scrolltop;
} 

setTimeout(()=>{
    animate();
}, 300);
