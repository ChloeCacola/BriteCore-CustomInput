//pseudo code for js


//BASIC****
/*
SELECT A TYPE

Selecting a FIELD TYPE will manipulate the Field Data Input to have specified HTML TYPES and OTHER CHANGES related to the change in input
e.g. 'Currency' => type='text' + '$' included
*/

/*
ON BLUR EVENTS

1. Reference name auto-generated from user-entered label **camelCase**

2. Custom validation true or false
*/

/*
VALIDATE REGEX

Onblur, check if user's custom regex is actually a regex pattern (boolean)

*/


//VUE CODE****
/*
FILTER

Typing in the search box eliminates components that do not match based on TITLE (e.g. 'Text')
*/

/*
TAGS

Selecting a specified TAG GROUP (button) will generate TAG LIST
*/

/*
CAMELCASE AUTOGENERATION 

User types Display Label and Reference name is auto generated with spaces removed, and first letter of each word after the first raised to a capital letter (camelCase)

Vue implementation will involve using an instance of Vue to select the HTML element with containing input.  The input will involve use of a directive for vue js to recognize and consequently use event.target.value (the value of what user types in input) in a method that also pulls out the spaces and capitalizes proper letters.
*/ 

