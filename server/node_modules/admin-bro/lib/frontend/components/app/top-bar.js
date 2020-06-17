"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _loggedIn = _interopRequireDefault(require("./logged-in"));

var _version = _interopRequireDefault(require("./version"));

var _designSystem = require("../design-system");

var _cssClass = require("../design-system/utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NavBar = (0, _styledComponents.default)(_designSystem.Box).withConfig({
  displayName: "top-bar__NavBar",
  componentId: "sc-1qk1nql-0"
})(["height:", ";border-bottom:1px solid ", ";background:", ";display:flex;flex-direction:row;flex-shrink:0;"], ({
  theme
}) => theme.sizes.navbarHeight, ({
  theme
}) => theme.colors.grey20, ({
  theme
}) => theme.colors.white);
NavBar.defaultProps = {
  className: (0, _cssClass.cssClass)('NavBar')
};

const TopBar = props => {
  const {
    toggleSidebar
  } = props;
  const [session, paths, versions] = (0, _reactRedux.useSelector)(state => [state.session, state.paths, state.versions]);
  return _react.default.createElement(NavBar, null, _react.default.createElement(_designSystem.Box, {
    py: "lg",
    px: ['default', 'lg'],
    onClick: toggleSidebar,
    display: ['block', 'block', 'block', 'block', 'none'],
    style: {
      cursor: 'pointer'
    }
  }, _react.default.createElement(_designSystem.Icon, {
    icon: "Menu",
    size: 32,
    color: "grey100"
  })), _react.default.createElement(_version.default, {
    versions: versions
  }), session && session.email ? _react.default.createElement(_loggedIn.default, {
    session: session,
    paths: paths
  }) : '');
};

var _default = TopBar;
exports.default = _default;