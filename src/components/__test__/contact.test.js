import { render,screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"

describe("Contact Us Page Test Case", () => {

    test("Render of the contact Component", () => {
        render(<ContactUs/>)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
    })
    test("should load button inside contact component ", () => {
        render(<ContactUs/>)
        // const button = screen.getByRole("button")
        const button = screen.getByText("Submit") // alternate way 
        expect(button).toBeInTheDocument();
    })
    
    it("Render of the contact Component", () => {
        render(<ContactUs/>)
        // const button = screen.getByRole("button")
        const inputBoxes = screen.getAllByRole("textbox") // alternate way 
        // expect(inputBoxes.length).toBe(2);
        expect(inputBoxes.length).not.toBe(3);
    })
})

