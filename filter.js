const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
];


const productsContainer = document.querySelector('.products');
const search = document.querySelector('.search');
const categoryContainer = document.querySelector('.cats');
const priceRange = document.querySelector('.priceRange');
const priceValue = document.querySelector('.priceValue');



const displayProducts = (filterProducts) => {
  productsContainer.innerHTML = filterProducts.map((product) => 
      `
      <div class="product">
          <img 
          src="${product.img}" 
          alt=""
          />
          <div class="name">${product.name}</div>
          <div class="priceText">$${product.price}</div>
        </div>
      `
  ).join('')
}

displayProducts(data);

search.addEventListener('keyup', (e) => {
  
  const filteredCatProducts = data.filter((product) =>  product.name.toLowerCase().includes(e.target.value.toLowerCase()) === true)
  displayProducts(filteredCatProducts)
})

const category_func = () => {
  const categories =[... new Set(data.map(item => item.cat))]
 
  categoryContainer.innerHTML = categories.map((c,i) => 

      `${ i === 0 ?(`<div class="cat">All</div><div class="cat">${c}</div>`):`<div class="cat">${c}</div>`}`

    ).join('')

    
}
category_func()




  categoryContainer.addEventListener('click', (e) => {
    
    e.target.innerText === 'All' ? 
    
    displayProducts(data) 
    :
     displayProducts( data.filter(item => item.cat === e.target.innerText )) 
    
    
  })

const setPrices = () => {
  const PriceList = data.map(item => item.price)
  const maxPrice = Math.max(...PriceList)
  const minPrice = Math.min(...PriceList)
  priceRange.setAttribute('min', minPrice)
  priceRange.setAttribute('max', maxPrice)
  priceValue.innerText = maxPrice
  console.log(priceRange)
}

setPrices()

priceRange.addEventListener('change', (e) => {
  const priceFilter = data.filter(item => {
  return item.price <= e.target.value
  })
  displayProducts(priceFilter)
})


