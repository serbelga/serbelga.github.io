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

module.exports = "<div class=\"about-content\">\n  <div class=\"bio-section\">\n    <img src=\"/assets/about/profile.jpg\" alt=\"Photo\" width=\"180\" height=\"180\" style=\"margin-bottom: 24px;\">\n    <mdc-card outlined>\n      <div style=\"margin: 24px;\">\n        <div mdcHeadline5>{{name}}</div>\n        <div mdcBody1 style=\"margin-top: 16px;\">\n          {{bio}}\n        </div>\n      </div>\n    </mdc-card>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mdc-top-app-bar fixed [fixedAdjustElement]=\"fixedContent\" class=\"demo-top-app-bar-themed\">\n  <mdc-top-app-bar-row>\n    <mdc-top-app-bar-section align=\"start\">\n      <button class=\"mdc-button\" mdcTopAppBarNavIcon (click)=\"appDrawer.open = !appDrawer.open\">\n        <mdc-icon>menu</mdc-icon>\n      </button>\n      <mdc-tab-bar #mdcTabBar fade fixed>\n        <mdc-tab-scroller>\n          <mdc-tab routerLink=\"{{tab.router}}\" *ngFor=\"let tab of tabs\" [label]=\"tab.label\"></mdc-tab>\n        </mdc-tab-scroller>\n      </mdc-tab-bar>\n    </mdc-top-app-bar-section>\n    <mdc-top-app-bar-section align=\"end\">\n      <a target=\"_blank\" href=\"{{contact.behance}}\"><button mdcIconButton class=\"behance-icon-button\">\n        <mdc-icon>\n          <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"\n               style=\"pointer-events: none; display: block; width: 100%; height: 100%;\">\n            <g>\n              <path d=\"M9.7,11.2c1.3-0.6,2-1.6,2-3.1c0-2.9-2.2-3.7-4.7-3.7H0v14.8h7.2c2.7,0,5.2-1.3,5.2-4.3C12.4,13.1,11.5,11.7,9.7,11.2\n\tL9.7,11.2z M3.2,6.9h3c1.2,0,2.2,0.3,2.2,1.7c0,1.3-0.8,1.8-2,1.8H3.2C3.2,10.4,3.2,6.9,3.2,6.9z M6.7,16.7H3.2v-4.1h3.5\n\tc1.4,0,2.3,0.6,2.3,2.1C9.1,16.2,8,16.7,6.7,16.7L6.7,16.7z M21.7,6.7h-6V5.2h6V6.7L21.7,6.7z M24,14c0-3.2-1.9-5.8-5.2-5.8\n\tc-3.3,0-5.5,2.5-5.5,5.7c0,3.3,2.1,5.6,5.5,5.6c2.6,0,4.2-1.1,5-3.6h-2.6c-0.3,0.9-1.4,1.4-2.3,1.4c-1.7,0-2.6-1-2.6-2.7H24\n\tC24,14.4,24,14.2,24,14z M16.3,12.7c0.1-1.4,1-2.3,2.4-2.3c1.5,0,2.2,0.9,2.3,2.3H16.3z\"></path>\n            </g>\n          </svg>\n        </mdc-icon>\n      </button>\n      </a>\n      <a target=\"_blank\" href=\"{{contact.github}}\"><button mdcIconButton class=\"github-icon-button\">\n        <mdc-icon>\n          <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"\n               style=\"pointer-events: none; display: block; width: 100%; height: 100%;\">\n            <g>\n              <path d=\"M8,18.8C8,18.9,7.9,19,7.8,19c-0.2,0-0.3-0.1-0.3-0.2c0-0.1,0.1-0.2,0.3-0.2C7.9,18.7,8,18.7,8,18.8z M6.5,18.6\n\tc0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.3,0,0.3-0.1c0-0.1-0.1-0.2-0.2-0.3C6.7,18.5,6.6,18.5,6.5,18.6L6.5,18.6z M8.7,18.5\n\tc-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.2,0.3,0.1c0.1,0,0.2-0.1,0.2-0.2C8.9,18.6,8.8,18.5,8.7,18.5z M11.8,0C5.1,0,0,5.1,0,11.8\n\tc0,5.4,3.4,10,8.2,11.6C8.8,23.5,9,23.1,9,22.8c0-0.3,0-2,0-3c0,0-3.4,0.7-4.1-1.4c0,0-0.6-1.4-1.3-1.8c0,0-1.1-0.8,0.1-0.7\n\tc0,0,1.2,0.1,1.9,1.2c1.1,1.9,2.8,1.3,3.5,1c0.1-0.8,0.4-1.3,0.8-1.6c-2.7-0.3-5.4-0.7-5.4-5.3c0-1.3,0.4-2,1.1-2.8\n\tC5.4,8,5,6.7,5.7,5C6.7,4.7,9,6.3,9,6.3c1-0.3,2-0.4,3-0.4s2.1,0.1,3,0.4c0,0,2.3-1.6,3.3-1.3c0.7,1.7,0.3,3,0.1,3.3\n\tc0.8,0.9,1.2,1.5,1.2,2.8c0,4.7-2.9,5-5.6,5.3c0.4,0.4,0.8,1.1,0.8,2.2c0,1.6,0,3.6,0,4c0,0.3,0.2,0.7,0.8,0.6\n\tc4.8-1.6,8.1-6.2,8.1-11.6C24,5.1,18.6,0,11.8,0z M4.7,16.7c-0.1,0,0,0.2,0,0.3C4.8,17,4.9,17.1,5,17c0.1,0,0-0.2,0-0.3\n\tC4.9,16.7,4.8,16.6,4.7,16.7z M4.2,16.3c0,0.1,0,0.1,0.1,0.2c0.1,0,0.2,0,0.2,0c0-0.1,0-0.1-0.1-0.2C4.3,16.2,4.2,16.2,4.2,16.3z\n\t M5.7,18c-0.1,0.1,0,0.2,0.1,0.3c0.1,0.1,0.3,0.1,0.3,0c0.1-0.1,0-0.2-0.1-0.3C6,18,5.8,17.9,5.7,18z M5.2,17.3\n\tc-0.1,0-0.1,0.2,0,0.3s0.2,0.2,0.3,0.1c0.1-0.1,0.1-0.2,0-0.3C5.4,17.3,5.3,17.2,5.2,17.3L5.2,17.3z\"></path>\n            </g>\n          </svg>\n        </mdc-icon>\n      </button>\n      </a>\n      <a target=\"_blank\" href=\"{{contact.medium}}\"><button mdcIconButton class=\"medium-icon-button\">\n        <mdc-icon>\n          <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"\n               style=\"pointer-events: none; display: block; width: 100%; height: 100%;\">\n            <g>\n              <path d=\"M2.9,6.3c0-0.3-0.1-0.6-0.3-0.8L0.4,2.8V2.4h7l5.4,11.8l4.7-11.8h6.6v0.4l-1.9,1.8c-0.2,0.1-0.2,0.3-0.2,0.5v13.5\n\tc0,0.2,0,0.4,0.2,0.5L24,21v0.4h-9.4V21l1.9-1.9c0.2-0.2,0.2-0.2,0.2-0.5V7.7l-5.4,13.7h-0.7L4.3,7.7v9.2c-0.1,0.4,0.1,0.8,0.3,1.1\n\tL7.2,21v0.4H0.1V21l2.5-3.1c0.3-0.3,0.4-0.7,0.3-1.1V6.3z\"></path>\n            </g>\n          </svg>\n        </mdc-icon>\n      </button>\n      </a>\n      <a target=\"_blank\" href=\"{{contact.linkedin}}\">\n\t<button mdcIconButton class=\"linkedin-icon-button\">\n\t  <mdc-icon>\n\t    <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"linkedin-in\" class=\"svg-inline--fa fa-linkedin-in fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z\"></path></svg>\n\t  </mdc-icon>\n\t</button>\n      </a>\n      <a target=\"_blank\" href=\"{{contact.twitter}}\">\n\t<button mdcIconButton class=\"twitter-icon-button\">\n\t  <mdc-icon>\n\t    <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"\n               style=\"pointer-events: none; display: block; width: 100%; height: 100%;\">\n\t       <g>\n\t\t <path d=\"M21.5,7.1c0,0.2,0,0.4,0,0.6c0,6.5-4.9,14-14,14c-2.8,0-5.4-0.8-7.6-2.2c0.4,0,0.8,0.1,1.2,0.1c2.3,0,4.4-0.8,6.1-2.1\n\t\t c-2.2,0-4-1.5-4.6-3.4c0.3,0,0.6,0.1,0.9,0.1c0.4,0,0.9-0.1,1.3-0.2C2.7,13.5,1,11.6,1,9.2V9.1c0.7,0.4,1.4,0.6,2.2,0.6\n\t\t C1.9,8.8,1,7.3,1,5.6c0-0.9,0.2-1.8,0.7-2.5c2.4,3,6.1,4.9,10.1,5.1c-0.1-0.4-0.1-0.7-0.1-1.1c0-2.7,2.2-4.9,4.9-4.9\n\t\t c1.4,0,2.7,0.6,3.6,1.6c1.1-0.2,2.2-0.6,3.1-1.2c-0.4,1.1-1.1,2.1-2.2,2.7c1-0.1,1.9-0.4,2.8-0.8C23.3,5.5,22.5,6.4,21.5,7.1\n\t\t L21.5,7.1z\"></path>\n            </g>\n          </svg>\n        </mdc-icon>\n\t</button>\n      </a>\n    </mdc-top-app-bar-section>\n  </mdc-top-app-bar-row>\n  <!--\n  <mdc-top-app-bar-row>\n    <mdc-top-app-bar-section>\n      <mdc-tab-bar #mdcTabBar align=\"center\">\n        <mdc-tab-scroller>\n          <mdc-tab routerLink=\"{{tab.router}}\" *ngFor=\"let tab of tabs\" [label]=\"tab.label\"></mdc-tab>\n        </mdc-tab-scroller>\n      </mdc-tab-bar>\n    </mdc-top-app-bar-section>\n  </mdc-top-app-bar-row>\n  -->\n</mdc-top-app-bar>\n\n<!--\n<div #fixedContent class=\"demo-drawer-app-content\">\n\n  <div style=\"text-align: center; \">\n    <div mdcHeadline4>\n      Sergio Belda\n    </div>\n    <mdc-card class=\"demo-card\" outlined>\n      <div mdcBody1>\n        {{bio}}\n      </div>\n\n    </mdc-card>\n\n\n  </div>\n</div>\n\n<p>Activated tab: {{ mdcTabBar.activeTabIndex }}</p>\n-->\n\n<div>\n  <mdc-drawer #appDrawer drawer=\"modal\">\n    <mdc-drawer-header>\n      <h3 mdcDrawerTitle>Menu</h3>\n    </mdc-drawer-header>\n    <mdc-drawer-content>\n      <mdc-list #mdcList>\n        <mdc-list-item routerLink=\"{{item.router}}\" *ngFor=\"let item of tabs\">\n          {{item.label}}\n        </mdc-list-item>\n      </mdc-list>\n    </mdc-drawer-content>\n  </mdc-drawer>\n\n  <div #fixedContent>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/posts.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/posts.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-grid\">\n  <mdc-card outlined *ngFor=\"let post of posts\" class=\"post-card\">\n    <img src=\"{{post.thumbnail}}\" >\n    <div class=\"post-card-title\">\n      <div mdcHeadline6>{{post.title}}</div>\n    </div>\n    <mdc-card-actions>\n      <mdc-card-action-buttons>\n        <a target=\"_blank\" href=\"{{post.url}}\"><button mdc-button mdcCardAction=\"button\" outlined>Read</button></a>\n      </mdc-card-action-buttons>\n    </mdc-card-actions>\n  </mdc-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projects-content\">\n  <div *ngFor=\"let project of projects\">\n    <div mdcHeadline4>{{project.title}}</div>\n    <div class=\"project\">\n      <img class=\"project-img\" *ngIf=\"notEmpty(project.thumbnail)\" src=\"{{project.thumbnail}}\" alt=\"Photo\" height=\"180\">\n      <iframe *ngIf=\"notEmpty(project.video_url)\" width=\"560\" height=\"315\" [src]=\"transform(project.video_url)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var src_data_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/data/data.json */ "./src/data/data.json");
var src_data_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/data.json */ "./src/data/data.json", 1);
/* harmony import */ var src_data_bio_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/data/bio.json */ "./src/data/bio.json");
var src_data_bio_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/bio.json */ "./src/data/bio.json", 1);
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm5/web.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'sergiobelda-me-app';
        this.word = src_data_data_json__WEBPACK_IMPORTED_MODULE_2__.item;
        this.contact = src_data_bio_json__WEBPACK_IMPORTED_MODULE_3__.contact;
        this.tabs = [
            { label: 'Posts', router: 'posts' },
            { label: 'Projects', router: 'projects' },
            { label: 'About', router: 'about' }
        ];
        this.navStart = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (evt) { return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]; }));
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_mdc_web__WEBPACK_IMPORTED_MODULE_4__["MdcTabBar"])
    ], AppComponent.prototype, "mdcTabBar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mdcList', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_mdc_web__WEBPACK_IMPORTED_MODULE_4__["MdcList"])
    ], AppComponent.prototype, "mdcList", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm5/web.es5.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var appRoutes = [
    { path: '', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcCardModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcFabModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcIconModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcMenuModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcIconButtonModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcButtonModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcTypographyModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcTopAppBarModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcTabModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcTabScrollerModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcTabBarModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcListModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcImageListModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcTabIndicatorModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcCardModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_5__["MdcDrawerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
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
/* harmony import */ var src_data_posts_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/data/posts.json */ "./src/data/posts.json");
var src_data_posts_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/posts.json */ "./src/data/posts.json", 1);



var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
        this.posts = src_data_posts_json__WEBPACK_IMPORTED_MODULE_2__;
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var src_data_projects_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/data/projects.json */ "./src/data/projects.json");
var src_data_projects_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/projects.json */ "./src/data/projects.json", 1);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.projects = src_data_projects_json__WEBPACK_IMPORTED_MODULE_2__;
    }
    ProjectsComponent.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    ProjectsComponent.prototype.notEmpty = function (field) {
        return field !== '';
    };
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
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

module.exports = {"name":"SERGIO BELDA","description":"Software Engineer by the Polytechnic University of Valencia. Passionate about software development and new technologies. My main interests are the development of Android applications, the design of user interfaces, the development of IoT projects, as well as the augmented reality projects and multimodal interfaces design.","contact":{"behance":"https://www.behance.net/sdagal8081d5","twitter":"https://twitter.com/SergioBeldaG","medium":"https://medium.com/@serbelga","github":"https://github.com/serbelga","linkedin":"https://www.linkedin.com/in/sergio-belda-galbis/"}};

/***/ }),

/***/ "./src/data/data.json":
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/*! exports provided: item, default */
/***/ (function(module) {

module.exports = {"item":"Button"};

/***/ }),

/***/ "./src/data/posts.json":
/*!*****************************!*\
  !*** ./src/data/posts.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = [{"title":"Material Components: BottomAppBar (Flutter)","url":"https://medium.com/@serbelga/material-components-bottomappbar-flutter-9008a6e54382","thumbnail":"/assets/posts/material_components_flutter_bottomappbar.jpg"},{"title":"Material Components Android: BottomAppBar - Part I","url":"https://medium.com/@serbelga/material-components-bottomappbar-kotlin-part-i-6c248600f6d3","thumbnail":"/assets/posts/material_components_android_bottomappbar.jpg"},{"title":"Material Components Android: BottomAppBar - Part II","url":"https://medium.com/@serbelga/material-components-android-bottomappbar-part-ii-1ae0079ec3a6","thumbnail":"/assets/posts/material_components_android_bottomappbar.jpg"},{"title":"Material Design Android: Shape, Color & Typography","url":"https://medium.com/@serbelga/material-theming-android-shape-color-typography-2c968a0b6ae4","thumbnail":"/assets/posts/material_design_android_theming.jpg"},{"title":"Transitions in Android Navigation Architecture Component","url":"https://medium.com/@serbelga/shared-elements-in-android-navigation-architecture-component-bc5e7922ecdf","thumbnail":"/assets/posts/navigation_transition_shared_elements.png"}];

/***/ }),

/***/ "./src/data/projects.json":
/*!********************************!*\
  !*** ./src/data/projects.json ***!
  \********************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = [{"title":"PymApp","url":"","thumbnail":"/assets/projects/pymapp.jpg","video_url":"https://www.youtube.com/embed/lA2q7zM1IZ0","description":""}];

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

module.exports = __webpack_require__(/*! /Users/sergiobelda/WebstormProjects/serbelga.github.io_angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map