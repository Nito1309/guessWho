import React from 'react'

const SessionObserver = ( { value, didUpdate, onMount, children }) => {
    React.useEffect(() => {
      onMount();
    }, [])

    React.useEffect(() => {
      didUpdate(value);
    }, [value])

    return (children);
  }
  
  export default SessionObserver;