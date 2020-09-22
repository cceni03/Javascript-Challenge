// from data.js
var tableData = data;

// Filter Data
var filterCity = 'Pittsburgh';
var filterCountry = 'US',
var filterShape = 'Rectangle'
var filterState = 'Pennsylvania';

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

    tbody.html("");

    // Select Input Date
    var inputElement = d3.select("#datetime");

    // Determine Value of Properties
    var inputValue = inputElement.property("value");

    // Input Value
    console.log(inputValue);

    // Filter Table Data
    var filterData = tableData.filter(sighting => sighting.datetime === inputValue);

    // Filter Table Values
    console.log(filteredData);

    filteredData.forEach(function(selections) {

        console.log(selections);
        // Append Table
        var row = tbody.append("tr");
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});











