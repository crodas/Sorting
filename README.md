# Sorting

Pretty simple class to sort elements.

```jsx
import Sorting from 'react-sorting'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<ul>
  <Sorting>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </Sorting>
</ul>, document.getElementById("main"))
```

## Why?

1. Doing React should be easy and fun :-)
2. Drag and drop is easy with jQuery therefore it should be easy using React.
3. [react-dnd](https://github.com/gaearon/react-dnd) is super cool but there is a lot of boilterplate to use it, *but* it does more things

## Future
1. Mobile drag and sort
2. More documentation
3. Tests
