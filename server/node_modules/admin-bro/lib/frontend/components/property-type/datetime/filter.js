"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var BackendFilter = _interopRequireWildcard(require("../../../../backend/utils/filter"));

var _designSystem = require("../../design-system");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  PARAM_SEPARATOR
} = BackendFilter;

const Filter = props => {
  const {
    property,
    filter,
    onChange
  } = props;
  const fromKey = `${property.name}${PARAM_SEPARATOR}from`;
  const toKey = `${property.name}${PARAM_SEPARATOR}to`;
  const fromValue = filter[fromKey];
  const toValue = filter[toKey];
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystem.FormGroup, {
    variant: "filter"
  }, _react.default.createElement(_designSystem.Label, null, property.label), _react.default.createElement(_designSystem.Label, null, "- From: "), _react.default.createElement(_designSystem.DatePicker, {
    value: fromValue,
    onChange: data => onChange(fromKey, data)
  }), _react.default.createElement(_designSystem.Label, {
    mt: "default"
  }, "- To: "), _react.default.createElement(_designSystem.DatePicker, {
    value: toValue,
    onChange: data => onChange(toKey, data)
  })));
};

var _default = Filter;
exports.default = _default;