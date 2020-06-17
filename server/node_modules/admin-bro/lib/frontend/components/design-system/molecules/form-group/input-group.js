"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _label = require("../../atoms/label");

var _button = require("../../atoms/button");

var _input = require("../../atoms/input");

var _link = require("../../atoms/link");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @component
 * @private
 */
const InputGroup = _styledComponents.default.div.withConfig({
  displayName: "input-group__InputGroup",
  componentId: "sc-130uw8f-0"
})(["position:relative;display:flex;width:100%;", "{flex-grow:1;}", ":not(:last-child){border-right:none;}", ",", ":last-child,", ":last-child{padding:", ";border:solid ", ";border-width:1px 1px 1px 0;margin:0;color:", ";}", ":last-child:hover{background:", ";}", ",", ",", "{flex-shrink:0;}", ",", "{line-height:", ";}", ":first-child,", ":first-child{border-right:0;}", ":hover{& + ", ",& + ", ",& + ", "{border-color:", ";}}", ":focus{& + ", ",& + ", ",& + ", "{border-color:", ";}}"], _input.Input, _input.Input, _label.Label, _button.Button, _link.Link, ({
  theme
}) => theme.space.sm, ({
  theme
}) => theme.colors.inputBorder, ({
  theme
}) => theme.colors.grey40, _button.Button, ({
  theme
}) => theme.colors.hoverBg, _label.Label, _button.Button, _link.Link, _label.Label, _link.Link, ({
  theme
}) => theme.lineHeights.lg, _button.Button, _link.Link, _input.Input, _label.Label, _button.Button, _link.Link, ({
  theme
}) => theme.colors.grey60, _input.Input, _label.Label, _button.Button, _link.Link, ({
  theme
}) => theme.colors.primary100);

var _default = InputGroup;
exports.default = _default;