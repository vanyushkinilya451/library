import { CONSTANTS } from "../constants/constants";
import { getApi } from "./getApi";

describe("getApi", () => {
  test("returns URL without dateRange", () => {
    const subject = "fiction";
    const url = getApi(subject);

    expect(url).toBe(`${CONSTANTS.URLS.SEARCH_BOOKS}?q=subject:${subject}`);
  });

  test("returns URL with dateRange", () => {
    const subject = "fiction";
    const dateRange = "2000-2010";
    const url = getApi(subject, dateRange);

    expect(url).toBe(
      `${CONSTANTS.URLS.SEARCH_BOOKS}?q=subject:${subject}&first_publish_year:${dateRange}`
    );
  });
});
