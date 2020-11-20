const headerItems = __(".header-item");
const sliderImages = __(".images")[0].children;
const svgHolder = __(".svg");

const SVGs = {

     location: ` <svg  width="24" height="24" viewBox="0 0 24 24">
     <path d="M0,0H24V24H0Z" fill="none">
     
     </path>
     <path d="M5,20H19v2H5ZM18,8A6,6,0,0,0,6,8c0,4.5,6,11,6,11S18,12.5,18,8ZM8,8a4,4,0,0,1,8,0c0,2.13-2.08,5.46-4,7.91C10.08,13.47,8,10.13,8,8Zm4-2a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,6Z" fill="#fff">
          
     </path></svg>`,

     clock : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(0)"><path d="M0,0H24V24H0Z" fill="none"></path><path d="M11.99,2A10,10,0,1,0,22,12,10,10,0,0,0,11.99,2ZM12,20a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm.5-13H11v6l5.25,3.15L17,14.92l-4.5-2.67Z" fill="#fff"></path></g></svg`,

     dollor : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="none"></path><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67,0-.84.79-1.43,2.1-1.43,1.38,0,1.9.66,1.94,1.64h1.71a3.1,3.1,0,0,0-2.49-2.97V5H10.9V6.69A3.021,3.021,0,0,0,8.18,9.5c0,1.79,1.49,2.69,3.66,3.21,1.95.46,2.34,1.15,2.34,1.87,0,.53-.39,1.39-2.1,1.39-1.6,0-2.23-.72-2.32-1.64H8.04A3.243,3.243,0,0,0,10.9,17.3V19h2.34V17.33c1.52-.29,2.72-1.16,2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42Z" fill="#fff"></path></svg>`

} 


__(".dropdown").forEach(element => {
     element.innerHTML+= " &darr;"
});

svgHolder.forEach(el => {
     el.innerHTML = SVGs[el.id]
})


headerItems.forEach(element => {

     if (element.nextElementSibling != null)  {
          element.classList.add("separator")
          element.style.borderRight = "1px solid white"
     }
})   



function loop(imageNumber){
     for(let i=0;i<sliderImages.length;i++){
          if (imageNumber == i)
               sliderImages[i].classList.add("hidden-image")
          else
               sliderImages[i].classList.remove("hidden-image")
     }

     return (imageNumber + 1)% sliderImages.length;
}


loop(0)



