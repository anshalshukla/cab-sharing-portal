"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactRedux = require("react-redux");

var _designSystem = require("../design-system");

var _hooks = require("../../hooks");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GlobalStyle = (0, _styledComponents.createGlobalStyle)`
  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;
const Wrapper = (0, _styledComponents.default)(_designSystem.Box).withConfig({
  displayName: "login__Wrapper",
  componentId: "sc-1um38e4-0"
})(["align-items:center;justify-content:center;flex-direction:column;height:100%;"]);

const SoftwareBrothers = () => _react.default.createElement(_designSystem.Box, {
  position: "absolute",
  left: 0,
  bottom: 5,
  right: 0
}, _react.default.createElement(_designSystem.Text, {
  fontWeight: "lighter",
  variant: "sm",
  textAlign: "center"
}, "Made with", _react.default.createElement(_designSystem.Icon, {
  icon: "FavoriteFilled",
  color: "love",
  mx: "sm"
}), "by", _react.default.createElement(_designSystem.Link, {
  href: "http://softwarebrothers.co",
  target: "_blank",
  rel: "noopener noreferrer",
  mx: "sm",
  color: "white"
}, "SoftwareBrothers")));

const Login = props => {
  var _branding$companyName;

  const {
    action,
    message
  } = props;
  const {
    translateLabel,
    translateButton,
    translateProperty,
    translateMessage
  } = (0, _hooks.useTranslation)();
  const branding = (0, _reactRedux.useSelector)(state => state.branding);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(GlobalStyle, null), _react.default.createElement(Wrapper, {
    flex: true,
    variant: "grey"
  }, _react.default.createElement(_designSystem.Box, {
    bg: "white",
    height: "440px",
    flex: true,
    boxShadow: "login",
    width: [1, 2 / 3, 'auto']
  }, _react.default.createElement(_designSystem.Box, {
    bg: "primary100",
    color: "white",
    p: "x3",
    width: "380px",
    flexGrow: 0,
    display: ['none', 'none', 'block'],
    position: "relative"
  }, _react.default.createElement(_designSystem.H2, {
    fontWeight: "lighter"
  }, translateLabel('loginWelcome')), _react.default.createElement(_designSystem.Text, {
    fontWeight: "lighter",
    mt: "default"
  }, translateMessage('loginWelcome')), _react.default.createElement(_designSystem.Text, {
    textAlign: "center",
    p: "xxl"
  }, _react.default.createElement(_designSystem.Box, {
    display: "inline",
    mr: "default"
  }, _react.default.createElement(_designSystem.Illustration, {
    variant: "Planet",
    width: 82,
    height: 91
  })), _react.default.createElement(_designSystem.Box, {
    display: "inline"
  }, _react.default.createElement(_designSystem.Illustration, {
    variant: "Astronaut",
    width: 82,
    height: 91
  })), _react.default.createElement(_designSystem.Box, {
    display: "inline",
    position: "relative",
    top: "-20px"
  }, _react.default.createElement(_designSystem.Illustration, {
    variant: "FlagInCog",
    width: 82,
    height: 91
  }))), branding.softwareBrothers ? _react.default.createElement(SoftwareBrothers, null) : null), _react.default.createElement(_designSystem.Box, {
    as: "form",
    action: action,
    method: "POST",
    p: "x3",
    flexGrow: 1,
    width: ['100%', '100%', '480px']
  }, _react.default.createElement(_designSystem.H5, {
    mb: "xl"
  }, branding.logo && _react.default.createElement(_designSystem.Box, {
    as: "img",
    src: branding.logo,
    alt: branding.companyName,
    height: "35px",
    mr: "lg",
    mt: "-3px"
  }), (_branding$companyName = branding.companyName) !== null && _branding$companyName !== void 0 ? _branding$companyName : 'AdminBro'), message && _react.default.createElement(_designSystem.MessageBox, {
    my: "lg",
    message: message.split(' ').length > 1 ? message : translateMessage(message),
    variant: "danger"
  }), _react.default.createElement(_designSystem.FormGroup, null, _react.default.createElement(_designSystem.Label, {
    required: true
  }, translateProperty('email')), _react.default.createElement(_designSystem.Input, {
    name: "email",
    placeholder: translateProperty('email')
  })), _react.default.createElement(_designSystem.FormGroup, null, _react.default.createElement(_designSystem.Label, {
    required: true
  }, translateProperty('password')), _react.default.createElement(_designSystem.Input, {
    type: "password",
    name: "password",
    placeholder: translateProperty('password'),
    autoComplete: "new-password"
  })), _react.default.createElement(_designSystem.Text, {
    mt: "xl",
    textAlign: "center"
  }, _react.default.createElement(_designSystem.Button, {
    variant: "primary"
  }, translateButton('login')))))));
};

var _default = Login;
exports.default = _default;