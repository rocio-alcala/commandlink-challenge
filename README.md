## ABOUT
This is a project application for a challenge given to me as part of the recruitment process.
It is a dynamic SPA that allows you to render a form with the fields that are specified in a JSON file.
This json file should be an array of field objects. The field objects that are related and need to be rendered inline should be inside an array.

## DATA STRUCTURE
The structure of the field object should have the mandatory properties:
- id: string
- type: "textarea", "select", "text", "email" or "phone"; any other type will default to "text".

and optional properties:
- label: string
- options: string[]
- required: boolean
- placeholder: string

any other key is not supported and will be ignored.

## COMMENTS
I have used `react-hook-form` to manage the form state and `yup` for validation.
They are a killer combo that provides all the prebuilt methods needed to built fast and scalable forms in React and they make code more readable.

I kept the state of the form in a global redux state as it was asked; this state is only updated on submit, as I believe it is too expensive to update the global state every time a change is made in any of the inputs of the form.

For styles I decided to take a minimalist approach and rely on individual .css files for each of the app's components in oder to make them highly reusable and readable.

For testing I used `react-testing-library` running on `jest` since at this moment is a standard in the industry for unit testing.

## DEPLOYMENT / DEVELOPMENT
You can see a deployed version of the app in [here](https://commandlink-challenge-tau.vercel.app/) 


To run it locally, open a console at the root of this repository and install its dependencies with

```bash
npm install
```

Once you have the dependencies installed, you can run the app in development mode.

```bash
npm run dev
```

and you can run the unit test with

```bash
npm run test
```

