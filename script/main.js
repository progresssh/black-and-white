const imageSelect = document.querySelector("input[type='file']") 
const divContent = document.querySelector("div[class='image-container']")

function getImage() {
    let selection = imageSelect.files[0]
    let source = URL.createObjectURL(selection)
    return source
}

function placeImage(source) {
    const imgElement = document.querySelector('img')
    if (imgElement) {
        URL.revokeObjectURL(imgElement.src)
        imgElement.remove()
    }
    let image = document.createElement('img')
    divContent.insertAdjacentElement('beforeend', image)
    image.src = source
}

const submit = document.querySelector('.submit');
submit.addEventListener('click', () => placeImage(getImage())) 


