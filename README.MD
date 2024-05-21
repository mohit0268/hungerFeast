#Hunger Feast

wire framing of website

Applayout

- -Header
  -logo
  -navbar items
- -body
  -seach bar
  -reastaurant container
  -res cards
  -img
  -name
  -ratings
  -food item

  -footer
  -copyright
  -links
  -address
  -contactdetails

new features introduced
-Top rated restaurants

#React Hooks
-Normal JS utility function

-useState()
-useEffect()
  -It accepts 2 arguments which is callback function and dependency array(it controls when the effect should run);
  -call back function is called as soon as the render cycle ends
  -Three scenarios of using dependency array inside useEffect
    -if no dependency array is present => useEffect is called on Every render 
    -if the dependency array is empty => useEffect is called on initial Render(just once when the component render for the first time)\
    -if the dependency array is containing component => useEffect is called everytime mentioned component gets updated


#Types of Routing
  -Client side Routing 
  -Server Side Routing
  
-----------
# Redux
 - Redux is a js library for managing the states globally
 - using Redux application becomes easy to debug
 - it does'nt always need react to use redux 

# Redux toolkit
- it is a utility standard way to write redux logic
- it is a less complicated version of redux
- since it a utility we don't require too much packages to do anything useful

## Redux Initialization
- Install @reduxjs/toolkit and react-redux
- build our store
- connect the store to our app
- slice (cartSlice)
- dispatch (action)
- reducer
- selector

# Types of Testing (Developer)
- Unit Testing
- Integration Testing 
- End to End Testing

## Setting up testing in our app
- Installed React Testing library
- Installed Jest
- Install babel dependencies
- configure babel in babel.config.js
- configure parcel config file to disabel babel transpilation in parcel
- Initialize jest
- Install jsdom Library


