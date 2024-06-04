// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let slope = (x1,y1,x2,y2) => {

    const m = ((y2-y1)/(x2-x1));
    console.log("slope: " + m);
}

slope(2,2,6,10);


