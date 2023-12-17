##ABOUT
This is a small project application for a challenge given to me as part of the recruitment process. It is a dynamic form that allows you to render a form with the fields that are specified in a JSON file. This json file should be an array of field objects. The field objects that are related and need to be rendered inline should be inside an array.

##DATA STRUCTURE
Structure of the field object:
Should have the mandatory keys
- id: string
- type: "textarea", "select", "text"; any other will be rendered by default as "text," including the "email" and "phone" types.

and, optionally, keys:
- label: string
- options: string []
- requiered: boolean
- placeholder: string

The validation is implemented for 
- the required set to true fields
- the "phone" and "email" types

any other key is not supported.

##COMMENTS:
I have used react-hook-form to manage the form data and yup for validation, as I think they simplify and make code more readable, and they supply all the prebuilt methods that were needed for the app.

And kept the state of the form in a global redux state as it was asked; this state is only updated in the submit moment, as I believe it is too expensive in terms of renders?? to update the global state every time a change is made in any of the inputs of the form.

##FOR VIEW:
You can see a deployed version of the app in [here](url) ...


To run it locally, open a console at the root of this repository and install its dependencies with

```npm install```

Once you have the dependencies installed, you can run the app in development mode.

```npm run dev```

and you can run the unit test with

```npm run test```


I have used react-hook-form to manage the form data and yup for validation, as I think they simplify code, make code more readable, and they supply all the prebuilt methods that were needed for the app.

And kept the state of the form in a global redux state as it was asked; this state is only updated in the submit moment, as I believe it is too expensive to update the global state every time a change is made in any of the inputs of the form.
