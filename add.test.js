import { describe, it } from "node:test";
import assert from "node:assert/strict";
import add from "./add.js";

describe("The add function", () => {
  it("#add throws without two arguments", () => {
    assert.throws(() => {
      add();
    }, Error);

    assert.throws(() => {
      add(2);
    }, Error);
  });

  it("#add returns the expected result", () => {
    assert.equal(add(5, 4), 9);
  });
});
