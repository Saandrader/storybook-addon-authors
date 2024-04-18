import { DocsContext } from "@storybook/blocks";
import { useContext } from "react";
import React from "react";
import { Authors } from "./Authors";

/**
 * A block that displays the story name or title from the of prop
 * - if a story reference is passed, it renders the story name
 * - if a meta reference is passed, it renders the stories' title
 * - if nothing is passed, it defaults to the primary story
 */
export const ComponentAuthor = () => {
  //   const context = useContext(DocsContext);

  //   const authorId = context.storyById().parameters.author;

  const { name, job, email, img } = Authors["sdandrader"];

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
