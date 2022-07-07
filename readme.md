# React Js Learning

My complete React JS Learning from beginner to Advanced Level.

## Birth of ReactJs

-   Initially Web Development started with just HTML, CSS and JS in 90s and early 2000s. HTML displayed the text on the pages, CSS the styles and JS added some functionality. For every page we requested to server, and server sent different different HTML pages.
    <br>
    But the major problem here was that there were different different browsers developed by different group of developers and as we wanted to use more and more JavaScript, we had to account for all these browsers that sometimes work differently from each other, and we had to accomodate JavaScript to work with these different browsers.
    <br>

-   Now, eventually we had **jQuery** come out which allowed developers to easily interact with the DOM across all the browsers just simply by using their API and cross browser problems was manged by them only.
    <br>

-   As websites turn into the full applications that people can interact with besides just requesting more and more pages like a blog, libraries like **Backbone.JS** came out as our JavaScript files started getting bigger and bigger.
    <br>

-   Because it became easier and easier to work with the DOM, we had the birth of a **Single Page Application**.
    <br>
    Traditionally we just had HTML files for each page and every time we moved to a different page we would request from the server the HTML, CSS and JS files.
    <br>
    With more advancements like jquery and backbone, and AJAX we now focused less on HTML and a lot more on Js.
    So now instead of requesting new and new files, we just have one HTML files and using JavaScript file, just simply changes or updates the HTML file or the DOM to display new things. So we are able to sign into an application and interact with that application without ever speaking to the server.
    <br>

-   This way of writing applications became more and more popular and in 2010, **Angular Js**, which was created by Google, really became the standard way of building the Web Applications.
    Now unlike jquery, Angular allowed developers to build these large applications by forming these large applications by forming the containers that will wrap our project, and as it was created by Google, it had a lot of power.
    <br>

-   But as things getting more and more complex and every small small part of the UI was linked to other, people started to find bugs more and more often upto a point when Facebook was no more able to continue with Angular.
    <br>
    And so Facebook came up with a solution of **React**, which they released in 2013 to the developer community at JS Conf 2013.
    <br>

-   React became popular in a very short span of time as it developed a whole new way to build front end application.
    And at the same time, in 2014 Angular JS realized that the way they've architected their framework just didn't allow good applications to be built anymore, so they started rewriting their entire library and called it **Angular** (instead of AngularJS). But because they wanted to do an entire rewrite, a lot of people during that time moved to React.

## Declarative vs Imperative

-   Before React, we simply have to manipulate DOM using the Javascript directly or using the tools like Jquery or with some libraries. This approach of directly manipulating the DOM to change the individual parts of our app in response to various user events in called the **Imperative Paradigm**
    <br>
    The problem with the **Imperative** approach is that it becomes difficult to see the relationships between events and all the edge cases.
    <br>

-   According to React, DOM manipulation is one of the biggest performance bottlnecks. It takes a long time for DOM changes to happen.
    So React says "Let me take care and I'll find the best way for me to change the DOM and just declare to me what your app looks like."
    So the idea of a **Declarative approach** is that we didn't have to say to do this and if this happens do that in a sequential order, instead we tell this is the **state** of our app.
    <br>
    So the basic difference is that all the different states are accounted for in one place, i.e, one big Javascript object that describes how our app should look. This results in **less complexity**, **better code quality**, and **faster developer times**.
