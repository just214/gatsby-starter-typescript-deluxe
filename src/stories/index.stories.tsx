import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Button } from "../components/button";

const DEFAULT_STYLE = "background: #cce6ff;\ncolor: #333;";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("with text", () => (
    <Button
      onClick={action("clicked")}
      disabled={boolean("Disabled", false)}
      css={text("CSS", DEFAULT_STYLE)}
    >
      {text("Label", "Hello Storybook")}
    </Button>
  ));
