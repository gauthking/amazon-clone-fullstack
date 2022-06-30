// import React, { useEffect, useState } from 'react'
// import "./Orders.css"
// import { db } from "./firebase"
// import { useStateValue } from "./StateProvider"
// import Order from "./Order"
// function Orders() {
//     //states
//     const [{ basket, user }, dispatch] = useStateValue();
//     const [orders, setOrders] = useState([])

//     useEffect(() => {
//         if (user) {
//             db.collection('users').doc(user?.uid).collection('orders').orderBy('created', 'desc').onSnapshot(snapshot => {
//                 setOrders(snapshot.docs.map(doc => ({
//                     id: doc.id,
//                     data: doc.data()
//                 })))
//             })
//             //onSnapshot function gives a realtime db response
//         }

//         else {
//             setOrders([]);
//         }

//     }, [user]) // empty brackets in the second argument makes the useEffect to run only once and if its non empty then the first function would be dependent on the second arg

//     return (
//         <div className='orders'>
//             <h1>Your orders</h1>
//             {/* introducing firestore (realtime database) */}
//             <div className='orders__order'>
//                 {orders?.map(order => (
//                     <Order order={order} /> //passing the order prop
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Orders