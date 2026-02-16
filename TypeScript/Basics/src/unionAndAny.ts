let subs: number | string = 10000;

let apiRequestStatus: 'pending' | 'success' | 'error' | 'loading' = 'pending';

let airlineSeat: 'aisle' |'window' | 'middle' = 'aisle';

airlineSeat = 'window';

console.log("Airline Seat:", airlineSeat);

const orders = [
    { id: 1, status: 'pending' },
    { id: 2, status: 'success' },
    { id: 3, status: 'error' },
]

type OrderStatus = 'pending' | 'success' | 'error';

orders.forEach(order => {
    if (order.status === 'pending') {
        console.log(`Order ${order.id} is pending.`);
    } else if (order.status === 'success') {
        console.log(`Order ${order.id} was successful.`);
    } else if (order.status === 'error') {
        console.log(`Order ${order.id} encountered an error.`);
    }
});

