# axios-practice

## Documentation

### Introduction

- To install `axios` we use `npm install axios`
- Axios has a simple syntax, it is just `axios.method(url)`. If the method is not passed, `axios(url)` then the default method is get

```js
import axios from "axios";
axios.get(url);
axios.post(url);

// axios.method(url)
axios(url); // default is get
```

- Since axios returns a promise, we can use async-await.
