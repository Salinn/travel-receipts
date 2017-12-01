# Travel Receipts
This is an example of how the [react collapsible table](https://github.com/massmutual/react-collapsing-table) works with redux and customizable components

## Table of contents
- Props for table

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
-- This component receives the row, accessor and a custom function is one was defined
- CustomFunction allows developers to pass in functions defined outside of the React Collapsing Table
-- You could theoretically pass in anything to custom function.
