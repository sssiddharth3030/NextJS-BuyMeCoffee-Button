# Coffee Component ☕

The `Coffee` component is a styled button with an accompanying image and text. It can be used to create a "Buy me a coffee" button that links to a specific URL. The component is built using the `styled-components` library.

It is made for next.js using TypeScript.

## Installation

To use the `Coffee` component in your project, you'll need to have one of the dependency `styled-components` installed. You can install it using npm or yarn:

```
npm install styled-components
(or)
yarn add styled-components
```

Modify the components & public folder to suit your project structure and move it to your project.


### Usage

Here's an example of how you can use the Coffee component in your Next application:

#### tsx

import Coffee from '@/components/buttons/Coffee';

function App() {
  return (
    <div>
      {/* ... your other components */}
      <Coffee />
    </div>
  );
}


export default App;

If you have modified the structure, make sure to change the src in the coffee component to load svg & import directory in your file

#### Coffee.tsx

const Coffee = () => {
  return (
    <...Button>
      {/* ... other components */}
      <Img src=".../coffee.svg"/>
      {/* ... other components */}
    </...Button>
  )
}

#### tsx

import Coffee from '@/.../Coffee';


## License

This component is dedicated to the public domain under the [CC0 1.0 Universal (CC0 1.0) Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/).

You can copy, modify, distribute, and perform the work, even for commercial purposes, all without asking permission.

Feel free to use, modify & distribute as you please ☕