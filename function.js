//compare-two

function comparing_two() {
    let num1 = window.prompt("Enter Number - 1 : ");
    let num2 = window.prompt("Enter Number - 2 : ");
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    function compare_two(num1, num2) {

        if (num1 > num2) {
            return num1;
        } else if (num2 > num1) {
            return num2;
        } else {
            return "No number";
        }
    }

    const result = compare_two(num1, num2);

    document.getElementById("compare-two").innerHTML = `${result} is larger between ${num1} and ${num2}`;
}

//compare-three

function comparing_three() {
    let num1 = window.prompt("Enter Number - 1 : ");
    let num2 = window.prompt("Enter Number - 2 : ");
    let num3 = window.prompt("Enter Number - 3 : ");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    function compare_three(num1, num2, num3) {

        if (num1 > num2 && num1 > num3) {
            return num1;
        } else if (num2 > num1 && num2 > num3) {
            return num2;
        } else if (num3 > num1 && num3 > num2) {
            return num3;
        } else {
            return "No number";
        }
    }

    const result = compare_three(num1, num2, num3);

    document.getElementById("compare-three").innerHTML = `${result} is larger between ${num1}, ${num2} and ${num3}`;
}


//compare-n

function comparing_n() {
    let num = window.prompt("How many numbers do you want to Compare: ");
    num = parseInt(num);

    let compare_arr = [];

    for (let i = 0; i < num; i++) {
        compare_arr[i] = window.prompt(`Enter Number - ${i+1} : `);
    }

    let largetst = 0;

    for (let i = 0; i < compare_arr.length; i++) {
        const element = compare_arr[i];
        if (element > largetst) {
            largetst = element;
        }
    }

    document.getElementById("compare-n").innerHTML = `${largetst} is the largest between the given numbers`;

}