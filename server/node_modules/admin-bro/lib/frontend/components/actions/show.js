"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propertyType = _interopRequireDefault(require("../property-type"));

var _designSystem = require("../design-system");

var _actionHeader = _interopRequireDefault(require("../app/action-header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name ShowAction
 * @category Actions
 * @description Shows a given record.
 * @component
 * @private
 */
const Show = props => {
  const {
    resource,
    record,
    action
  } = props;
  const properties = resource.showProperties;
  return _react.default.createElement(_designSystem.DrawerContent, null, (action === null || action === void 0 ? void 0 : action.showInDrawer) ? _react.default.createElement(_actionHeader.default, props) : null, properties.map(property => _react.default.createElement(_propertyType.default, {
    key: property.name,
    where: "show",
    property: property,
    resource: resource,
    record: record
  })));
};

var _default = Show;
exports.default = _default;