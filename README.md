# Bart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Ans 5 
  Ans Part 5: This website as a client is able to access the BART API without encountering a CORS issue because the BART server allows simple GET requests (like we are making from this website) to access the BART server resource in a cross-site manner. When we make a BART api call, in response, the server sends back an Access-Control-Allow-Origin header. The use of the Origin header and of Access-Control-Allow-Origin show the access control protocol in its simplest use. In this case, the server responds with a Access-Control-Allow-Origin: * which means that the resource can be accessed by any domain in a cross-site manner.
