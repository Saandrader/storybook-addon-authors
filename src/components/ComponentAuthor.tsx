import { DocsContext } from "@storybook/blocks";
import { useContext } from "react";
import React from "react";

export const ComponentAuthor = () => {
  const parameters = useContext(DocsContext).storyById().parameters;
  const { ids: authorsIds, authorTemplate: Template } = parameters.authors;
  const authorId = parameters.author;
  const authorInfo = authorsIds[authorId];

  if (Template) return <Template {...authorInfo} />;

  const { img, name, job, email } = authorInfo;

  return (
    <>
      <div style={style.wrapper}>
        <img src={img} alt="component author" style={style.img} />
        <div style={style.info}>
          <h4 style={style.margin}> {name} </h4>
          <h5 style={style.margin}> {job}</h5>
          <h6 style={style.margin}>{email}</h6>
        </div>
      </div>
      <hr />
    </>
  );
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
