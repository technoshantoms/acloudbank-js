import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _regeneratorRuntime from "@babel/runtime/regenerator";
function _asyncIterator(r) { var n, t, o, e = 2; for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) { if (t && null != (n = r[t])) return n.call(r); if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r)); t = "@@asyncIterator", o = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(r) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var n = r.done; return Promise.resolve(r.value).then(function (r) { return { value: r, done: n }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(r) { this.s = r, this.n = r.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(r) { var n = this.s["return"]; return void 0 === n ? Promise.resolve({ value: r, done: !0 }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); }, "throw": function _throw(r) { var n = this.s["return"]; return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(r); }
import Adapter from "./Adapter";
import createClient from "ipfs-http-client";

/**
 * IPFS client adapter for CloudStorage class.
 */
var IPFSAdapter = /*#__PURE__*/function (_Adapter) {
  _inheritsLoose(IPFSAdapter, _Adapter);
  /**
   * @param {*} options required options: {}
   */
  function IPFSAdapter(options) {
    var _this;
    if (options === void 0) {
      options = {};
    }
    _this = _Adapter.call(this, options) || this;
    _this.client = new createClient(options);
    return _this;
  }

  /**
   * Store the passed value
   *
   * @param {string|Buffer} val
   * @param {Object} options
   * @returns {Promise<String>}
   */
  var _proto = IPFSAdapter.prototype;
  _proto.put =
  /*#__PURE__*/
  function () {
    var _put = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(val, options) {
      var _yield$this$client$ad, cid;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (options === void 0) {
              options = {};
            }
            _context.next = 3;
            return this.client.add(val);
          case 3:
            _yield$this$client$ad = _context.sent;
            cid = _yield$this$client$ad.cid;
            return _context.abrupt("return", cid.toString());
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
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
      var chunks, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (options === void 0) {
              options = {};
            }
            chunks = [];
            _iteratorAbruptCompletion = false;
            _didIteratorError = false;
            _context2.prev = 4;
            _iterator = _asyncIterator(this.client.cat(key));
          case 6:
            _context2.next = 8;
            return _iterator.next();
          case 8:
            if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
              _context2.next = 14;
              break;
            }
            chunk = _step.value;
            chunks.push(chunk instanceof Buffer ? chunk : Buffer.from(chunk));
          case 11:
            _iteratorAbruptCompletion = false;
            _context2.next = 6;
            break;
          case 14:
            _context2.next = 20;
            break;
          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context2.t0;
          case 20:
            _context2.prev = 20;
            _context2.prev = 21;
            if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
              _context2.next = 25;
              break;
            }
            _context2.next = 25;
            return _iterator["return"]();
          case 25:
            _context2.prev = 25;
            if (!_didIteratorError) {
              _context2.next = 28;
              break;
            }
            throw _iteratorError;
          case 28:
            return _context2.finish(25);
          case 29:
            return _context2.finish(20);
          case 30:
            return _context2.abrupt("return", Buffer.concat(chunks));
          case 31:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this, [[4, 16, 20, 30], [21,, 25, 29]]);
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
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (options === void 0) {
              options = {};
            }
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              reject('IPFSAdapter doesn\'t implement delete function');
            }));
          case 2:
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
  return IPFSAdapter;
}(Adapter);
export default IPFSAdapter;