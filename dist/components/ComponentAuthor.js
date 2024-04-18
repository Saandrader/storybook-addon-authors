import { DocsContext } from "@storybook/blocks";
import { useContext } from "react";
import React from "react";
export const ComponentAuthor = () => {
    const parameters = useContext(DocsContext).storyById().parameters;
    const { ids: authorsIds, authorTemplate: Template } = parameters.authors;
    const authorId = parameters.author;
    const authorInfo = authorsIds[authorId];
    if (Template)
        return React.createElement(Template, { ...authorInfo });
    const { img, name, job, email } = authorInfo;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: style.wrapper },
            React.createElement("img", { src: img, alt: "component author", style: style.img }),
            React.createElement("div", { style: style.info },
                React.createElement("h4", { style: style.margin },
                    " ",
                    name,
                    " "),
                React.createElement("h5", { style: style.margin },
                    " ",
                    job),
                React.createElement("h6", { style: style.margin }, email))),
        React.createElement("hr", null)));
};
const style = {
    wrapper: { display: "flex", gap: "10px", marginBottom: "16px" },
    img: {
        width: "50px",
        height: "50px",
        borderRadius: "100px",
        alignSelf: "center",
    },
    info: { display: "grid" },
    margin: { margin: "0" },
};
