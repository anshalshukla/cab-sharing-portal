"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("../../design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Show extends _react.default.PureComponent {
  render() {
    const {
      property,
      record
    } = this.props;
    const value = record.params[property.name] || '';
    return _react.default.createElement(_designSystem.FormGroup, null, _react.default.createElement(_designSystem.Label, null, property.label), value.split(/(?:\r\n|\r|\n)/g).map((line, i) => // eslint-disable-next-line react/no-array-index-key
    _react.default.createElement(_react.default.Fragment, {
      key: i
    }, line, _react.default.createElement("br", null))));
  }

}

exports.default = Show;