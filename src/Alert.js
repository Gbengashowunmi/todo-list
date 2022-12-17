import React from 'react'

const Alert = ({showAlert}) => {
//   useEffect(() => {
//   const timeout = setTimeout(() => {
//     alertFunction();
//   }, 4000);
//   return () => clearTimeout(timeout);
// }, [items]);
  return <p className={`alert alert-${showAlert.type}`}>{showAlert.message}</p>
}

export default Alert
