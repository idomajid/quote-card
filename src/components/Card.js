import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    const result = async () => {
      await axios.get("https://type.fit/api/quotes").then((res) => {
        const id = res.data;
        const randomId = id[Math.floor(Math.random() * id.length)];
        return setQuote(randomId);
      });
    };
    result();
  }, []);

  if (quote === null) {
    return Object;
  }

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">Random quote</div>
      </div>
      <div className="content">
        <p>{quote.text}</p>
        <h5>-{quote.author}</h5>
      </div>
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
          
        </div>
      </div>
      */
