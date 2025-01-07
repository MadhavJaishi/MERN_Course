function validate(arr) {

    return !arr.map(item => typeof item).some(item => item != "string")

    // if (arr.length <= 1) return false
    // for(let i = 0; i < arr.length; i++) {
    //     if (!(typeof arr[i] == "string")) {
    //         return false;
    //     }
    // }
    // return true;
}
console.log(validate(["abc", "def", "ghf"]));