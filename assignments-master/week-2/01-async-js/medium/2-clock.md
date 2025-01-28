Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

 const date = new Date();
 setInterval(() => {
    var options = { hour12: false };
    console.log(date.toLocaleString('en-US', options)) //24hr
    console.log(date.toLocaleTimeString()) //12hr
 }, 1000)
