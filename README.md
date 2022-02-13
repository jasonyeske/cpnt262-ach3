# Jason Yeske Code Journal

## cpnt262-ach3, Press of a Button

### To DO: Make a page so when I press a button, something displays

- Make a basic HTML page
- Add a button tag
- Add a text tag of sorts
    - I used an h1 tag
- Create a js file
- use query selector to grab the button (document.querySelector())
    - Not working?
    - This was the root of my problem, was calling null
    - Had to add a # to call the id
- use addEventListener to give the query a click function
    - Coming back as null
    - Research time 
    - [Cannot read property 'addEventListener' of null](https://www.youtube.com/watch?v=Dl5ddgWkJlk)
        - This video saved my life
- Create a function that when the button is pressed, print text
    - Use getElementById to grab the id of the element from the html page
    - Prints the text I want to screen

## Attributions
- [Cannot read property 'addEventListener' of null](https://www.youtube.com/watch?v=Dl5ddgWkJlk)
- [w3schools addEventListener](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
- [w3schools querySelector](https://www.w3schools.com/jsref/met_document_queryselector.asp)