# Pet-Adoption-SPA


### TODO:
- [x] Create dropdown menu in html
- [x] Create form/buttons in html
- [x] Hook up the search options to db
- [x] Add image to result card
  - [x] Add url link to image and make it clickable
- [x] Add Description to cards
  - [ ] Add More description to cards
    - [ ] animal coat
    - [ ] animal attributes (neutered, declawed, etc)
    - [ ] animal primary breed
    - [ ] animal contact (email, phone, location, etc)
- [x] Add Event listener to Submit
- [x] Add Event listener to Reset (I think it is working)
- [x] Make the Results filter/update work
- [x] Add placeholder image for animals with no photos
- [ ] Add styles with index.css
- [ ] Create no result prompt when there is no result from the search
- [x] Delete duplicates from db.json


#### Grid and card hierchy
##### (javascript DOM / css class name): 
- animalGrid / animals-results
  - animalCard / animal-card
    - animalPhoto / animal-card-photo
    - animalCardContent / animal-card-content
      - animalName 
      - animalPrimaryColor 
      - animalAge
      - ... 



### Pitch

Pet adoption SPA is an interactive website that allows users to search through adoptable cats and dogs using information from the PetFinder API.

---

**As a** user 

**I want to** search for a dog or cat to adopt based on certain parameters

**So that** I can view a collection of  “cards” containing available animals with basic pet information including: name, picture and color

---

**As a** User

**I want to** Filter my search results by “dog” or “cat” of animal that I am interested in adopting

**So that** I can filter our potential adoptees that are irrelevant to my search.

---

**As a** User

**I want to** select the color of my future pet

**So that** I can find a pet that is aesthetically pleasing to my eye

---

**As a** User

**I want to** expand an animal’s profile through a click

**So that** I can learn more information about the dog or cat, including: name, picture, color,  breed, size, and location
![Alt text](./assets/wireframe/Search.png)

---

**As a** User

**I want to** reset my search and start over

**So that** I can restart my search if I’m not finding what I’m looking for or change my mind on my preferences

![Alt text](./assets/wireframe/Results.png)


To start, run 
``` 
json-server --watch db.json 
```



