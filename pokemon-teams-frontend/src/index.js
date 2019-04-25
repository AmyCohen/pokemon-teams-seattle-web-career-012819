  const BASE_URL = "http://localhost:3000"
  const TRAINERS_URL = `${BASE_URL}/trainers`
  const POKEMONS_URL = `${BASE_URL}/pokemons`

//  OBJECTIVE:
//  When a user loads the page, they should see all trainers, with their current        team of Pokemon.
//  ACTION ITEMS:
//  fetch the infomation
//  parse the informatoin
//  fill the html with the information
fetch(TRAINERS_URL)
.then(response => response.json())
.then(data => console.log(data))


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