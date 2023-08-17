

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

___$insertStyle(".counter {\n  --bg-color: #f3f3f3;\n  --base-color: #666;\n  position: fixed;\n  right: 3rem;\n  bottom: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  width: 70px;\n  border: 3px solid var(--base-color);\n  border-radius: 5px;\n  color: var(--base-color);\n  background-color: var(--bg-color);\n  cursor: pointer;\n  overflow: hidden;\n}\n.counter:hover {\n  color: var(--bg-color);\n  background-color: var(--base-color);\n  border-color: var(--bg-color);\n}\n.counter__count {\n  font-size: 2rem;\n  font-family: \"Segoe UI\", sans-serif;\n  color: inherit;\n  animation: in 1s ease alternate forwards;\n  pointer-events: none;\n}\n\n@keyframes in {\n  0% {\n    transform: translateY(-200%);\n  }\n  50% {\n    color: inherit;\n    font-size: 2.2rem;\n    transform: translateY(0);\n    opacity: 1;\n  }\n  90% {\n    opacity: 0;\n    color: var(--blaze);\n  }\n  100% {\n    transform: translateY(200%);\n    font-size: 1.8rem;\n    opacity: 0;\n  }\n}");

___$insertStyle(".fab-list-item {\n  cursor: pointer;\n  width: 100%;\n  padding: 1rem;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  row-gap: 0.25rem;\n}\n.fab-list-item:hover {\n  background-color: #eeeeee;\n}\n.fab-list-item__name {\n  font-size: 16px;\n  color: #000000;\n  font-weight: bold;\n}\n.fab-list-item__type {\n  font-size: 14px;\n  color: #888888;\n}");

var FabListItem = function () {
    var handleItemClick = function () {
        var newWindow = window.open('https://www.google.ca', '_blank', 'noopener,noreferrer');
        if (newWindow)
            newWindow.opener = null;
    };
    return (React.createElement("div", { className: 'fab-list-item', onClick: handleItemClick },
        React.createElement("div", { className: 'fab-list-item__name' }, "Button"),
        React.createElement("div", { className: 'fab-list-item__type' }, "Inputs")));
};

var Counter = function (_a) {
    var count = _a.count, className = _a.className;
    return (React.createElement("div", { className: "counter ".concat(className) },
        React.createElement("p", { key: count, className: "counter__count ".concat(className ? className + '__count' : '') }, count)));
};
var App = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    var _c = React.useState(0), count = _c[0], setCount = _c[1];
    React.useEffect(function () {
        var interval = setInterval(function () {
            if (count > 99)
                return setCount(0);
            setCount(count + 1);
        }, 500);
        return function () { return clearInterval(interval); };
    }, [count, setCount]);
    return (React.createElement("div", null,
        React.createElement(Counter, { className: className, count: count }),
        React.createElement(FabListItem, null)));
};

exports.default = App;
//# sourceMappingURL=index.js.map
