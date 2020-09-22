// from data.js
var tableData = data;
console.log(tableData);

// Reference Table Body
var tbody = d3.select("tbody");

// Display UFO Sighting
tableData.foreach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select Button
var button = d3.select("filter-btn");
button.on("click", function() {
    // Select Input Date
    var inputDate = d3.select("#datetime");
    inputDate.on("change", handleClick);




})











