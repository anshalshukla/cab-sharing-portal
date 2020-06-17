"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _sidebarLink = _interopRequireDefault(require("./styled/sidebar-link.styled"));

var _viewHelpers = _interopRequireDefault(require("../../../../backend/utils/view-helpers"));

var _designSystem = require("../../design-system");

var _useTranslation = require("../../../hooks/use-translation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SidebarPages = props => {
  const {
    pages
  } = props;
  const {
    translateLabel
  } = (0, _useTranslation.useTranslation)();
  const h = new _viewHelpers.default();

  if (!pages || !pages.length) {
    return _react.default.createElement(_react.default.Fragment, null);
  }

  const isActive = (page, location) => !!location.pathname.match(`/pages/${page.name}`);

  return _react.default.createElement(_designSystem.Box, {
    ml: "lg"
  }, _react.default.createElement(_designSystem.Label, {
    uppercase: true,
    color: "grey60",
    mb: "lg"
  }, translateLabel('pages')), pages.map(page => _react.default.createElement(_sidebarLink.default, {
    to: h.pageUrl(page.name),
    key: page.name,
    isActive: (match, location) => isActive(page, location),
    "data-testid": "sidebar-page-link"
  }, _react.default.createElement(_designSystem.Text, {
    as: "span"
  }, translateLabel(page.name)))));
};

var _default = SidebarPages;
exports.default = _default;