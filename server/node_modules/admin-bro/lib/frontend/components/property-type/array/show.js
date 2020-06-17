"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _convertParamsToArrayItems = _interopRequireDefault(require("./convert-params-to-array-items"));

var _designSystem = require("../../design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class Show extends _react.default.PureComponent {
  render() {
    const {
      property,
      record,
      ItemComponent
    } = this.props;
    const items = (0, _convertParamsToArrayItems.default)(property, record);
    return _react.default.createElement(_designSystem.FormGroup, null, _react.default.createElement(_designSystem.Label, null, property.label), _react.default.createElement(_designSystem.Section, null, items.map((item, i) => _react.default.createElement(ItemComponent, _extends({}, this.props, {
      // eslint-disable-next-line react/no-array-index-key
      key: i,
      property: { ...property,
        name: `${property.name}.${i}`,
        label: `[${i + 1}]`,
        isArray: false
      }
    })))));
  }

}

exports.default = Show;