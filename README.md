# react-redux-example

Source code for the [idiomatic redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux) course by [Dan Abramov](https://github.com/gaearon). Source for each lesson lives in a different commit on the master branch.


### Async Handling Variations

The original "idiomatic redux" example handles async code using the [redux-thunk](https://github.com/gaearon/redux-thunk) middleware, which, on this repo, lives on the master branch.

However, this example explores further options for handling async/side-effects:

* __Sagas__ with the [redux-saga](https://github.com/yelouafi/redux-saga) middleware
* __Epics__ with the [redux-observable](https://github.com/redux-observable/redux-observable) middleware

#### Each variation of the example lives in a diferrent branch:
* [Sagas Example](https://github.com/TheT0dd/react-redux-example/tree/redux-saga)
* [Epics Example](https://github.com/TheT0dd/react-redux-example/tree/redux-observable)


### Further Reading

You can learn more on Sagas and Epics here:
* [redux-saga docs](http://yelouafi.github.io/redux-saga/index.html)
* [redux-observable docs](https://redux-observable.js.org/)
* [awesome video intro on Epics](https://www.youtube.com/watch?v=AslncyG8whg)
