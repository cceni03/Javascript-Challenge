// from data.js
var tableData = data;

// Filter Data
var filterCity = 'port saint lucie';
var filterCountry = 'us',
var filterShape = 'fireball'
var filterState = 'fl';

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













