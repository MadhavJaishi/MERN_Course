## How to setup Tailwind CSS

Step 1: Run the following commands

```
npx install -D tailwindcss
npx tailwindcss init
```

Step 2: Update tailwind.config.js file to include this line

```
content: ["*.html"],
```

Step 3: Create src/input.css and include 

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Run the following command which generates a file called 'output.css' inside src folder

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Step 5: Include the src/output.css file in your html using link tag

```
<link src="src/output.css" style="stylesheet"></link>
```

Now, It is all set for you to use tailwind properties in your html using class.
