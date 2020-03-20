const firstNames = ["Ashley", "Kenneth", "Lois", "Kelly", "Dennis", "Johnny", "Sandra", "Melissa", "Andrew", "Larry"];
const lastNames = ["Wood", "Peterson", "Rivera", "Simmons", "Robinson", "Gray", "Thomas", "Bryant", "Butler", "Williams"];
const eSuffix = ["ru", "org", "net", "com"];
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function getRandom(array) {
    return array[Math.floor(Math.random() * Math.floor(array.length))];
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const id = (() => {
    let counter = 1;
    return function () {
        return counter++;
    }
})();

const name = function () {
    return getRandom(firstNames) + " " + getRandom(lastNames);
}

const email = function (name) {
    let address = "";
    for (let i = 0; i < randomNumber(3, 6); i++) {
        address += getRandom(chars).toLowerCase();
    }
    return name.split(' ').map(x => x = x.toLowerCase()).join('.') + "@" + address + "." + getRandom(eSuffix);
}

const data = function () {
    let dataArr = [];
    for (let i = 0; i < randomNumber(4, 24); i++) {
        let str = "";
        for (let j = 0; j < randomNumber(3, 12); j++) {
            str += getRandom(chars);
        }
        dataArr.push(str);
    }
    return dataArr;
}

const admin = function () {
    return randomNumber(0, 2) ? true : false;
}

const user = function () {
    const newUser = {}
    newUser.id = id();
    newUser.name = name();
    newUser.email = email(newUser.name);
    newUser.data = data();
    newUser.admin = admin();
    return newUser;
}

const Users = []
for (let i = 0; i < 9; i++) Users.push(new user())

module.exports.users = Users;

// const Users = [
//     {
//         id: 1,
//         name: "John",
//         email: "john.doe@earth.com",
//         data: [
//             "this",
//             "is",
//             "the",
//             "first",
//             "data"
//         ],
//         admin: true,
//     },
//     {
//         id: 2,
//         name: "Jane",
//         email: "jane.doe@earth.com",
//         data: [
//             "this",
//             "is",
//             "the",
//             "second",
//             "data"
//         ],
//         admin: false,
//     },
//     {
//         id: 3,
//         name: "Mark",
//         email: "mark.cliff@earth.com",
//         data: [
//             "this",
//             "is",
//             "the",
//             "third",
//             "data"
//         ],
//         admin: false,
//     }
// ]
