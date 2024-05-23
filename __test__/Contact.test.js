import { render,screen } from "@testing-library/react"
import ContactUs from "../src/pages/ContactUs"
import "@testing-library/jest-dom"


describe("Contact us page test cases",()=>{
    

    test("Should Load contact us component",()=>{
    render(<ContactUs/>)

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument(); 
});

test("should have 3 input boxes inside contactus component",()=>{
    render(<ContactUs/>);

    const inputBoxes = screen.getAllByRole('textbox');
    //returns an array of react element

    expect(inputBoxes.length).toBe(3);
});

test("should Load button inside contactus component",()=>{
    render(<ContactUs/>)
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
});

})

