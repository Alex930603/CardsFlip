import './styles.scss';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Card from './Card';

export default function App() {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [front, setFront] = useState(true);
  // brutto frocio

  const Loading = () => {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  };

  const requestAPI = async () => {
    try {
      const info = await axios.get(
        `https://random-data-api.com/api/users/random_user?size=10`
      );
      setInfo(info.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    requestAPI();
  }, []);

  console.log(front);
  // brutto frocio
  if (loading) {
    return (
      <>
        <Loading />;
      </>
    );
  }

  return (
    <div className="App">
      <button className="btn" type="button" onClick={() => requestAPI()}>
        <span>RANDOMIZER</span>
      </button>
      <div className="container">
        <div className="cards">
          {info.map((el, id) => {
            return <Card key={id} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
}
