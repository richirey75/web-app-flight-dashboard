# Notes on the things I learn or discover on the process of the project plus it works as a log book
### **06/04/2025**

The first I learn is that this app is using dash. I looked it up and dash is a python framework used to build interactive, web-based data applications and dashboards — without needing to write a lot of front-end code like HTML, CSS, or JavaScript

This is a great idead since we do not need the fancy interactions of JS. This is a research project afterall in particular a data analysis.

The code that I was provided with is the app.py it has 2 ML model and a simulation dataset from a parquet file.

Now I am not too familiar with Dash but I have looked it up and it does not seem too difficult. You can HTML, CSS, and JS in dash but you need libraries and is more limited plus indirect.

Some key components in dash:
- App initialization: app = dash.Dash(__name__) creates your Dash app.
- Layout: A tree of components that describes what the UI looks like.
- Callbacks: Python functions that react to user input/events to update the UI.
- Server: A Flask server runs your app and serves it to clients.
- Client browser: Runs React.js to render the UI and handle events.