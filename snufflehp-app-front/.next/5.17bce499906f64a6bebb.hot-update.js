webpackHotUpdate(5,{

/***/ "./components/commons/Layouts/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_responsive_redux__ = __webpack_require__("./node_modules/react-responsive-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_sticky__ = __webpack_require__("./node_modules/react-sticky/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_sticky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header__ = __webpack_require__("./components/commons/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu__ = __webpack_require__("./components/commons/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__StatusTag__ = __webpack_require__("./components/commons/StatusTag/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__HeaderMobile__ = __webpack_require__("./components/commons/HeaderMobile/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__MenuMobile__ = __webpack_require__("./components/commons/MenuMobile/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
var _jsxFileName = "/app/components/commons/Layouts/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 // import Responsive from 'react-responsive';








 // const Desktop = props => <Responsive {...props} minWidth={992}  />;
// const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;

var MainLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(MainLayout, _Component);

  function MainLayout() {
    var _this;

    _classCallCheck(this, MainLayout);

    _this = _possibleConstructorReturn(this, (MainLayout.__proto__ || Object.getPrototypeOf(MainLayout)).call(this));
    _this.state = {
      sideMenuOpen: false
    };
    return _this;
  }

  _createClass(MainLayout, [{
    key: "render",
    value: function render() {
      //console.log('render Home')
      var _props = this.props,
          children = _props.children,
          responsive = _props.responsive;
      var sideMenuOpen = this.state.sideMenuOpen;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3996198570", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]])
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3996198570",
        css: ".bgHeader{color:rgba(255,255,255,0.75);background-color:#313340;}.mainFooter{border-top:1px solid #c6c8ca;background:#525d69;height:200px;}.bm-burger-button{width:".concat(responsive.phone ? '76px' : '36px', " !important;height:").concat(responsive.phone ? '75px' : '30px', " !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9ucy9MYXlvdXRzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDdUIsQUFHb0MsQUFJQSxBQU1pQiw2QkFUckIsQUFJTixpQkFNNEIsRUFMbEMsTUFKZCxPQUtBLGdDQUtBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9ucy9MYXlvdXRzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFJlc3BvbnNpdmUgZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSc7XG5pbXBvcnQgeyBNb2JpbGVTY3JlZW4sIERlc2t0b3BTY3JlZW4gfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLXJlZHV4J1xuaW1wb3J0IHsgU3RpY2t5Q29udGFpbmVyLCBTdGlja3kgfSBmcm9tICdyZWFjdC1zdGlja3knO1xuaW1wb3J0IE1haW5IZWFkZXIgZnJvbSBcIi4uL0hlYWRlclwiO1xuaW1wb3J0IE1lbnVIZWFkZXIgZnJvbSBcIi4uL21lbnVcIjtcbmltcG9ydCBTdGF0dXNUYWcgZnJvbSBcIi4uL1N0YXR1c1RhZ1wiO1xuaW1wb3J0IEhlYWRlck1vYmlsZSBmcm9tIFwiLi4vSGVhZGVyTW9iaWxlXCI7XG5pbXBvcnQgTWVudU1vYmlsZSBmcm9tIFwiLi4vTWVudU1vYmlsZVwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuLy8gY29uc3QgRGVza3RvcCA9IHByb3BzID0+IDxSZXNwb25zaXZlIHsuLi5wcm9wc30gbWluV2lkdGg9ezk5Mn0gIC8+O1xuLy8gY29uc3QgVGFibGV0ID0gcHJvcHMgPT4gPFJlc3BvbnNpdmUgey4uLnByb3BzfSBtaW5XaWR0aD17NzY4fSBtYXhXaWR0aD17OTkxfSAvPjtcblxuXG5jbGFzcyBNYWluTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKClcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaWRlTWVudU9wZW46ZmFsc2Vcblx0XHR9XG5cdFx0XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Ly9jb25zb2xlLmxvZygncmVuZGVyIEhvbWUnKVxuXHRcdGNvbnN0IHsgY2hpbGRyZW4sIHJlc3BvbnNpdmUgfSA9IHRoaXMucHJvcHNcblx0XHRjb25zdCB7IHNpZGVNZW51T3BlbiB9ID0gdGhpcy5zdGF0ZVxuXG5cblx0XHRyZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5iZ0hlYWRlcntcblx0XHRcdFx0XHRcdGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNzUpO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMxMzM0MDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm1haW5Gb290ZXJ7XG5cdFx0XHRcdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2M2YzhjYTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICM1MjVkNjk7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDIwMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5ibS1idXJnZXItYnV0dG9uIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAkeyhyZXNwb25zaXZlLnBob25lKT8nNzZweCc6JzM2cHgnfSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAkeyhyZXNwb25zaXZlLnBob25lKT8nNzVweCc6JzMwcHgnfSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG5cblx0XHRcdFx0XG5cdFx0XHRcdDxEZXNrdG9wU2NyZWVuID5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8aDM+RGVza3RvcDwvaDM+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluSGVhZGVyIGJnSGVhZGVyXCI+XG5cdFx0XHRcdFx0XHQ8TWFpbkhlYWRlciAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxTdGlja3lDb250YWluZXIgPlxuXHRcdFx0XHRcdFx0PFN0aWNreSAgPlxuXHRcdFx0XHRcdFx0XHR7KHsgc3R5bGUsIGRpc3RhbmNlRnJvbVRvcCwgaXNTdGlja3kgfSkgPT4gKFxuXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVIZWFkZXIgc3R5bGU9e3N0eWxlfSBpc1N0aWNreT17aXNTdGlja3l9IC8+XG5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvU3RpY2t5PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5Db250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbkZvb3RlclwiPlxuXHRcdFx0XHRcdFx0XHQ8aDE+Zm9vdGVyPC9oMT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PC9TdGlja3lDb250YWluZXI+XG5cblx0XHRcdFx0PC9EZXNrdG9wU2NyZWVuPlxuXG5cdFx0XHRcdDxNb2JpbGVTY3JlZW4gaWQ9XCJvdXRlci1jb250YWluZXJcIiA+XG5cblx0XHRcdFx0XHRcblxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246J2ZpeGVkJyxcblx0XHRcdFx0XHRcdFx0d2lkdGg6JzEwMCUnLFxuXHRcdFx0XHRcdFx0XHR6SW5kZXg6JzEnLFxuXHRcdFx0XHRcdFx0XHR0b3A6JzFweCdcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PEhlYWRlck1vYmlsZSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PE1lbnVNb2JpbGUgY2xhc3NOYW1lPVwiTW9iaWxlU2lkZU1lbnVcIiBzaWRlTWVudU9wZW49eyBzaWRlTWVudU9wZW4gfSAvPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluQ29udGVudFwiIGlkPVwicGFnZS13cmFwXCIgc3R5bGU9e3ttYXJnaW5Ub3A6JzU5cHgnfX0gPlxuXHRcdFx0XHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5Gb290ZXJcIj5cblx0XHRcdFx0XHRcdDxoMT5mb290ZXI8L2gxPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L01vYmlsZVNjcmVlbj5cblx0XHRcdFx0XG5cblx0XHRcdFx0XG5cdFx0XHRcdFxuICAgICAgIFxuXHRcdFx0XHQ8U3RhdHVzVGFnIG1zZz1cIuC5gOC4nuC4tOC5iOC4oeC4peC4h+C4o+C4luC5gOC4guC5h+C4meC4quC4s+C5gOC4o+C5h+C4iFwiIHN0eWxlPXt7cmlnaHQ6JzQzJSd9fSAvPlxuXHRcdFx0ICBcbiAgICAgIDwvZGl2PlxuICAgICAgXG5cdFx0KTtcblx0fVxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICByZXNwb25zaXZlOiBzdGF0ZS5yZXNwb25zaXZlXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTWFpbkxheW91dClcbiJdfQ== */\n/*@ sourceURL=components/commons/Layouts/index.js */"),
        dynamic: [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_responsive_redux__["a" /* DesktopScreen */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3996198570", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]])
      }, "Desktop"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3996198570", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]]) + " " + "mainHeader bgHeader"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_sticky__["StickyContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_sticky__["Sticky"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, function (_ref) {
        var style = _ref.style,
            distanceFromTop = _ref.distanceFromTop,
            isSticky = _ref.isSticky;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__menu__["a" /* default */], {
          style: style,
          isSticky: isSticky,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        });
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3996198570", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]]) + " " + "mainContent"
      }, children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3996198570", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]]) + " " + "mainFooter"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3996198570", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]])
      }, "footer")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_responsive_redux__["b" /* MobileScreen */], {
        id: "outer-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          position: 'fixed',
          width: '100%',
          zIndex: '1',
          top: '1px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3996198570", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]])
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__HeaderMobile__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__MenuMobile__["a" /* default */], {
        className: "MobileSideMenu",
        sideMenuOpen: sideMenuOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "page-wrap",
        style: {
          marginTop: '59px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3996198570", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]]) + " " + "mainContent"
      }, children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3996198570", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]]) + " " + "mainFooter"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3996198570", [responsive.phone ? '76px' : '36px', responsive.phone ? '75px' : '30px']]])
      }, "footer"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__StatusTag__["a" /* default */], {
        msg: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E25\u0E07\u0E23\u0E16\u0E40\u0E02\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
        style: {
          right: '43%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }));
    }
  }]);

  return MainLayout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    responsive: state.responsive
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_9_react_redux__["b" /* connect */])(mapStateToProps)(MainLayout));

/***/ })

})
//# sourceMappingURL=5.17bce499906f64a6bebb.hot-update.js.map