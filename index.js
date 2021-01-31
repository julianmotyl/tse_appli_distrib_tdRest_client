const axios = require('axios');

axios.get('http://localhost:8080/Joueurs')
  .then(function (response) {
    // handle success
    console.log(response.data.length + ' Joueur(s) found :');

    response.data.forEach(element => {
        
        console.log(' - ' + element.name + ', ' + element.role + ',' + element.team);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

  axios.get('http://localhost:8080/Equipes')
  .then(function (response) {
    // handle success
    console.log(response.data.length + ' Equipe(s) found :');

    response.data.forEach(element => {
        
        console.log(' - ' + element.name + ', ' + element.competition);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });