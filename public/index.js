const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

/* app.get("", (req, res) => {
    res.send("Thami 'wasn't' discussing meth");
}); */

//define paths for express
const publicDirectoryPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");
const viewsPath = path.join(__dirname, "../templates/views")
//set up handlebars engine and views location
app.set("view engine", "hbs");  //Telling express/NODE to use handlebars for templates
app.set("views", viewsPath) //telling express to get templates from templates/views folder
hbs.registerPartials(partialsPath);
app.get("", async (req, res) => {
    try {
        res.render("index", {
            title: "Our first weenie"
        });
    } catch {
        res.status(500).send();
    }
});

app.get("/about/:id", async (req, res) => {
    const name = req.params.id;
    try {
        res.render("index", {
         title: `${name}`
        });
    } catch {
        res.status(500).send();
    }
});

app.get("/swag", async (req, res) => {
    try {
        res.render("swag");
    } catch {
        res.status(500).send();
    }
});

app.get("/thamisucks", (req, res) => {
    res.send("Thami sucks.  And yes I have to do this while you eat.");
});

app.listen(3000, (req, res) => {
    console.log('Listening on port 3000');
    console.log(__dirname);
});




