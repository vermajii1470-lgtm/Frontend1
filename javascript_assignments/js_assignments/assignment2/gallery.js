const gallery=document.getElementById('gallery');
const modal=document.getElementById('modal');
const modalImg=document.getElementById('modalImg');

const images=[1,2,3,4,5,6].map(n=>`https://picsum.photos/300/200?random=${n}`);

images.forEach(src=>{
  const img=document.createElement('img');
  img.dataset.src=src;
  gallery.appendChild(img);
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.src=e.target.dataset.src;
      observer.unobserve(e.target);
    }
  });
});
document.querySelectorAll('img').forEach(img=>observer.observe(img));

gallery.onclick=e=>{
  if(e.target.tagName==='IMG'){
    modalImg.src=e.target.src;
    modal.style.display='flex';
  }
};

modal.onclick=()=>modal.style.display='none';
