import React, { useState, useEffect } from "react";

const Quotes = () => {
  const [quotes, setQuotes] = useState("");
  const getQuotes = async () => {
    try {
      let res = await fetch(`https://type.fit/api/quotes`);

      let data = await res.json();
      let randomNum = Math.floor(Math.random() * 10);
      setQuotes(data[randomNum]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getQuotes();
  }, []);
  const tweetnow = () => {
    const tweetpost = `https://twitter.com/intent/tweet?text=${quotes.text}`;
    window.open(tweetpost);
  };

  return (
    <>
      <div className="wrapper">
        <h2 className="heading">Tweet This quotes</h2>
        <div className="quotes">
          {quotes.text}
          <span>{quotes.author}</span>
        </div>
        <div>
          <button className="tweet_btn btn" onClick={tweetnow}>
            tweet me
          </button>
          <button className="quotes_btn btn" onClick={getQuotes}>
            New Quotes
          </button>
        </div>
      </div>
    </>
  );
};

export default Quotes;
