import React from "react";
import "./styles.css";
import { useState } from "react";

const books = {
  Javascript: [
    {
      name: "You Don’t Know JS by Kyle Simpson",
      rating: "Rating: 4/5",
      description:
        "https://www.oreilly.com/library/view/you-dont-know/9781491924471/"
    },
    {
      name: "A Smarter Way to Learn JavaScript by Mark Myers",
      rating: "Rating: 3.5/5",
      description:
        "https://www.pdfdrive.com/a-smarter-way-to-learn-javascript-cppedu-e17363369.html"
    },
    {
      name: "JavaScript Enlightenment Book by Cody Lindley",
      rating: "Rating: 4/5",
      description:
        "https://www.pdfdrive.com/javascript-enlightenment-from-library-user-to-javascript-developer-e188891879.html"
    }
  ],
  Fiction: [
    {
      name: "The Maid by Nita Prose",
      rating: "Rating: 4/5",
      description: "https://www.goodreads.com/book/show/59478293-the-maid"
    },
    {
      name: " Olga Dies Dreaming by Xochitl Gonzalez",
      rating: "Rating: 5/5",
      description:
        "https://www.goodreads.com/book/show/57693171-olga-dies-dreaming?ac=1&from_search=true&qid=0bT18nWYDI&rank=1"
    },
    {
      name: "The Alchemist Novel by Paulo Coelho",
      rating: "Rating: 4.5/5",
      description:
        "https://www.pdfdrive.com/the-alchemist-a-fable-about-following-your-dream-e196973141.html"
    }
  ],
  Business: [
    {
      name:
        "Company of One: Why Staying Small is the Next Big Thing for Business by Paul Jarvis",
      rating: "Rating: 3.5/5",
      description:
        "https://www.goodreads.com/book/show/37570605-company-of-one?ac=1&from_search=true&qid=LtTxYw7LES&rank=2"
    },
    {
      name: "Lean In: Women, Work, and the Will to Lead by Sheryl Sandberg",
      rating: "Rating: 4/5",
      description:
        "https://www.goodreads.com/book/show/17789776-summary-of-lean-in-women-work-and-the-will-to-lead-by-sheryl-sandberg-fa?ac=1&from_search=true&qid=1Tpfek3tfr&rank=1"
    },
    {
      name:
        "How to win friends and influence people. How to stop worrying and start living Book by Dale Carnegie",
      rating: "Rating: 5/5",
      description:
        "https://www.goodreads.com/book/show/37678725-dale-carnegie-s-trilogy?ac=1&from_search=true&qid=etxnIGj7au&rank=1"
    }
  ]
};

export default function App() {
  const [selectedgenre, setgenre] = useState("Javascript");
  function getClicked(genre) {
    setgenre(genre);
  }
  return (
    <div className="App">
      <h1>📚 Good Books</h1>
      <h4>Checkout my favorite books. Select a genre to get started</h4>
      <div>
        {Object.keys(books).map((genre) => (
          <button
            onClick={() => getClicked(genre)}
            style={{
              cursor: "pointer",
              background: "yellow",
              borderRadius: "1rem",
              padding: "0.5rem  1rem",
              border: "1px dashed black"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {books[selectedgenre].map((item) => (
            <li
              key={item.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>{item.name}</div>
              <div style={{ fontSize: "larger" }}> {item.rating} </div>
              <div style={{ fontSize: "small", fontStyle: "italic" }}>
                <a href={item.description}> Small Description</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
