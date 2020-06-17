"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Stepper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _box = _interopRequireDefault(require("../../atoms/box"));

var _cssClass = require("../../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * It provides wizard workflow where user can go through a couple of steps.
 * Stepper makes sense when you use it along with {@link Step} component.
 *
 * It receives all the same props as {@link Box} - {@link BoxProps}.
 *
 * @component
 * @subcategory Molecules
 * @example <caption>Clickable steps</caption>
 * const { useState } = React
 * const steps = [{
 *   number: 1, label: "Do this first",
 * }, {
 *   number: 2, label: "Don't forget this",
 * }, {
 *   number: 3, label: "And finally this",
 * }]
 * const ComponentWithStepper = () => {
 *   const [currentStep, setCurrentStep] = useState(1)
 *   return (
 *   <Box>
 *     <Stepper>
 *     {steps.map(step => (
 *        <Step
 *          active={currentStep === step.number}
 *          completed={currentStep > step.number}
 *          onClick={setCurrentStep}
 *          number={step.number}
 *        >
 *          {step.label}
 *        </Step>
 *     ))}
 *     </Stepper>
 *   </Box>
 *   )
 * }
 *
 * return (<ComponentWithStepper />)
 *
 * @example <caption>Steps with bottom navigation</caption>
 * const { useState } = React
 * const steps = [{
 *   number: 1, label: "Do this first",
 * }, {
 *   number: 2, label: "Don't forget this",
 * }, {
 *   number: 3, label: "And finally this",
 * }]
 * const ComponentWithStepper = () => {
 *   const [currentStep, setCurrentStep] = useState(1)
 *   return (
 *   <Box>
 *     <Stepper>
 *     {steps.map(step => (
 *        <Step
 *          active={currentStep === step.number}
 *          completed={currentStep > step.number}
 *          number={step.number}
 *        >
 *          {step.label}
 *        </Step>
 *     ))}
 *     </Stepper>
 *     <Box mt="xl">
 *       <Button
 *         disabled={currentStep === 1}
 *         mr="default"
 *         onClick={() => setCurrentStep(currentStep - 1)}
 *       >
 *         Previous Step
 *       </Button>
 *       <Button
 *         disabled={currentStep === 3}
 *         variant="primary"
 *         onClick={() => setCurrentStep(currentStep + 1)}
 *       >
 *         Next Step
 *       </Button>
 *     </Box>
 *   </Box>
 *   )
 * }
 *
 * return (<ComponentWithStepper />)

 */
const Stepper = (0, _styledComponents.default)(_box.default).withConfig({
  displayName: "stepper__Stepper",
  componentId: "sc-4y3vcc-0"
})([""]);
exports.Stepper = Stepper;
Stepper.defaultProps = {
  flex: true,
  flexDirection: ['column', 'row'],
  borderBottom: '1px solid',
  borderBottomColor: 'separator',
  className: (0, _cssClass.cssClass)('Stepper')
};
var _default = Stepper;
exports.default = _default;