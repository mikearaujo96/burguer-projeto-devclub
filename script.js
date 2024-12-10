const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')



function formatCurrency(value){
    const newValue = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }).format(value)    

    return newValue
}

function showAll(productsArray = menuOptions){
    let myLi = ''
    productsArray.forEach( product =>{
        
        myLi += `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p class="item-price"> ${formatCurrency(product.price)}</p>
            </li>
        `        
    })
    list.innerHTML = myLi
}


function mapAllItems(){
    const newPrice = menuOptions.map((product)=>({ 
        ...product,
        price: product.price * 0.9, // dar 10% de desconto 
    }))
    showAll(newPrice)
}

function sumAllItems(value){
    const total = menuOptions.reduce((acc,elent)=>{
        let x = acc += elent.price
        return x
    },0)
    list.innerHTML = `<li><p>A soma de todos os itens do menu é de: ${formatCurrency(total)}</p></li>`
}

function filterAllItems(){
    const filterJustVegan = menuOptions.filter( (product) => product.vegan === true)
    showAll(filterJustVegan)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click',filterAllItems)



