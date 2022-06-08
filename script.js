//fetch the current date and display it in the CurrentDay text paragraph
const dateClass = new Date();

dateClass.setDate(dateClass.getDate());
console.log(dateClass);
var div = document.getElementById('CurrentDay');
div.innerHTML = dateClass;

var date = dateClass;

//set times using moment 

const eightAm = moment().set('hour',8);
const nineAm = moment().set('hour',9);
const tenAm = moment().set('hour',10);
const elevenAm = moment().set('hour',11);
const noon = moment().set('hour',12);
const onePm = moment().set('hour',13);
const twoPm = moment().set('hour',14);
const threePm = moment().set('hour',15);
const fourPm = moment().set('hour',16);
const fivePm = moment().set('hour',17);
const sixPm = moment().set('hour',18);


//colorcode the times for past present future

//8 am section
const eightAmEl = document.getElementById('eightAmEl');
const eightAmElInput = document.getElementById('eightAmEl');

if(moment().isAfter(eightAm)) {
    eightAmEl.style.backgroundColor = '#ff6961';
    eightAmElInput.style.backgroundColor = '#ff6961';
} else {
    eightAmEl.style.backgroundColor = '#77dd77';
    eightAmElInput.style.backgroundColor = '#77dd77';
};

//9 am section
const nineAmEl = document.getElementById('nineAmEl');
const nineAmElInput = document.getElementById('nineAmEl');

if(moment().isAfter(nineAm)) {
    nineAmEl.style.backgroundColor = '#ff6961';
    nineAmElInput.style.backgroundColor = '#ff6961';
} else {
    nineAmEl.style.backgroundColor = '#77dd77';
    nineAmElInput.style.backgroundColor = '#77dd77';
};

//10 am section
const tenAmEl = document.getElementById('tenAmEl');
const tenAmElInput = document.getElementById('tenAmEl');

if(moment().isAfter(tenAm)) {
    tenAmEl.style.backgroundColor = '#ff6961';
    tenAmElInput.style.backgroundColor = '#ff6961';
} else {
    tenAmEl.style.backgroundColor = '#77dd77';
    tenAmElInput.style.backgroundColor = '#77dd77';
};

//11 am section
const elevenAmEl = document.getElementById('elevenAmEl');
const elevenAmElInput = document.getElementById('elevenAmEl');

if(moment().isAfter(elevenAm)) {
    elevenAmEl.style.backgroundColor = '#ff6961';
    elevenAmElInput.style.backgroundColor = '#ff6961';
} else {
    elevenAmEl.style.backgroundColor = '#77dd77';
    elevenAmElInput.style.backgroundColor = '#77dd77';
};

//noon section
const noonEl = document.getElementById('noon');
const noonElInput = document.getElementById('noon');

if(moment().isAfter(noon)) {
    noonEl.style.backgroundColor = '#ff6961';
    noonElInput.style.backgroundColor = '#ff6961';
} else {
    noonEl.style.backgroundColor = '#77dd77';
    noonElInput.style.backgroundColor = '#77dd77';
};

//1 pm section
const onePmEl = document.getElementById('onePmEl');
const onePmElInput = document.getElementById('onePmEl');

if(moment().isAfter(onePm)) {
    onePmEl.style.backgroundColor = '#ff6961';
    onePmElInput.style.backgroundColor = '#ff6961';
} else {
    onePmEl.style.backgroundColor = '#77dd77';
    onePmElInput.style.backgroundColor = '#77dd77';
};

//2 pm section 
const twoPmEl = document.getElementById('twoPmEl');
const twoPmElInput = document.getElementById('twoPmEl');

if(moment().isAfter(onePm)) {
    twoPmEl.style.backgroundColor = '#ff6961';
    twoPmElInput.style.backgroundColor = '#ff6961';
} else {
    twoPmEl.style.backgroundColor = '#77dd77';
    twoPmElInput.style.backgroundColor = '#77dd77';
};

//3pm section
const threePmEl = document.getElementById('threePmEl');
const threePmElInput = document.getElementById('threePmEl');

if(moment().isAfter(threePm)) {
    threePmEl.style.backgroundColor = '#ff6961';
    threePmElInput.style.backgroundColor = '#ff6961';
} else {
    threePmEl.style.backgroundColor = '#77dd77';
    threePmElInput.style.backgroundColor = '#77dd77';
};

//4 pm section
const fourPmEl = document.getElementById('fourPmEl');
const fourPmElInput = document.getElementById('fourPmEl');

if(moment().isAfter(fourPm)) {
    fourPmEl.style.backgroundColor = '#ff6961';
    fourPmElInput.style.backgroundColor = '#ff6961';
} else {
    fourPmEl.style.backgroundColor = '#77dd77';
    fourPmElInput.style.backgroundColor = '#77dd77';
};

//5pm section
const fivePmEl = document.getElementById('fivePmEl');
const fivePmElInput = document.getElementById('fivePmEl');

if(moment().isAfter(fivePm)) {
    fivePmEl.style.backgroundColor = '#ff6961';
    fivePmElInput.style.backgroundColor = '#ff6961';
} else {
    fivePmEl.style.backgroundColor = '#77dd77';
    fivePmElInput.style.backgroundColor = '#77dd77';
};

//6pm section
const sixPmEl = document.getElementById('sixPmEl');
const sixPmElInput = document.getElementById('sixPmEl');

if(moment().isAfter(sixPm)) {
    sixPmEl.style.backgroundColor = '#ff6961';
    sixPmElInput.style.backgroundColor = '#ff6961';
} else {
    sixPmEl.style.backgroundColor = '#77dd77';
    sixPmElInput.style.backgroundColor = '#77dd77';
};

//END OF TIMESLOTS SECTION

//local storage section

$(document).ready(function(){
    $("#saveBtn8").on("click", function() {
        localStorage.setItem("task8", $("#textarea8").val());
        console.log(localStorage.getItem("task8"));
    })
});

$(document).ready(function(){
    $("#saveBtn9").on("click", function() {
        localStorage.setItem("task9", $("#textarea9").val());
        console.log(localStorage.getItem("task9"));
    })
});

$(document).ready(function(){
    $("#saveBtn10").on("click", function() {
        localStorage.setItem("task10", $("#textarea10").val());
        console.log(localStorage.getItem("task10"));
    })
});

$(document).ready(function(){
    $("#saveBtn11").on("click", function() {
        localStorage.setItem("task11", $("#textarea11").val());
        console.log(localStorage.getItem("task11"));
    })
});

$(document).ready(function(){
    $("#saveBtn12").on("click", function() {
        localStorage.setItem("task12", $("#textarea12").val());
        console.log(localStorage.getItem("task12"));
    })
});

$(document).ready(function(){
    $("#saveBtn13").on("click", function() {
        localStorage.setItem("task13", $("#textarea13").val());
        console.log(localStorage.getItem("task13"));
    })
});

$(document).ready(function(){
    $("#saveBtn14").on("click", function() {
        localStorage.setItem("task14", $("#textarea14").val());
        console.log(localStorage.getItem("task14"));
    })
});

$(document).ready(function(){
    $("#saveBtn15").on("click", function() {
        localStorage.setItem("task15", $("#textarea15").val());
        console.log(localStorage.getItem("task15"));
    })
});

$(document).ready(function(){
    $("#saveBtn16").on("click", function() {
        localStorage.setItem("task16", $("#textarea16").val());
        console.log(localStorage.getItem("task16"));
    })
});

$(document).ready(function(){
    $("#saveBtn17").on("click", function() {
        localStorage.setItem("task17", $("#textarea17").val());
        console.log(localStorage.getItem("task17"));
    })
});

$(document).ready(function(){
    $("#saveBtn18").on("click", function() {
        localStorage.setItem("task18", $("#textarea18").val());
        console.log(localStorage.getItem("task18"));
    })
});
//end of local storage section


//clear the storage after 6pm 
function ClearStorage() {
    if (moment().isAfter(sixPm)) {
        localStorage.clear();
    } else {
        console.log("it has not yet reached 6pm today");
    }
}
//set the time that it clears 
setInterval(clearStorage, 1000 * 60);
clearStorage();


//save local storage upon refresh section
//i really do not know how to do this to be completely honest
//i tried a lot of methods and i could not get it to work 
























