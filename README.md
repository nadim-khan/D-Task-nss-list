# DTask

Assignment 1.
Create an application which accomplishes following tasks -
1) It should have an editable field where the user can paste a formatted JSON (Input).
2) Ith should show a non-editable field displaying the updated JSON (Output).
3) You're free to design the UI you want, we only expect an input text area where a user can paste a non-formatted J
SON and an area displaying the formatted version.
4) (Bonus) Show off your CSS skills by making it look good.
Input -
{
"0":
[{"id": 10,
"title": "House",
"level": 0,
"children": [],
"parent_id": null}],
"1":
[{"id": 12,
"title": "Red Roof",
"level": 1,
"children": [],
"parent_id": 10},
{"id": 18,
"title": "Blue Roof",
"level": 1,
"children": [],
"parent_id": 10},
{"id": 13,
"title": "Wall",
"level": 1,
"children": [],
"parent_id": 10}],
"2":
[{"id": 17,
"title": "Blue Window",
"level": 2,
"children": [],
"parent_id": 12},
{"id": 16,
"title": "Door",
"level": 2,
"children": [],
"parent_id": 13},
{"id": 15,
"title": "Red Window",
"level": 2,
"children": [],
"parent_id": 12}]
}
Output -
[

{
"id": 10,
"title": "House",
"level": 0,
"children": [
{
"id": 12,
"title": "Red Roof",
"level": 1,
"children": [
{
"id": 17,
"title": "Blue Window",
"level": 2,
"children": [],
"parent_id": 12
},
{
"id": 15,
"title": "Red Window",
"level": 2,
"children": [],
"parent_id": 12
}],
"parent_id": 10
},
{
"id": 18,
"title": "Blue Roof",
"level": 1,
"children": [],
"parent_id": 10
},
{
"id": 13,
"title": "Wall",
"level": 1,
"children": [
{
"id": 16,
"title": "Door",
"level": 2,
"children": [],
"parent_id": 13
}],
"parent_id": 10
}],
"parent_id": null
}
]

Assignment 2 -
Create an application using APIs from https://gorest.co.in/
Below is the expected behavior of the application -
1) Application should list out 10 posts at a time (and remaining as paginated) with title and it's respective author na
me (user). (Infinite pagination would be preferable).
2) It should display 120 characters of its body and show read more link.
3) On clicking the link read more, it should show full artilcle and also the comment section (get comments from /co
mments API) of respective post.
4) Provide a button to add comment.
- On click of button ask user to provide email and name.
- Check if user exists else create one with that name and email.
- Keep that user in your cookie and use for all further comments or any user authentication required.
5) Use your imagination and designing skills.
6) Show off your HTML, CSS skills.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
