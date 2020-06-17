"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("../../design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Edit = props => {
  const {
    property,
    record,
    ItemComponent
  } = props;
  const error = record.errors && record.errors[property.name];
  return _react.default.createElement(_designSystem.FormGroup, {
    error: !!error
  }, _react.default.createElement(_designSystem.Label, {
    htmlFor: property.name
  }, property.label), _react.default.createElement(_designSystem.Section, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => _react.default.createElement(ItemComponent, _extends({}, props, {
    key: subProperty.name,
    property: { ...subProperty,
      name: `${property.name}.${subProperty.name}`
    }
  })))), _react.default.createElement(_designSystem.FormMessage, null, error && error.message));
};

var _default = Edit;
exports.default = _default;