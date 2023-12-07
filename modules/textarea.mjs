import { name } from "@modules/button.mjs";
import * as React from "react";

console.log({ name }, React);

if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
