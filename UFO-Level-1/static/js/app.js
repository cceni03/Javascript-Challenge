// from data.js
var tableData = data;

// Filter Data
var filterCity = 'Pittsburgh';
var filterCountry = 'US',
var filterShape = 'Rectangle'
var filterState = 'Pennsylvania';

// Reference Table Body
var tbody = d3.select("tbody");

// Load Data
loadTable(tableData);

function loadTable(table){
    table.forEach((ufoSightings) => {
        var row = tBody.append ("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}















