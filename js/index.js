
var margin = { top: 30, bottom: 10, left: 100, right: 20 };
var width = 300 - margin.left - margin.right;
var height = 150 - margin.top - margin.bottom;

var svg = d3
    .select("#bar")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

// Global variable for all data
let data;

// Scales setup
const xscale = d3.scaleLinear().range([0, width]);
const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.1);

// Axis setup
const xaxis = d3.axisTop().scale(xscale)
const g_xaxis = g.append("g").attr("class", "x axis").attr("tickWidth",0);;
const yaxis = d3.axisLeft().scale(yscale);
const g_yaxis = g.append("g").attr("class", "y axis");

// var tooltip =d3.select("#").append("div")
// .attr("class","tooltip")
// .style("opacity",0)

// d3.


d3.json("./data.json").then((json) => {
    data = json;

    update(data);
});

function update(new_data) {

    xscale.domain([0, d3.max(new_data, (d) => d.value)]);
    yscale.domain(new_data.map((d) => d.theme.name));

    g_xaxis.transition().call(xaxis);
    g_yaxis.transition().call(yaxis);

    const rect = g
        .selectAll("rect")
        .data(new_data, (d) => d.theme.name)
        .join(

            (enter) => {
                const rect_enter = enter.append("rect").attr("x", 0);
                rect_enter.append("title");
                return rect_enter;
            },

            (update) => update,

            (exit) => exit.remove()
        );

    rect
        .transition()
        .attr("height", yscale.bandwidth())
        .attr("width", (d) => xscale(d.value))
        .attr("y", (d) => yscale(d.theme.name))
        // .on('mouseover',function(d,i){
         
        //     tooltip.style('visibility','visible').text(d[2])
            
        // })

    rect.select("title").text((d) => d.theme.name);
}

//interactivity
d3.select("#filter-us-only").on("change", function () {
    // This will be triggered when the user selects or unselects the checkbox
    const checked = d3.select(this).property("checked");
    if (checked === true) {
        // Checkbox was just checked

        // Keep only data element whose country is US
        const filtered_data = data.filter((d) => d.theme.country === "US");

        update(filtered_data); // Update the chart with the filtered data
    } else {
        // Checkbox was just unchecked
        update(data); // Update the chart with all the data we have
    }
});


function change2(){
    alert("is success")
    
}