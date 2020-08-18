(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-content\">\n  <div class=\"bio-section\">\n    <img src=\"/assets/about/profile.jpg\" alt=\"Photo\" width=\"180\" height=\"180\" class=\"about-img\">\n    <mdc-card outlined>\n      <div style=\"margin: 24px;\">\n        <div mdcHeadline5>{{name}}</div>\n        <div mdcBody1 style=\"margin-top: 16px;\">\n          {{bio}}\n        </div>\n      </div>\n    </mdc-card>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mdc-top-app-bar fixed [fixedAdjustElement]=\"fixedContent\" class=\"demo-top-app-bar-themed\">\n  <mdc-top-app-bar-row>\n    <mdc-top-app-bar-section align=\"start\">\n      <button class=\"mdc-button\" mdcTopAppBarNavIcon (click)=\"appDrawer.open = !appDrawer.open\">\n        <mdc-icon>menu</mdc-icon>\n      </button>\n      <mdc-tab-bar #mdcTabBar fade fixed>\n        <mdc-tab-scroller>\n          <mdc-tab routerLink=\"{{tab.router}}\" *ngFor=\"let tab of tabs\" [label]=\"tab.label\"></mdc-tab>\n        </mdc-tab-scroller>\n      </mdc-tab-bar>\n    </mdc-top-app-bar-section>\n    <mdc-top-app-bar-section align=\"end\">\n      <a target=\"_blank\" href=\"{{contact.github}}\"><button mdcIconButton class=\"github-icon-button\">\n        <mdc-icon>\n          <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"\n               style=\"pointer-events: none; display: block; width: 100%; height: 100%;\">\n            <g>\n              <path d=\"M8,18.8C8,18.9,7.9,19,7.8,19c-0.2,0-0.3-0.1-0.3-0.2c0-0.1,0.1-0.2,0.3-0.2C7.9,18.7,8,18.7,8,18.8z M6.5,18.6\n\tc0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.3,0,0.3-0.1c0-0.1-0.1-0.2-0.2-0.3C6.7,18.5,6.6,18.5,6.5,18.6L6.5,18.6z M8.7,18.5\n\tc-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.2,0.3,0.1c0.1,0,0.2-0.1,0.2-0.2C8.9,18.6,8.8,18.5,8.7,18.5z M11.8,0C5.1,0,0,5.1,0,11.8\n\tc0,5.4,3.4,10,8.2,11.6C8.8,23.5,9,23.1,9,22.8c0-0.3,0-2,0-3c0,0-3.4,0.7-4.1-1.4c0,0-0.6-1.4-1.3-1.8c0,0-1.1-0.8,0.1-0.7\n\tc0,0,1.2,0.1,1.9,1.2c1.1,1.9,2.8,1.3,3.5,1c0.1-0.8,0.4-1.3,0.8-1.6c-2.7-0.3-5.4-0.7-5.4-5.3c0-1.3,0.4-2,1.1-2.8\n\tC5.4,8,5,6.7,5.7,5C6.7,4.7,9,6.3,9,6.3c1-0.3,2-0.4,3-0.4s2.1,0.1,3,0.4c0,0,2.3-1.6,3.3-1.3c0.7,1.7,0.3,3,0.1,3.3\n\tc0.8,0.9,1.2,1.5,1.2,2.8c0,4.7-2.9,5-5.6,5.3c0.4,0.4,0.8,1.1,0.8,2.2c0,1.6,0,3.6,0,4c0,0.3,0.2,0.7,0.8,0.6\n\tc4.8-1.6,8.1-6.2,8.1-11.6C24,5.1,18.6,0,11.8,0z M4.7,16.7c-0.1,0,0,0.2,0,0.3C4.8,17,4.9,17.1,5,17c0.1,0,0-0.2,0-0.3\n\tC4.9,16.7,4.8,16.6,4.7,16.7z M4.2,16.3c0,0.1,0,0.1,0.1,0.2c0.1,0,0.2,0,0.2,0c0-0.1,0-0.1-0.1-0.2C4.3,16.2,4.2,16.2,4.2,16.3z\n\t M5.7,18c-0.1,0.1,0,0.2,0.1,0.3c0.1,0.1,0.3,0.1,0.3,0c0.1-0.1,0-0.2-0.1-0.3C6,18,5.8,17.9,5.7,18z M5.2,17.3\n\tc-0.1,0-0.1,0.2,0,0.3s0.2,0.2,0.3,0.1c0.1-0.1,0.1-0.2,0-0.3C5.4,17.3,5.3,17.2,5.2,17.3L5.2,17.3z\"></path>\n            </g>\n          </svg>\n        </mdc-icon>\n      </button>\n      </a>\n      <a target=\"_blank\" href=\"{{contact.medium}}\"><button mdcIconButton class=\"medium-icon-button\">\n        <mdc-icon>\n          <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"\n               style=\"pointer-events: none; display: block; width: 100%; height: 100%;\">\n            <g>\n              <path d=\"M2.9,6.3c0-0.3-0.1-0.6-0.3-0.8L0.4,2.8V2.4h7l5.4,11.8l4.7-11.8h6.6v0.4l-1.9,1.8c-0.2,0.1-0.2,0.3-0.2,0.5v13.5\n\tc0,0.2,0,0.4,0.2,0.5L24,21v0.4h-9.4V21l1.9-1.9c0.2-0.2,0.2-0.2,0.2-0.5V7.7l-5.4,13.7h-0.7L4.3,7.7v9.2c-0.1,0.4,0.1,0.8,0.3,1.1\n\tL7.2,21v0.4H0.1V21l2.5-3.1c0.3-0.3,0.4-0.7,0.3-1.1V6.3z\"></path>\n            </g>\n          </svg>\n        </mdc-icon>\n      </button>\n      </a>\n      <a target=\"_blank\" href=\"{{contact.linkedin}}\">\n\t<button mdcIconButton class=\"linkedin-icon-button\">\n\t  <mdc-icon>\n\t    <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"linkedin-in\" class=\"svg-inline--fa fa-linkedin-in fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z\"></path></svg>\n\t  </mdc-icon>\n\t</button>\n      </a>\n      <a target=\"_blank\" href=\"{{contact.twitter}}\">\n\t<button mdcIconButton class=\"twitter-icon-button\">\n\t  <mdc-icon>\n\t    <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"\n               style=\"pointer-events: none; display: block; width: 100%; height: 100%;\">\n\t       <g>\n\t\t <path d=\"M21.5,7.1c0,0.2,0,0.4,0,0.6c0,6.5-4.9,14-14,14c-2.8,0-5.4-0.8-7.6-2.2c0.4,0,0.8,0.1,1.2,0.1c2.3,0,4.4-0.8,6.1-2.1\n\t\t c-2.2,0-4-1.5-4.6-3.4c0.3,0,0.6,0.1,0.9,0.1c0.4,0,0.9-0.1,1.3-0.2C2.7,13.5,1,11.6,1,9.2V9.1c0.7,0.4,1.4,0.6,2.2,0.6\n\t\t C1.9,8.8,1,7.3,1,5.6c0-0.9,0.2-1.8,0.7-2.5c2.4,3,6.1,4.9,10.1,5.1c-0.1-0.4-0.1-0.7-0.1-1.1c0-2.7,2.2-4.9,4.9-4.9\n\t\t c1.4,0,2.7,0.6,3.6,1.6c1.1-0.2,2.2-0.6,3.1-1.2c-0.4,1.1-1.1,2.1-2.2,2.7c1-0.1,1.9-0.4,2.8-0.8C23.3,5.5,22.5,6.4,21.5,7.1\n\t\t L21.5,7.1z\"></path>\n            </g>\n          </svg>\n        </mdc-icon>\n\t</button>\n      </a>\n    </mdc-top-app-bar-section>\n  </mdc-top-app-bar-row>\n  <!--\n  <mdc-top-app-bar-row>\n    <mdc-top-app-bar-section>\n      <mdc-tab-bar #mdcTabBar align=\"center\">\n        <mdc-tab-scroller>\n          <mdc-tab routerLink=\"{{tab.router}}\" *ngFor=\"let tab of tabs\" [label]=\"tab.label\"></mdc-tab>\n        </mdc-tab-scroller>\n      </mdc-tab-bar>\n    </mdc-top-app-bar-section>\n  </mdc-top-app-bar-row>\n  -->\n</mdc-top-app-bar>\n\n<!--\n<div #fixedContent class=\"demo-drawer-app-content\">\n\n  <div style=\"text-align: center; \">\n    <div mdcHeadline4>\n      Sergio Belda\n    </div>\n    <mdc-card class=\"demo-card\" outlined>\n      <div mdcBody1>\n        {{bio}}\n      </div>\n\n    </mdc-card>\n\n\n  </div>\n</div>\n\n<p>Activated tab: {{ mdcTabBar.activeTabIndex }}</p>\n-->\n\n<div>\n  <mdc-drawer #appDrawer drawer=\"modal\" class=\"demo-drawer--accessible\">\n    <mdc-drawer-header>\n      <h3 mdcDrawerTitle>Menu</h3>\n    </mdc-drawer-header>\n    <mdc-drawer-content>\n      <mdc-list #mdcList>\n        <mdc-list-item routerLink=\"{{item.router}}\" *ngFor=\"let item of tabs\">\n          {{item.label}}\n        </mdc-list-item>\n      </mdc-list>\n    </mdc-drawer-content>\n  </mdc-drawer>\n\n  <div #fixedContent>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/posts.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/posts.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; flex-direction: column; align-items: center;\">\n  <mdc-card outlined *ngFor=\"let post of posts\" class=\"post-card\">\n    <img src=\"{{post.thumbnail}}\" >\n    <div class=\"post-card-title\">\n      <div mdcHeadline6>{{post.title}}</div>\n    </div>\n    <mdc-chip-set>\n      <mdc-chip *ngFor=\"let tag of post.tags\"\n                [ngClass]=\"{\n                'chip-android': tag.includes('Android'),\n                'chip-flutter': tag.includes('Flutter'),\n                'chip-iot': tag.includes('IoT'),\n                'chip-material': tag.includes('Material'),\n                'chip-gcloud': tag.includes('Google Cloud'),\n                'chip-camera': tag.includes('Camera')\n                }\" >\n        <mdc-chip-text>{{tag}}</mdc-chip-text>\n      </mdc-chip>\n    </mdc-chip-set>\n    <mdc-card-actions style=\"\">\n      <mdc-card-action-icons>\n        <a target=\"_blank\" href=\"{{post.url}}\">\n          <button mdc-button outlined>\n            <mdc-icon>\n              <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"\n                   style=\"pointer-events: none;\">\n                <g>\n                  <path d=\"M2.9,6.3c0-0.3-0.1-0.6-0.3-0.8L0.4,2.8V2.4h7l5.4,11.8l4.7-11.8h6.6v0.4l-1.9,1.8c-0.2,0.1-0.2,0.3-0.2,0.5v13.5\n\tc0,0.2,0,0.4,0.2,0.5L24,21v0.4h-9.4V21l1.9-1.9c0.2-0.2,0.2-0.2,0.2-0.5V7.7l-5.4,13.7h-0.7L4.3,7.7v9.2c-0.1,0.4,0.1,0.8,0.3,1.1\n\tL7.2,21v0.4H0.1V21l2.5-3.1c0.3-0.3,0.4-0.7,0.3-1.1V6.3z\"></path>\n                </g>\n              </svg>\n            </mdc-icon>\n            Read on Medium\n          </button>\n        </a>\n      </mdc-card-action-icons>\n    </mdc-card-actions>\n  </mdc-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; flex-direction: column; align-items: center;\">\n  <mdc-card outlined *ngFor=\"let project of projects\" class=\"project-card\">\n    <div class=\"project-info\">\n      <div>\n        <img class=\"project-img\" *ngIf=\"notEmpty(project.thumbnail)\" src=\"{{project.thumbnail}}\" alt=\"Photo\"\n             height=\"180\"\n             width=\"180\">\n      </div>\n      <div class=\"project-details\">\n        <div mdcHeadline5 class=\"project-title\">{{project.title}}</div>\n        <div class=\"project-info-add\">\n          <div mdcBody1 class=\"project-description\">\n            {{project.description}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <mdc-card-actions style=\"\">\n      <mdc-card-action-icons>\n        <a target=\"_blank\" *ngIf=\"notEmpty(project.youtube_video_url)\" href=\"{{project.youtube_video_url}}\">\n          <button mdc-button outlined>\n            <mdc-icon>\n              <svg viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <title>Artboard</title>\n                <g id=\"Artboard\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                  <path d=\"M23.4981818,6.64 C23.2227273,5.60090909 22.4086364,4.78272727 21.3763636,4.50454545 C19.5054545,4 12,4 12,4 C12,4 4.49454545,4 2.62363636,4.50454545 C1.59136364,4.78272727 0.777272727,5.60090909 0.501818182,6.64 C0,8.52454545 0,12.4545455 0,12.4545455 C0,12.4545455 0,16.3845455 0.501818182,18.2690909 C0.777272727,19.3081818 1.59136364,20.1263636 2.62363636,20.4045455 C4.49454545,20.9090909 12,20.9090909 12,20.9090909 C12,20.9090909 19.5054545,20.9090909 21.3763636,20.4045455 C22.4086364,20.1263636 23.2227273,19.3081818 23.4981818,18.2690909 C24,16.3845455 24,12.4545455 24,12.4545455 C24,12.4545455 24,8.52454545 23.4981818,6.64 Z\" id=\"1\" fill=\"#FF0000\" fill-rule=\"nonzero\"></path>\n                  <polygon id=\"0\" fill=\"#FFFFFF\" fill-rule=\"nonzero\" points=\"9.54545455 16.0231818 15.8181818 12.4545455 9.54545455 8.88590909\"></polygon>\n                </g>\n              </svg>\n            </mdc-icon>\n            Youtube\n          </button>\n        </a>\n        <a target=\"_blank\" *ngIf=\"notEmpty(project.medium_url)\" href=\"{{project.medium_url}}\">\n          <button mdc-button outlined>\n            <mdc-icon>\n              <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"\n                   style=\"pointer-events: none; display: block; width: 100%; height: 100%;\">\n                <g>\n                  <path d=\"M2.9,6.3c0-0.3-0.1-0.6-0.3-0.8L0.4,2.8V2.4h7l5.4,11.8l4.7-11.8h6.6v0.4l-1.9,1.8c-0.2,0.1-0.2,0.3-0.2,0.5v13.5\n\tc0,0.2,0,0.4,0.2,0.5L24,21v0.4h-9.4V21l1.9-1.9c0.2-0.2,0.2-0.2,0.2-0.5V7.7l-5.4,13.7h-0.7L4.3,7.7v9.2c-0.1,0.4,0.1,0.8,0.3,1.1\n\tL7.2,21v0.4H0.1V21l2.5-3.1c0.3-0.3,0.4-0.7,0.3-1.1V6.3z\"></path>\n                </g>\n              </svg>\n            </mdc-icon>\n            Read on Medium\n          </button>\n        </a>\n        <a target=\"_blank\" *ngIf=\"notEmpty(project.github_url)\" href=\"{{project.github_url}}\">\n          <button mdc-button outlined>\n            <mdc-icon>\n              <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"\n                   style=\"pointer-events: none; display: block; width: 100%; height: 100%;\">\n                <g>\n                  <path d=\"M8,18.8C8,18.9,7.9,19,7.8,19c-0.2,0-0.3-0.1-0.3-0.2c0-0.1,0.1-0.2,0.3-0.2C7.9,18.7,8,18.7,8,18.8z M6.5,18.6\n\tc0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.3,0,0.3-0.1c0-0.1-0.1-0.2-0.2-0.3C6.7,18.5,6.6,18.5,6.5,18.6L6.5,18.6z M8.7,18.5\n\tc-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.2,0.3,0.1c0.1,0,0.2-0.1,0.2-0.2C8.9,18.6,8.8,18.5,8.7,18.5z M11.8,0C5.1,0,0,5.1,0,11.8\n\tc0,5.4,3.4,10,8.2,11.6C8.8,23.5,9,23.1,9,22.8c0-0.3,0-2,0-3c0,0-3.4,0.7-4.1-1.4c0,0-0.6-1.4-1.3-1.8c0,0-1.1-0.8,0.1-0.7\n\tc0,0,1.2,0.1,1.9,1.2c1.1,1.9,2.8,1.3,3.5,1c0.1-0.8,0.4-1.3,0.8-1.6c-2.7-0.3-5.4-0.7-5.4-5.3c0-1.3,0.4-2,1.1-2.8\n\tC5.4,8,5,6.7,5.7,5C6.7,4.7,9,6.3,9,6.3c1-0.3,2-0.4,3-0.4s2.1,0.1,3,0.4c0,0,2.3-1.6,3.3-1.3c0.7,1.7,0.3,3,0.1,3.3\n\tc0.8,0.9,1.2,1.5,1.2,2.8c0,4.7-2.9,5-5.6,5.3c0.4,0.4,0.8,1.1,0.8,2.2c0,1.6,0,3.6,0,4c0,0.3,0.2,0.7,0.8,0.6\n\tc4.8-1.6,8.1-6.2,8.1-11.6C24,5.1,18.6,0,11.8,0z M4.7,16.7c-0.1,0,0,0.2,0,0.3C4.8,17,4.9,17.1,5,17c0.1,0,0-0.2,0-0.3\n\tC4.9,16.7,4.8,16.6,4.7,16.7z M4.2,16.3c0,0.1,0,0.1,0.1,0.2c0.1,0,0.2,0,0.2,0c0-0.1,0-0.1-0.1-0.2C4.3,16.2,4.2,16.2,4.2,16.3z\n\t M5.7,18c-0.1,0.1,0,0.2,0.1,0.3c0.1,0.1,0.3,0.1,0.3,0c0.1-0.1,0-0.2-0.1-0.3C6,18,5.8,17.9,5.7,18z M5.2,17.3\n\tc-0.1,0-0.1,0.2,0,0.3s0.2,0.2,0.3,0.1c0.1-0.1,0.1-0.2,0-0.3C5.4,17.3,5.3,17.2,5.2,17.3L5.2,17.3z\"></path>\n                </g>\n              </svg>\n            </mdc-icon>\n            Visit project\n          </button>\n        </a>\n        <a target=\"_blank\" *ngIf=\"notEmpty(project.play_store_url)\" href=\"{{project.play_store_url}}\">\n          <button mdc-button outlined>\n            <mdc-icon>\n              <svg viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <title>Artboard</title>\n                <defs>\n                  <linearGradient x1=\"0%\" y1=\"50.0198663%\" x2=\"100.017577%\" y2=\"50.0198663%\" id=\"linearGradient-1\">\n                    <stop stop-color=\"#63BE6B\" offset=\"0%\"></stop>\n                    <stop stop-color=\"#5BBC6A\" offset=\"50.6%\"></stop>\n                    <stop stop-color=\"#4AB96A\" offset=\"100%\"></stop>\n                  </linearGradient>\n                  <linearGradient x1=\"-0.0266963293%\" y1=\"50.0120145%\" x2=\"99.942158%\" y2=\"50.0120145%\" id=\"linearGradient-2\">\n                    <stop stop-color=\"#3EC6F2\" offset=\"0%\"></stop>\n                    <stop stop-color=\"#45AFE3\" offset=\"100%\"></stop>\n                  </linearGradient>\n                  <linearGradient x1=\"0.0420683611%\" y1=\"50.0367394%\" x2=\"99.9894829%\" y2=\"50.0367394%\" id=\"linearGradient-3\">\n                    <stop stop-color=\"#FAA51A\" offset=\"0%\"></stop>\n                    <stop stop-color=\"#FAB716\" offset=\"38.7%\"></stop>\n                    <stop stop-color=\"#FAC412\" offset=\"74.1%\"></stop>\n                    <stop stop-color=\"#FAC80F\" offset=\"100%\"></stop>\n                  </linearGradient>\n                  <linearGradient x1=\"0.0162601626%\" y1=\"49.9983515%\" x2=\"99.9985218%\" y2=\"49.9983515%\" id=\"linearGradient-4\">\n                    <stop stop-color=\"#EC3B50\" offset=\"0%\"></stop>\n                    <stop stop-color=\"#E7515B\" offset=\"100%\"></stop>\n                  </linearGradient>\n                </defs>\n                <g id=\"Artboard\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                  <path d=\"M15.4437039,7.31963841 L2.77056002,0.0763741948 C2.61131095,-0.0160930079 2.41096535,-0.0109559411 2.25685334,0.0815112616 C2.09760427,0.173978464 2,0.338364602 2,0.523299008 C2,0.523299008 2.00513707,1.19111769 2.01027413,2.29044999 L11.2415832,11.5217591 L15.4437039,7.31963841 Z\" id=\"Path\" fill=\"url(#linearGradient-1)\" fill-rule=\"nonzero\"></path>\n                  <path d=\"M2.01027413,2.29044999 C2.02568533,6.25626558 2.07191894,15.8831288 2.0924672,20.6760121 L11.2467203,11.5217591 L2.01027413,2.29044999 Z\" id=\"Path\" fill=\"url(#linearGradient-2)\" fill-rule=\"nonzero\"></path>\n                  <path d=\"M22.6972422,11.4652513 L15.4437039,7.31963841 L11.2364461,11.5217591 L15.9830959,16.2684088 L22.7023793,12.3539639 C22.8616283,12.2614967 22.9592326,12.0919735 22.9592326,11.9121761 C22.9592326,11.7272417 22.8564913,11.5577185 22.6972422,11.4652513 Z\" id=\"Path\" fill=\"url(#linearGradient-3)\" fill-rule=\"nonzero\"></path>\n                  <path d=\"M2.08733014,20.6760121 C2.09760427,22.3866554 2.10274134,23.4808506 2.10274134,23.4808506 C2.10274134,23.665785 2.20034561,23.8353082 2.35959468,23.9226384 C2.51884375,24.0151056 2.71405229,24.0151056 2.87330136,23.9226384 L15.9882329,16.2735459 L11.2415832,11.5268961 L2.08733014,20.6760121 Z\" id=\"Path\" fill=\"url(#linearGradient-4)\" fill-rule=\"nonzero\"></path>\n                </g>\n              </svg>\n            </mdc-icon>\n            Google Play\n          </button>\n        </a>\n      </mdc-card-action-icons>\n    </mdc-card-actions>\n  </mdc-card>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_data_bio_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/data/bio.json */ "./src/data/bio.json");
var src_data_bio_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/bio.json */ "./src/data/bio.json", 1);



var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.name = src_data_bio_json__WEBPACK_IMPORTED_MODULE_2__.name;
        this.bio = src_data_bio_json__WEBPACK_IMPORTED_MODULE_2__.description;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_data_bio_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/data/bio.json */ "./src/data/bio.json");
var src_data_bio_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/bio.json */ "./src/data/bio.json", 1);
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm5/web.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'sergiobelda-me-app';
        this.contact = src_data_bio_json__WEBPACK_IMPORTED_MODULE_2__.contact;
        this.tabs = [
            { label: 'Posts', router: 'posts' },
            { label: 'Projects', router: 'projects' },
            { label: 'About', router: 'about' }
        ];
        this.navStart = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (evt) { return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]; }));
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navStart.subscribe(function (evt) {
            switch (evt.url) {
                case '/#':
                    _this.mdcTabBar.activeTabIndex = 0;
                    _this.mdcList.setSelectedIndex(0);
                    break;
                case '/':
                    _this.mdcTabBar.activeTabIndex = 0;
                    _this.mdcList.setSelectedIndex(0);
                    break;
                case '/posts':
                    _this.mdcTabBar.activeTabIndex = 0;
                    _this.mdcList.setSelectedIndex(0);
                    break;
                case '/projects':
                    _this.mdcTabBar.activeTabIndex = 1;
                    _this.mdcList.setSelectedIndex(1);
                    break;
                case '/about':
                    _this.mdcTabBar.activeTabIndex = 2;
                    _this.mdcList.setSelectedIndex(2);
                    break;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mdcTabBar', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__["MdcTabBar"])
    ], AppComponent.prototype, "mdcTabBar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mdcList', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__["MdcList"])
    ], AppComponent.prototype, "mdcList", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/ngx-slick.umd.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_slick__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm5/web.es5.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");












var appRoutes = [
    { path: '', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
    { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcCardModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcFabModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcIconModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcMenuModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcIconButtonModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcButtonModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcTypographyModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcTopAppBarModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcTabModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcTabScrollerModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcTabBarModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcListModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcImageListModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcTabIndicatorModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcCardModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcChipsModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcDrawerModule"],
                ngx_slick__WEBPACK_IMPORTED_MODULE_5__["SlickModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostsComponent = /** @class */ (function () {
    function PostsComponent(http) {
        this.http = http;
        this.postsUrl = 'https://raw.githubusercontent.com/serbelga/serbelga.github.io/data/data/posts.json';
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.postsUrl).subscribe(function (data) {
            console.log(data);
            _this.posts = data;
        });
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(sanitizer, http) {
        this.sanitizer = sanitizer;
        this.http = http;
        this.projectsUrl = 'https://raw.githubusercontent.com/serbelga/serbelga.github.io/data/data/projects.json';
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.projectsUrl).subscribe(function (data) {
            console.log(data);
            _this.projects = data;
        });
    };
    ProjectsComponent.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    ProjectsComponent.prototype.notEmpty = function (field) {
        return field !== '';
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/data/bio.json":
/*!***************************!*\
  !*** ./src/data/bio.json ***!
  \***************************/
/*! exports provided: name, description, contact, default */
/***/ (function(module) {

module.exports = {"name":"SERGIO BELDA","description":"Software Engineer by the Polytechnic University of Valencia. Passionate about software development and new technologies. My main interests are the development of Android applications, the design of user interfaces, the development of IoT projects, as well as the augmented reality projects and multimodal interfaces design.","contact":{"twitter":"https://twitter.com/SergioBeldaG","medium":"https://medium.com/@serbelga","github":"https://github.com/serbelga","linkedin":"https://www.linkedin.com/in/sergio-belda-galbis/"}};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sergiobelda/WebstormProjects/Portfolio/serbelga.github.io_angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map