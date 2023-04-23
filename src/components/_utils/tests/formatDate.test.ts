import { formatDate } from "../formatDate";

describe("a format date", () => {
  it('has to give us back the year "2020" when we pass a full date', () => {
    const date: string = "2020-03-20";
    expect(formatDate(date)).toEqual("2020");
  });
});
