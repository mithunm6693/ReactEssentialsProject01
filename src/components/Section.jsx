import React from "react";

function Section({ text, children, ...props }) {
  return (
    <section {...props}>
      <h2>{text}</h2>
      {children}
    </section>
  );
}

export default Section;
