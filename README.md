
9.2. COMPONENT LIFECYCLE

ngOnChanges()— Called when a parent component modifies (or initializes) the values bound to the input properties of a child. If the component has no input properties, ngOnChanges() isn’t invoked.

 illustrates the different effects of bindings on primitive values versus object values.

 The first property is a string, and the second is an Object with one property: name. 

 To understand why the ngOnChanges() callback may or may not be invoked, you need to become familiar with the concept of mutable versus immutable values.

 Initially, ngOnChanges() was invoked for both properties. Note the "firstChange": true—this was the very first change in bindings. After we deleted the letter o in the greeting Hello, ngOnChanges() was invoked again, and the firstChange flag became false. But changing the username from John to John Smith didn’t invoke ngOnChanges(), because the binding of the mutable object myUser didn’t change.


 But the change detection mechanism still catches the change. That’s why "John Smith", the new value of the property user.name, has been rendered in the child component.

 You probably appreciate the change detector for properly updating the UI



# PawnAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

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
