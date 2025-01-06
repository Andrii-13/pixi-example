// import './bunny.js'
//import './fish/fish.js'
//import './train/index.js'

// ========================== example =====================================

import './container/index.js'
//import './tinting/index'
//import './particle-container/index'
if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__ && window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers) {
    if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers.size > 0) {
      console.log("React DevTools активні");
    } else {
      console.log("Немає активних рендерерів");
    }
  } else {
    console.log("React DevTools не знайдено");
  }