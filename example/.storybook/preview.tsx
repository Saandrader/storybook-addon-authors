import React from "react";
import type { Preview } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";
import { ComponentAuthor } from "../../src/components/ComponentAuthor";
import { Authors } from "./Authors";
import { AuthorTemplate } from "./AuthorTemplate";

const preview: Preview = {
  parameters: {
    authors: { ids: Authors, authorTemplate: AuthorTemplate },
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
