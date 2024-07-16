import { CORE_CONCEPTS } from "../data";
import React from "react";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((item, index) => (
          <CoreConcept
            key={index}
            image={item.image}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
