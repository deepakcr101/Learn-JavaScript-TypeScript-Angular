var subs = 10000;
var apiRequestStatus = 'pending';
var airlineSeat = 'aisle';
airlineSeat = 'window';
console.log("Airline Seat:", airlineSeat);
var orders = [
    { id: 1, status: 'pending' },
    { id: 2, status: 'success' },
    { id: 3, status: 'error' },
];
orders.forEach(function (order) {
    if (order.status === 'pending') {
        console.log("Order ".concat(order.id, " is pending."));
    }
    else if (order.status === 'success') {
        console.log("Order ".concat(order.id, " was successful."));
    }
    else if (order.status === 'error') {
        console.log("Order ".concat(order.id, " encountered an error."));
    }
});
