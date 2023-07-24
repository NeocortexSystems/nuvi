import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';
import ChatBox from './components/Chat/ChatBox';
import Map from './components/Map/Map';
import './App.css';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  if (!user) {
    return (
      <div className="App">
        <button onClick={() => firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())}>
          Sign In with Google
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="App-left">
        <ChatBox user={user} />
      </div>
      <div className="App-right">
        <Map />
      </div>
    </div>
  );
};

export default App;