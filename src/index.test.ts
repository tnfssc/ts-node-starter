import { describe, it, expect } from "vitest";

import logSomething from "./index.js";

describe("logSomething", () => {
  it("should log something", () => {
    const param = "someParam";
    expect(logSomething(param)).toBe(param);
  });
});
