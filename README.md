# Travel Receipts
This is an example of how the [react collapsible table](https://github.com/massmutual/react-collapsing-table) works with redux and customizable components.

To see this app in action you can check [this link out](https://salinn.github.io/travel-receipts/)

## Table of contents
- Setup
- Changing React Collapsing Table
- Props for table

## Setup
Open up a terminal and clone the repo by running `git clone https://github.com/Salinn/travel-receipts.git`

Inside of the project you can run `npm i && npm start` to install the dependencies and start the app.

## Changing React Collapsing Table
If you want to add a feature or think you found a bug and want to try testing it you can do it pretty easily.

First follow the instructions on contributing to the [React Collapsing Table](https://github.com/massmutual/react-collapsing-table).

This will set up a local React Collapsing Table with the dependcies installed, the React Collapsing Table linked via npm and the linked version of the Table running.

With a local copy running you can then remove the `react-collapsing-table` from the package.json and run `npm link react-collapsing-table` in this folder to finalize the connection to the local React Collapsing Table.

Now you should be able to update the react collapsing table and see changes on your local machine.

## Props for table
When we are creating the table it needs to receive columns and rows
The columns need:
- a label which explains what is being showed in that columns
- an accessor string which allows the column to match a key from the row object
- a minWidth which tells it how wide the column needs to be at minimum
- a priorityLevel which tells the table how important the row is, the lower the number the longer it stays visible
- a position which tells the table where to place the columns when they are visible

The optional columns are:
- CustomComponent allows developers to create their own component and render that instead of the normal string
  - This component receives the row, accessor and a custom function is one was defined
- CustomFunction allows developers to pass in functions defined outside of the React Collapsing Table
  - You could theoretically pass in anything to custom function.
  - These key for this object must match the accessor used for the custom function. As this is an object you can pass it anything from another variable to a function.
