import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Button from "../components/button/button";

const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

stories.add("with text", () => (
  <Button
    onClick={action("clicked")}
    disabled={boolean("Disabled", false)}
    css={text(
      "CSS",
      `background: #cce6ff;
color: #333;`,
    )}
  >
    {text("Label", "Hello Storybook")}
  </Button>
));
