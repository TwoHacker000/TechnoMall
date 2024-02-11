var x = document.getElementById("AboYveri")
var infront = document.getElementById('infront')
var back = document.getElementById('back')
var img  =  document.createElement('img')
let index = 0

img.style.width = '900px'
img.style.height = '351px'
img.style.borderRadius = '20px'
img.src = 'https://www.zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5fa86f4b-8f11-43f2-bc69-5f8bb109af34_Thumb.png&w=1920&q=60'
x.appendChild(img)

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






array = [ 'https://www.zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5fa86f4b-8f11-43f2-bc69-5f8bb109af34_Thumb.png&w=1920&q=60',
'https://www.zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F80bfcfa9-91a7-4da9-905d-83b74250e530_Thumb.png&w=1920&q=60',
'https://www.zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fd6746158-fddc-4991-b80f-73c691c20e9e_Thumb.png&w=1920&q=60',
'https://www.zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5557ec49-4355-4839-8a07-4c6bfbb3c802_Thumb.png&w=1920&q=60'];
