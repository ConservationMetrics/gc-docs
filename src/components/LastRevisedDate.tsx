import React from "react";

/** Build-time date for the homepage "Content last revised" banner. */
export default function LastRevisedDate() {
  return (
    <>
      {new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </>
  );
}
