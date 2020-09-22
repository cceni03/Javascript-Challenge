// from data.js
var tableData = data;
console.log(tableData);

// Reference Table Body
var tbody = d3.select("tbody");

// UFO Sighting
tableData.foreach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
})