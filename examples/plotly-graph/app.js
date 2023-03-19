// First graph

const data1 = [{
    x: [3, 5, 6, 7, 10, 12.5],
    y: [1, 3, 2, 4.5, 9, 8.1],
    type: 'line'
}];

const layout = {
    title: 'First Graph',
    xaxis: {
        title: 'X points',
        gridcolor: 'rgb(189, 189, 189)',
    },
    yaxis: {
        title: 'Y points',
        gridcolor: 'rgb(189, 189, 189)',
        zeroline: false
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
};

Plotly.newPlot("graph1", data1, layout)

// Second graph

const data2 = [{
    x: [1999, 2000, 2001, 2002],
    y: [10, 15, 13, 17],
    type: 'scatter'
}];

const layout2 = {
    title: 'Second Graph',
    xaxis: {
        title: 'Year',
        showgrid: false,
        zeroline: false
    },
    yaxis: {
        title: 'Percent',
        showline: false
    }
};

Plotly.newPlot("graph2", data2, layout2);
