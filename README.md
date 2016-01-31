# Examplary Standalone Jasmine project 

Simple TDD project containing Jasmine, HTML "test runner" file and some helper scripts that allow to run tests without any additional tooling.

To run tests type in your terminal:

```bash
$ npm install
$ npm start
```

Open [http://localhost:8081/](http://localhost:8081/) in your browser and see results of the tests. Static files are served using Express.

### TODO

* Improve converter implementation and tests for it
* Implement duration helper and tests:
    * Create new duration from milliseconds, seconds, minutes etc.
    * Get duration beetween two timestamps
    * Support different duration formats
    * Implement basic operation on durations
