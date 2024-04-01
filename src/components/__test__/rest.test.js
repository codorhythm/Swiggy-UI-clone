import { render, screen } from "@testing-library/react"
import Restaurant from "../Restaurant"
import MOCK_DATA from "../mocks/restaurantMockData.json"
import "@testing-library/jest-dom"

it("Should render Restaurant Card component ", () => {
    render( <Restaurant resData={MOCK_DATA} />)
    const nameofRest = screen.getByText("Baskin Robbins");
    expect(nameofRest).toBeInTheDocument();
})