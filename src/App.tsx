import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // @ts-ignore
  analytics.identify('f4ca124298', {
    name: 'Michael Brown',
    email: 'mbrown@example.com'
  });

  const signUp = (): void => {
    // @ts-ignore
    analytics.track('Signed Up', {
      plan: 'Enterprise'
    });
  };

  const addToBookmark = (): void => {
    // @ts-ignore
    analytics.track('Article Bookmarked', {
      title: 'Snow Fall',
      subtitle: 'The Avalanche at Tunnel Creek',
      author: 'John Branch'
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={signUp}>Sign up</button>
        <button onClick={addToBookmark}>Add to bookmark</button>
      </header>
    </div>
  );
}

export default App;
