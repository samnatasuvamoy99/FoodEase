import { render, screen } from "@testing-library/react"
import ContactUs from "../Contacts"
test("Should load contact us pages?",()=>{
   // react file testing method...
   render(<ContactUs/>);
   const heading = screen.getByRole("heading");

   expect(heading).toBeInTheDocument();

})