

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
var classNames = require('classnames');
var bs = require('react-icons/bs');

___$insertStyle(".counter {\n  --bg-color: #f3f3f3;\n  --base-color: #666;\n  position: fixed;\n  right: 3rem;\n  bottom: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  width: 70px;\n  border: 3px solid var(--base-color);\n  border-radius: 5px;\n  color: var(--base-color);\n  background-color: var(--bg-color);\n  cursor: pointer;\n  overflow: hidden;\n}\n.counter:hover {\n  color: var(--bg-color);\n  background-color: var(--base-color);\n  border-color: var(--bg-color);\n}\n.counter__count {\n  font-size: 2rem;\n  font-family: \"Segoe UI\", sans-serif;\n  color: inherit;\n  animation: in 1s ease alternate forwards;\n  pointer-events: none;\n}\n\n@keyframes in {\n  0% {\n    transform: translateY(-200%);\n  }\n  50% {\n    color: inherit;\n    font-size: 2.2rem;\n    transform: translateY(0);\n    opacity: 1;\n  }\n  90% {\n    opacity: 0;\n    color: var(--blaze);\n  }\n  100% {\n    transform: translateY(200%);\n    font-size: 1.8rem;\n    opacity: 0;\n  }\n}");

___$insertStyle(".wrapper {\n  --width-closed: 70px;\n  --height-closed: 70px;\n  --border-radius-closed: 50%;\n  --width-open: 200px;\n  --height-open: 600px;\n  --border-radius-open: 10px;\n  --color-white: #ffffff;\n  --color-black: #000000;\n}\n.wrapper .widget {\n  z-index: 9999999999;\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: var(--width-closed);\n  height: var(--height-closed);\n  border-radius: var(--border-radius-closed);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  opacity: 0.6;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\n  transition: all 0.2s ease-in-out;\n}\n.wrapper .widget:hover {\n  opacity: 1;\n  transition: all 0.2s ease-in-out;\n}\n.wrapper .widget--open {\n  opacity: 1;\n  width: var(--width-open);\n  height: var(--height-open);\n  border-radius: 0px 0px var(--border-radius-open) var(--border-radius-open);\n  transition: all 0.2s ease-in-out;\n}\n.wrapper .widget .widget__btn {\n  cursor: pointer;\n  overflow: hidden;\n  background-color: #212021;\n  width: var(--width-closed);\n  height: var(--height-closed);\n  min-height: var(--height-closed);\n  border-radius: var(--border-radius-closed);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n}\n.wrapper .widget .widget__btn--open {\n  width: var(--width-open);\n  border-radius: 0px 0px var(--border-radius-open) var(--border-radius-open);\n  transition: all 0.2s ease-in-out;\n}\n.wrapper .widget .widget__btn__text {\n  color: var(--color-white);\n}\n.wrapper .widget .widget__btn__icon {\n  color: var(--color-white);\n  font-size: 30px;\n  transform: rotateZ(90deg);\n}\n.wrapper .backdrop {\n  z-index: 999999999;\n  background-color: #000;\n  opacity: 0.3;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  min-width: 100vw;\n  max-width: 100vw;\n  height: 100vh;\n  min-height: 100vh;\n  max-height: 100vh;\n}");

___$insertStyle(".fab-list {\n  overflow: hidden;\n  height: 0%;\n  background-color: #ffffff;\n  border-radius: 0px;\n  overflow-y: scroll;\n  transition: all 0.2s ease-in-out;\n  -ms-overflow-style: none; /* IE */\n  scrollbar-width: none; /* Firefox */\n}\n.fab-list--open {\n  height: 100%;\n  transition: all 0.2s ease-in-out;\n}\n.fab-list::-webkit-scrollbar {\n  display: none; /* Chrome */\n}");

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

var FabList = function (_a) {
    var isOpen = _a.isOpen;
    return (React.createElement("div", { className: classNames('fab-list', {
            'fab-list--open': isOpen,
        }) },
        React.createElement(FabListItem, null),
        React.createElement(FabListItem, null),
        React.createElement(FabListItem, null),
        React.createElement(FabListItem, null),
        React.createElement(FabListItem, null),
        React.createElement(FabListItem, null),
        React.createElement(FabListItem, null),
        React.createElement(FabListItem, null),
        React.createElement(FabListItem, null),
        React.createElement(FabListItem, null)));
};

var FabWidget = function () {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var handleBtnClick = function () {
        setIsOpen(!isOpen);
    };
    return (React.createElement("div", { className: 'wrapper' },
        React.createElement("div", { className: classNames('widget', {
                'widget--open': isOpen,
            }) },
            React.createElement(FabList, { isOpen: isOpen }),
            React.createElement("div", { className: classNames('widget__btn', {
                    'widget__btn--open': isOpen,
                }), onClick: handleBtnClick }, isOpen ? (React.createElement(bs.BsArrowsAngleContract, { className: 'widget__btn__icon' })) : (React.createElement(bs.BsArrowsAngleExpand, { className: 'widget__btn__icon' })))),
        isOpen && (React.createElement("div", { className: 'backdrop', onClick: function () { return setIsOpen(false); } }))));
};

var App = function () {
    return React.createElement(FabWidget, null);
};

exports.default = App;
//# sourceMappingURL=index.js.map
