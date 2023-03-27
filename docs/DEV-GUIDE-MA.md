# Installation

Needed:
* NodeJS (i use nodejs 19)
* update npm (i used npm v9)

To compile the project with an actual NodeJS & npm version:
npm config set legacy-peer-deps true


# Development

## Add new field to Flat Worklog
If the field is already obtained by the actual query:
* util_group.js
    * Modify getLogUserObject function to add the field to a variable
    * Modify generateUserDayWiseData function to propagate the field
* utils.js
    * Modify getFlatMapper function to propagate the field

* actions.js
    * Modify getColumnSettings function to create a field visualization

