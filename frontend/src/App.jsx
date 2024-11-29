import { useState } from 'react';
import WelcomePage from './pages/welcome-page';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <WelcomePage />
    </>
  );
}

export default App;
