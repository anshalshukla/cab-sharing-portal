"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _viewHelpers = _interopRequireDefault(require("../../../../backend/utils/view-helpers"));

var _designSystem = require("../../design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LogoLink = (0, _styledComponents.default)(_reactRouterDom.Link).withConfig({
  displayName: "sidebar-branding__LogoLink",
  componentId: "sc-1ozeetj-0"
})(["display:flex;align-items:center;text-decoration:none;color:", ";& > img{margin-right:12px;}"], ({
  theme
}) => theme.colors.grey80);

const SidebarBranding = props => {
  const {
    branding
  } = props;
  const {
    logo,
    companyName
  } = branding;
  const h = new _viewHelpers.default();
  return _react.default.createElement(_designSystem.H5, null, _react.default.createElement(LogoLink, {
    to: h.dashboardUrl()
  }, logo && _react.default.createElement("img", {
    src: logo,
    alt: companyName,
    height: "35px"
  }), _react.default.createElement("span", null, companyName)));
};

var _default = SidebarBranding;
exports.default = _default;