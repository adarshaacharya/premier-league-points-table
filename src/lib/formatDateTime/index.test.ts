import { formatDate, formatTime } from "./";

describe("formatDate", () => {
  it("should format a date string to date format", () => {
    const inputDate = "2022-01-01T12:00:00Z";
    const expectedDate = "01/01";
    expect(formatDate(inputDate)).toEqual(expectedDate);
  });

  it("should throw an error if input date is not in correct format", () => {
    const inputDate = "01/01/2022";
    expect(() => formatDate(inputDate)).toThrow(
      "Invalid date format. Please provide date in ISO String format"
    );
  });
});

describe("formatTime", () => {
  it("should format a date string to time", () => {
    const inputDate = "2022-01-01T12:00:00Z";
    const expectedTime = "17:45";
    expect(formatTime(inputDate)).toEqual(expectedTime);
  });

  it("should throw an error if input date is not in correct format", () => {
    const inputDate = "01/01/2022";
    expect(() => formatTime(inputDate)).toThrow(
      "Invalid date format. Please provide date in ISO String format"
    );
  });
});
