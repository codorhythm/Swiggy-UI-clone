import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import { act } from "react-dom/test-utils"
import MOCK_DATA from "../mocks/resList.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("Should render Search list for pizza input", async () => {
    await act(async () => render(<BrowserRouter><Body/></BrowserRouter>))
    const cardsBeforeSearch = screen.getAllByTestId("resId");
    expect(cardsBeforeSearch.length).toBe(38);
    const searchBtn = screen.getByRole("button", {name : "Search"})
    expect(searchBtn).toBeInTheDocument();  
    const searchInput = screen.getByTestId("SearchInput");
    fireEvent.change(searchInput, {target : {value : "pizza"}})
    fireEvent.click(searchBtn);
    const cardsAfterSearch = screen.getAllByTestId("resId");
    expect(cardsAfterSearch.length).toBe(4);  
}


)

it("Should test the top rated restaurant fetaure ", async () => {
    await act( async() => render(<BrowserRouter><Body/></BrowserRouter>))

    const cardsBeforeSearch = screen.getAllByTestId("resId");
    expect(cardsBeforeSearch.length).toBe(38);
    const topRatedBtn = screen.getByRole("button", {name : "Top Rated Restaurants"})
    expect(topRatedBtn).toBeInTheDocument();
    fireEvent.click(topRatedBtn);
    const cardsAfterSearch = screen.getAllByTestId("resId");
    expect(cardsAfterSearch.length).toBe(28);


    
})