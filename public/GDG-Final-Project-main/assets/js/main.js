// fetch("https://api.github.com/users/elzerowebschool/repos")
// .then((result) => {
//     console.log(result);
//     let myData = result.json()
//     return myData;
// })
// .then((full)=>{
//     full.length =10;
//     console.log(full)
//     return full;
// })
// .then((ten)=>{
//     console.log(ten[0].name)
// })

// const myFristPromise = new Promise((res,rej) =>{
//     setTimeout(() =>{
//         res("iam The First Promise")
//     },5000);
// });
// const mySecondPromise = new Promise((res,rej) =>{
//     setTimeout(() =>{
//         res("iam The First Promise")
//     },1000);
// });
// const myThirdPromise = new Promise((res,rej) =>{
//     setTimeout(() =>{
//         rej("iam The First Promise")
//     },2000);
// });
// Promise.allSettled([myFristPromise,mySecondPromise,myThirdPromise]).then(
//     (resolvedValue)=> console.log(resolvedValue),
//     (rejectedValue)=> console.log(`Rejected: ${rejectedValue}`)
// );
// fetch("http://api.alquran.cloud/v1/ayah/262/ar.alafasy")
// .then((resolve)=>{
//     console.log(resolve);
//     let myData = resolve.json();
//     console.log(myData);
//     return myData;
// }).then((ayahData)=>{
//     console.log(ayahData.data.audio);
//     let audio = new Audio(ayahData.data.audio)
//     audio.setAttribute("type", "audio/mp3");
//     audio.setAttribute("controls","");
//     let div = document.createElement("div");
//     let ayahAudio = audio;
//     div.appendChild(ayahAudio);
//     document.body.appendChild(div);
// })

// .catch((rej) => console.log(Error`${rej}: Your API Is Wrong`)); 

// function getData() {
//     return new Promise((res,rej) => {
//         let users = ["لربر","fevr"];
//          if (users.length > 0) {
//             res("User Found")
//          }else {
//             rej("No Users Found")
//          }
//     })
// }
// getData().then(
//     (resolvedValue) => console.log(resolvedValue),
//     (rejectedValue) => console.log( `Rejected` + rejectedValue)
// )
const filters = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product');

filters.forEach(filter => {
    filter.addEventListener('change', () => {
        const checkedFilters = Array.from(filters)
                                    .filter(i => i.checked)
                                    .map(i => i.value);
        
        products.forEach(product => {
            const category = product.getAttribute('data-category');
            if (checkedFilters.length === 0 || checkedFilters.includes(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cardItems = document.getElementById("card-items");
    const totalPriceElement = document.getElementById("total-price");
    cardItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cardItems.appendChild(li);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);

    // if (cart.length === 0) {
    //     cardItems.innerHTML = "<li>Your cart is empty.</li>";
    // }
    if (cart.length > 0) {
            cardItems.innerHTML = "";
         }
}

