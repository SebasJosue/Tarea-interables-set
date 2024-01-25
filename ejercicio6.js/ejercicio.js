//En este ejemplo los vamos a representar como un objeto o un valor estandar se lo cocnoce como json//

let student = {
    name: 'Gabriel',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  
  let json = JSON.stringify(student);
  
  alert(typeof json); 
  
  alert(json);