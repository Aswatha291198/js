const nestedObject = {
    person: {
      name: "John Doe",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
      },
      hobbies: ["reading", "traveling", "gaming"]
    },
    job: {
      title: "Software Developer",
      company: "Tech Corp",
      yearsOfExperience: 5
    }
  };
  function flat(obj){
    Object.keys(nestedObject).forEach(key=>{
        console.log(nestedObject[key],'j');
        if(typeof nestedObject[key]!=='object'){
    flat(nestedObject[key])
        }
        else{
            newobj[key]=nestedObject[key]
        }
        
      })
  }
  const newobj={}

   
    

  
  
  console.log(nestedObject);
  flat(nestedObject)
  console.log(newobj,'newewewe')