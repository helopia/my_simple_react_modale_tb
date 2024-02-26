[![](https://img.shields.io/badge/React-v18.2.0-blue)](https://react.dev/blog/2022/03/29/react-v18)
[![](https://img.shields.io/badge/Node-v18.15.0-green)](https://nodejs.org/en)
[![](https://img.shields.io/badge/npm-v9.5.0-red)](https://www.npmjs.com/package/my-simple-react-modale-typescript-tb)

### Prerequisites

- [NodeJS](https://nodejs.org)
- [npm](https://www.npmjs.com) or [Yarn](https://yarnpkg.com/)

## Getting Started

Install this package:

```shell
npm add my_simple_react_modale_tb
```

Import the Modale component:

```js
import { Modale } from "my_simple_react_modale_tb";
```

You can then render the `Modale` component like any other React component in JSX.

## Example

```js
import { Modale } from "my_simple_react_modale_tb";
import { useState } from "react";

const App = () => {
  const [showModale, setShowModale] = useState(false);

    const handleCLose = () => {
        setShowModale(false);
    }

  return (
    <div>
      <button onClick={() => setShowModale(true)}>Open Modal</button>
      {showModale ?? (
        <Modale
          onClose={handleClose}
          imageSrc={closeBtn}
          imageName="close button"
          text="Say something"
          linkText="Go to somewhere"
          linkPath="/"
        />
      )}
    </div>
  );
};
```
