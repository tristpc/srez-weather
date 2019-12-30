
  //use node costarica-places-json
  const data = require('./city.list.min.json');

  const country = "PE"

  const places = data.filter(d => d.country === country);
  let count = Object.keys(places).length;
  console.log(`Weather places in ${country} = ${count}`);
  console.log(places);