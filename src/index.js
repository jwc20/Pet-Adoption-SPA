const petFinderAPI = "http://localhost:3000/animals";
let animalGrid = document.getElementById("animals-results");

document.addEventListener("DOMContentLoaded", init);

function init() {
  // Functions here
  loadAnimals();
}

function loadAnimals() {
  fetch(petFinderAPI)
    .then((res) => res.json())
    .then((json) => {
      updateAnimals(json);

      // // Limiting number of cards on grid
      // let i = 0;
      // let animalSet = json.slice(i, i + 21);
      // updateAnimals(animalSet);
    })
    .catch(console.err);
}

function updateAnimals(animals) {
  // console.log(animals)
  document.getElementById("submit").onclick = function getSelectValue() {
    let speciesOption = document.getElementById("species-dropdown").value;
    let ageOption = document.getElementById("age-dropdown").value;
    let genderOption = document.getElementById("gender-dropdown").value;
    let sizeOption = document.getElementById("size-dropdown").value;

    while (animalGrid.firstChild) {
      animalGrid.removeChild(animalGrid.firstChild);
    }

    searchedProperties = animals.filter((e) => {
      if (speciesOption !== "" && e.species !== speciesOption) {
        return false;
      }
      if (ageOption !== "" && e.age !== ageOption) {
        return false;
      }
      if (genderOption !== "" && e.gender !== genderOption) {
        return false;
      }
      if (sizeOption !== "" && e.size !== sizeOption) {
        return false;
      }
      return true;
    });

    searchedProperties.forEach(addAnimals);
    return false;
  };
}

function addAnimals(animal) {
  let animalCard = document.createElement("div");
  animalCard.className = "animal-card";

  let animalCardContent = document.createElement("div");
  animalCardContent.className = "animal-card-content";

  let animalPhoto = document.createElement("img");
  animalPhoto.className = "animal-card-photo";
  if (animal.photos.length > 0) {
    animalPhoto.src = animal.photos[0].medium;
    animalPhoto.alt = animal.name;
  } else {
    animalPhoto.src = "./assets/placeholder.gif";
    animalPhoto.alt = animal.name;
  }
  animalPhoto.onclick = function () {
    window.location.href = animal.url;
  };

  let animalName = document.createElement("h2");
  animalName.textContent = animal.name;

  let animalPrimaryColor = document.createElement("p");
  if (animal.colors.primary === undefined || animal.colors.primary === null) {
    animalPrimaryColor.textContent = "";
  } else {
    animalPrimaryColor.textContent = `Color: ${animal.colors.primary}`;
  }

  let animalAge = document.createElement("p");
  animalAge.textContent = `Age: ${animal.age}`;

  let animalGender = document.createElement("p");
  animalGender.textContent = `Gender: ${animal.gender}`;

  let animalSize = document.createElement("p");
  animalSize.textContent = `Size: ${animal.size}`;

  let animalCoat = document.createElement("p");
  if (animal.coat === undefined || animal.coat === null) {
    animalCoat.textContent = "";
  } else {
    animalCoat.textContent = `Coat: ${animal.coat}`;
  }

  let animalPrimaryBreed = document.createElement("p"); // animal.breeds.primary
  animalPrimaryBreed.textContent = `Breed: ${animal.breeds.primary}`;

  let animalAttribute = document.createElement("p");
  animalAttribute.textContent = `${animal.name} is 
  ${animal.attributes.declawed !== false ? "declawed," : "not declawed,"} 
  ${
    animal.attributes.house_trained !== false
      ? "house trained,"
      : "not house trained,"
  } and
  ${
    animal.attributes.spayed_neutered !== false
      ? "spayed or neutered"
      : "not spayed or neutered"
  }.`;

  let animalAddress = document.createElement("p");
  animalAddress.textContent = `${animal.contact.address.city}, ${animal.contact.address.state} ${animal.contact.address.postcode}`;

  let animalEmail = document.createElement("p");
  animalEmail.textContent = `Email: ${animal.contact.email}`;

  let animalPhone = document.createElement("p");
  animalPhone.textContent = `Phone: ${animal.contact.phone}`;

  animalCardContent.append(
    animalName,
    animalAge,
    animalGender,
    animalSize,
    animalPrimaryColor,
    animalCoat,
    animalPrimaryBreed,
    animalAttribute,
    animalAddress,
    animalEmail,
    animalPhone
  );

  // console.log(animalGrid)

  animalCard.append(animalPhoto, animalCardContent);
  animalGrid.append(animalCard);
}
