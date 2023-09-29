# Chess Clock
#### Video Demo: https://www.youtube.com/watch?v=BAFZa2CSgMU&t=31s
#### Description: Chess Clock is a digital chess timer app designed for customization. Built using JavaScript, HTML, CSS, and utilizing localStorage, users can create and manage time presets, adjust individual player times, and make on-the-fly changes. This app simplifies chess game timing, offering flexibility for various game styles and settings.

#### Folder (root)

**`index.js`:**
- `index.js` is the JavaScript file that powers the functionality of the Chess Clock app.
- It imports various modules and functions to manage timers, user interactions, and game settings.

**`index.html`:**
- `index.html` is the main HTML file responsible for the user interface of the Chess Clock app.
- It defines the layout and structure of the app, including headers, clock displays, buttons, and timer adjustment controls.
- This file also links to external CSS and JavaScript files, sets initial values, and manages the appearance of app components.
- `index.html` plays a crucial role in rendering the visual elements of the Chess Clock app and providing a user-friendly interface for interactions.

**`index.css`:**
- Sets general styles for the body element, including background color and position.
- Defines styles for the header element, including background color and width.
- Styles for buttons, links, and icons.
- Defines styles for an overlay used for modal dialogs.
- Contains styles for various form elements, labels, and input placeholders.
- Provides styles for different components like .custom-time, .time-control-main, and .color-theme.

**`horizontal.css`:**
- Styles intended for horizontal phone screens.
- Defines a grid layout for the body with two columns and two rows.
- Styles for the header and two sections (.first-tapping-field and .second-tapping-field).
- Transformations applied to elements, including rotation.
- Styles for various classes like .adjust-time and .material-symbols-outlined.


**`vertical.css`:**
- Styles intended for vertical phone screens.
- Defines a grid layout for the body with one column and three rows.
- Styles for the header and two sections (.first-tapping-field and .second-tapping-field).
- Transformations applied to elements, including rotation.
- Styles for various classes like .adjust-time and .material-symbols-outlined.

//////////////////////////////////////////////////////////////////////////

#### Folder (main)

**`timecontrol.html`:**
- `timecontrol.html` is an HTML file that serves as the user interface for managing time controls in the Chess Clock app.
- It includes elements for selecting preset time controls, choosing theme colors, and navigating to other sections of the app.
- This file utilizes Bootstrap for styling and Google Fonts for typography, creating an attractive and user-friendly design.

**`timecontrol.js`:**
- `timecontrol.js` is a JavaScript file responsible for adding interactivity and functionality to the time control page of the Chess Clock app.
- It listens for events such as button clicks to open the color selector, save user-selected colors, hide the color selector, and save and apply preset time controls.
- The file also retrieves and stores custom time settings, dynamically generates radio buttons for preset time controls, and manages the transition between pages within the app.

**`customtime.html`:**
- `customtime.html` is an HTML file that represents the Custom Time configuration page in the Chess Clock app.
- This page allows users to create and save custom time control settings.
- It includes input fields for naming the custom time control, setting the initial time, and specifying an increment time.
- Bootstrap and Google Fonts are used for styling, and Material Icons provide icons for elements.

**`customtime.js`:**
- `customtime.js` is a JavaScript file responsible for adding functionality and interactivity to the Custom Time page in the Chess Clock app.
- It retrieves the selected color theme and custom time settings from local storage.
- The script performs input validation for the time and increment values, preventing non-numeric input.
- Users can save custom time settings, which are stored as objects in local storage.
- It also checks for duplicate custom times and displays error messages accordingly.
- Upon successful input and validation, the script redirects users back to the time control page with the saved custom time settings.

**`editpresets.html`:**
- `editpresets.html` is an HTML file representing the Edit Presets page in the Chess Clock app.
- This page allows users to edit and reorder their custom time presets.
- It includes a list of custom presets displayed as checkboxes with labels.
- Users can select presets, delete them, and edit their names.
- Bootstrap, jQuery, jQuery UI, Google Fonts, and Material Icons are used for styling and functionality.

**`editpresets.js`:**
- `editpresets.js` is a JavaScript file responsible for adding functionality and interactivity to the Edit Presets page in the Chess Clock app.
- It retrieves the selected color theme, custom time presets, and their order from local storage.
- Custom presets can be reordered by dragging and dropping, and the order is saved to local storage.
- Users can select and delete multiple presets at once, updating the list and local storage accordingly.
- The script allows users to edit the names of presets and updates the names in the custom time presets array in local storage.
- It also keeps track of the number of selected presets and displays it in the interface.

//////////////////////////////////////////////////////////////////////////

#### Folder (players)

**`commonFunctions.js`:**
- `commonFunctions.js` is a JavaScript module that contains common functions shared between two players in a game, such as managing clocks, 
handling click events, and swapping click handlers.
- It exports functions like `handleClockIncrement`, which determines whether to initialize or increment clocks based on the total moves, 
`initializeClockAndDisableButton`, which initializes a clock and disables a play button, `swapClickHandlers`, which exchanges click event handlers 
between primary and secondary players, and `startClock`, which starts the primary clock while stopping the secondary one.

**`player1.js`:**
- `player1.js` is a JavaScript module responsible for managing the actions and logic related to the first player in a game.
- It imports and uses functions from `commonFunctions.js` to handle click events, initialize clocks, and swap click handlers between players.
- Additionally, it defines a `firstTapClickHandler` function, which handles the logic for the first player's click events, and an `incrementFirstClock` 
function to increment the first player's clock.

**`player2.js`:**
- `player2.js` is a JavaScript module responsible for managing the actions and logic related to the second player in a game.
- Similar to `player1.js`, it imports and uses functions from `commonFunctions.js` to handle click events, initialize clocks, and swap click handlers between players.
- It defines a `secondTapClickHandler` function, which handles the logic for the second player's click events, and an `incrementSecondClock` function to increment the 
second player's clock.

//////////////////////////////////////////////////////////////////////////

#### Folder (buttons)

**`disableBtns.js`:**
- Manages button and anchor elements' states based on `disableGame`.
- Toggles the disabled state of buttons and prevents anchor clicks.
- Exported as `toggleDisableBtns`.

**`initializeTimerBtns.js`:**
- Initializes and manages timer settings, including canceling and saving.
- Sets event listeners for cancel and save buttons.
- Exports the `initializeTimer` function.

//////////////////////////////////////////////////////////////////////////

#### Folder (components)

**`timerSettings.js`:**
- Manages timer settings, including visibility and background color.
- Toggles game state and button states.
- Exports `openTimerSetting` function.

**`volumeControl.js`:**
- Controls volume settings for sound effects.
- Toggles sound on and off.
- Exports `toggleVolume` function.

//////////////////////////////////////////////////////////////////////////

#### Folder (data)

**`Clock.js`:**
- Represents a countdown timer with start, stop, and reset functionality.
- Displays time in a formatted manner.
- Can be configured with hours, minutes, and seconds.
- Exported as a class named `Clock`.

**`presets.js`:**
- Contains an array of preset timer configurations.
- Each preset includes a label, time values (hours, minutes, seconds), and optional increment values.
- Provides predefined timer settings for the game.

//////////////////////////////////////////////////////////////////////////

#### Folder (helpers)

**`getQS.js`:**
- Exports a utility function that retrieves an HTML element using its ID attribute and returns it.
- Simplifies DOM element selection using its ID.

//////////////////////////////////////////////////////////////////////////

#### Folder (images)

**`Logo.PNG`:**
- Is a PNG of the app's logo.

//////////////////////////////////////////////////////////////////////////

#### Folder (sound-effects)

**`chess-clock-sound.m4a`:**
- Is a tapping sound for the timer.

//////////////////////////////////////////////////////////////////////////

#### Folder (states)

**`disableGameState.js`:**
- Manages the game state to track whether buttons should be disabled or not.
- Provides functions to get and toggle the disable game status.

**`moveCounterIncrementation.js`:**
- Handles move counting in a game, keeping track of the first player's turn and move counters for both players.
- Exports a function for incrementing move counters based on the player's turn.

//////////////////////////////////////////////////////////////////////////

#### Folder (utils)

**`hidePlayerSettings.js`:**
- Hides elements with the "hide" class by adding the "hidden" class to them.

**`initializeClock.js`:**
- Initializes the clock with values from local storage or defaults.
- Sets the clock values based on user input or local defaults.

**`initializeLocalStorage.js`:**
- Initializes local storage with presets for custom times and default play time.

**`inputValidator.js`:**
- Provides a function to validate and replace non-numeric input with 0.

**`playerClickHandlers.js`:**
- Handles click events on game fields, enabling and disabling them for interaction.

**`rotateScreen.js`:**
- Contains functions to apply and remove CSS styles for vertical and horizontal screens.

**`updateFieldColor.js`:**
- Updates the background color and text color of game fields based on user selections.

