let matrix = [];
let n = 0;
function generateMatrix() {
    n = parseInt(document.getElementById('matrix-size').value);
    if (isNaN(n) || n < 2) {
        alert("Please enter a valid number greater than 1 for n.");
        return;}
    let table = document.getElementById('matrix-input');
    table.innerHTML = '';
    for (let i = 0; i < n; i++) {
        let row = table.insertRow();
        for (let j = 0; j < n; j++) {
            let cell = row.insertCell();
            let input = document.createElement('input');
            input.type = 'number';
            input.id = `a${i}${j}`;
            cell.appendChild(input);
        }}}
function convertToLowerTriangular() {
    matrix = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            let value = parseFloat(document.getElementById(`a${i}${j}`).value);
            row.push(value);}
        matrix.push(row);}
    let steps = "";
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (matrix[j][i] !== 0) {
                let factor = matrix[j][i] / matrix[i][i];
                steps += `Step ${i + 1}, eliminate element in row ${j + 1} using row ${i + 1}:\n`;
                for (let k = i; k < n; k++) {
                    matrix[j][k] -= factor * matrix[i][k];}
                steps += printMatrix(matrix) + "\n";
            }}}
    document.getElementById('steps').textContent = steps;
    let result = "Lower Triangular Matrix:\n";
    for (let i = 0; i < n; i++) {
        result += matrix[i].join(" | ") + "\n";}
    document.getElementById('result').textContent = result;}
function printMatrix(matrix) {
    let result = "";
    for (let i = 0; i < matrix.length; i++) {
        result += matrix[i].join(" | ") + "\n";}
    return result;}
