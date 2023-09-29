
### TODO: Add functionality of (Move / Edit)  `editpresets.js`

Move the order of JSON in local storage
each preset has its own id (order) and when the for example id number one is dragged to number 5, then everything till number 5 gets their (id - 1), id number 1 becomes 5.

render presets by id again so it becomes from 1 to ...

render(id) and is going to check each of the id of the preset

use sort algorithm 

loop the whole thing

Edit preset

open up a new div, with input field for its name like cutsom color

---------------- 
Index preset

presets in data file gets these keys: hour, minute, second, increment

in index:
get presets from localstorage 
parse the info into DIVS 
each div/input(radio) has an id 
when submitted pass the info into the clocks

----
incrementatition logic