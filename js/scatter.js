let width = 1000;
let height = 800;
let margin = 50;
let timeStart = "2020/1/1";
let timeEnd = "2020/12/31";

let svg = d3.select("#fontView")
	.append("svg")
	.attr("width", width).attr("height", height);

d3.csv("./data/news_ChinaUS.csv").then(function fulfilled(data) {
	// console.log(data);
	// data = d3.filter(data,d => Boolean(d.source) & 1);

	let dataChina = d3.filter(data, d => d.source == "chinadaily");
	// let dataChinaDay = Array.from(d3.rollup(dataChina, v => v.length, d => d.date));
	let dataChinaDay = Array.from(d3.group(dataChina, d => d.date));
	console.log(dataChina, dataChinaDay);

	let dataUS = d3.filter(data, d => d.source == "nytimes");
	let dataUSDay = Array.from(d3.group(dataUS, d => d.date));
	console.log(dataUS, dataUSDay);

	let dataParse = d3.timeParse("%Y/%m/%d");
	let timeScale = d3.scaleUtc().domain([dataParse(timeStart), dataParse(timeEnd)]).range([margin, width - 2 * margin]);
	let colorScale = {
		"1": "#FF6B18",
		"-1": "#8B8B8B"
	}

	let svgChina = svg.append('g');
	svgChina.selectAll(".g-China").data(dataChinaDay)
		.join("g").attr("class", "g-China").attr("transform", d => `translate(${timeScale(dataParse(d[0]))},0)`)
		.selectAll(".circle-China").data(d => d[1])
		.join("circle")
		.attr("class", "circle-China")
		.attr("r", 3)
		.attr("cx", 0)
		.attr("cy", (d, i) => width / 2 - 10 - i * 5)
		.attr("fill", d => colorScale[d.emotion])
		//(1)鼠标悬停时
		.on("mouseover", function(d,i){
			d3.select("#tooltip")
				.attr("style", "left:" + 100 + "px" + ";top:" + 100 + "px")
				.append("text").attr("class","headline")
				.text("标题："+ d + i );
		})
		//(2)鼠标离开时
		.on("mouseout", function(d) {
			d3.select(".headline")
				.transition()
				.duration(250)
				.remove();
		});

	let svgUS = svg.append('g');
	svgUS.selectAll(".g-US").data(dataUSDay)
		.join("g").attr("class", "g-US").attr("transform", d => `translate(${timeScale(dataParse(d[0]))},0)`)
		.selectAll(".circle-US").data(d => d[1])
		.join("circle")
		.attr("class", "circle-US")
		.attr("r", 3)
		.attr("cx", 0)
		.attr("cy", (d, i) => width / 2 + 10 + i * 5)
		.attr("fill", d => colorScale[d.emotion])
});
