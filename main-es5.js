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

module.exports = "<div class=\"content about-content\">\n  <div class=\"bio-section\">\n    <img src=\"{{bio.profile}}\" alt=\"Photo\" width=\"180\" height=\"180\" class=\"about-img\">\n    <div class=\"card\">\n      <div style=\"margin: 24px;\">\n        <h5>{{bio.name}}</h5>\n        <div class=\"body1\" style=\"margin-top: 16px;\">\n          {{bio.description}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"themeService.presentTheme$ | async\">\n  <mwc-drawer type=\"modal\" hasHeader>\n    <h6 slot=\"title\">\n      Menu\n    </h6>\n    <mwc-list activatable>\n      <mwc-list-item routerLink=\"{{tab.router}}\" *ngFor=\"let tab of tabs\">{{tab.label}}</mwc-list-item>\n    </mwc-list>\n    <div slot=\"appContent\">\n      <mwc-top-app-bar-fixed>\n        <mwc-icon-button class=\"top-app-bar-menu-icon-button\" icon=\"menu\" slot=\"navigationIcon\"></mwc-icon-button>\n        <mwc-tab-bar class=\"top-app-bar-tab-bar\" activeIndex=\"1\" slot=\"title\">\n          <mwc-tab stacked routerLink=\"{{tab.router}}\" *ngFor=\"let tab of tabs\" [label]=\"tab.label\"\n                   isMinWidthIndicator></mwc-tab>\n        </mwc-tab-bar>\n\n        <div *ngIf=\"bio\" slot=\"actionItems\" style=\"display: flex\">\n          <a href=\"{{bio.contact.github}}\" target=\"_blank\">\n            <mwc-icon-button class=\"github-icon-button\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n                <path\n                  d=\"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\"/>\n              </svg>\n            </mwc-icon-button>\n          </a>\n          <a href=\"{{bio.contact.medium}}\" target=\"_blank\">\n            <mwc-icon-button class=\"medium-icon-button\">\n              <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\"\n                   clip-rule=\"evenodd\">\n                <path\n                  d=\"M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z\"/>\n              </svg>\n            </mwc-icon-button>\n          </a>\n          <a href=\"{{bio.contact.linkedin}}\" target=\"_blank\">\n            <mwc-icon-button class=\"linkedin-icon-button\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\n                <path\n                  d=\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z\"></path>\n              </svg>\n            </mwc-icon-button>\n          </a>\n          <a href=\"{{bio.contact.twitter}}\" target=\"_blank\">\n            <mwc-icon-button class=\"twitter-icon-button\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n                <path\n                  d=\"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z\"/>\n              </svg>\n            </mwc-icon-button>\n          </a>\n        </div>\n        <div style=\"width: 24px;\" slot=\"actionItems\"></div>\n        <mwc-icon-button\n          *ngIf=\" (themeService.presentTheme$ | async) == 'theme-light'; else themeDark\"\n          icon=\"brightness_4\"\n          slot=\"actionItems\"\n          class=\"toggle-theme-icon-button\"\n          (click)=\"themeService.changeTheme('theme-dark')\">\n        </mwc-icon-button>\n        <ng-template #themeDark>\n          <mwc-icon-button\n            icon=\"brightness_5\"\n            slot=\"actionItems\"\n            class=\"toggle-theme-icon-button\"\n            (click)=\"themeService.changeTheme('theme-light')\">\n          </mwc-icon-button>\n        </ng-template>\n        <div>\n          <router-outlet></router-outlet>\n        </div>\n      </mwc-top-app-bar-fixed>\n    </div>\n  </mwc-drawer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/design/design.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/design/design.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height: 100vh;\">\n  <div *ngFor=\"let section of designs\" style=\"display: flex; flex-direction: column;\">\n    <h4 style=\"align-self: center;\">{{section.name}}</h4>\n    <div class=\"horizontal-list\">\n      <div *ngFor=\"let design of section.items\" class=\"card design-card\">\n        <div class=\"design-info\">\n          <div style=\"display: flex; flex-direction: row;\">\n            <img *ngFor=\"let image of design.images\" class=\"design-img\" src=\"{{image}}\" alt=\"Photo\"\n                 height=\"240\"\n                 width=\"240\">\n          </div>\n          <div class=\"design-details\">\n            <h6>{{design.title}}</h6>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/posts.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/posts.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"card post-card\" *ngFor=\"let post of posts\">\n    <img src=\"{{post.thumbnail}}\" >\n    <h6 class=\"post-card-title\">\n      {{post.title}}\n    </h6>\n    <div class=\"card_actions\">\n      <a href=\"{{post.url}}\" target=\"_blank\">\n        <mwc-button label=\"Read on Medium\" outlined>\n          <svg fill=\"var(--primary)\" slot=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z\"/></svg>\n        </mwc-button>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div *ngFor=\"let project of projects\" class=\"card project-card\">\n    <div class=\"project-info\">\n      <div>\n        <img class=\"project-img\" *ngIf=\"notEmpty(project.thumbnail)\" src=\"{{project.thumbnail}}\" alt=\"Photo\"\n             height=\"180\"\n             width=\"180\">\n      </div>\n      <div class=\"project-details\">\n        <h5 class=\"project-title\">{{project.title}}</h5>\n        <div class=\"project-info-add\">\n          <div class=\"project-description body1\">\n            {{project.description}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card_actions\">\n      <a target=\"_blank\" *ngIf=\"notEmpty(project.youtube_video_url)\" href=\"{{project.youtube_video_url}}\">\n        <mwc-button label=\"Youtube\" outlined>\n          <img slot=\"icon\" src=\"./assets/youtube.svg\">\n        </mwc-button>\n      </a>\n      <a target=\"_blank\" *ngIf=\"notEmpty(project.medium_url)\" href=\"{{project.medium_url}}\">\n        <mwc-button  label=\"Read on Medium\" outlined>\n          <svg fill=\"var(--primary)\" slot=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z\"/></svg>\n        </mwc-button>\n      </a>\n      <a target=\"_blank\" *ngIf=\"notEmpty(project.github_url)\" href=\"{{project.github_url}}\">\n        <mwc-button label=\"Visit project\" outlined>\n          <svg fill=\"var(--primary)\" slot=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\"/></svg>\n        </mwc-button>\n      </a>\n      <a target=\"_blank\" *ngIf=\"notEmpty(project.play_store_url)\" href=\"{{project.play_store_url}}\">\n        <mwc-button label=\"Google Play\" outlined>\n          <img slot=\"icon\" src=\"./assets/play_store.svg\">\n        </mwc-button>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AboutComponent = /** @class */ (function () {
    function AboutComponent(sanitizer, http) {
        this.sanitizer = sanitizer;
        this.http = http;
        this.bioUrl = 'https://raw.githubusercontent.com/serbelga/serbelga.github.io/data/data/bio.json';
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.bioUrl).subscribe(function (data) {
            console.log(data);
            _this.bio = data;
        });
    };
    AboutComponent.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    AboutComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.service */ "./src/app/theme.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var AppComponent = /** @class */ (function () {
    function AppComponent(router, sanitizer, http) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.http = http;
        this.bioUrl = 'https://raw.githubusercontent.com/serbelga/serbelga.github.io/data/data/bio.json';
        this.title = 'serbelga-website';
        this.tabs = [
            { label: 'Posts', router: 'posts' },
            { label: 'Projects', router: 'projects' },
            { label: 'Design', router: 'design' },
            { label: 'About', router: 'about' }
        ];
        this.themeService = new _theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]();
        this.navStart = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (evt) { return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; }));
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.bioUrl).subscribe(function (data) {
            console.log(data);
            _this.bio = data;
        });
        var drawer = document.getElementsByTagName('mwc-drawer')[0];
        var tabBar = document.getElementsByTagName('mwc-tab-bar')[0];
        var drawerList = document.getElementsByTagName('mwc-list')[0];
        if (drawer) {
            var container = drawer.parentNode;
            container.addEventListener('MDCTopAppBar:nav', function () {
                drawer.open = !drawer.open;
            });
        }
        this.navStart.subscribe(function (evt) {
            switch (evt.url) {
                case '/#':
                    tabBar.activeIndex = 0;
                    drawerList.select(0);
                    break;
                case '/':
                    tabBar.activeIndex = 0;
                    drawerList.select(0);
                    break;
                case '/posts':
                    tabBar.activeIndex = 0;
                    drawerList.select(0);
                    break;
                case '/projects':
                    tabBar.activeIndex = 1;
                    drawerList.select(1);
                    break;
                case '/design':
                    tabBar.activeIndex = 2;
                    drawerList.select(2);
                    break;
                case '/about':
                    tabBar.activeIndex = 3;
                    drawerList.select(3);
                    break;
            }
        });
    };
    AppComponent.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _material_mwc_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/mwc-drawer */ "./node_modules/@material/mwc-drawer/mwc-drawer.js");
/* harmony import */ var _material_mwc_fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/mwc-fab */ "./node_modules/@material/mwc-fab/mwc-fab.js");
/* harmony import */ var _material_mwc_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material/mwc-icon */ "./node_modules/@material/mwc-icon/mwc-icon.js");
/* harmony import */ var _material_mwc_icon_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material/mwc-icon-button */ "./node_modules/@material/mwc-icon-button/mwc-icon-button.js");
/* harmony import */ var _material_mwc_icon_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material/mwc-icon-button-toggle */ "./node_modules/@material/mwc-icon-button-toggle/mwc-icon-button-toggle.js");
/* harmony import */ var _material_mwc_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material/mwc-menu */ "./node_modules/@material/mwc-menu/mwc-menu.js");
/* harmony import */ var _material_mwc_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material/mwc-switch */ "./node_modules/@material/mwc-switch/mwc-switch.js");
/* harmony import */ var _material_mwc_tab_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material/mwc-tab-bar */ "./node_modules/@material/mwc-tab-bar/mwc-tab-bar.js");
/* harmony import */ var _material_mwc_tab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material/mwc-tab */ "./node_modules/@material/mwc-tab/mwc-tab.js");
/* harmony import */ var _material_mwc_top_app_bar_fixed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material/mwc-top-app-bar-fixed */ "./node_modules/@material/mwc-top-app-bar-fixed/mwc-top-app-bar-fixed.js");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _design_design_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./design/design.component */ "./src/app/design/design.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");






















var appRoutes = [
    { path: '', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_17__["PostsComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_21__["AboutComponent"] },
    { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_17__["PostsComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_18__["ProjectsComponent"] },
    { path: 'design', component: _design_design_component__WEBPACK_IMPORTED_MODULE_20__["DesignComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_17__["PostsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_18__["ProjectsComponent"],
                _design_design_component__WEBPACK_IMPORTED_MODULE_20__["DesignComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_21__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/design/design.component.css":
/*!*********************************************!*\
  !*** ./src/app/design/design.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rlc2lnbi9kZXNpZ24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/design/design.component.ts":
/*!********************************************!*\
  !*** ./src/app/design/design.component.ts ***!
  \********************************************/
/*! exports provided: DesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignComponent", function() { return DesignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var DesignComponent = /** @class */ (function () {
    function DesignComponent(sanitizer, http) {
        this.sanitizer = sanitizer;
        this.http = http;
        this.designsUrl = 'https://raw.githubusercontent.com/serbelga/serbelga.github.io/data/data/design.json';
    }
    DesignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.designsUrl).subscribe(function (data) {
            console.log(data);
            _this.designs = data;
        });
    };
    DesignComponent.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    DesignComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    DesignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-design',
            template: __webpack_require__(/*! raw-loader!./design.component.html */ "./node_modules/raw-loader/index.js!./src/app/design/design.component.html"),
            styles: [__webpack_require__(/*! ./design.component.css */ "./src/app/design/design.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DesignComponent);
    return DesignComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MifQ== */"

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
    PostsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */"

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
    ProjectsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/theme.service.ts":
/*!**********************************!*\
  !*** ./src/app/theme.service.ts ***!
  \**********************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ThemeService = /** @class */ (function () {
    function ThemeService() {
        this.presentThemeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('theme-light');
        this.presentTheme$ = this.presentThemeSubject.asObservable();
    }
    ThemeService.prototype.changeTheme = function (theme) {
        this.presentThemeSubject.next(theme);
    };
    ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThemeService);
    return ThemeService;
}());



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
function bootstrapModule() {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.log(err); });
}
if (window.WebComponents.ready) {
    // Web Components are ready
    bootstrapModule();
}
else {
    // Wait for polyfills to load
    window.addEventListener('WebComponentsReady', bootstrapModule);
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sergiobelda/WebstormProjects/serbelga-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map