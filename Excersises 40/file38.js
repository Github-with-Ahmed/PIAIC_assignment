//Excersise 38
function describeCity(city, country) {
    if (country === void 0) { country = "default country"; }
    console.log("".concat(city, " is in ").concat(country));
}
describeCity("karachi", "pakistan");
describeCity("london", "united kingdom");
describeCity("new york");
