import PHONE from "./phone";
import assert from "assert";

const validPhones = [
  {
    raw: "47997535580",
    formatted: "(47)99753-5580",
  },
  {
    raw: "51995412250",
    formatted: "(51)99541-2250",
  },
];
const invalidPhones = ["av234", "333333", "cs!$%TT23"];

describe("PHONE", () => {
  describe("Validation", () => {
    it("should validate a real phone", () => {
      validPhones.map(({ formatted, raw }) => {
        assert(PHONE.validate(formatted) == true);
        assert(PHONE.validate(raw) == true);
      });
    });

    it("should invalidate a fake phone", () => {
      invalidPhones.map((invalidPhone) =>
        assert(PHONE.validate(invalidPhone) == false)
      );
    });
  });

  describe("Formatting", () => {
    it("should format a phone", () => {
      validPhones.map(({ raw, formatted }) =>
        assert(PHONE.format(raw) == formatted)
      );
    });
  });
});
