import { PASSWORD_ERRORS, validatePassword } from "./validatePassword";

describe("validatePassword", () => {
  test("returns TOO_SHORT error if password is too short", () => {
    const result = validatePassword("1234567");
    expect(result).toEqual(expect.arrayContaining([PASSWORD_ERRORS.tooShort]));
  });

  test("returns HAS_SPACE error if password contains space", () => {
    const result = validatePassword("12345678 ");
    expect(result).toEqual(expect.arrayContaining([PASSWORD_ERRORS.hasSpace]));
  });

  test("returns HAS_RU error if password contains Russian letters", () => {
    const result = validatePassword("PasswordПр");
    expect(result).toEqual(expect.arrayContaining([PASSWORD_ERRORS.hasRu]));
  });

  test("returns HAS_FORBIDDEN error if password contains forbidden symbols", () => {
    const result = validatePassword("Password<");
    expect(result).toEqual(
      expect.arrayContaining([PASSWORD_ERRORS.hasForbidden])
    );
  });

  test("returns empty array for valid password", () => {
    const result = validatePassword("Valid123!");
    expect(result).toEqual([]);
  });

  test("returns multiple errors for password violating several rules", () => {
    const result = validatePassword("123 Пр<");
    expect(result).toEqual(
      expect.arrayContaining([
        PASSWORD_ERRORS.tooShort,
        PASSWORD_ERRORS.hasSpace,
        PASSWORD_ERRORS.hasRu,
        PASSWORD_ERRORS.hasForbidden,
      ])
    );
  });
});
