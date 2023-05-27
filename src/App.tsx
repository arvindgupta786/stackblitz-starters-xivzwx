import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
const Button = () =>
{
  const [count, setCount] = React.useState(0);
  const Click = ()  => {
    setCount(count => count+1);
  } 
};
return {
  <Button onclick ={Click}>Button</Button>
  <p>Click :{count}

}
