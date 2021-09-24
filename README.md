# What's PokeSearch about?

Pokesearch a simple web-app you can use to get some basic info on Pokemon such as: a bio, types, and basic stats.

## Features and Tools used

This project was created using the React javascript framework. As dependencies it includes:

- Styled components to manage the styling
- React Icons
- tint-shade-color: to grab the tints and shades for each pokemon type color and apply it to the svg background. The
  type colors where grabbed from this figma file:
  https://www.figma.com/file/pQf27hL8m2Fn36jyPdMFDP/PokeAPI?node-id=0%3A1
- useSwr: to manage the api calls along with the javascript fetch API
- Context API: to manage global state. Pokemon data is stored in a global state so different components on different
  levels can access it with the help of hooks such as useState, useCallback and useEffect.
- The app is responsive as far as I know, it's been tested in different screen sizes using the Google Chrome inspector.
- Minor error handling for cases such as looking for a pokémon with ID greater than 898 and when typing gibberish in
  the searchbar.
- A loader that displays when a search is in progress.

It ain't much, but it's honest work.
