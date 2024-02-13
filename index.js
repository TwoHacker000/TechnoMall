var infront = document.getElementById('infront')
var back = document.getElementById('back')
var img  =  document.createElement('img')
let index = 0

img.style.width = '900px'
img.style.height = '351px'
img.style.borderRadius = '20px'
img.src = 'https://www.zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fd6746158-fddc-4991-b80f-73c691c20e9e_Thumb.png&w=1920&q=60'
AboYveri.appendChild(img)

infront.addEventListener('click', myfunc);
back.addEventListener('click', funcback);



function myfunc() {
    index += 1;
    if (index > 3) {
        index = 0
    }
    img.src = array[index]
    x.appendChild(img);
}
function funcback() {
    if (index == 0 ){
        index = 4
    }
    index -= 1;
    img.src = array[index]
    x.appendChild(img);
}


array = [ 'https://www.zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fd6746158-fddc-4991-b80f-73c691c20e9e_Thumb.png&w=1920&q=60',
'https://www.zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F80bfcfa9-91a7-4da9-905d-83b74250e530_Thumb.png&w=1920&q=60',
'https://www.zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5fa86f4b-8f11-43f2-bc69-5f8bb109af34_Thumb.png&w=1920&q=60',
'https://www.zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5557ec49-4355-4839-8a07-4c6bfbb3c802_Thumb.png&w=1920&q=60'];




card_container = [
    {   
        src: 'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201014082215729804/201106080048951631.png@jpeg',
        Price: '2500₾',
        Mobile: 'Iphone 12 | 128GB BLUE',
    },
    {
        src: 'https://www.sammobile.com/wp-content/uploads/2023/12/Samsung-Galaxy-S24-Black-01.png',
        Price: '2000₾',
        Mobile: 'Samsung S24 | 256GB BLACK',
    },
    {
        src: 'https://technoshop.ge/images/detailed/12/7yJ8Zl8sm5-1.jpg',
        Price: '1500₾',
        Mobile: 'Iphone 11 | 64GB WHITE',
    },
    {
        src: 'https://www.sammobile.com/wp-content/uploads/2023/12/Samsung-Galaxy-S24-Black-01.png',
        Price: '2000₾',
        Mobile: 'Samsung S24 | 256GB BLACK',
    },
    {
        src: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0193387_xiaomi-redmi-note-12-lte-8128gb-green_550.jpeg&w=640&q=100',
        Price: '1000₾',
        Mobile: 'Xiaomi Redmi Note 12 | 32GB GREEN',
    },
    {
        src: 'https://technoshop.ge/images/detailed/12/7yJ8Zl8sm5-1.jpg',
        Price: '1500₾',
        Mobile: 'Iphone 11 | 64GB WHITE',
    },
    {
        src: 'https://www.sammobile.com/wp-content/uploads/2023/12/Samsung-Galaxy-S24-Black-01.png',
        Price: '2000₾',
        Mobile: 'Samsung S24 | 256GB BLACK',
    },
    {   
        src: 'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201014082215729804/201106080048951631.png@jpeg',
        Price: '2500₾',
        Mobile: 'Iphone 12 | 128GB BLUE',
    },
    {
        src: 'https://www.sammobile.com/wp-content/uploads/2023/12/Samsung-Galaxy-S24-Black-01.png',
        Price: '2000₾',
        Mobile: 'Samsung S24 | 256GB BLACK',
    },
    {   
        src: 'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201014082215729804/201106080048951631.png@jpeg',
        Price: '2500₾',
        Mobile: 'Iphone 12 | 128GB BLUE',
    },
    {
        src: 'https://www.sammobile.com/wp-content/uploads/2023/12/Samsung-Galaxy-S24-Black-01.png',
        Price: '2000₾',
        Mobile: 'Samsung S24 | 256GB BLACK',
    },
    {   
        src: 'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201014082215729804/201106080048951631.png@jpeg',
        Price: '2500₾',
        Mobile: 'Iphone 12 | 128GB BLUE',
    },
    {
        src: 'https://www.sammobile.com/wp-content/uploads/2023/12/Samsung-Galaxy-S24-Black-01.png',
        Price: '2000₾',
        Mobile: 'Samsung S24 | 256GB BLACK',
    },
    {
        src: 'https://www.sammobile.com/wp-content/uploads/2023/12/Samsung-Galaxy-S24-Black-01.png',
        Price: '2000₾',
        Mobile: 'Samsung S24 | 256GB BLACK',
    },
    {   
        src: 'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201014082215729804/201106080048951631.png@jpeg',
        Price: '2500₾',
        Mobile: 'Iphone 12 | 128GB BLUE',
    },
    {
        src: 'https://www.sammobile.com/wp-content/uploads/2023/12/Samsung-Galaxy-S24-Black-01.png',
        Price: '2000₾',
        Mobile: 'Samsung S24 | 256GB BLACK',
    },
    {   
        src: 'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201014082215729804/201106080048951631.png@jpeg',
        Price: '2500₾',
        Mobile: 'Iphone 12 | 128GB BLUE',
    },
    {
        src: 'https://www.sammobile.com/wp-content/uploads/2023/12/Samsung-Galaxy-S24-Black-01.png',
        Price: '2000₾',
        Mobile: 'Samsung S24 | 256GB BLACK',
    },
]

card_container.map((data) => {
    div = document.createElement('div')
    div.classList.add('phone')
    div.innerHTML = `
        <div style="cursor:pointer">
            <img class="cardphoneimg" src="${data.src}">
            <h3 class='cardsabout'>${data.Price}</h3>
            <h3 class='cardsabout'>${data.Mobile}</h3>
        </div>
        <button class='cardsbutton'><i class='bx bx-git-compare'></i></button>
        <button class="cardsbutton add"><i class='bx bx-shopping-bag'></i><p style="font-size: 12px; display: inline; padding-left: 2px">დამატება<p></button>
    `
    phones.appendChild(div)
})
