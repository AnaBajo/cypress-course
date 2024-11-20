import { render, screen } from "@testing-library/react";
import BandComponent from "@/pages/bands/[bandId]";
import { readFakeData } from "@/__tests__/__mocks__/fakeData";

test("displays correct band information", async () => {
  const { fakeBands } = await readFakeData();
  // Type '{}' is missing the following properties from type '{ band: Band | null; error: string | null; }': band, error
  render(<BandComponent band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });
  expect(heading).toBeInTheDocument();
});

test("band component displays error", () => {
  render(<BandComponent band={null} error="EVERYTHING IS FINE" />);

  const error = screen.getByRole("heading", {name: /everything is fine/i });
  expect(error).toBeInTheDocument();
});