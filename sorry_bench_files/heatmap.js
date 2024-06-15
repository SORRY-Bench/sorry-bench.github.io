const data = [
    { model: "Model A", scores: [0.91, 0.85, 0.78, 0.65, 0.59], categories: ["Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5"] },
    { model: "Model B", scores: [0.75, 0.82, 0.77, 0.68, 0.71], categories: ["Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5"] },
    { model: "Model C", scores: [0.88, 0.80, 0.85, 0.90, 0.84], categories: ["Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5"] }
];

let selectedCategories = ["Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5"];

function createCheckboxes() {
    const form = d3.select('#categorySelection');
    data[0].categories.forEach(cat => {
        form.append('label')
            .text(cat)
            .append('input')
            .attr('type', 'checkbox')
            .attr('checked', true)
            .attr('value', cat)
            .on('change', function() {
                updateSelectedCategories(this.value, this.checked);
            });
    });
}

function updateSelectedCategories(category, isChecked) {
    if (isChecked && !selectedCategories.includes(category)) {
        selectedCategories.push(category);
    } else {
        selectedCategories = selectedCategories.filter(cat => cat !== category);
    }
    updateHeatmap();
}

function updateHeatmap() {
    // Sort selected categories based on their numerical suffix
    selectedCategories.sort((a, b) => {
        const numA = parseInt(a.split(" ")[1]);
        const numB = parseInt(b.split(" ")[1]);
        return numA - numB;
    });

    // Filter data based on sorted and selected categories
    const indices = selectedCategories.map(cat => data[0].categories.indexOf(cat));
    const filteredData = data.map(d => ({
        model: d.model,
        scores: indices.map(i => d.scores[i]),
        categories: selectedCategories
    }));

    // Calculate average scores for each model and sort by this average score
    filteredData.forEach(d => {
        d.average = calculateAverage(d.scores);  // Add average score to each model's data
    });

    // Sort models based on the calculated average scores
    filteredData.sort((a, b) => a.average - b.average);  // Sort ascending

    d3.select('#heatmap svg').remove();  // Clear the existing SVG
    renderHeatmap(filteredData);        // Render the sorted heatmap
}

function calculateAverage(scores) {
    return scores.reduce((a, b) => a + b, 0) / (scores.length || 1);  // Avoid division by zero
}



function renderHeatmap(filteredData) {
    const svgWidth = 700;  // Maintain width for better label spacing
    const svgHeight = 300;
    const labelPadding = 175;  // Space for y-axis labels
    const cellWidth = (svgWidth - labelPadding) / selectedCategories.length;  // Adjust cell width to fit labels
    const cellHeight = 20;
    const labelXPosition = 5;  // X position for model names and their average score

    const svg = d3.select('#heatmap').append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight);

    // Create rows for each model
    const rows = svg.selectAll('.row')
        .data(filteredData)
        .enter()
        .append('g')
        .attr('transform', (d, i) => `translate(${labelPadding}, ${i * cellHeight + 20})`);

    // Create cells for each category
    const cells = rows.selectAll('.cell')
        .data(d => d.scores.map((score, index) => ({ score, category: d.categories[index] })))
        .enter()
        .append('g');  // Group for each cell to contain rect and text

    cells.append('rect')
        .attr('x', (d, i) => i * cellWidth)
        .attr('width', cellWidth - 2)  // Some padding between cells
        .attr('height', cellHeight)
        .attr('fill', d => `rgba(255, 0, 0, ${d.score})`);

    // Add score text on each cell
    cells.append('text')
        .attr('x', (d, i) => i * cellWidth + cellWidth / 2)  // Center text in the middle of the cell
        .attr('y', cellHeight / 2)  // Center text vertically in the cell
        .attr('dy', '.35em')  // Vertical alignment for good typographic alignment
        .attr('text-anchor', 'middle')  // Center the text horizontally
        .text(d => d.score.toFixed(2))  // Round the score to two decimal places
        .attr('fill', 'white')  // Choose a text color that contrasts well with the cell color
        .style('font-size', '12px');  // Adjust font size as needed

    // Add x-axis labels
    svg.selectAll('.x-label')
        .data(selectedCategories)
        .enter()
        .append('text')
        .attr('class', 'x-label')
        .attr('x', (d, i) => labelPadding + i * cellWidth + cellWidth / 2)
        .attr('y', 15)
        .attr('text-anchor', 'middle')
        .text(d => d);

    // Add y-axis labels and average scores
    const yLabels = svg.selectAll('.y-label')
        .data(filteredData)
        .enter()
        .append('g');

    yLabels.append('text')
        .attr('class', 'y-label')
        .attr('x', labelXPosition)
        .attr('y', (d, i) => i * cellHeight + 35)
        .attr('dy', '.35em')
        .text(d => d.model);

    yLabels.append('text')
        .attr('class', 'average-score')
        .attr('x', labelXPosition + 70)  // Offset to display average next to model name
        .attr('y', (d, i) => i * cellHeight + 35)
        .attr('dy', '.35em')
        .text(d => `(Avg: ${calculateAverage(d.scores).toFixed(2)})`)
        .style('font-weight', 'bold');

    function calculateAverage(scores) {
        return scores.reduce((a, b) => a + b, 0) / scores.length;
    }
}


// Initial rendering and checkbox setup
createCheckboxes();
updateHeatmap();
