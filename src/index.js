// document.addEventListener('DOMcontentloaded', function() {
//   })

//todo: challege 1--
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
fetch(imgUrl)
.then(response => response.json())
.then(response => {
response.message.forEach(image => {
    let appendImg = document.querySelector('#dog-image-container')
    let dogImages = document.createElement('img');
    dogImages.className = "dog-images"
    dogImages.src = image;
    appendImg.append(dogImages)
});
})  

let breedArray = [];
let dogCotainer = document.querySelector('#dog-breeds')

//todo: challge 2 --
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
fetch(breedUrl)
.then(response2 => response2.json())
.then(response2 => { 
    breedArray = (Object.keys(response2.message))

    for(const breeds in response2.message){
        let liDog = document.createElement('li')
        liDog.append(breeds);
        dogCotainer.append(liDog);

//todo: challge 3--
     liDog.addEventListener('click', () => {
         liDog.style.color = "blue"

    })
   }
})



//todo: challege 4--
let dropmenu = document.querySelector('#breed-dropdown')
dropmenu.addEventListener('change', (e) => {
   let letter = e.target.value
   let uptatedArray = breedArray.filter(breedDog => breedDog[0] === letter)
   dogCotainer.innerHTML = ''
   uptatedArray.forEach(filteredAnimals => {
    let newAnimal = document.createElement('li')
    newAnimal.textContent = filteredAnimals
    dogCotainer.append(newAnimal)
    
   })
})
    

//todo: the same thing as code in challege 3 above without the "e"--
// liDog.addEventListener('click', (e) => {
// e.target.style.color ='blue'
// })


