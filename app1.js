/*
Task -1: 
Find the lowest number in the array below.
*/
const heights = [167, 190, 120, 165, 137, 119,118, 349];
function lowestNumber(heights){
    let minHeight = heights[0];
    for (const height of heights) {
        document.write( height, ', ');

        if(height < minHeight){
            minHeight = height;
        }
    }
    return minHeight;
}
let lowest_height = lowestNumber(heights);
document.write('<br> mininum height = ', lowest_height , '<br>');

/*
 Task -2: 
Find the friend with the smallest name.
*/
const name_Array = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// document.write('<br>Smallest Name is : ', smallestName, ' ');
function smallestName(name_Array){
    let smallestName = name_Array[0];
    for (const name of name_Array) {
        document.write(name, ' ');
        if( smallestName.length > name.length ){
            smallestName = name;
        }
    }
    return smallestName;
}
let smallName = smallestName(name_Array);
document.write('<br> The Smallest Name is : ', smallName ,'<br>');

/*
 Task-3: 
Your task is to calculate the `total budget` required to buy electronics:

        laptop = 35000 tk
        tablet = 15000 tk
        mobile = 20000 tk

Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.

function calculateElectronicsBudget(){

}    
calculateElectronicsBudget();
*/

/*
 Task-4: 

You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice` that takes this `array as input` and returns the `average price of phone`.

*/
const phones = [
    {model: "PhoneA", brand: "Iphone", price: 95000 },

    {model: "PhoneB", brand: "Samsung", price: 40000 },

    {model: "PhoneC", brand: "Oppo", price: 26000 },

    {model: "PhoneD", brand: "Nokia", price: 35000 },

    {model: "PhoneE", brand: "Iphone", price: 105000 },

    {model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones){
    let sum = 0;
    for( let i = 0; i < phones.length; i++){
        document.write(' ', phones[i].price, ' <br>');
        sum = sum + phones[i].price;
    }
    let average = sum / phones.length;
    return average;
}
let averagePrice = findAveragePhonePrice(phones);
document.write('Average Price of Moble Phones : ', averagePrice.toFixed(2) , '<br>');

/*

 Task -5: (Hard)
For each employee (their current salary is calculated by multiplying yearly increment with experience) then (adding the result to the starting salary.) Now calculate is the total salary has to be provided by the company in a month.
*/
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalaryProvided(employees){

    let haveToPay = 0;
    for(let i = 0; i < employees.length; i++){
        // document.write(employees[i].name, ' er increment ',employees[i].experience * employees[i].increment,' <br>');
        let experience = employees[i].experience;
        
        let increment = employees[i].increment;

        let starting = employees[i].starting;

        let totalincre = experience * increment;

        let fullSalary = totalincre + starting;

        // document.write('experience ',experience * increment , ' <br>');

        // document.write('total increment ', totalincre , '<br>');

        document.write('total increment & salary : ', fullSalary , '<br>');

        haveToPay = haveToPay + fullSalary;
    }
    return haveToPay;
}

let providedSalary = totalSalaryProvided(employees);
document.write('the total salary has to be provided by the company in a month ', providedSalary , "<br>");