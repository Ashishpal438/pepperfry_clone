// import React , { useEffect, useState } from 'react'

// export const Furniture = () => {
//     const [furniture, setFurniture] = useState([])
   
//     useEffect(() => {
//         getFurniture()
//     }, [])

//    const getFurniture = () => {
//      fetch('https://pepperfry-backend1.herokuapp.com/furniture')
//      .then(res => res.json())
//      .then(data  => setFurniture(data))  
//    }

//   return (
//     <div>
//           {
//               furniture.map(furniture => {
//                     return (
//                         <div key={furniture.id}>
//                             <h1>{furniture.name}</h1>
//                             <h1>{furniture.price}</h1>
//                             <img src={furniture.image} alt=""/>
//                             <h1>{furniture.brand}</h1>
//                         </div>
//                     )
//                 })
//           }
//     </div>
//   )
// }
