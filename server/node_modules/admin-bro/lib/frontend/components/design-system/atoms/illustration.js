"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Illustration = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var Illustrations = _interopRequireWildcard(require("./illustrations"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RawIllustration = props => {
  const {
    variant,
    ...other
  } = props;
  const IllustrationComponent = Illustrations[variant];
  return _react.default.createElement(IllustrationComponent, other);
};
/**
 * Awesome database with all the illustrations provided with AdminBro.
 *
 * The best thing about them is that they follow your {@link Theme} color palette.
 *
 * @component
 * @subcategory Atoms
 *
 * @example <caption>Folders</caption>
 * return (
 *   <Illustration variant="Folders" />
 * )
 * @example <caption>DocumentSearch</caption>
 * return (
 *   <Illustration variant="DocumentSearch" />
 * )
 * @example <caption>Rocket</caption>
 * return (
 *   <Box bg="grey100" p="xxl"><Illustration variant="Rocket" /></Box>
 * )
 */


const Illustration = (0, _styledComponents.withTheme)(RawIllustration);
exports.Illustration = Illustration;
var _default = Illustration;
exports.default = _default;