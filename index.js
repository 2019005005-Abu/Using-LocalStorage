const  addTocard=()=>{
    const addButton=document.getElementById('add_button');
   addButton.addEventListener('click',()=>{
    const product=document.getElementById("product").value;
    const quality=document.getElementById("quantity").value;
    console.log(product,quality)
    showProduct(product,quality) 
    saveProductToLocalStarage(product,quality);  
   })
}
addTocard()

const showProduct=(product,quality)=>{
    const mainolDiv=document.getElementById("ulId");
    const li=document.createElement("li");
    li.innerText=`${product}:${quality}`
    mainolDiv.appendChild(li);
}
const getStoredCart=()=>{
    const stored_cart=localStorage.getItem('cart');
    let cart={
    
    };
    console.log(stored_cart)
    if(stored_cart){
        cart=JSON.parse(stored_cart);
    }
    return cart;
}



const saveProductToLocalStarage=(product,quality)=>{
  const cart=getStoredCart();
  cart[product]=quality;
  console.log(cart);
  const cartSingified=JSON.stringify(cart);
  //save
  localStorage.setItem('cart',cartSingified);
}


const disPlayIntheweb=()=>{
  let saveCart=getStoredCart();
  for(let product in saveCart){
     console.log(product);
     const quantily=saveCart[product];
     console.log(product,quantily);
     showProduct(product,quantily);
  }
}
disPlayIntheweb()

function clearAll(){
    document.getElementById('deleteAll').addEventListener('click',()=>{
        localStorage.clear();
    })
}
clearAll()
