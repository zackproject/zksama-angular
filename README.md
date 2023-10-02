# ZksamaApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

## Generate Components or other files

Run `ng generate component component-name` to generate a new component or `ng g c components/{name}`. It posible you need to specify the module if the app did not detect automatically `ng generate component {name} --module=app` You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Tips

## vscode extensions
Angular Language Service


##  Install
npm i -g @angular/cli
ng version -> accept


## Fake API
https://fakeapi.platzi.com/ 


## Chrome extension
`Angular DevTools` Inspect Element > Tab 'Angular'

## Make our project SSR (better)
ng add @nguniversal/express-engine
`is automatically, but if there is a client side things like localstorage, manually change`
`news comands 'run serve' in package.json  (need node server)`