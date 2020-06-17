"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("../../design-system");

var _recordPropertyIsEqual = require("../record-property-is-equal");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Edit = props => {
  const {
    onChange,
    property,
    record
  } = props;
  const handleInputChange = (0, _react.useCallback)(event => {
    onChange(property.name, event.target.value);
  }, [onChange, property.name]);
  const value = record.params && typeof record.params[property.name] !== 'undefined' && record.params[property.name] !== null ? record.params[property.name] : '';
  const error = record.errors && record.errors[property.name];
  return _react.default.createElement(_designSystem.FormGroup, {
    error: !!error
  }, _react.default.createElement(_designSystem.Label, {
    htmlFor: property.name
  }, property.label), _react.default.createElement(_designSystem.Input, {
    as: "textarea",
    rows: (value.match(/\n/g) || []).length + 1,
    id: property.name,
    name: property.name,
    onChange: handleInputChange,
    value: value,
    disabled: property.isDisabled
  }), _react.default.createElement(_designSystem.FormMessage, null, error && error.message));
};

var _default = (0, _react.memo)(Edit, _recordPropertyIsEqual.recordPropertyIsEqual);

exports.default = _default;