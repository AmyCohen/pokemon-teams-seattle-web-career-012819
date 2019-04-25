  const BASE_URL = "http://localhost:3000"
  const TRAINERS_URL = `${BASE_URL}/trainers`
  const POKEMONS_URL = `${BASE_URL}/pokemons`

//  OBJECTIVE:
//  When a user loads the page, they should see all trainers, with their current        team of Pokemon.
//  ACTION ITEMS:
//  fetch the infomation
//  parse the informatoin
//  fill the html with the information

//////// CARD EXAMPLE /////////
{/* <div class="card" data-id="1"><p>Prince</p>
<button data-trainer-id="1">Add Pokemon</button>
<ul>
  <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
  <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
  <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
  <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
  <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
</ul>
</div> */}
//////// CARD EXAMPLE /////////
let trainerObj = {}

fetch(TRAINERS_URL)
.then(response => response.json())
.then(trainers => displayTrainers(trainers))
// .then(trainers => {
  // trainerObj = Object.assign({}, trainers)
// })

const trainerCard = document.getElementById('trainer-container')

function displayTrainers(trainers) {
  console.log(trainers)
  console.log(trainers.length)
  
  for (let i = 0; i < trainers.length; i++) {
    let trainer = Object.entries(trainers)[i][1]
    
    //create the div and add a class and an id
    const divCard = document.createElement('div')
    divCard.classList.add('card')
    divCard.setAttribute('data-id', trainer.id)

    //create the p tag to add the trainer's name
    let pName = document.createElement('p')
    pName.textContent = trainer.name

    //append the p tag to the div
    divCard.appendChild(pName)
  
    //create a button and add an id and set the name
    let addButton = document.createElement('button')
    addButton.setAttribute('data-trainer-id', trainer.id)
    addButton.name = 'Add Pokemon'

    //append the button to the div
    divCard.appendChild(addButton)

    //create ul element
    let ul = document.createElement('ul')

    //-->this is where the loop to get the pokemon go<--
    for (let j = 0; j < trainer.pokemons.length; j++) {
      let pokemon = trainer.pokemons[j]
      //create li element
      let li = document.createElement('li')
      li.textContent = pokemon.nickname + " (" + pokemon.species + ")"

      //create a button and add an id and class and set the name
      let releaseButton = document.createElement('button')
      releaseButton.classList.add('release')
      releaseButton.setAttribute('data-pokemon-id', pokemon.id)
      releaseButton.name = 'Release'

      //append the button to the li
      li.append(releaseButton)
      ul.appendChild(li)
    }

    divCard.appendChild(ul)
    trainerCard.appendChild(divCard)
  }
}




//  OBJECTIVE:
//  Whenever a user hits Add Pokemon and they have space on their team, they            should get a new Pokemon.
//  ACTION ITEMS:
//  Check to see how many pokemon are on the current trainer's deck
//  Be able to add a pokemon with an id to add to the team roster

//  OBJECTIVE:
//  Whenever a user hits Release Pokemon on a specific Pokemon team, that specific      Pokemon should be released from the team.
//  ACTION ITEMS:
//  "release" means "delete"
//  be able to have the delete function on just that specific pokemon