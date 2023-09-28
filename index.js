const ratio = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold : ratio
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}
  const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*= "reveal-"]').forEach(function(r){
    observer.observe(r)

})

const menubuger = document.querySelector("#logo3 img");
const panelList = document.querySelector("#menuBarr");
const list = document.querySelectorAll("li");
list.forEach(clickElt);
menubuger.addEventListener('click', function(){
 
    panelList.classList.remove("activeMenu");
     
})

function clickElt(elt){
    elt.addEventListener('click', listeClick);
   
};

function listeClick(){
    panelList.classList.add("activeMenu");
}




    





  
