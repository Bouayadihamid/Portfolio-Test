import React ,{ useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState();
  useEffect(
    () => {
      fetch('/recipe/hello')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setMessage(data.message)
      })
      .catch(err=>console.log(err))
    },[]
  );
  
  return (
    <div className="app">{message}</div>
  );

}

export default App;