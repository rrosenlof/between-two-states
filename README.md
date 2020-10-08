# About

A simple NPM package to find the smallest number of US states in between any two US states. Only includes the lower 48, for now...

## Usage

Install package with the following:

```
npm install between-two-states
```

Then use it in a project like this:

```javascript
var betweenTwoStates = require("between-two-states")

var path = betweenTwoStates.getTwoStatePath('MO','UT')
```

Currently, the `getTwoStatePath` method is the only one, and it requires two US state postal abbreviations, as strings, for the arguments. The returned `path` object in the above case would be this:

```json
Object {DISTANCE: 3, PATH: "MOKSCOUT", STATE_1: "Missouri", STATE_1_ABBR: "MO", STATE_2: "Utah", STATE_2_ABBR: "UT"}
```

That's it :)

## Payload Explanation

Here's a brief explanation of the JSON object that is returned:

- DISTANCE: Number of states between the two, plus the destination state. Ex: Starting in Utah, you move 
- PATH: All of the states in the path, including the starting and destination states, as postal abbreviations in a string.
- STATE_1: The starting state name.
- STATE_1_ABBR: The starting state postal abbreviation. This is the first argument in the method call.
- STATE_2: The destination state name.
- STATE_2_ABBR: The destination state postal abbreviation. This is the second argument in the method call.

## More Info and To Do

To get this data, I mostly did the mapping of routes by hand, so there may be some innaccuracies. In addition, some states have multiple routes between each other. I simply chose one possible route between the two for these cases.

Surely there's some more programmatic way to go about this... Maybe I'll work more on that later.

#### To Do:

- [ ] Add methods to search by full state names
- [ ] Add methods to return all routes for a given state
- [ ] Check for errors in data
- [ ] Find a more programmatic solution
