#### About
---
Ideal for study cards, language learning, displaying "package" information for businesses/companies etc...

This is a quick project where I wanted to play around with different ways of displaying information, using "cards".
Ideally, this can become a library where a user can simply insert information they want to display, indicate how
they want the user to interact with the information, and customize their own styling.

As of now, this project can accept custom information on the following:
- Total number of cards to display
- Header
- Content
- Subcontent
- UI style (hover, click to flip, click for more information to slide down)

The following features are still to come:
- Add unique header/content/subcontent to each individual card that is displayed
- Have the navigation/settings bar be hidden when displaying the cards
- Use redux to track unique card content and state
- maybe each type of card with certain UI features should become its own component, rather than handling
 all of that in a single Card component


#### Setup
---

```
npm install
```

#### Usage
---

Start the development server with this command:

```
npm start
```

#### Compile
---

```
npm run compile
```