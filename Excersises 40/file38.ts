//Excersise 38

function describeCity(city:string, country:string = "default country"):void {
    console.log(`${city} is in ${country}`);
}

describeCity("karachi", "pakistan");
describeCity("london", "united kingdom");
describeCity("new york");
