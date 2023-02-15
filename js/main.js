/*
ic-04
Krishanu Datta
Modified: 2/15/2023
*/

// constants for frame dimensions and the frame
const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 500; 
const MARGINS = {left: 100, right: 50, top: 50, bottom: 50};
const data2 = [55000, 48000, 27000, 66000, 90000];
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 

const FRAME3 = d3.select("#vis3")
                  .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

// find max Y
const MAX_Y = d3.max(data2, (d) => { return d; }); 

const Y_SCALE = d3.scaleLinear() // linear scale because we have 
                              // linear data 
                  .domain([0, (MAX_Y + 10000)]) // add some padding  
                  .range([0, VIS_WIDTH]); 

FRAME3.selectAll("points")  
    .data(data2)  
    .enter()       
    .append("circle")  
      .attr("cx", MARGINS.left + 100) 
      .attr("cy", (d) => { return (Y_SCALE(d) + MARGINS.top); }) 
      .attr("r", 10)
      .attr("class", "point"); 

FRAME3.append("g") // g is a "placeholder" svg
      .attr("transform", "translate(" + MARGINS.left + 
            "," + MARGINS.top + ")") //moves axis 
                                                    // within margins 
      .call(d3.axisLeft(Y_SCALE).ticks(4)) // function for generating axis  
        .attr("font-size", '20px'); // set font size






