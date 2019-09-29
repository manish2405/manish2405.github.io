(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap\");\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  background-color: #eee;\n  margin: 0;\n  font-family: \"Roboto\", sans-serif;\n}\n* {\n  box-sizing: border-box;\n}\n.row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n.align-center {\n  -webkit-box-align: center;\n          align-items: center;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.justify-left {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.justify-right {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\np {\n  line-height: 1.4;\n}\n.container {\n  max-width: 1050px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 15px;\n}\n.col-1 {\n  width: calc(8.333%*1);\n}\n.col-2 {\n  width: calc(8.333%*2);\n}\n.col-3 {\n  width: calc(8.333%*3);\n}\n.col-4 {\n  width: calc(8.333%*4);\n}\n.col-5 {\n  width: calc(8.333%*5);\n}\n.col-6 {\n  width: calc(8.333%*6);\n}\n.col-7 {\n  width: calc(8.333%*7);\n}\n.col-8 {\n  width: calc(8.333%*8);\n}\n.col-9 {\n  width: calc(8.333%*9);\n}\n.col-10 {\n  width: calc(8.333%*10);\n}\n.col-11 {\n  width: calc(8.333%*11);\n}\n.col-12 {\n  width: calc(8.333%*12);\n}\n[class*=col-] {\n  padding: 0 15px;\n}\na {\n  text-decoration: none;\n}\n.btn {\n  position: relative;\n  background-color: #00a0fd;\n  color: white;\n  font-size: 16px;\n  padding: 8px 20px;\n  border-radius: 4px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n}\n.btn:hover {\n  background-color: #0086d3;\n}\n.btn i {\n  padding-right: 5px;\n}\n@media (max-width: 767px) {\n  [class*=col-] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxccG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxnSUFBQTtBQUVSO0VBQ0UsdUJBQUE7QUNBRjtBREdBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7QUNBRjtBRElBO0VBRUksc0JBQUE7QUNESjtBRElFO0VBQ0Usb0JBQUE7RUFFQSxhQUFBO0VBRUksZUFBQTtFQUNKLHlCQUFBO0VBRVEsOEJBQUE7QUNEWjtBRElFO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0FDREo7QURJRTtFQUNFLHVCQUFBO1VBQUEsMkJBQUE7QUNESjtBREdFO0VBQ0UscUJBQUE7VUFBQSx5QkFBQTtBQ0FKO0FER0U7RUFDRSxnQkFBQTtBQ0FKO0FER0U7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtBQ0FKO0FER0U7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0FDQUo7QURHQTtFQUNFLHFCQUFBO0FDQUY7QURJQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDREY7QURFRTtFQUNJLHlCQUFBO0FDQU47QURHRTtFQUNJLGtCQUFBO0FDRE47QURLQTtFQUNFO0lBQ0UsV0FBQTtFQ0ZGO0FBQ0YiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjEwMCwxMDBpLDMwMCwzMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDcwMCw3MDBpLDkwMCw5MDBpJmRpc3BsYXk9c3dhcFwiKTtcblxuaHRtbHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5cbioge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLnJvdyB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5hbGlnbi1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuZmxleC13cmFwIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuanVzdGlmeS1sZWZ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnRcbiAgfVxuICAuanVzdGlmeS1yaWdodCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gIHAge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cblxuICAuY29udGFpbmVye1xuICAgIG1heC13aWR0aDogMTA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuICBcbiAgLmNvbC0xIHtcbiAgICB3aWR0aDogY2FsYyg4LjMzMyUqMSk7XG4gIH1cbiAgXG4gIC5jb2wtMiB7XG4gICAgd2lkdGg6IGNhbGMoOC4zMzMlKjIpO1xuICB9XG4gIFxuICAuY29sLTMge1xuICAgIHdpZHRoOiBjYWxjKDguMzMzJSozKTtcbiAgfVxuICBcbiAgLmNvbC00IHtcbiAgICB3aWR0aDogY2FsYyg4LjMzMyUqNCk7XG4gIH1cbiAgXG4gIC5jb2wtNSB7XG4gICAgd2lkdGg6IGNhbGMoOC4zMzMlKjUpO1xuICB9XG4gIFxuICAuY29sLTYge1xuICAgIHdpZHRoOiBjYWxjKDguMzMzJSo2KTtcbiAgfVxuICBcbiAgLmNvbC03IHtcbiAgICB3aWR0aDogY2FsYyg4LjMzMyUqNyk7XG4gIH1cbiAgXG4gIC5jb2wtOCB7XG4gICAgd2lkdGg6IGNhbGMoOC4zMzMlKjgpO1xuICB9XG4gIFxuICAuY29sLTkge1xuICAgIHdpZHRoOiBjYWxjKDguMzMzJSo5KTtcbiAgfVxuICBcbiAgLmNvbC0xMCB7XG4gICAgd2lkdGg6IGNhbGMoOC4zMzMlKjEwKTtcbiAgfVxuICBcbiAgLmNvbC0xMSB7XG4gICAgd2lkdGg6IGNhbGMoOC4zMzMlKjExKTtcbiAgfVxuICBcbiAgLmNvbC0xMiB7XG4gICAgd2lkdGg6IGNhbGMoOC4zMzMlKjEyKTtcbiAgfVxuICBcbiAgW2NsYXNzKj1jb2wtXSB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG4gIFxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG4uYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMGZkO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gICY6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NmQzO1xuXG4gIH1cbiAgaXtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgW2NsYXNzKj1jb2wtXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MTAwLDEwMGksMzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNzAwLDcwMGksOTAwLDkwMGkmZGlzcGxheT1zd2FwXCIpO1xuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuKiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hbGlnbi1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmxleC13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uanVzdGlmeS1sZWZ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uanVzdGlmeS1yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbnAge1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uY29sLTEge1xuICB3aWR0aDogY2FsYyg4LjMzMyUqMSk7XG59XG5cbi5jb2wtMiB7XG4gIHdpZHRoOiBjYWxjKDguMzMzJSoyKTtcbn1cblxuLmNvbC0zIHtcbiAgd2lkdGg6IGNhbGMoOC4zMzMlKjMpO1xufVxuXG4uY29sLTQge1xuICB3aWR0aDogY2FsYyg4LjMzMyUqNCk7XG59XG5cbi5jb2wtNSB7XG4gIHdpZHRoOiBjYWxjKDguMzMzJSo1KTtcbn1cblxuLmNvbC02IHtcbiAgd2lkdGg6IGNhbGMoOC4zMzMlKjYpO1xufVxuXG4uY29sLTcge1xuICB3aWR0aDogY2FsYyg4LjMzMyUqNyk7XG59XG5cbi5jb2wtOCB7XG4gIHdpZHRoOiBjYWxjKDguMzMzJSo4KTtcbn1cblxuLmNvbC05IHtcbiAgd2lkdGg6IGNhbGMoOC4zMzMlKjkpO1xufVxuXG4uY29sLTEwIHtcbiAgd2lkdGg6IGNhbGMoOC4zMzMlKjEwKTtcbn1cblxuLmNvbC0xMSB7XG4gIHdpZHRoOiBjYWxjKDguMzMzJSoxMSk7XG59XG5cbi5jb2wtMTIge1xuICB3aWR0aDogY2FsYyg4LjMzMyUqMTIpO1xufVxuXG5bY2xhc3MqPWNvbC1dIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMGZkO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODZkMztcbn1cbi5idG4gaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIFtjbGFzcyo9Y29sLV0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\portfolio\portfolio\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map