"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = recordToFormData;

var _flat = _interopRequireDefault(require("flat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  flatten,
  unflatten
} = _flat.default;
/**
 * Changes RecordJSON that it can be send as a FormData to the backend.
 *
 * @param   {RecordJSON}  record
 * @return  {FormData}
 */

function recordToFormData(record) {
  const formData = new FormData(); // First let make sure that all the fields in the record.params are properly flatten.
  // That is why we unflatten all properties and create regular object, where flat
  // overwrite prevents from having 2 keys referencing the same property. And
  // the result is flatten again.

  const normalizedParams = flatten(unflatten(record.params, {
    overwrite: true
  }));
  Object.entries(normalizedParams).forEach(([key, value]) => {
    // flatten does not change empty objects "{}" - so in order to prevent having them changed to
    // "[object Object]" we have to set them to empty strings. File objects has to go through.
    // eslint-disable-next-line no-undef
    if (value === null || typeof value === 'object' && value.constructor !== File) {
      formData.set(key, '');
    } else {
      formData.set(key, value);
    }
  });
  return formData;
}