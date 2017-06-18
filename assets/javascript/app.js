var instructions;

function startInstructions() {
    instructions = setInterval(function(){ alertFunc("First param", "Second param"); }, 2000);
}