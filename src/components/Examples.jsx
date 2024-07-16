import React from "react";
import { useState } from "react";
import { EXAMPLELIST } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";

function Examples() {
  const [tabContect, setTabContect] = useState();

  function handleClick(selectedButtons) {
    setTabContect(selectedButtons);
  }
  return (
    <Section text="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={tabContect === "components"}
          onClick={() => handleClick("components")}
          key="components"
        >
          Components
        </TabButton>
        <TabButton
          isSelected={tabContect === "jsx"}
          onClick={() => handleClick("jsx")}
          key="jsx"
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={tabContect === "props"}
          onClick={() => handleClick("props")}
          key="props"
        >
          Props
        </TabButton>
        <TabButton
          isSelected={tabContect === "state"}
          onClick={() => handleClick("state")}
          key="state"
        >
          State
        </TabButton>
      </menu>
      {tabContect ? (
        <div id="tab-content">
          <h3>{EXAMPLELIST[tabContect].title}</h3>
          <p>{EXAMPLELIST[tabContect].description}</p>
          <pre>
            <code>{EXAMPLELIST[tabContect].description}</code>
          </pre>
        </div>
      ) : (
        <p>Please select an Example!</p>
      )}
      <h2>Time to get started!</h2>
    </Section>
  );
}

export default Examples;
