import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const Card = () => {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    const result = async () => {
      await axios.get("https://type.fit/api/quotes").then((res) => {
        const id = res.data;
        const randomId = id[Math.floor(Math.random() * id.length)];
        setQuote(randomId);
      });
    };
    result();
  }, []);

  if (quote === null) {
    return <Loading />;
  }

  const refreshWeb = () => {
    window.location.reload();
  };

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">Random quote</div>
      </div>
      <div className="content">
        <p>{quote.text}</p>
        <h4>-{quote.author}</h4>
        <div className="extra content">
          <button onClick={() => refreshWeb()} className="ui primary button">
            Refresh quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

/*

*/
