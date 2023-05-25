const heading=React.createElement(
    "h1",
    {
        id:"title",
    },
    "Hi Rajesh"
);

const heading1=React.createElement(
    "h1",
    {
        id:"title1",
    },
    "Second Line"
);

const container=React.createElement(
    "div",
    {
        id:"container",
        name:"Rajesh"
    },
    [heading,heading1]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);