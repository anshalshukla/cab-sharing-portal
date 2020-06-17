"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Section = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _box = require("./box");

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */

/**
 * Marks group of fields as a section. Has the same props as [Box]{@link BoxProps}
 *
 * Usage:
 * ```javascript
 * import { Section } from 'admin-bro'
 * ```
 * @component
 * @subcategory Atoms
 * @example
 * return (
 *   <Section>
 *     <Text>Some text within a section</Text>
 *     <Section>
 *       <Text>Section can be nested</Text>
 *     </Section>
 *   </Section>
 * )
 */
const Section = (0, _styledComponents.default)(_box.Box).withConfig({
  displayName: "section__Section",
  componentId: "sc-4f436f-0"
})(["border-left:", " solid ", ";padding-left:", ";"], ({
  theme
}) => theme.space.sm, ({
  theme
}) => theme.colors.primary20, ({
  theme
}) => theme.space.default);
exports.Section = Section;
Section.defaultProps = {
  className: (0, _cssClass.cssClass)('Section')
};
var _default = Section;
exports.default = _default;