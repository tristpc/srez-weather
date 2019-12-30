

  const data = require('./test2.json'); //not a correct json file
  
  const arr1 = data.filter(d => d.age > 37);
  console.log('arr1');
  console.log(arr1);
  
  const arr2 = data.filter(d => d.gender === 'female');
  console.log('arr2', arr2);
  
  const ageAndGender = d => d.age > 37 && d.gender === 'female';
  
  const arr3 = data.filter(ageAndGender);
  console.log('arr3', arr3);