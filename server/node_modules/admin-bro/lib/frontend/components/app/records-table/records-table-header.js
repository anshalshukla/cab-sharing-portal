"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.display = void 0;

var _react = _interopRequireDefault(require("react"));

var _propertyHeader = _interopRequireDefault(require("./property-header"));

var _designSystem = require("../../design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const display = isTitle => [isTitle ? 'table-cell' : 'none', isTitle ? 'table-cell' : 'none', 'table-cell', 'table-cell'];
/**
 * Prints `thead` section for table with records.
 *
 * @component
 * @subcategory Application
 * @example <caption>List with 2 properties</caption>
 * const properties = [{
 *   label: 'First Name',
 *   name: 'firstName',
 *   isSortable: true,
 * }, {
 *   label: 'Last Name',
 *   name: 'lastName',
 * }]
 * return (
 * <Box py="xl">
 *   <Table>
 *    <RecordsTableHeader
 *      properties={properties}
 *      titleProperty={properties[0]}
 *      sortBy={'firstName'}
 *      direction={'asc'}
 *    />
 *    <TableBody>
 *      <TableRow>
 *        <TableCell>John</TableCell>
 *        <TableCell>Doe</TableCell>
 *        <TableCell></TableCell>
 *      </TableRow>
 *      <TableRow>
 *        <TableCell>Max</TableCell>
 *        <TableCell>Kodaly</TableCell>
 *        <TableCell></TableCell>
 *      </TableRow>
 *    </TableBody>
 *   </Table>
 * </Box>
 * )
 */


exports.display = display;

const RecordsTableHeader = props => {
  const {
    titleProperty,
    properties,
    sortBy,
    direction,
    onSelectAll,
    selectedAll
  } = props;
  return _react.default.createElement(_designSystem.TableHead, null, _react.default.createElement(_designSystem.TableRow, null, _react.default.createElement(_designSystem.TableCell, null, onSelectAll ? _react.default.createElement(_designSystem.CheckBox, {
    style: {
      marginLeft: 5
    },
    onChange: () => onSelectAll(),
    checked: selectedAll
  }) : null), properties.map(property => _react.default.createElement(_propertyHeader.default, {
    display: display(property.isTitle),
    key: property.name,
    titleProperty: titleProperty,
    property: property,
    sortBy: sortBy,
    direction: direction
  })), _react.default.createElement(_designSystem.TableCell, {
    key: "actions",
    style: {
      width: 80
    }
  })));
};

var _default = RecordsTableHeader;
exports.default = _default;