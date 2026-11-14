document.querySelectorAll('[data-gallery]').forEach(gallery=>{
  const category=gallery.dataset.gallery;
  const photo=gallery.querySelector('.gallery-photo');
  const dots=[...gallery.querySelectorAll('[data-slide]')];
  const status=gallery.querySelector('.gallery-status');
  let current=0;
  function show(index){
    current=(index+dots.length)%dots.length;
    photo.src=`assets/photos/${category}-${current+1}.jpg`;
    photo.alt=`${category.charAt(0).toUpperCase()+category.slice(1)} beauty inspiration, photo ${current+1}`;
    dots.forEach((dot,i)=>dot.setAttribute('aria-pressed',String(i===current)));
    status.textContent=`Photo ${current+1} of ${dots.length}`;
  }
  gallery.querySelector('.previous').addEventListener('click',()=>show(current-1));
  gallery.querySelector('.next').addEventListener('click',()=>show(current+1));
  dots.forEach(dot=>dot.addEventListener('click',()=>show(Number(dot.dataset.slide))));
  gallery.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft'){event.preventDefault();show(current-1)}
    if(event.key==='ArrowRight'){event.preventDefault();show(current+1)}
  });
});
