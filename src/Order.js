// import React from 'react'
// import moment from "moment"; //useful for passing date and time stamps
// import CheckoutProduct from "./CheckoutProduct";
// import { useStateValue } from './StateProvider';
// import "./Order.css"
// function Order({ order }) {
//     const [{ basket }, dispatch] = useStateValue();
//     let t = 0;
//     for (let i = 0; i < basket.length; i++) {
//         t += basket[i].price;
//     }
//     return (
//         <div className='order'>
//             <h2>Order</h2>
//             <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:ma')}</p>
//             <p className='order__id'>
//                 <small>{order.id}</small>
//             </p>
//             {order.data.basket?.map(item => (
//                 <CheckoutProduct
//                     id={item.id}
//                     title={item.title}
//                     image={item.image}
//                     price={item.price}
//                     rating={item.rating}
//                     //passing a prop to checkout product for hiding the button or not
//                     hideButton

//                 />
//             ))}
//             <h3 className='order__total'>Order Total : ₹{(order.data.amount) / 100}</h3>

//         </div>
//     )
// }

// export default Order