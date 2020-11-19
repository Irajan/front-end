__(".dropdown").forEach(element => {
     element.innerHTML+= " &darr;"
});

const headerItems = __(".header-item");

headerItems.forEach(element => {

     if (element.nextElementSibling != null)  {
          element.classList.add("separator")
          element.style.borderRight = "1px solid white"
     }
})   