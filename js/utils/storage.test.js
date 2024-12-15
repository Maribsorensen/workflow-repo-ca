import { beforeEach, describe, expect, it } from "vitest";
import { getUsername, saveUser } from "./storage";

describe("Local storage functions", () => {
  beforeEach(() => {
    const storage = {};

    globalThis.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key] || null,
    };
  });

  describe("saveUser", () => {
    it("saves username in local storage", () => {
      const testUser = { name: "test-user" };
      saveUser(testUser);
      expect(localStorage.getItem("user")).toBe(JSON.stringify(testUser));
    });
  });

  describe("getUserName", () => {
    it("retrieves username from local storage", () => {
      localStorage.setItem("user", JSON.stringify({ name: "test-user" }));
      const retrievedUser = getUsername();
      expect(retrievedUser).toBe("test-user");
    });

    it("returns null when no username exists in local storage", () => {
      const user = getUsername();
      expect(user).toBeNull();
    });
  });
});
