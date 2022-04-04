import React from "react";

const Blogs = () => {
  return (
    <div className="container my-5">
      <div>
        <h2>What is Context api?</h2>
        <p className="fs-3">
          React's Context api allows us to pass data to the specific component
          without passing props through every components. We can send data from
          parent component to grandchild component without passing props throw
          the child component. It solves the problem of props drilling.
          Generally react pass data from top to bottom using props at every
          component but using context api we don't need to pass props at every
          component we can just send data to the desired component. Context api
          used in website's UI theme, translating etc.
        </p>
      </div>
      <div>
        <h2>What is Semantic tag?</h2>
        <p className="fs-3">
          Semantic tags are those HTML elements that clearly describes their
          meaning to the browser and human. <i>div, span</i> are some
          non-semantic elements they tell nothing about their content and
          developers use them based on personal preference. But if codes are
          written in standard semantic tag like <i>form, table, article</i> they
          provide clear information about the content used inside those tag.
          Codes written using semantic tag is clearly readable to the
          developers. Also it helps search engine to understand the context and
          content of a website.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
