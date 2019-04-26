import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Footer from "../components/footer";
import GithubLink from "../components/github-link";

storiesOf("GithubLink", module).add("<GithubLink />", () => <GithubLink />);
storiesOf("Footer", module).add("<Footer />", () => <Footer />);

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
