var width = 1100;
var height = 800;
var margin = 50;

let dataParse = d3.timeParse("%Y/%m/%d");
let timeStart = dataParse("2020/4/1");
let timeEnd = dataParse("2020/8/31");
// let maxDay = (width-2*margin)/5;
// let minDay = (width-2*margin)/15;

// let rScale = Math.ceil((timeEnd-timeStart)/(24*60*60*1000*maxDay));
// console.log(timeEnd-timeStart,rScale);
let timeScaleBasic = d3.scaleUtc().domain([dataParse("2020/1/1"), dataParse("2020/12/31")]).range([margin, width-margin]);

console.log(timeScaleBasic.invert(300+margin),timeScaleBasic.invert(600+margin));
var svg = d3.select("#scatter")
            .append("svg")
              .attr("width",width).attr("height",height);


d3.csv("./news_ChinaUS.csv").then(function fulfilled(data){
    // console.log(data);
    // data = d3.filter(data,d => Boolean(d.source) & 1);

    let dataChina = d3.filter(data,d => d.source=="chinadaily");
    // let dataChinaDay = Array.from(d3.rollup(dataChina, v => v.length, d => d.date));
    let dataChinaDay = Array.from(d3.group(dataChina, d => d.date));
    // let dataChinaDayGroup = groupDays(rScale,dataChinaDay);
    console.log(dataChina,dataChinaDay);

    let dataUS = d3.filter(data,d => d.source=="nytimes");
    let dataUSDay = Array.from(d3.group(dataUS, d => d.date));
    console.log(dataUS,dataUSDay);

    let timeScale = d3.scaleUtc().domain([timeStart, timeEnd]).range([margin, width-margin]);
    let colorScale = {
        "1":"#FF6B18",
        "-1":"#8B8B8B"
    }

    let svgChina = svg.append('g');
    svgChina.selectAll(".g-China").data(dataChinaDay)
                .join("g").attr("class","g-China").attr("transform", d => `translate(${timeScale(dataParse(d[0]))},0)`)
                .selectAll(".circle-China").data(d=>d[1])
                    .join("circle")
                    .attr("class","circle-China")
                    .attr("r",3)
                    .attr("cx", 0)
                    .attr("cy", (d, i) => width/2- 10 - i*5)
                    .attr("fill", d => colorScale[d.emotion]);


    let svgUS = svg.append('g');
    svgUS.selectAll(".g-US").data(dataUSDay)
            .join("g").attr("class","g-US").attr("transform", d => `translate(${timeScale(dataParse(d[0]))},0)`)
            .selectAll(".circle-US").data(d=>d[1])
                .join("circle")
                .attr("class","circle-US")
                .attr("r",3)
                .attr("cx", 0)
                .attr("cy", (d, i) => width/2 + 10 + i*5)
                .attr("fill", d => colorScale[d.emotion]);
    

    const brush = d3.brushX()
        .extent([[0,0],[width - 2*margin,10]])
        .on("brush",brushmove);

    let timeLineRect = svg.append("rect").attr("x",margin).attr("y",width/2-5)
            .attr("width",width - 2*margin).attr("height", 10).attr("fill","#C4C4C4");
            
    let timeLine = svg.append("g").attr("transform",`translate(${margin},${width/2-5})`).call(brush).call(brush.move,[300,600]);
    
    function brushmove({selection}){
        console.log(selection);
        const [x0, x1] = selection;
        timeStart = timeScaleBasic.invert(x0+margin);
        timeEnd = timeScaleBasic.invert(x1+margin);

        console.log(timeStart,timeEnd);
        timeScale.domain([timeStart,timeEnd]);
        console.log(timeStart,timeScale(timeStart));
        d3.selectAll("circle").attr("cx", d => timeScale(dataParse(d.date)));
        // update();
    }

    function update(){
        
    }

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

