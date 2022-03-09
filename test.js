const petContainer = document.getElementById("pet-container")


  // fetch(petFinderAPI)
  // .then((resp)=> resp.json())
  // .then(function (resp) {
  //   resp.forEach(function (animal) {
  //     renderAnimal(animal);
  //   });
  // })

// const petContainer = document.getElementById("pet-container")

const dogBtn = document.createElement("button")
dogBtn.className = "dog-sort"
document.getElementById("main").append(dogBtn)

dogBtn.innerText = "I want a dog!"
dogBtn.addEventListener("click", dogSort)


function dogSort(event){
  event.preventDefault()
  fetch(petFinderAPI)
  .then((resp)=> resp.json())
  .then(function (resp) {
    resp.filter(animal => animal.species === "dog")
  .then (function (response){
    response.forEach(function(dog){
      renderDog(dog)
    })
  }) 
function renderDog(dog){
  const dogCard = document.createElement("div");
        dogCard.className = "dog-card";

        dogCard.addEventListener("click", function(){
          return showAnimal(animal)
        })
      const dogName = document.createElement("h3");
        dogName.textContent = dog.name;

        // const dogImage = document.createElement("img");
        // dogImage.src = animal.url;
        
        const dogSize = document.createElement("h3");
        dogSize.textContent = dog.size;
      
        dogCard.append(dogName, /*dogImage*/dogSize)
      
    petContainer.append(dogCard)
        return dogCard
      
}
}
  
// // //   const catBtn = document.createElement("button")
// // //   catBtn.className = "cat-sort"
// // //   catBtn.innerText = "I want a cat!"
// // //   carBtn.addEventListener("click", showCats)

// // // const colorOptForm = document.getElementById("")
// // //   colorOptForm.addEventListener("submit",function (e){
// // //       e.preventDefault();
// // //       const color = document.querySelector("#color-input").value;


// // // //   })
// // const petCollection = document.getElementById("pet-collection")

function renderAnimal (animal){
      const animalCard = document.createElement("div");
        animalCard.className = "dog-card";

        animalCard.addEventListener("click", function(){
          return showAnimal(animal)
        })
      const animalName = document.createElement("h3");
        animalName.textContent = animal.name;

        // const dogImage = document.createElement("img");
        // dogImage.src = animal.url;
        
        const animalSize = document.createElement("h3");
        animalSize.textContent = animal.size;
      
        animalCard.append(animalName, /*dogImage*/animalSize)
      
    petContainer.append(animalCard)
        return animalCard
      
   
  }

  
// // function showCats (animal){
//     if (animal.species = "cat"){
//       const catName = getElementById("")
//       catName.textContent = animal.name

//       const catImage = getElementById("")
//       catImage.src = animal.image
      
//       const catColor = getElementById("")
//       catColor.textContent = animal.color
//     }
//   catCard.append(catName, catImage, catColor)
//   petCollection.append(catCard)
//   }

// const resetBtn = document.createElement("button")
// resetBtn.className = "reset-btn"
// resentBtn.textContent = "reset"
// resentBtn.addEventListener("click", resetForm)



function showAnimal(animal){

  fetch(`http://localhost:3000/animals/${animal.id}`)
  .then(function(response){
    return response.json()
  }) 
  .then(function(animal){
    const animalCard = renderAnimal(animal) 
    animalCard.id = "large-animal" 
    petContainer.replaceChildren(animalCard)
  })

}