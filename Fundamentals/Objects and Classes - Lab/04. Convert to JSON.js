function convertToJson(name, lastName, hairColor ) {
   const obj = {
    name,
    lastName,
    hairColor
   }

   const result = JSON.stringify(obj);
   console.log(result);
}

convertToJson('Peter', 'Smith', 'Blond')