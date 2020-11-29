
let data = [
    {
    country:"China",
    population: 1415046
    },
    {
    country:"India",
    population: 1354052
    },
    {
    country:"USA",
    population: 326767
    },
    {
    country:"Indonesia",
    population: 266795
    },
    {
    country:"Brazil",
    population: 210868
    },
    {
    country:"Pakistan",
    population: 200814
    },
    {
    country:"Nigeria",
    population: 195875
    },
    {
    country:"Bangladesh",
    population: 166368
    },
    {
    country:"Russia",
    population: 143965
    },
    {
    country:"Mexico",
    population: 130759
    },
];





const svg = d3.select('svg');
svg.attr("width",window.innerWidth-30)
svg.attr("height",window.innerHeight-50)
const width = svg.attr("width");
const height = svg.attr("height");

data.forEach( data=>{
    data.population = data.population*1000;
})

const render = data =>{
    const margin = {
        top: 20,
        right:50,
        bottom:40,
        left:110
    }
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    
    
    
    
    const g = svg.append('g').attr("transform", `translate(${margin.left},${margin.top})`);
    const xScale = d3.scaleLinear().domain([0,d3.max(data, d => d.population )]).range([0, innerWidth]).nice();
    
    const yScale = d3.scaleBand().domain(data.map( d => d.country )).range([0, innerHeight]).padding(0.1);


    g.selectAll('rect').data(data).enter().append('rect').attr("width",d => xScale(d.population)).attr("height",yScale.bandwidth()).attr("y", d => yScale(d.country));
    
    
    const customTickFormat = number => d3.format('.3s')(number).replace('G','B')
    const xAxis = d3.axisBottom(xScale).tickFormat(customTickFormat);
    g.append('g').call(d3.axisLeft(yScale));
    g.append('g').call(xAxis).attr("transform", `translate(0,${innerHeight})`);
}



render(data)






















