function mustComplete() {
    console.log("The work is completed.")
}
try {
    getWeatherReport();
    mustComplete();
}
catch(error) {
    console.log(`The error is ${error}`);
    console.error("Error here");
}
finally {
    mustComplete();
}