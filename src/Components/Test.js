import React from 'react'

const Test = () => {
    function sayHello() {
        alert('Hello!');
      }
      
      return (
        <button onClick={sayHello}>
          Click me!
        </button>
      );
}

export default Test
