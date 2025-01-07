const username = "madhav";
const age = 21;

// only one element can be default
export default function connect() {
    return `${username} is connected!`;
}

function disconnect() {
    return `${username} is disconnected!`;
}

export{username, age};