# React Webpack4 Starter

> This is a boilerplate for React 16 & Webpack 4. It includes webpack-dev-server and a build script

## Quick Start

```bash
# Install dependencies
yarn

# Serve on localhost:3000
yarn start

# Build for development
yarn build:dev

# Build for production
yarn build

# output JSON to html
yarn analyze:html <filename>

# output JSON to file
npm run analyze:json main.json <filename>
```

---

# Setting up Jest for React App

### Step 1: Install dependencies

```
yarn add jest babel-jest enzyme enzyme-adapter-react-16 enzyme-to-json -D
npm -install jest babel-jest enzyme enzyme-adapter-react-16 enzyme-to-json -D
```

### Step 2 : add below setting to package.json

```
"jest": {
    "setupFiles": [
      "./src/jestsetup.js"
    ],
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ],
    "transformIgnorePatterns": [
      "/node_modules/(?!test-component).+\\.js$"
    ]
  }
```

### Step 3: add jestsetup.js to src folder with below setting

```
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
```

### Step 4: set up script in package.json to run jest

```
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",
```

---

## App Info

### Author

Nilesh Patel

### Version

1.0.0

### License

This project is licensed under the MIT License
