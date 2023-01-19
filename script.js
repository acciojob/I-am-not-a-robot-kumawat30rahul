
// array of sources
let arrayOfSrc = [
    "https://bbts1.azureedge.net/images/p/full/2021/09/55beee0c-4a79-48c1-806f-928162f32156.jpg",
    "https://cdn.shopify.com/s/files/1/0090/7732/5890/products/2_b746fe10-2d45-47bf-bf0c-df014b931177.jpg?v=1640799430",
    "https://m.media-amazon.com/images/I/51klhIavtSL._SX355_.jpg",
    "https://i5.walmartimages.com/asr/e9b3fdb5-6ed9-4c91-bdba-64ca624a4bbd.c8f22c67eb60f32f241a38d53c46e076.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCPPZ1FpTvbVitSPmkd5SrlLv9UPlZrYyo_Kh9kK6OkQSt1l1mDGYKMdXyiFz2rNTBDw&usqp=CAU"
]

// genrating random number to copy an image
let randomClass = Math.floor(Math.random()*5)

arrayOfSrc.push(arrayOfSrc[randomClass])


// setting the aource value of images
let images = document.querySelectorAll("img")
let selectedImage = []



images.forEach((image,index) => {
    image.src = arrayOfSrc[index]
    index++;

    
})

let resetButton = document.getElementById('reset')
let verifyButton = document.getElementById('verify')
let para = document.getElementById('para')
let x = 0;

// functionality for click and displaying the buttons
images.forEach(image => {
    image.addEventListener('click' ,() => {
        x++;
        image.classList.add('selected')
        selectedImage.push(image.src)

        if( selectedImage.length == 1){
            resetButton.style.display = 'block'

        }else if( selectedImage.length == 2){
            verifyButton.style.display = 'block'

        }else if(selectedImage.length >= 3){
            selectedImage.splice(0,1)
            verifyButton.style.display = 'none' 
        }

        confirm()
    })

    
    
    }
)  

//functionality of verify button 

function confirm(){
    if(selectedImage[0] == selectedImage[1]){
        verifyButton.addEventListener('click',() => {
            para.innerText = "You are a human. Congratulations!"
            verifyButton.style.display = 'none'
        })
    }else if(selectedImage[0] != selectedImage[1]){
        verifyButton.addEventListener('click',() => {
        para.innerText = "We can't verify you as a human. You selected the non-identical tiles"
        verifyButton.style.display = 'none'
        })
    }
    
}



// functionality of reset button


resetButton.addEventListener('click',() => {
    images.forEach(image => {
        image.classList.remove('selected')
    })
    selectedImage.splice(0,selectedImage.length)
    resetButton.style.display = 'none'
    verifyButton.style.display = 'none'
    para.innerText = ""
    x = 0;
})




