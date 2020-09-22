// from data.js
var tableData = data;

// Filter Data
var filterCity = 'port saint lucie';
var filterCountry = 'us';
var filterDate = '1/8/2010';
var filterShape = 'fireball';
var filterState = 'fl';

// Reference Table Body
var tbody = d3.select("tbody");

// Load Data
loadTable(tableData);

function loadTable(table){
    table.forEach((ufoSightings) => {
        var row = tbody.append ("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// Select Button
var button = d3.select("#filter-btn");
button.on("click", function() { 

    tbody.html("");

    // Select Input Date
    var inputElement = d3.select("#datetime");

    // Determine Property of Date, State & Shape
    var inputValue = inputElement.property("value");

     // Print the value to the console
    console.log(inputValue);

    // Filter Data
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // Filter Values
    console.log(filteredData);

    filteredData.forEach(function(selections) {
    
    console.log(selections);

    // Append Table Rows
    var row = tbody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });

});
})
 