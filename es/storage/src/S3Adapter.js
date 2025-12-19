import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import Adapter from "./Adapter";
import S3 from "aws-sdk/clients/s3";
import { sha256 } from "../../ecc/src/hash";

/**
 * S3 client adapter for CloudStorage class.
 */
var S3Adapter = /*#__PURE__*/function (_Adapter) {
  _inheritsLoose(S3Adapter, _Adapter);
  /**
   * @param {*} options required options: {region, credentials: {}, params: {Bucket}}
   */
  function S3Adapter(options) {
    var _this;
    if (options === void 0) {
      options = {};
    }
    _this = _Adapter.call(this, options) || this;
    var opts = _extends({
      apiVersion: "2006-03-01"
    }, options);
    _this.client = new S3(opts);
    return _this;
  }

  /**
   * Store the passed value under the passed key
   *
   * @param {string|Buffer} val
   * @param {Object} options
   * @returns {Promise<String>}
   */
  var _proto = S3Adapter.prototype;
  _proto.put =
  /*#__PURE__*/
  function () {
    var _put = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(val, options) {
      var _this2 = this;
      var id, params;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (options === void 0) {
              options = {};
            }
            id = sha256(val, 'hex');
            params = {
              Body: val,
              Key: id
            };
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              _this2.client.putObject(params).promise().then(function () {
                resolve(id);
              })["catch"](function (err) {
                reject(err);
              });
            }));
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function put(_x, _x2) {
      return _put.apply(this, arguments);
    }
    return put;
  }()
  /**
   * Retrieve the value for the passed key
   *
   * @param {String} key
   * @param {Object} options
   * @returns {Promise<Buffer>}
   */
  ;
  _proto.get =
  /*#__PURE__*/
  function () {
    var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(key, options) {
      var _this3 = this;
      var params;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (options === void 0) {
              options = {};
            }
            params = {
              Key: key
            };
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              _this3.client.getObject(params).promise().then(function (data) {
                resolve(data.Body);
              })["catch"](function (err) {
                reject(err);
              });
            }));
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function get(_x3, _x4) {
      return _get.apply(this, arguments);
    }
    return get;
  }()
  /**
   * Remove the record for the passed key
   *
   * @param {String} key
   * @param {Object} options
   * @returns {Promise<boolean>}
   */
  ;
  _proto["delete"] =
  /*#__PURE__*/
  function () {
    var _delete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(key, options) {
      var _this4 = this;
      var params;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (options === void 0) {
              options = {};
            }
            params = {
              Key: key
            };
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              _this4.client.deleteObject(params).promise().then(function () {
                resolve();
              })["catch"](function (err) {
                reject(err);
              });
            }));
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    function _delete(_x5, _x6) {
      return _delete2.apply(this, arguments);
    }
    return _delete;
  }();
  return S3Adapter;
}(Adapter);
export default S3Adapter;