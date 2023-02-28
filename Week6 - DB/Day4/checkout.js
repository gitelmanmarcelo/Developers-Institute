// Using the DOM display :
// all the items that the user bought : MANDATORY --> use object destructuring
// the total price he needs to pay
// a "Submit payment" Button
// When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.
// Bonus: the user can add multiple times, the same product. --> Each product item will be an object containing the name of the product, the price and the quantity.

const displayItem = (item,item_class) => {
    const div = document.createElement('div');
    if (item_class != null)
        div.classList.add(item_class);
    const p = document.createElement('p');
    const text = document.createTextNode(item);
    p.appendChild(text);
    div.appendChild(p);
    document.querySelector('#items').appendChild(div);
}

const cart = JSON.parse(localStorage.getItem('cart'));

const submitClick = () => {
    alert('Successfully proccessed - Thank you for buying with us!');
    window.open('index.html');
}

document.querySelector('button').addEventListener('click',submitClick);

let total_price = 0;
cart.forEach( product => {
    const {name,price} = product;
    displayItem(name,'item_class');
    displayItem(price,'price_class');
    total_price += Number(price);
})
displayItem('Total','total_class');
displayItem(total_price.toString(),'total_price_class');