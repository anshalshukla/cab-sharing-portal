"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _flat = _interopRequireDefault(require("flat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a function which takes a record and returns an updated record.
 *
 * @param {string}      property    property that must be updated, supports nesting
 *                                  with dots
 * @param {any}         value       value that must be set, undefined or null if
 *                                  deleting, will be flattened
 * @param {RecordJSON}  refRecord   if value is reference ID, this must be a record
 *                                  it's referencing to
 * @private
 */
const updateRecord = (property, value, refRecord) => previousRecord => {
  let populatedModified = false;
  const populatedCopy = { ...previousRecord.populated
  };
  const paramsCopy = { ...previousRecord.params
  }; // clear previous value

  Object.keys(paramsCopy).filter(key => key === property || key.startsWith(`${property}.`)).forEach(k => delete paramsCopy[k]);

  if (property in populatedCopy) {
    delete populatedCopy[property];
    populatedModified = true;
  } // set new value


  if (typeof value !== 'undefined') {
    if (typeof value === 'object' && !(value instanceof File) && value !== null) {
      const flattened = _flat.default.flatten(value);

      Object.keys(flattened).forEach(key => {
        paramsCopy[`${property}.${key}`] = flattened[key];
      });
    } else {
      paramsCopy[property] = value;
    }

    if (refRecord) {
      populatedCopy[property] = refRecord;
      populatedModified = true;
    }
  }

  return { ...previousRecord,
    params: paramsCopy,
    populated: populatedModified ? populatedCopy : previousRecord.populated
  };
};

var _default = updateRecord;
exports.default = _default;