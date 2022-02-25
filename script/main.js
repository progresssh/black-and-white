const imageSelect = document.querySelector("input[type='file']")
const divContent = document.querySelector("div[class='image-container']")
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const img1 = new Image()


function getImage() {
    let selection = imageSelect.files[0]
    let imgLink = URL.createObjectURL(selection)
    return imgLink
}

function drawImage(source) {

    img1.src = source

    img1.addEventListener('load', () => {
        canvas.width = img1.naturalWidth;
        canvas.height = img1.naturalHeight;

        ctx.drawImage(img1, 0, 0)
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const pixel = imgData.data



        for (let index = 0; index < imgData.data.length; index += 4) {
            const red = index + 0
            const green = index + 1
            const blue = index + 2
            const alpha = index + 3
            let total = pixel[red] + pixel[green] + pixel[blue]

            if (total <= 384) {
                pixel[red] = 0
                pixel[green] = 0
                pixel[blue] = 0
            } else {
                pixel[red] = 255
                pixel[green] = 255
                pixel[blue] = 255
            }
        }
        ctx.putImageData(imgData,0,0)
    })
}



// Place image as <img> element
// function placeImage(source) {
//     const imgElement = document.querySelector('img')
//     const image = document.createElement('img')

//     if (imgElement) {
//         URL.revokeObjectURL(imgElement.src)
//         imgElement.remove()
//     }

//     divContent.insertAdjacentElement('beforeend', image)


//     image.src = source
// }

const submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
    drawImage(getImage())
})