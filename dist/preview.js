import React from "react";
import { Title, Subtitle, Description, Primary, Controls, Stories, } from "@storybook/blocks";
import { ComponentAuthor } from "./components/ComponentAuthor.js";
const preview = {
    parameters: {
        docs: {
            page: () => {
                return (React.createElement(React.Fragment, null,
                    React.createElement(Title, null),
                    React.createElement(Subtitle, null),
                    React.createElement(ComponentAuthor, null),
                    React.createElement(Description, null),
                    React.createElement(Primary, null),
                    React.createElement(Controls, null),
                    React.createElement(Stories, null)));
            },
        },
    },
};
export default preview;
