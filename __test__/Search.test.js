import {render,screen} from '@testing-library/react'
import AllRestaurant from "../components/AllRestaurants"

it("should render the AllRestaurant model with Search",()=>{
    render(<AllRestaurant/>);
    const searchbtn= screen.getBy
})