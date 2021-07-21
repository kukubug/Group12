let width = d3.select("#scatter").node().getBoundingClientRect().width;
let height = d3.select("#scatter").node().getBoundingClientRect().height;
let margin = 10;
let gap = 15;
let interval = 5;
let maxDay = (width - 2 * margin) / 2;
let dayS = 24 * 60 * 60 * 1000;

let dataParse = d3.timeParse("%Y/%m/%d");
let timeStart = dataParse("2020/4/1");
let timeEnd = dataParse("2020/8/31");
// let minDay = (width-2*margin)/15;

// let rScale = Math.ceil((timeEnd-timeStart)/(24*60*60*1000*maxDay));
// console.log(timeEnd-timeStart,rScale);
let timeScaleBasic = d3.scaleUtc().domain([dataParse("2020/1/1"), dataParse("2020/12/31")]).range([margin, width - margin]);

let svg = d3.select("#scatter")
    .append("svg")
    .attr("width", width).attr("height", height);


d3.csv("./news_ChinaUS.csv").then(function fulfilled(data) {
    // console.log(data);
    // data = d3.filter(data,d => Boolean(d.source) & 1);

    let dataChina = d3.filter(data, d => d.source == "chinadaily");
    // let dataChinaDay = Array.from(d3.rollup(dataChina, v => v.length, d => d.date));
    let dataChinaDay = Array.from(d3.group(dataChina, d => d.date));
    // let dataChinaDayPos = d3.map(dataChinaDay,d=>d[0]);
    // let dataChinaDayGroup = groupDays(rScale,dataChinaDay);
    // console.log(dataChina,dataChinaDay);

    let dataUS = d3.filter(data, d => d.source == "nytimes");
    let dataUSDay = Array.from(d3.group(dataUS, d => d.date));
    // console.log(dataUS,dataUSDay);

    let timeScale = d3.scaleUtc().domain([timeStart, timeEnd]).range([margin, width - margin]);
    let colorScale = {
        "1": "#FF6B18",
        "-1": "#8B8B8B",
        "0": "222222"
    }
    let rVary = countR(timeStart, timeEnd);
    // console.log(rVary);

    let svgChina = svg.append('g');
    svgChina.selectAll(".g-China").data(dataChinaDay)
        .join("g").attr("class", "g-China")
        .selectAll(".circle-China").data(d => d[1])
        .join("circle")
        .attr("class", "circle-China")
        .attr("r", rVary[0])
        .attr("cx", (d, i) => timeScale(dataParse(d.date)))
        .attr("cy", (d, i) => height / 2 - gap - interval - rVary[0] - i * rVary[0] * 2)
        .attr("fill", d => colorScale[d.emotion])
        .style("visibility", d => {
            if (dataParse(d.date) < timeStart || dataParse(d.date) > timeEnd) return "hidden";
            else {
                return "visible";
            }
        })
        .on("mousemove", function (event) {
            d3.select("#tooltip")
                .style("left", (d3.pointer(event, document.body)[0] + 10) + "px")
                .style("top", (d3.pointer(event, document.body)[1] - 10) + "px");
        })
        .on("mouseover", function (event, d) {
            // console.log(d);
            // console.log(d3.pointer(event, document.body));
            d3.select("#tooltip").style("visibility", "visible")
                .html(`Date: ${d.date}
                                    </br>title: ${d.headline}`);
        })
        .on("mouseout", function (event, d) {
            // console.log(d);
            d3.select("#tooltip").style("visibility", "hidden").html();
        });


    let svgUS = svg.append('g');
    svgUS.selectAll(".g-US").data(dataUSDay)
        .join("g").attr("class", "g-US")
        .selectAll(".circle-US").data(d => d[1])
        .join("circle")
        .attr("class", "circle-US")
        .attr("r", rVary[0])
        .attr("cx", (d, i) => timeScale(dataParse(d.date)))
        .attr("cy", (d, i) => height / 2 + gap + interval + rVary[0] + i * rVary[0] * 2)
        .attr("fill", d => colorScale[d.emotion])
        .style("visibility", d => {
            if (dataParse(d.date) < timeStart || dataParse(d.date) > timeEnd) return "hidden";
            else {
                return "visible";
            }
        })
        .on("mousemove", function (event) {
            d3.select("#tooltip")
                .style("left", (d3.pointer(event, document.body)[0] + 10) + "px")
                .style("top", (d3.pointer(event, document.body)[1] - 10) + "px");
        })
        .on("mouseover", function (event, d) {
            // console.log(d);
            // console.log(d3.pointer(event, document.body));
            d3.select("#tooltip").style("visibility", "visible")
                .html(`Date: ${d.date}
                                </br>title: ${d.headline}`);
        })
        .on("mouseout", function (event, d) {
            // console.log(d);
            d3.select("#tooltip").style("visibility", "hidden").html();
        });



    const brush = d3.brushX()
        .extent([[0, 0], [width - 2 * margin, gap * 2]])
        .on("brush", brushmove)
        // .on("brush", brushed);

    let timeLineRect = svg.append("rect").attr("x", margin).attr("y", height / 2 - gap)
        .attr("width", width - 2 * margin).attr("height", gap * 2).attr("fill", "#C4C4C4");

    let timeLine = svg.append("g").attr("transform", `translate(${margin},${height / 2 - gap})`)
        .call(brush)
        .call(brush.move, [timeScaleBasic(timeStart) - margin, timeScaleBasic(timeEnd) - margin]);

    // console.log(timeScaleBasic(timeStart)-margin,timeScaleBasic(timeEnd)-margin);

    function brushmove({ selection }) {
        const [x0, x1] = selection;
        timeStart = timeScaleBasic.invert(x0 + margin);
        timeEnd = timeScaleBasic.invert(x1 + margin);
        rVary = countR(timeStart, timeEnd);
        // console.log(rVary);

        timeScale.domain([timeStart, timeEnd]);
        d3.selectAll(".g-China").selectAll("circle").attr("cx", d => timeScale(dataParse(d.date)))
            .attr("cy", (d, i) => {
                return height / 2 - gap - interval - rVary[0] - i * rVary[0] * 2;
            })
            .attr("r", rVary[0])
            .style("visibility", d => {
                if (dataParse(d.date) < timeStart || dataParse(d.date) > timeEnd) return "hidden";
                else {
                    return "visible";
                }
            });

        d3.selectAll(".g-US").selectAll("circle").attr("cx", d => timeScale(dataParse(d.date)))
            .attr("cy", (d, i) => {
                return height / 2 + gap + interval + rVary[0] + i * rVary[0] * 2;
            })
            .attr("r", rVary[0])
            .style("visibility", d => {
                if (dataParse(d.date) < timeStart || dataParse(d.date) > timeEnd) return "hidden";
                else {
                    return "visible";
                }
            });

        // let timeBrush = timeScaleBasic.invert(d3.pointer(event, document.body)[0]);
        // let month = timeBrush.getMonth() + 1;
        // let timeCurrent = timeBrush.getFullYear() + "/" + month + "/" + timeBrush.getDate();
        // d3.select("#tooltip")
        //     .style("left", (d3.pointer(event, document.body)[0] + 10) + "px")
        //     .style("top", (d3.pointer(event, document.body)[1] - 10) + "px")
        //     .style("visibility", "visible")
        //     .html(`${timeCurrent}`);
    }

    function brushed() {
        d3.select("#tooltip").style("visibility", "hidden").html();
    }

    let xAxis = svg.append("g").attr("transform", `translate(0,${height / 2 - gap / 2})`).call(d3.axisBottom().scale(timeScaleBasic).ticks(11))

    let legend = svg.append("g").attr("transform", "translate(50,10)");
    legend.selectAll(".circle-legend").data([-1, 0, 1]).join("circle")
        .attr("cx", (d, i) => i * 50).attr("cy", 50)
        .attr("r", 10).attr("fill", d => colorScale[d])

    legend.selectAll(".text-legend").data(["消极", "中立", "积极"]).join("text")
        .attr("x", (d, i) => i * 50).attr("y", 80)
        .text(d => d).attr("text-anchor", "middle");

})

// function groupDays(n,data){
//     let result = [];

//     data = d3.filter(data,d => dataParse(d[0]) >= dataParse(timeStart));
//     data = d3.filter(data,d => dataParse(d[0]) <= dataParse(timeEnd));  

//     // for(let i = 0;i<data.length;i+=n){
//     //     let day = (dataParse(data[i][0])-dataParse(timeStart))/24*60*60*1000 - i*n;
//     //     if(day<n){

//     //     }
//     // }
//     result = data;
//     return result;
// }

function countR(timeStart, timeEnd) {
    let siginal = [];
    let daysValue = (timeEnd - timeStart) / dayS;

    // console.log(daysValue,maxDay);
    if (daysValue > maxDay) {
        let dayCount = Math.ceil(daysValue / maxDay);
        siginal = [1, dayCount];
    }
    else {
        let rScale = Math.floor(maxDay * 1 / daysValue);
        if (rScale > 10) rScale = 10;
        siginal = [rScale, 1];
    }

    return siginal;
}

//tooltip
d3.select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .html("This is a tooltip");