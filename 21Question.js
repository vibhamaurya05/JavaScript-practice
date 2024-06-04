// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
//     - If the user input is not month name, return "Input is invalid"


let month = prompt("Enter month");

switch(month) {
    case 'Jaunary':
    case 'February':
    case 'December':
        console.log(" Winter season");
    break;

    case 'March':
    case 'April':
    case 'May':
        console.log("Spring season");
    break;
    
    case 'June':
    case 'July':
    case 'August':
        console.log("Summer season");
    break;

    case 'September':
    case 'October':
    case 'November':
        console.log("Autumn season");
    break;

    default:
        console.log("Input is invalid ");

}