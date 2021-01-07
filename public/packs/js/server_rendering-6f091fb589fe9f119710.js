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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/server_rendering.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./app/javascript/packs/server_rendering.js":
/*!**************************************************!*\
  !*** ./app/javascript/packs/server_rendering.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// By default, this pack is loaded for server-side rendering.
// It must expose react_ujs as `ReactRailsUJS` and prepare a require context.
var componentRequireContext = __webpack_require__("./app/javascript/components sync recursive ^\\.\\/.*$");

var ReactRailsUJS = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react_ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

ReactRailsUJS.useContext(componentRequireContext);

/***/ })

/******/ });
//# sourceMappingURL=server_rendering-6f091fb589fe9f119710.js.map