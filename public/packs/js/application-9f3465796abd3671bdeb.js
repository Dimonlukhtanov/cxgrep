/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/components sync recursive ^\\.\\/.*$":
/*!*************************************************!*\
  !*** ./app/javascript/components sync ^\.\/.*$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Comment": "./app/javascript/components/Comment.js",
	"./Comment.js": "./app/javascript/components/Comment.js",
	"./CommentForm": "./app/javascript/components/CommentForm.js",
	"./CommentForm.js": "./app/javascript/components/CommentForm.js",
	"./Comments": "./app/javascript/components/Comments.js",
	"./Comments.js": "./app/javascript/components/Comments.js",
	"./CommentsApp": "./app/javascript/components/CommentsApp.js",
	"./CommentsApp.js": "./app/javascript/components/CommentsApp.js",
	"./Replies": "./app/javascript/components/Replies.js",
	"./Replies.js": "./app/javascript/components/Replies.js",
	"./Reply": "./app/javascript/components/Reply.js",
	"./Reply.js": "./app/javascript/components/Reply.js",
	"./ReplyForm": "./app/javascript/components/ReplyForm.js",
	"./ReplyForm.js": "./app/javascript/components/ReplyForm.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/components sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./app/javascript/components/Comment.js":
/*!**********************************************!*\
  !*** ./app/javascript/components/Comment.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/dimonlukhtanov/rubysocial-master/app/javascript/components/Comment.js: Support for the experimental syntax 'jsx' isn't currently enabled (54:22):\n\n  52 |       Array.isArray(this.state.replies) && \n  53 |       this.state.replies.length) {\n> 54 |         repliesBox = <Replies replies={this.state.replies} />\n     |                      ^\n  55 |       } \n  56 | \n  57 |     return (\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:748:17)\n    at Parser.raiseWithData (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:741:17)\n    at Parser.expectOnePlugin (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9116:18)\n    at Parser.parseExprAtom (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10569:22)\n    at Parser.parseExprSubscripts (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9926:21)\n    at Parser.parseMaybeAssign (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9950:25)\n    at Parser.parseExpressionBase (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9871:23)\n    at /home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9865:39\n    at Parser.allowInAnd (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11541:16)\n    at Parser.parseExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9865:17)\n    at Parser.parseStatementContent (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11807:23)\n    at Parser.parseStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12258:25)\n    at Parser.parseBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12249:10)\n    at Parser.parseBlock (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12233:10)\n    at Parser.parseStatementContent (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11752:21)\n    at Parser.parseStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Parser.parseIfStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12030:28)\n    at Parser.parseStatementContent (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11721:21)\n    at Parser.parseStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12258:25)\n    at Parser.parseBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12249:10)\n    at Parser.parseBlock (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12233:10)\n    at Parser.parseFunctionBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11221:24)\n    at Parser.parseFunctionBodyAndFinish (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11205:10)");

/***/ }),

/***/ "./app/javascript/components/CommentForm.js":
/*!**************************************************!*\
  !*** ./app/javascript/components/CommentForm.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/dimonlukhtanov/rubysocial-master/app/javascript/components/CommentForm.js: Support for the experimental syntax 'jsx' isn't currently enabled (36:7):\n\n  34 |   render () {\n  35 |     return (\n> 36 |       <div className=\"card my-4\">\n     |       ^\n  37 |           <h5 className=\"card-header\">Оставить комментарий:</h5>\n  38 |           <div className=\"card-body\">\n  39 |             <form onSubmit={this.handleSubmit}>\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:748:17)\n    at Parser.raiseWithData (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:741:17)\n    at Parser.expectOnePlugin (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9116:18)\n    at Parser.parseExprAtom (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10569:22)\n    at Parser.parseExprSubscripts (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9926:21)\n    at /home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9893:39\n    at Parser.allowInAnd (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11547:12)\n    at Parser.parseMaybeAssignAllowIn (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9893:17)\n    at Parser.parseParenAndDistinguishExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10752:28)\n    at Parser.parseExprAtom (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10470:21)\n    at Parser.parseExprSubscripts (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9926:21)\n    at Parser.parseExpressionBase (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9871:23)\n    at /home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9865:39\n    at Parser.allowInAnd (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11541:16)\n    at Parser.parseExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9865:17)\n    at Parser.parseReturnStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12045:28)\n    at Parser.parseStatementContent (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11724:21)\n    at Parser.parseStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12258:25)\n    at Parser.parseBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12249:10)");

/***/ }),

/***/ "./app/javascript/components/Comments.js":
/*!***********************************************!*\
  !*** ./app/javascript/components/Comments.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/dimonlukhtanov/rubysocial-master/app/javascript/components/Comments.js: Support for the experimental syntax 'jsx' isn't currently enabled (8:18):\n\n   6 |     return (\n   7 |         this.props.comments.map((comment, index) => {\n>  8 |           return <Comment key={index} comment={comment} post_id={this.props.post_id} replies={this.props.replies[comment.id]} />\n     |                  ^\n   9 |         })\n  10 |     );\n  11 |   }\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:748:17)\n    at Parser.raiseWithData (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:741:17)\n    at Parser.expectOnePlugin (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9116:18)\n    at Parser.parseExprAtom (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10569:22)\n    at Parser.parseExprSubscripts (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9926:21)\n    at Parser.parseExpressionBase (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9871:23)\n    at /home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9865:39\n    at Parser.allowInAnd (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11547:12)\n    at Parser.parseExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9865:17)\n    at Parser.parseReturnStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12045:28)\n    at Parser.parseStatementContent (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11724:21)\n    at Parser.parseStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12258:25)\n    at Parser.parseBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12249:10)\n    at Parser.parseBlock (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12233:10)\n    at Parser.parseFunctionBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11221:24)\n    at Parser.parseArrowExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11193:10)\n    at Parser.parseParenAndDistinguishExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10766:12)\n    at Parser.parseExprAtom (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10470:21)\n    at Parser.parseExprSubscripts (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9926:21)");

/***/ }),

/***/ "./app/javascript/components/CommentsApp.js":
/*!**************************************************!*\
  !*** ./app/javascript/components/CommentsApp.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/dimonlukhtanov/rubysocial-master/app/javascript/components/CommentsApp.js: Support for the experimental syntax 'jsx' isn't currently enabled (19:7):\n\n  17 |   render () {\n  18 |     return (\n> 19 |       <div>\n     |       ^\n  20 |        <div id=\"comment_error\"></div>\n  21 |        <CommentForm csrf_token={this.props.csrf_token} onSubmit={this.handleSubmitComment} />\n  22 |        <Comments comments={this.state.comments} post_id={this.props.post_id} replies={this.state.replies} csrf_token={this.props.csrf_token} />\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:748:17)\n    at Parser.raiseWithData (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:741:17)\n    at Parser.expectOnePlugin (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9116:18)\n    at Parser.parseExprAtom (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10569:22)\n    at Parser.parseExprSubscripts (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9926:21)\n    at /home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9893:39\n    at Parser.allowInAnd (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11547:12)\n    at Parser.parseMaybeAssignAllowIn (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9893:17)\n    at Parser.parseParenAndDistinguishExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10752:28)\n    at Parser.parseExprAtom (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10470:21)\n    at Parser.parseExprSubscripts (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9926:21)\n    at Parser.parseExpressionBase (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9871:23)\n    at /home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9865:39\n    at Parser.allowInAnd (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11541:16)\n    at Parser.parseExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9865:17)\n    at Parser.parseReturnStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12045:28)\n    at Parser.parseStatementContent (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11724:21)\n    at Parser.parseStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12258:25)\n    at Parser.parseBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12249:10)");

/***/ }),

/***/ "./app/javascript/components/Replies.js":
/*!**********************************************!*\
  !*** ./app/javascript/components/Replies.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/dimonlukhtanov/rubysocial-master/app/javascript/components/Replies.js: Support for the experimental syntax 'jsx' isn't currently enabled (8:16):\n\n   6 |     return (\n   7 |       this.props.replies.map((reply, index) => {\n>  8 |         return <Reply key={index} reply={reply} />\n     |                ^\n   9 |       })\n  10 |     );\n  11 |   }\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:748:17)\n    at Parser.raiseWithData (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:741:17)\n    at Parser.expectOnePlugin (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9116:18)\n    at Parser.parseExprAtom (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10569:22)\n    at Parser.parseExprSubscripts (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9926:21)\n    at Parser.parseExpressionBase (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9871:23)\n    at /home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9865:39\n    at Parser.allowInAnd (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11547:12)\n    at Parser.parseExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9865:17)\n    at Parser.parseReturnStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12045:28)\n    at Parser.parseStatementContent (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11724:21)\n    at Parser.parseStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12258:25)\n    at Parser.parseBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12249:10)\n    at Parser.parseBlock (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12233:10)\n    at Parser.parseFunctionBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11221:24)\n    at Parser.parseArrowExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11193:10)\n    at Parser.parseParenAndDistinguishExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10766:12)\n    at Parser.parseExprAtom (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10470:21)\n    at Parser.parseExprSubscripts (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9926:21)");

/***/ }),

/***/ "./app/javascript/components/Reply.js":
/*!********************************************!*\
  !*** ./app/javascript/components/Reply.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/dimonlukhtanov/rubysocial-master/app/javascript/components/Reply.js: Support for the experimental syntax 'jsx' isn't currently enabled (6:7):\n\n  4 |   render () {\n  5 |     return (\n> 6 |       <div className=\"media mt-4\">\n    |       ^\n  7 |         <img className=\"d-flex mr-3 rounded-circle\" src=\"http://placehold.it/50x50\" alt=\"\" />\n  8 |         <div className=\"media-body\">\n  9 |           <h5 className=\"mt-0\">Commenter Name</h5>\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:748:17)\n    at Parser.raiseWithData (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:741:17)\n    at Parser.expectOnePlugin (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9116:18)\n    at Parser.parseExprAtom (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10569:22)\n    at Parser.parseExprSubscripts (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9926:21)\n    at /home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9893:39\n    at Parser.allowInAnd (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11547:12)\n    at Parser.parseMaybeAssignAllowIn (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9893:17)\n    at Parser.parseParenAndDistinguishExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10752:28)\n    at Parser.parseExprAtom (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10470:21)\n    at Parser.parseExprSubscripts (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9926:21)\n    at Parser.parseExpressionBase (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9871:23)\n    at /home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9865:39\n    at Parser.allowInAnd (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11541:16)\n    at Parser.parseExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9865:17)\n    at Parser.parseReturnStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12045:28)\n    at Parser.parseStatementContent (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11724:21)\n    at Parser.parseStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12258:25)\n    at Parser.parseBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12249:10)");

/***/ }),

/***/ "./app/javascript/components/ReplyForm.js":
/*!************************************************!*\
  !*** ./app/javascript/components/ReplyForm.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/dimonlukhtanov/rubysocial-master/app/javascript/components/ReplyForm.js: Support for the experimental syntax 'jsx' isn't currently enabled (7:9):\n\n   5 |   render () {\n   6 |     return (\n>  7 |         <form onSubmit={this.handleSubmit}>\n     |         ^\n   8 |           <div className=\"form-group\">\n   9 |             <textarea \n  10 |               className=\"form-control\" \n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:748:17)\n    at Parser.raiseWithData (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:741:17)\n    at Parser.expectOnePlugin (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9116:18)\n    at Parser.parseExprAtom (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10569:22)\n    at Parser.parseExprSubscripts (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9926:21)\n    at /home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9893:39\n    at Parser.allowInAnd (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11547:12)\n    at Parser.parseMaybeAssignAllowIn (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9893:17)\n    at Parser.parseParenAndDistinguishExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10752:28)\n    at Parser.parseExprAtom (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10470:21)\n    at Parser.parseExprSubscripts (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9926:21)\n    at Parser.parseExpressionBase (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9871:23)\n    at /home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9865:39\n    at Parser.allowInAnd (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11541:16)\n    at Parser.parseExpression (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:9865:17)\n    at Parser.parseReturnStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12045:28)\n    at Parser.parseStatementContent (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11724:21)\n    at Parser.parseStatement (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12258:25)\n    at Parser.parseBlockBody (/home/dimonlukhtanov/rubysocial-master/node_modules/@babel/parser/lib/index.js:12249:10)");

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _stylesheets_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/application */ "./app/javascript/stylesheets/application.scss");
/* harmony import */ var _stylesheets_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_application__WEBPACK_IMPORTED_MODULE_1__);
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).start();

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'turbolinks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).start();

__webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js").start();

__webpack_require__(/*! channels */ "./app/javascript/channels/index.js");



document.addEventListener("turbolinks:load", $('[data-toggle="tooltip"]').tooltip()); // Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// Support component names relative to this directory:

var componentRequireContext = __webpack_require__("./app/javascript/components sync recursive ^\\.\\/.*$");

var ReactRailsUJS = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react_ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

ReactRailsUJS.useContext(componentRequireContext);

/***/ }),

/***/ "./app/javascript/stylesheets/application.scss":
/*!*****************************************************!*\
  !*** ./app/javascript/stylesheets/application.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./application.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/application.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm["delete"](form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/application.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./app/javascript/stylesheets/application.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: ~bootstrap/scss/bootstrap.\n        on line 1 of /home/dimonlukhtanov/rubysocial-master/app/javascript/stylesheets/application.scss\n>> @import \"~bootstrap/scss/bootstrap\";\n   ^\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ });
//# sourceMappingURL=application-9f3465796abd3671bdeb.js.map