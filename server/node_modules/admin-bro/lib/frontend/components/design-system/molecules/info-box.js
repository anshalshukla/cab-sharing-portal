"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InfoBox = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _box = require("../atoms/box");

var _header = require("../atoms/header");

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledInfoBox = (0, _styledComponents.default)(_box.Box).withConfig({
  displayName: "info-box__StyledInfoBox",
  componentId: "eur4y4-0"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;"]);
/**
 * @memberof InfoBox
 * @alias InfoBoxProps
 */

/**
 * @class
 * Used for all type of information like:
 *
 * > you don't have x - please add first one"
 *
 * in the system.
 *
 * Usage:
 * ```javascript
 * import { InfoBox, InfoBoxProps } from 'admin-bro'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @example
 * return (
 * <InfoBox title="There are no cars in the system">
 *   <Text>Currently there are no cars in the system</Text>
 *   <Text>To create first click</Text>
 *   <Button mt="lg"><Icon icon="Add" />Create</Button>
 * </InfoBox>
 * )
 */
const InfoBox = props => {
  const {
    children,
    title,
    testId
  } = props;
  return _react.default.createElement(StyledInfoBox, {
    "data-testid": testId,
    variant: "white",
    className: (0, _cssClass.cssClass)('InfoBox')
  }, _react.default.createElement(_box.Box, {
    width: 1 / 2
  }, _react.default.createElement(_header.H4, {
    mb: "lg"
  }, title), children));
};

exports.InfoBox = InfoBox;
var _default = InfoBox;
exports.default = _default;