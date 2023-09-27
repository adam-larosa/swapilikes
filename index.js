

const swapiPeopleURL = 'https:/swapi.dev/api/people'

function parseJSON( r ) {
    return r.json()
}
const charactersContainer = document.getElementById( 'characters' )


fetch( swapiPeopleURL )
    .then( parseJSON )
    .then( someData => {
        const theArrayOfCharacters = someData.results

        showNames( theArrayOfCharacters )

    } ) 

function showNames( theArrayOfCharacters ) {
    theArrayOfCharacters.forEach( charObj => {
        // make an element, possibly an <li>
        const div = document.createElement( 'div' )
        // change what the element says inside, i.e. change the 'innerText'
        div.innerText = charObj.name

        const button = document.createElement( 'button' )
        button.innerText = 'x'
        div.append( button )

        const span = document.createElement( 'span' )
        span.innerText = 0
        span.style.margin = '.5em'
        div.append( span )

        // append that element to the container
        charactersContainer.append( div )
    } )
}