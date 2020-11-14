/* eslint-disable array-callback-return */
/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    const result = async () => {
      await axios.get("https://type.fit/api/quotes").then((res) => {
        const id = res.data;
        setQuote(id);
      });
    };
    result();
  }, []);

  return (
    <div>
      {quote.map((e, index) => {
        return (
          <div key={index}>
            <p>{e.text}</p>
            <h5>{e.author}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

/*
  
*/

/* 
<div className="ui card">
        <div className="content">
          <div className="header">Random quote</div>
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            aliquid.
          </p>
          <h5>- dkpossd</h5>
        </div>
      </div>
      */
