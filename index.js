window.onload = function() {
//   console.log('generateexcuse')

 generateexcuse = () => {
  let pronoun = ['The ', 'A ', 'My ', 'Your ', 'His '];
  let who = [' mongoose', ' ostrich', ' giraffe', ' monkey', ' honey badger'];
  let verb = [' slapped', ' bit', ' kissed', ' destroyed', ' married'];
  let location = [' in the White House',' in club eleven',' at 4geeks',' on the metro mover',' on calle 8'];
  let noun = [' Mayor Gimenez',' Donald Trump',' Joe Biden',' Obama',' Vladimir Putin'];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let whoIndex = Math.floor(Math.random() * who.length);
  let verbIndex = Math.floor(Math.random() * verb.length);
  let locationIndex = Math.floor(Math.random() * location.length);
  let nounIndex = Math.floor(Math.random() * noun.length);

    document.querySelector("#excuse").innerHTML= pronoun[pronounIndex]+''+who[whoIndex]+''+verb[verbIndex]+''+noun[nounIndex]+''+location[locationIndex]

    };
};
