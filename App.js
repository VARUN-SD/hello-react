const parent=React.createElement("div",{id:"div1"},
    [React.createElement("div",{id:"div2"},
        React.createElement("h1",{},"IM An H1 Tag"),
        React.createElement("h2",{},"IM an h2 TAg")
    )]
);
const root=ReactDOM.createRoot(document.body);
root.render(parent);