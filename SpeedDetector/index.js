//This is where the user is supposed to enter the speed of the car in Km/hr
let speed = prompt("Enter Speed Of The Car in Km/hr")

//Since the speed limit is 70Km/hr we can as well set it as a velocity to be more specific about the motion
const velocity = 70;

//Now for every 5Km/hr after our constant velocity one point will be given the the driver
const points = 5;


//Here is where now I assign the function to determine the feedback given to the user
function detector() {

    if (speed = velocity) {
        console.log(OK);
        window.alert(OK);
    }
    else if (speed > velocity){
        const demeritpoints = ((speed - velocity)/points);
        console.log(demeritpoints);
    }
    //Now I've given the response if the driver is within the speed limit
    //Here is where the demerit points will be calculated and determined

    if (demeritpoints <12){
        console.log(demeritpoints);
        window.alert(demeritpoints);
    }
    else if (demeritpoints >= 12){
        console.log("License suspended");
        window.alert("License suspended");
    }
    document.getElementById("detector").innerHTML=detector;
}