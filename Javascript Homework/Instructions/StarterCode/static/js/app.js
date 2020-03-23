// from data.js
var dataset = data;

tbody = d3.select("tbody")

function datas(data) {
    tbody.text("")
    data.forEach(function(sightings){
        table = tbody.append("tr")
        Object.entries(sightings).forEach(function([key, value]){
            tder = table.append("td").text(value)
        })

    })
}
datas(data)

var filterbutton = d3.select("#filter-btn");
var blankinput = d3.select("datetime");

var inputvalue = d3.blankinput.property("value");

function filterbydate(){

    var filteredData = dataset.filter(sightings => sightings.datetime===inputvalue)
    
    console.log(filteredData);



}
