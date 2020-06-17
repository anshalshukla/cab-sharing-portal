"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mapValue = _interopRequireDefault(require("./map-value"));

var _designSystem = require("../../design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Show extends _react.default.PureComponent {
  render() {
    const {
      property,
      record
    } = this.props;
    const value = (0, _mapValue.default)(record.params[property.name]);
    return _react.default.createElement(_designSystem.FormGroup, null, _react.default.createElement(_designSystem.Label, null, property.label), value);
  }

}

exports.default = Show;