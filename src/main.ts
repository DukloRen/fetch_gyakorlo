import { AllProducts } from "./products"

const mindGomb = document.getElementById("mindGomb") as HTMLElement;
const abcGomb = document.getElementById("abcGomb") as HTMLElement;
const div = document.getElementById("div") as HTMLElement;

  let eredmeny = await fetch('products.json');
      let tartalom= await eredmeny.json() as AllProducts;
      let products= Array.from(tartalom.products)

  function adatMegjelenites(){
      div.innerHTML = "";
      const ul = document.createElement("ul");
      
      products.forEach(e => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");
        const p5 = document.createElement("p");
        const p6 = document.createElement("p");
        const p7 = document.createElement("p");
        const p8 = document.createElement("p");
        const p9 = document.createElement("p");
        const p10 = document.createElement("p");
    
        p.textContent = (e.id).toString();
        p2.textContent = (e.title).toString();
        p3.textContent = (e.description).toString();
        p4.textContent = (e.price).toString();
        p5.textContent = (e.discountPercentage).toString();
        p6.textContent = (e.rating).toString();
        p7.textContent = (e.stock).toString();
        p8.textContent = (e.brand).toString();
        p9.textContent = (e.category).toString();
        p10.textContent = (e.thumbnail).toString();
    
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        li.appendChild(p4);
        li.appendChild(p5);
        li.appendChild(p6);
        li.appendChild(p7);
        li.appendChild(p8);
        li.appendChild(p9);
        li.appendChild(p10);
    
        ul.appendChild(li);
      });
    
      div.appendChild(ul);
      }

mindGomb.addEventListener("click", () => {
  adatMegjelenites();
});

abcGomb.addEventListener("click", () =>{

    products.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });
});

document.addEventListener('DOMContentLoaded', () =>{
  
})