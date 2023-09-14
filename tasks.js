let freecountries = new XMLHttpRequest();
freecountries.open("GET","https://restcountries.com/v3.1/all");
freecountries.send();
freecountries.onload = function(){
    let data = JSON.parse(freecountries.response);
    console.log(data);

// --------------------------------------------------------------------------------------------
console.log("1)countries from asia region using filter function");

let asianCountries = data.filter((v,i,a)=>{
       return data[i].continents == "Asia";
});
console.log(asianCountries);

// --------------------------------------------------------------------------------------------------
console.log("2)countries with population less than 2 lakhs using filter function");

let population = data.filter((v,i,a)=>{
        return data[i].population < 200000;
});
console.log(population);

// --------------------------------------------------------------------------------------------------------
console.log("3)name,capital,flag using foreach function");

data.forEach((v,i,a)=>{
    console.log(`
                name:${data[i].name.common}
                capital:${data[i].capital} 
                flag in png file:${data[i].flags.png}
               `);
});

//-------------------------------------------------------------------------------------------------------------
console.log("4)total population using reduce");

let totalPopulation = data.reduce((accu,v,i,a)=>{
      return accu+=data[i].population;
},0);
console.log(`totalPopulation of world is ${totalPopulation}`);

// ------------------------------------------------------------------------------------------------------------
console.log("5)countries with us dollar as currency");

let usDollar = data.filter((v,i,a)=>{
   return data[i].currencies?.USD?.name == "United States dollar";
});
console.log(usDollar);
}
