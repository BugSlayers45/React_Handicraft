// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Grid from '@mui/material/Grid';
// import { useLocation } from 'react-router-dom';
// import { useContext } from 'react';
// import { useSelector } from 'react-redux';

// export default function Review() {
//   const data=useSelector(state=>state.deliveryDetail)
//   console.log(data)
//   const location=useLocation()
//   const products=location.state.orderpackage.cartitems
//   return(
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Order summary
//       </Typography>
//       <List disablePadding>
//         {products.map((product) => (
//           <ListItem key={product.productId.title} sx={{ py: 1, px: 0 }}>
//             <ListItemText primary={product.productId.title.substring(0,90)} secondary={"Qty  "+product.quantity} />
//             <Typography variant="body2">{product.productId.price}</Typography>
//           </ListItem>
//         ))}

//         <ListItem sx={{ py: 1, px: 0 }}>
//           <ListItemText primary="Total" />
//           <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
//           ₹ {location.state.orderpackage.billamount}
//           </Typography>
//         </ListItem>
//       </List>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
//             Shipping
//           </Typography>
//           <Typography gutterBottom>{data.deliveryDetail.name}</Typography>
//           <Typography gutterBottom>{data.deliveryDetail.deliveryaddress}</Typography>
//         </Grid>
//         <Grid item container direction="column" xs={12} sm={6}>
//           <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
//             Payment details
//           </Typography>
//           {/* <Grid container>
//             {payments.map((payment) => (
//               <React.Fragment key={payment.name}>
//                 <Grid item xs={6}>
//                   <Typography gutterBottom>{payment.name}</Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography gutterBottom>{payment.detail}</Typography>
//                 </Grid>
//               </React.Fragment>
//             ))}
//           </Grid> */}
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }