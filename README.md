# react-todo
[Todo list test vid.webm](https://user-images.githubusercontent.com/109660863/217504140-411b5f87-6b4b-4acd-8cb9-989e594bab9d.webm)

First react project

Learnt: 
-adding js to html element
-onchange runs multiple functions
-set type to button else automatically sets all button types to submit
-react.strictmode renders twice as a feature, see: https://stackoverflow.com/questions/58603209/react-hooks-render-twice
-linear-gradient did not stretch to the bottom of the page due to body issues so added solution from https://stackoverflow.com/questions/34108433/html-css-linear-gradient-not-taking-up-full-screen

-came back to add localStorage. Had issues with understanding how to setItem with more than 1 key as manipulating data would be difficult if all data was stored in a single entry
-when calling getItem, the data may not be in the order that it was saved which had to be fixed by setting the key to be an ascending number based on the keys.length and then sorted by ascending order
-to use the same method of filtering to find the id and using both removeItem and setItem for deleting and updating respectively
-used useEffect to get data from localStorage upon refresh
