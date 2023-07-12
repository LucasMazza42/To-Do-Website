interface Product{
    id: number, 
    name: string, 
    price: number
}; 


function getProduct(id): Product {
    return { 
        id: id, 
        name: 'Awesome Gadget ${}',
        price: 99.5
    }
}

const showProduct = (name: string, price: number) => {
    console.log('The product ${product.Name} costs $${product.price)');
}
const product = getProduct(1)

showProduct(product.price, product.name)
