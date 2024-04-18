import React from "react";
import type { Renderer, ProjectAnnotations } from "@storybook/types";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";
import { ComponentAuthor } from "./components/ComponentAuthor";

const preview: ProjectAnnotations<Renderer> = {
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            {/* <Title /> */}
            <Subtitle />
            <ComponentAuthor />
            <Description />
            <Primary />
            <Controls />
            <Stories />
          </>
        );
      },
    },
  },
};

export default preview;
