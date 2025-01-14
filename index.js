/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const command = process.argv[2]
    const nums = process.argv.slice(3)

    if(!command) {
        return "No operation provided..."
    }
    if(!nums.length) {
        return "No numbers provided..."
    }
    else {
        if(command === "plus") {
            let total = 0
            for(let i = 0; i < nums.length; i++) {
                total += Number(nums[i]) 
            }
            return total
            
        }
        else if(command === "minus") {
            let total = nums[0]
            for(let i = 1; i < nums.length; i++) {
                total -= Number(nums[i])
            }
            return total
        }
        else {
            return `Invalid operation: ${command}`
        }  
    }
    
}

console.log(calculator())


// Don't change anything below this line.
module.exports = calculator;
