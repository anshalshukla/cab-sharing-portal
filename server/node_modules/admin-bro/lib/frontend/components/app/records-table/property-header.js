"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _sortLink = _interopRequireDefault(require("../sort-link"));

var _designSystem = require("../../design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PropertyHeader = props => {
  const {
    property,
    titleProperty,
    display
  } = props;
  const isMain = property.name === titleProperty.name;
  return _react.default.createElement(_designSystem.TableCell, {
    className: isMain ? 'main' : undefined,
    display: display
  }, property.isSortable ? _react.default.createElement(_sortLink.default, props) : property.label);
};

var _default = PropertyHeader;
exports.default = _default;