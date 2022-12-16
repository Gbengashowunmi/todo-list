import React from 'react'

const Alert = ({showAlert}) => {
  return <p className={`alert alert-${showAlert.type}`}>{showAlert.message}</p>
}

export default Alert
