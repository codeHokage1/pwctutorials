const studentActivities = [
    {
        id: 1,
        description: "Induction Ceremnony",
        isDone: true
    },
    {
        id: 2,
        description: "HTML, CSS, JavaScript and React",
        isDone: false
    },
    {
        id: 3,
        description: "C# and .NET class",
        isDone: false
    }
]

const doneActivities = studentActivities.filter(activity => activity.id  === 3);
console.log(doneActivities);
// ###################################

const customers = [
    {
        id: 1,
        accountNumber: "1234565838",
        fullName: "Ayomide Sodiq",
        address: "3 Olaooga Street",
        canDebit: true
    },
    {
        id: 2,
        accountNumber: "56588920292",
        fullName: "John Smith",
        address: "3 Merrilyn Street",
        canDebit: false
    },
    {
        id: 3,
        accountNumber: "13999999938",
        fullName: "Doe Roe",
        address: "3 West Street",
        canDebit: true
    }
]

const customersIds = customers.map(function (customer) {
    return customer.id;
})
const customersAccountNums = customers.map(function (customer) {
    return customer.accountNumber;
})
const customersNames = customers.map(function (customer) {
    return customer.fullName;
})
const customersAddresses = customers.map(function (customer) {
    return customer.address;
})
const customersWithdrawStatus = customers.map(function (customer) {
    return customer.canDebit;
})

// console.log(customersIds);
// console.log(customersAccountNums);
// console.log(customersNames);
// console.log(customersAddresses);
// console.log(customersWithdrawStatus);

// ###################################

// const scores = [80, 90, 70, 60, 50];

// const scoresTimesTwo = scores.map(function (score) {
//     return score * 2;    
// })
// console.log(scoresTimesTwo);

// const 