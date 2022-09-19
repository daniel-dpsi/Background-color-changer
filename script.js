var index = 0;

function changeColors() {
    var colors = ["red","blue","orange","yellow","green","purple"]; // array containing the available colors 
    
    document.getElementsByTagName("body")[0]. // gets the body in the html therefore allowing to change its properties in this case the background color
    style.background = colors[index++] // increments starting from 0 => 1 and going from index 0 to 5 (6 colors total + default)

    if(index > colors.length - 1) // upon reaching the final attribute in the array => goes to the front of the array
    index = 0;
}

// pwrdaniel 2022