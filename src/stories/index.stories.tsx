import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Button from "../components/button/button";

const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

const DEFAULT_STYLE = "background: #cce6ff;\ncolor: #333;";

stories.add("with text", () => (
  <Button
    onClick={action("clicked")}
    disabled={boolean("Disabled", false)}
    css={text("CSS", DEFAULT_STYLE)}
  >
    {text("Label", "Hello Storybook")}
  </Button>
));
