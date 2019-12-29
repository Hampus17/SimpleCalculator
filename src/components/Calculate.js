var nums = [0];

function calc (param) {

    
    // if int then put the number in nums pool ( += )
    // Probs objects so you can have multiple digit numbers
    if (TryParseInt(param)) {
        let num = parseInt(param);
        nums.push(num);
        document.getElementById('preview').innerHTML = nums.map(data => data.toString());

    } else {
        // Then check if any operator was pressed
        if (true) {

        }
    }

    // Also display the numbers in the display

    // if any operator do the operations with the numbers in the pool

    // if remove key is pressed remove the last number in pool
    // Also remove from display

    //If AC key pressed removed all numbers from pool (nums = [0])
    // And removed the numbers from the display
    console.log(nums);





}

function TryParseInt(str) {
    if(str !== null) {
        if(str.length > 0) {
            if (!isNaN(str)) {
                return true;
            }
        }
    }
    return false;
}

export default calc