var data;
var i;
var images = [];	// Images Array
var optionValue = []    // Option Array
var time = 0;	// Time Between Switch
var request = new XMLHttpRequest();
request.open('GET', 'https://storage.googleapis.com/adcropper-host/test/forw/data.json', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    data = JSON.parse(this.response);
    console.log(data);
    i = 0; 			// Start Point
    images = [];	// Images Array
    time = data.main.looptime;	// Time Between Switch
         
    // Image List
    images = data.main.images;

// option

let dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Options...';
defaultOption.disabled = true;

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;


    optionValue = data.menu;
    let option;
    for (let i = 0; i < optionValue.length; i++) {
      option = document.createElement('option');
      option.text = optionValue[i].key;
      option.value = optionValue[i].value;
      dropdown.add(option);}
    
    // Run function when page loads
    window.onload=changeImg();

  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();


// Change Image
function changeImg(){
    document.slide.src = images[i].url;

    // Check If Index Is Under Max
    if(i < images.length - 1){
      // Add 1 to Index
      i++; 
    } else { 
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("changeImg()", time);
}

function prev(){
    // Check If Index Is Under Max
    if(i > 0){
      // Add 1 to Index
      document.slide.src = images[i-1].url;
      i--; 
    } else { 
        document.slide.src = images[images.length - 1].url;
        i = images.length - 1;
    }

}
function next(){
    // Check If Index Is Under Max
    if(i < images.length - 1){

      document.slide.src = images[i+1].url;
      i++; 
    } else { 
        document.slide.src = images[0].url;
        i = 0;
    }

}
function changeBgColor(value){
    document.getElementById('back-ground').style.background= value;
}


/**
 * Numeric Stepper Class.
 */





 function stepper(btn){

    const myInput = document.getElementById("my-input");
       let id = btn.getAttribute("id");
       let min = myInput.getAttribute("min");
       let step = myInput.getAttribute("step");
       let val = myInput.value;
       let calcStep = (id == "increment") ? (step*1) : (step * -1);
       let newValue = parseInt(val) + calcStep;
    
       if(newValue >= min){
        myInput.value = newValue;
       }
    }
