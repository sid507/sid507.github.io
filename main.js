(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n  fxLayout=\"column\"\n  fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n        <h3>About Us</h3>\n        <hr>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <div fxFlex=\"70\">\n        <h2>Our History</h2>\n        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>\n        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>\n      </div>\n      <div fxFlex=\"30\">\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>\n            <h2>Facts At a Glance</h2>\n            </mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <dl>\n              <dt>Started</dt>\n              <dd>3 Feb. 2013</dd>\n              <dt>Major Stake Holder</dt>\n              <dd>HK Fine Foods Inc.</dd>\n              <dt>Last Year's Turnover</dt>\n              <dd>$1,250,375</dd>\n              <dt>Employees</dt>\n              <dd>40</dd>\n            </dl>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n  \n  <div fxFlex>\n    <mat-card>\n      <blockquote>\n        <h3>You better cut the pizza in four pieces because\n            I'm not hungry enough to eat six.</h3>\n        <footer>-- Yogi Berra,\n          <cite>The Wit and Wisdom of Yogi Berra,\n            P. Pepe, Diversion Books, 2014</cite>\n        </footer>\n      </blockquote>\n    </mat-card>\n  </div>\n\n\n  <div  fxLayout=\"column\" *ngIf=\"leader\">\n    \n    <mat-list fxFlex>\n      <h2>Corporate Leadership</h2>\n      <mat-list-item *ngFor=\"let item of leader\">\n        <img matListAvatar src=\"{{BaseURL+ item.image}}\" alt={{item.name}}>\n        <h1 matLine> {{item.name}} </h1>\n        <h1 matLine> {{item.designation}} </h1>\n        <h1 matLine >\n          <span> {{item.description}} </span>\n        </h1>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div fxFlex [hidden]=\"leader || leadererrMsg\">\n    <mat-spinner></mat-spinner>\n    <h4>Loading... please wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"leadererrMsg\">\n    <h4>ERROR</h4>\n    <h5>{{leadererrMsg}}</h5>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-circle {\n  border-radius: 50%; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_leaders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/leaders.service */ "./src/app/services/leaders.service.ts");
/* harmony import */ var _animation_app_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation/app.animation */ "./src/app/animation/app.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(leaderservice, BaseURL) {
        this.leaderservice = leaderservice;
        this.BaseURL = BaseURL;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderservice.getLeaders()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmsg) { return _this.leadererrMsg = errmsg; });
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")],
            host: {
                '[@flyinout]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animation_app_animation__WEBPACK_IMPORTED_MODULE_2__["flyinout"])()
            ]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BaseURL')),
        __metadata("design:paramtypes", [_services_leaders_service__WEBPACK_IMPORTED_MODULE_1__["LeadersService"], Object])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/animation/app.animation.ts":
/*!********************************************!*\
  !*** ./src/app/animation/app.animation.ts ***!
  \********************************************/
/*! exports provided: visibility, flyinout, expand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibility", function() { return visibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyinout", function() { return flyinout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return expand; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function visibility() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('visibility', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('display', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s ease-in-out'))
    ]);
}
function flyinout() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyinout', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in')
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)', opacity: 0 }))
        ])
    ]);
}
function expand() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expand', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-50%)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dishdetail/dishdetail.component */ "./src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");





var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"] },
    { path: 'contactus', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'aboutus', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'dishdetail/:id', component: _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_1__["DishdetailComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer>\n    \n</app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'conFusion';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dishdetail/dishdetail.component */ "./src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _services_promotion_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/promotion.service */ "./src/app/services/promotion.service.ts");
/* harmony import */ var _services_leaders_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/leaders.service */ "./src/app/services/leaders.service.ts");
/* harmony import */ var _services_process_http_msg_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/process-http-msg.service */ "./src/app/services/process-http-msg.service.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_23__["MenuComponent"],
                _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_24__["DishdetailComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_28__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_29__["ContactComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_35__["LoginComponent"],
                _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_37__["HighlightDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_34__["AppRoutingModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_20__["HttpModule"]
            ],
            entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_35__["LoginComponent"]],
            providers: [_services_dish_service__WEBPACK_IMPORTED_MODULE_30__["DishService"], _services_promotion_service__WEBPACK_IMPORTED_MODULE_31__["PromotionService"], _services_leaders_service__WEBPACK_IMPORTED_MODULE_32__["LeadersService"], { provide: 'BaseURL', useValue: _shared_baseurl__WEBPACK_IMPORTED_MODULE_36__["baseURL"] }, _services_process_http_msg_service__WEBPACK_IMPORTED_MODULE_33__["ProcessHttpMsgService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n  fxLayout=\"column\"\n  fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n        <h3>Contact Us</h3>\n        <hr>\n        <hr>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <h3>Location Information</h3> \n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <div fxFlex=\"50\" fxFlexOffset=\"20px\">\n        <h4>Our Address</h4>\n        <address>\n          121, Clear Water Bay Road<br>\n          Clear Water Bay, Kowloon<br>\n          HONG KONG<br>\n          <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n          <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n          <i class=\"fa fa-envelope\"></i>: \n                <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n        </address>\n        <p></p>\n        <div>\n          <a mat-raised-button href=\"tel:+85212345678\"><i class=\"fa fa-phone\"></i> Call</a>\n          <a mat-raised-button><i class=\"fa fa-skype\"></i> Skype</a>\n          <a mat-raised-button href=\"mailto:confusion@food.net\"><i class=\"fa fa-envelope-o\"></i> Email</a>\n        </div>\n        </div>\n      <div fxFlex=\"40\">\n        <h4>Map of our Location</h4>\n      </div>\n    </div>\n  </div>\n  <div fxFlex fxFlexOffset=\"20px\" class=\"form-size\">\n    <h3>Send us your Feedback</h3>\n    <p>{{ feedbackForm.value | json }} {{ feedbackForm.status | json }}</p>\n\n    <form novalidate [formGroup]=\"feedbackForm\" (ngSubmit)=\"onSubmit()\" [@visibility]=\"visibility\" *ngIf=\"visibility=='shown'\">\n      <p>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"firstname\" placeholder=\"First Name\" type=\"text\" required>\n          <mat-error *ngIf=\"formErrors.firstname\">{{formErrors.firstname}}</mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"lastname\" placeholder=\"Last Name\" type=\"text\" required>\n          <mat-error *ngIf=\"formErrors.lastname\">{{formErrors.lastname}}</mat-error>\n        </mat-form-field>\n      </p>\n      <p>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"telnum\" placeholder=\"Tel. Number\" type=\"tel\" pattern=\"[0-9]*\" required>\n          <mat-error *ngIf=\"formErrors.telnum\">{{formErrors.telnum}}</mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" email required>\n          <mat-error *ngIf=\"formErrors.email\">{{formErrors.email}}</mat-error>\n\n        </mat-form-field>\n      </p>\n      <table class=\"form-size\">\n        <td>\n          <mat-slide-toggle formControlName=\"agree\">May we contact you?</mat-slide-toggle>\n        </td>\n        <td>\n          <mat-select placeholder=\"How?\" formControlName=\"contacttype\">\n            <mat-option *ngFor=\"let ctype of contacttype\" [value]=\"ctype\">\n              {{ ctype }}\n            </mat-option>\n          </mat-select>\n        </td>\n        </table>\n      <p>\n        <mat-form-field class=\"full-width\" [@expand]=\"expand\">\n          <textarea matInput formControlName=\"message\" placeholder=\"Your Feedback\" rows=12></textarea>\n        </mat-form-field>\n      </p>\n      <button type=\"submit\" mat-button class=\"background-primary text-floral-white\">Submit</button>\n    </form>\n    <div *ngIf=\"visibility=='hidden'\">\n      <h4>Submitting YOur Form</h4>\n      <mat-spinner></mat-spinner>\n    </div>\n    <mat-card *ngIf=\"visibility=='display'\"  [@expand]=\"expand\">\n      <div mat-line>Firstname:{{feedbackForm2.value['firstname']}}</div><br>\n      <div mat-line>Last Name:{{feedbackForm2.value['lastname']}}</div><br>\n      <div mat-line>Tel Number:{{feedbackForm2.value['telnum']}}</div><br>\n      <div mat-line>Email:{{feedbackForm2.value['email']}}</div><br>\n      <div mat-line>Contact you:{{feedbackForm2.value['agree']}}</div><br>\n      <div mat-line>Contact Type:{{feedbackForm2.value['contacttype']}}</div><br>\n      <div mat-line>Message:{{feedbackForm2.value['message']}}</div><br>\n\n\n\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 95%; }\n\n.half-width {\n  width: 45%; }\n\n.form-size {\n  width: 75%; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/feedback */ "./src/app/shared/feedback.ts");
/* harmony import */ var _animation_app_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation/app.animation */ "./src/app/animation/app.animation.ts");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/feedback.service */ "./src/app/services/feedback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, feedbackService) {
        this.fb = fb;
        this.feedbackService = feedbackService;
        this.contacttype = _shared_feedback__WEBPACK_IMPORTED_MODULE_2__["ContactType"];
        this.feed = [];
        this.visibility = 'shown';
        this.formErrors = {
            'firstname': '',
            'lastname': '',
            'telnum': '',
            'email': ''
        };
        this.validationMessages = {
            'firstname': {
                'required': 'First name is required',
                'minlength': 'First name must be at least two character',
                'maxlength': 'first name cannot be more thsn 20 character'
            },
            'lastname': {
                'required': 'Last name is required',
                'minlength': 'Last name must be at least two character',
                'maxlength': 'Last name cannot be more thsn 20 character'
            },
            'telnum': {
                'required': 'telnum is required',
                'pattern': 'telnum must contain only number'
            },
            'email': {
                'required': 'email is required',
                'email': 'Email not in valid format'
            }
        };
        this.createForm();
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.createForm = function () {
        var _this = this;
        this.feedbackForm = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]],
            telnum: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            agree: false,
            contacttype: 'None',
            message: ''
        });
        // this.onValueChanged();
        this.feedbackForm.valueChanges
            .subscribe(function (data) {
            _this.onValueChanged(data);
        });
    };
    ContactComponent.prototype.onValueChanged = function (data) {
        if (!this.feedbackForm) {
            return;
        }
        var form = this.feedbackForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        var cc = this.feedbackForm.value;
        console.log();
        this.feedbackService.getfeedback().subscribe(function (feedb) { return _this.feed = feedb; }, function (errmsg) { return _this.errMsg = errmsg; });
        this.feed.push(cc);
        console.log(this.feed);
        this.feedbackForm2 = this.feedbackForm;
        var t = (this.feedbackService.submitFeedback(this.feed));
        this.visibility = 'hidden';
        t.subscribe(function (feedback) { _this.feed = feedback, _this.visibility = 'display'; }, function (errmsg) { return _this.errMsg = errmsg; });
        setTimeout(function () { return _this.visibility = 'shown'; }, 5000);
        setTimeout(function () { return _this.feedbackForm.reset({
            firstname: '',
            lastname: '',
            telnum: 0,
            email: '',
            agree: false,
            contacttype: 'None',
            message: ''
        }); }, 5000);
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")],
            host: {
                '[@flyinout]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animation_app_animation__WEBPACK_IMPORTED_MODULE_3__["visibility"])(),
                Object(_animation_app_animation__WEBPACK_IMPORTED_MODULE_3__["flyinout"])(),
                Object(_animation_app_animation__WEBPACK_IMPORTED_MODULE_3__["expand"])()
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_feedback_service__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/directives/highlight.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/highlight.directive.ts ***!
  \***************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el, re) {
        this.el = el;
        this.re = re;
    }
    HighlightDirective.prototype.onmouseenter = function () {
        this.re.addClass(this.el.nativeElement, 'highlight');
    };
    HighlightDirective.prototype.onmouseleave = function () {
        this.re.removeClass(this.el.nativeElement, 'highlight');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onmouseenter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onmouseleave", null);
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/dishdetail/dishdetail.component.html":
/*!******************************************************!*\
  !*** ./src/app/dishdetail/dishdetail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n    fxLayout=\"row\"\n    fxLayout.sm=\"column\"\n    fxLayout.xs=\"column\"\n    fxLayoutAlign.gt-md=\"space-around center\"\n    fxLayoutGap=\"10px\" \n    fxLayoutGap.xs=\"0\">\n\n  <div fxFlex=\"40\">\n    \n    <mat-card *ngIf=\"dish\" [@visibility]=\"visibility\" [@expand]=\"expand\">\n      <mat-card-header>\n        <mat-card-title>\n          <h4>{{dish.name | uppercase}}</h4></mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"{{BaseURL+ dish.image}}\" alt={{dish.name}}>\n      <mat-card-content>\n        <p>{{dish.description}}</p>\n      </mat-card-content>\n      <mat-card-actions>\n        <section>\n          <button mat-button [routerLink]=\"['/dishdetail', prev]\"><span class=\"fa fa-chevron-left fa-lg\" ></span></button>\n        <button mat-button [routerLink]=\"['/menu']\" routerLinkActive=\"router-link-active\" >BACK</button>\n        <button mat-button>LIKE</button>\n        <button mat-button>SHARE</button>\n        <span class=\"flex-spacer\"></span>\n        <button mat-button [routerLink]=\"['/dishdetail', next]\"><span class=\"fa fa-chevron-right fa-lg\" ></span></button>\n        </section>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n  <div fxFlex [hidden]=\"dish || errMsg\">\n    <mat-spinner></mat-spinner>\n  <h4>Loading.. please wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"errMsg\">\n    <h4>ERROR</h4>\n    <h5>{{errmsg}}</h5>\n  </div>\n  <div fxFlex=\"40\" [@visibility]=\"visibility\" >\n    <mat-list *ngIf=\"dish\">\n      <h3>COMMENTS</h3>\n      <mat-list-item *ngFor=\"let com of dish.comments\">\n        \n        <div mat-line>{{com.comment}}</div>\n        \n        <div mat-line>{{com.rating}} Stars</div>\n        <div mat-line>--{{com.author}} {{com.date|date:'mediumDate'}}</div>\n\n        \n      </mat-list-item>\n\n      <mat-list-item>\n        <div mat-line>{{feedcomment.value['comment']}}</div>\n        <div mat-line>{{feedcomment.value['rating']}} Stars</div>\n        <div mat-line>--{{feedcomment.value['author']}}{{feedcomment.value['date']|date:\"mediumDate\"}}</div>\n      </mat-list-item>\n      \n        \n        \n      \n      <form novalidate [formGroup]=\"feedcomment\" (ngSubmit)=\"onSubmit()\">\n        \n        \n  \n        <p>\n          <mat-form-field  class=\"full-width\">\n            <input matInput formControlName=\"author\" placeholder=\"Name\" name=\"author\" type=\"text\" required>\n            <mat-error *ngIf=\"formErrors.author\">{{formErrors.author}}</mat-error>\n          </mat-form-field>\n          <br>\n          <mat-slider thumbLabel min=\"0\" max=\"5\"  name=\"rating\" formControlName=\"rating\" ></mat-slider><br>\n          <mat-form-field class=\"full-width\">\n            <textarea matInput formControlName=\"comment\" placeholder=\"Your Comment\" name=\"comment\" type=\"text\" rows=\"12\" required></textarea>\n            <mat-error *ngIf=\"formErrors.comment\">{{formErrors.comment}}</mat-error>\n          </mat-form-field><br>\n          \n          <button mat-button [disabled]=feedcomment.invalid  type=\"submit\" class=\"background-primary\">Submit</button>\n          \n  \n        </p>\n      </form>\n    </mat-list>\n    \n    <div fxFlex [hidden]=\"dish || errMsg\">\n      <mat-spinner></mat-spinner>\n    <h4>Loading.. please wait</h4>\n    </div>\n    <div fxFlex *ngIf=\"errMsg\">\n      <h4>ERROR</h4>\n      <h5>{{errmsg}}</h5>\n    </div>\n         \n        \n\n\n    \n    \n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/dishdetail/dishdetail.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dishdetail/dishdetail.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 95%; }\n"

/***/ }),

/***/ "./src/app/dishdetail/dishdetail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dishdetail/dishdetail.component.ts ***!
  \****************************************************/
/*! exports provided: DishdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishdetailComponent", function() { return DishdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _animation_app_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animation/app.animation */ "./src/app/animation/app.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, route, location, fb, BaseURL) {
        this.dishservice = dishservice;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.BaseURL = BaseURL;
        this.visibility = 'shown';
        this.formErrors = {
            'author': '',
            'comment': ''
        };
        this.validationmessage = {
            'author': {
                'required': 'name is required',
                'minlength': 'min length of name should be atleast 2'
            },
            'comment': {
                'required': 'Comment is required'
            }
        };
        this.createform();
    }
    DishdetailComponent.prototype.createform = function () {
        var _this = this;
        this.feedcomment = this.fb.group({
            author: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)]],
            rating: ['5'],
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.feedcomment.valueChanges.subscribe(function (data) { return _this.onvaluechange(data); });
    };
    DishdetailComponent.prototype.onSubmit = function () {
        var _this = this;
        var cc = (this.feedcomment.value);
        cc.date = String(new Date);
        this.dish.comments.push(cc);
        this.dishcopy = this.dish;
        this.dishservice.putDish(this.dishcopy).subscribe(function (dish) {
            _this.dish = dish;
            _this.dishcopy = dish;
        }, function (errmess) { _this.dish = null; _this.dishcopy = null; _this.errMsg = errmess; });
        this.feedcomment.reset();
        this.createform();
    };
    DishdetailComponent.prototype.onvaluechange = function (data) {
        if (!this.feedcomment) {
            return;
        }
        ;
        var feed = this.feedcomment;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                var control = feed.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationmessage[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getDishIds().subscribe(function (dishIds) { return _this.dishIds = dishIds; }, function (errmsg) { return _this.errMsg = errmsg; });
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            _this.visibility = 'hidden';
            return _this.dishservice.getDish(params['id']);
        }))
            .subscribe(function (dish) { _this.dish = dish; _this.dishcopy = dish; _this.setPrevNext(dish.id); _this.visibility = 'shown'; }, function (errmsg) { return _this.errMsg = errmsg; });
    };
    DishdetailComponent.prototype.setPrevNext = function (dishId) {
        var index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    };
    DishdetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DishdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dishdetail',
            template: __webpack_require__(/*! ./dishdetail.component.html */ "./src/app/dishdetail/dishdetail.component.html"),
            styles: [__webpack_require__(/*! ./dishdetail.component.scss */ "./src/app/dishdetail/dishdetail.component.scss")],
            host: {
                '[@flyinout]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animation_app_animation__WEBPACK_IMPORTED_MODULE_6__["flyinout"])(),
                Object(_animation_app_animation__WEBPACK_IMPORTED_MODULE_6__["expand"])(),
                Object(_animation_app_animation__WEBPACK_IMPORTED_MODULE_6__["visibility"])()
            ]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BaseURL')),
        __metadata("design:paramtypes", [_services_dish_service__WEBPACK_IMPORTED_MODULE_2__["DishService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container footer\" \n    fxLayout=\"row wrap\" \n    fxLayout.lt-md=\"column\" \n    fxLayoutAlign=\"center center\" \n    fxLayoutGap=\"10px\">\n\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n    <div fxLayout=\"row\">\n      <div fxFlex=\"40\" fxFlexOffset=\"20px\">\n        <h4>Links</h4>\n        <mat-list>\n          <mat-list-item><a mat-button>Home</a></mat-list-item>\n          <mat-list-item><a mat-button>About</a></mat-list-item>\n          <mat-list-item><a mat-button>Menu</a></mat-list-item>\n          <mat-list-item><a mat-button>Contact</a></mat-list-item>\n        </mat-list>\n      </div>\n      <div fxFlex=\"55\">\n        <h4>Our Address</h4>\n        <address style=\"text-size: 80%\">\n          121, Clear Water Bay Road<br> Clear Water Bay, Kowloon<br> HONG KONG<br>\n          <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n          <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n          <i class=\"fa fa-envelope\"></i>:\n          <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n        </address>\n      </div>\n    </div>\n  </div>\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"45\">\n    <div style=\"text-align:center\" fxLayoutGap=\"5px\">\n      <a mat-icon-button class=\"btn-google-plus\" href=\"http://google.com/+\"><i class=\"fa fa-google-plus fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-facebook\" href=\"http://www.facebook.com/profile.php?id=\"><i class=\"fa fa-facebook fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-linkedin\" href=\"http://www.linkedin.com/in/\"><i class=\"fa fa-linkedin fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-twitter\" href=\"http://twitter.com/\"><i class=\"fa fa-twitter fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-youtube\" href=\"http://youtube.com/\"><i class=\"fa fa-youtube fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-mail\" href=\"mailto:\"><i class=\"fa fa-envelope-o fa-lg\"></i></a>\n    </div>\n  </div>\n  <div>\n      <p>© Copyright 2018 Ristorante Con Fusion</p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: #D1C4E9;\n  margin: 0px auto;\n  padding: 20px 0px; }\n\n.btn-facebook {\n  color: #fff !important;\n  background-color: #3b5998 !important; }\n\n.btn-google-plus {\n  color: #fff !important;\n  background-color: #dd4b39 !important; }\n\n.btn-youtube {\n  color: #fff !important;\n  background-color: #ff4b39 !important; }\n\n.btn-linkedin {\n  color: #fff !important;\n  background-color: #007bb6 !important; }\n\n.btn-twitter {\n  color: #fff !important;\n  background-color: #55acee !important; }\n\n.btn-mail {\n  color: #fff !important;\n  background-color: #512DA8 !important; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span><img src=\"/assets/images/logo.png\" height=30 width=41></span>\n  <a mat-button [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" ><span class=\"fa fa-home fa-lg\"></span> Home</a>\n  <a mat-button [routerLink]=\"['/aboutus']\" routerLinkActive=\"router-link-active\" ><span class=\"fa fa-info fa-lg\"></span> About</a>\n  <a mat-button [routerLink]=\"['/menu']\" routerLinkActive=\"router-link-active\" ><span class=\"fa fa-list fa-lg\"></span> Menu</a>\n  <a mat-button [routerLink]=\"['/contactus']\" routerLinkActive=\"router-link-active\" ><span class=\"fa fa-address-card fa-lg\"></span> Contact</a>\n  <span class=\"flex-spacer\"></span>\n  <a mat-button (click)=\"openloginform()\"><span class=\"fa fa-sign-in fa-lg\">Login</span></a>\n</mat-toolbar>\n\n<div class=\"container jumbotron\"\n    fxLayout=\"row\"\n    fxLayout.sm=\"column\" \n    fxLayout.xs=\"column\" \n    fxLayoutAlign.xs=\"start center\"\n    fxLayoutAlign.sm=\"start center\" \n    fxLayoutAlign.gt-sm=\"center center\" \n    fxLayoutGap=\"10px\">\n\n  <div fxFlex fxFlex.gt-sm=\"50%\">\n    <h1>Ristorante Con Fusion</h1>\n    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations\n      will tickle your culinary senses!</p>\n  </div>\n  <div fxFlex fxFlex.gt-sm=\"20%\">\n    <img src=\"/assets/images/logo.png\" alt=\"Logo\">\n  </div>\n  <div fxFlex></div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #f82a2a;\n  color: floralwhite;\n  min-height: 150px; }\n\n.router-link-active {\n  background: #f82a2a; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openloginform = function () {
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], { width: '500px', height: '450px' });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     fxLayout=\"row\"\n     fxLayout.sm=\"column\"\n     fxLayout.xs=\"column\"\n     fxLayoutAlign.gt-md=\"space-around center\"\n     fxLayoutGap=\"10px\">\n\n<mat-card *ngIf=\"dish\" fxFlex [@expand]=\"expand\">\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>\n      <h3>{{dish.name | uppercase}}</h3>\n    </mat-card-title>\n  </mat-card-header>\n  <img mat-card-image src=\"{{BaseURL+ dish.image}}\" alt={{dish.name}}>\n  <mat-card-content>\n    <p>{{dish.description}}\n    </p>\n  </mat-card-content>\n</mat-card>\n<div fxFlex [hidden]=\"dish || disherrMsg\">\n  <mat-spinner></mat-spinner>\n<h4>Loading.. please wait</h4>\n</div>\n\n<mat-card fxFlex *ngIf=\"disherrMsg\" [@expand]=\"expand\">\n<h4>ERROR</h4>\n<h5>{{disherrMsg}}</h5>\n</mat-card>\n\n<mat-card *ngIf=\"promotion\" fxFlex>\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>\n      <h3>{{promotion.name | uppercase}}</h3>\n    </mat-card-title>\n  </mat-card-header>\n  <img mat-card-image src=\"{{BaseURL+promotion.image}}\" alt={{promotion.name}}>\n  <mat-card-content>\n    <p>{{promotion.description}}\n    </p>\n  </mat-card-content>\n</mat-card>\n<div fxFlex [hidden]=\"promotion || promoerrMsg\">\n  <mat-spinner></mat-spinner>\n<h4>Loading.. please wait</h4>\n</div>\n<mat-card fxFlex *ngIf=\"promoerrMsg\">\n  <h4>ERROR</h4>\n  <h5>{{promoerrMsg}}</h5>\n</mat-card>\n\n<mat-card *ngIf=\"leader\" fxFlex [@expand]=\"expand\">\n  <mat-card-header>\n    <mat-card-title>\n      <h3>{{leader.name}}</h3>\n    </mat-card-title>\n  </mat-card-header>\n  <img mat-card-image src=\"{{BaseURL +leader.image}}\" alt={{leader.name}}>\n  <mat-card-content>\n    <p>\n      {{leader.description}}\n    </p>\n  </mat-card-content>\n</mat-card>\n<div fxFlex [hidden]=\"leader || leadererrMsg\">\n  <mat-spinner></mat-spinner>\n<h4>Loading.. please wait</h4>\n</div>\n<div fxFlex *ngIf=\"leadererrMsg\">\n  <h4>ERROR</h4>\n  <h5>{{leadererrMsg}}</h5>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _services_promotion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/promotion.service */ "./src/app/services/promotion.service.ts");
/* harmony import */ var _services_leaders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/leaders.service */ "./src/app/services/leaders.service.ts");
/* harmony import */ var _animation_app_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animation/app.animation */ "./src/app/animation/app.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(leaderservice, dishservice, promotionservice, BaseURL) {
        this.leaderservice = leaderservice;
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.BaseURL = BaseURL;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmsg) { return _this.disherrMsg = errmsg; });
        this.leaderservice.getFeaturedLeader()
            .subscribe(function (Leader) { return _this.leader = Leader; }, function (errmsg) { return _this.leadererrMsg = errmsg; });
        this.promotionservice.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmsg) { return _this.promoerrMsg = errmsg; });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
            host: {
                '[@flyinout]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animation_app_animation__WEBPACK_IMPORTED_MODULE_4__["flyinout"])(), Object(_animation_app_animation__WEBPACK_IMPORTED_MODULE_4__["expand"])()
            ]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BaseURL')),
        __metadata("design:paramtypes", [_services_leaders_service__WEBPACK_IMPORTED_MODULE_3__["LeadersService"], _services_dish_service__WEBPACK_IMPORTED_MODULE_1__["DishService"], _services_promotion_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"], Object])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  Login\n  <span class=\"flex-spacer\"></span>\n  <button mat-button mat-dialog-close>&times;</button>\n</mat-toolbar>\n\n\n<form novalidate #loginForm=\"ngForm\"  (ngSubmit)=\"onSubmit()\">\n  <p>{{user|json}}</p>\n\n  <mat-dialog-content>\n    <p>\n      <mat-form-field>\n        <input matInput name=\"username\" placeholder=\"Username\" [(ngModel)]=\"user.username\" type=\"text\" #username=\"ngModel\" required>\n        <mat-error *ngIf=\"username.errors?.required\">Username is required</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput name=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\" type=\"password\" #password=\"ngModel\" required>\n        <mat-error *ngIf=\"password.errors?.required\">Password is required</mat-error>\n      </mat-form-field>\n      <mat-checkbox [(ngModel)]=\"user.remember\" name=\"remember\">Remember me</mat-checkbox>\n    </p>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button type=\"submit\" mat-button class=\"background-primary text-floral-white\" [disabled]=\"loginForm.form.invalid\">Login</button>\n  </mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialogref) {
        this.dialogref = dialogref;
        this.user = {
            username: '',
            password: '',
            remember: false
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log('User:', this.user);
        this.dialogref.close();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" \n  fxLayout=\"column\"\n  fxLayoutGap=\"10px\">\n\n\n  <div fxFlex>\n    <div>\n    <h1>\n      Menu\n    </h1>\n    \n    \n  </div>\n\n  </div>\n\n  <div fxFlex *ngIf=\"dishes\" [@expand]=\"expand\">\n  <mat-grid-list cols=\"2\" rowHeight=\"200px\">\n    <mat-grid-tile *ngFor=\"let dish of dishes\" [routerLink]=\"['/dishdetail',dish.id]\" appHighlight >\n      <img height=\"200px\" src=\"{{BaseURL+ dish.image}}\" alt={{dish.name}}>\n      <section>\n      <mat-grid-tile-footer>\n\n        <h1 matLine>{{dish.name | uppercase }}</h1>\n        <mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n\n        <div class=\"example-button-row\">\n          <button mat-mini-fab aria-label=\"Example icon-button with a heart icon\">\n            <mat-icon>favorite</mat-icon>\n          </button>\n\n        </div>\n        \n      </mat-grid-tile-footer>\n      \n      </section>\n      \n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n<div fxFlex [hidden]=\"dishes || errMsg\">\n  <mat-spinner></mat-spinner>\n<h4>Loading.. please wait</h4>\n</div>\n<div fxFlex *ngIf=\"errMsg\">\n  <h3>\n    ERROR\n  </h3>\n  <h4>{{errMsg}}</h4>\n</div>\n\n<!-- <div fxFlex *ngIf=\"selectedDish\">\n<mat-card >\n  <mat-card-header>\n    <mat-card-title>\n    <h1>{{selectedDish.name | uppercase}}</h1>\n  </mat-card-title>\n  </mat-card-header>\n  <img mat-card-image src=\"{{selectedDish.image}}\" alt=\"{{selectedDish.name}}\">\n\n  <mat-card-content>\n    <p>\n      {{selectedDish.description}}\n    </p>\n  </mat-card-content>\n  <mat-card-actions fxLayoutGap=\"20 px\">\n    <button mat-icon-button color=\"warn\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n    <button mat-flat-button color=\"accent\">Share</button>\n  </mat-card-actions>\n\n</mat-card>\n\n</div> -->\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _animation_app_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation/app.animation */ "./src/app/animation/app.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// import {DISHES} from '../shared/dishes';


var MenuComponent = /** @class */ (function () {
    function MenuComponent(dishService, BaseURL) {
        this.dishService = dishService;
        this.BaseURL = BaseURL;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmsg) { return _this.errMsg = errmsg; });
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")],
            host: {
                '[@flyinout]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animation_app_animation__WEBPACK_IMPORTED_MODULE_2__["flyinout"])(),
                Object(_animation_app_animation__WEBPACK_IMPORTED_MODULE_2__["expand"])()
            ]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BaseURL')),
        __metadata("design:paramtypes", [_services_dish_service__WEBPACK_IMPORTED_MODULE_1__["DishService"], Object])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/services/dish.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/dish.service.ts ***!
  \******************************************/
/*! exports provided: DishService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishService", function() { return DishService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _services_process_http_msg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/process-http-msg.service */ "./src/app/services/process-http-msg.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DishService = /** @class */ (function () {
    function DishService(http, processHttpMsgService) {
        this.http = http;
        this.processHttpMsgService = processHttpMsgService;
    }
    DishService.prototype.getDishes = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'dishes')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHttpMsgService.handleError));
    };
    DishService.prototype.getDishIds = function () {
        return this.getDishes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (dishes) { return dishes.map(function (dish) { return dish.id; }); })).pipe(function (error) { return error; });
    };
    // getDish(id: string):Dish{
    //   var i;
    //   for(i=0;i<DISHES.length;i++)
    //   {
    //     if(DISHES['id'][0]==id){
    //       return DISHES[i];
    //     }
    //   }
    //   return DISHES[0];
    // }
    DishService.prototype.getDish = function (id) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'dishes/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHttpMsgService.handleError));
    };
    DishService.prototype.getFeaturedDish = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'dishes?featured=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (dishes) { return dishes[0]; })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHttpMsgService.handleError));
    };
    DishService.prototype.putDish = function (dish) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'dishes/' + dish.id, dish, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHttpMsgService.handleError));
    };
    DishService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_process_http_msg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHttpMsgService"]])
    ], DishService);
    return DishService;
}());



/***/ }),

/***/ "./src/app/services/feedback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_process_http_msg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/process-http-msg.service */ "./src/app/services/process-http-msg.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackService = /** @class */ (function () {
    function FeedbackService(http, processHttpMsgService) {
        this.http = http;
        this.processHttpMsgService = processHttpMsgService;
    }
    FeedbackService.prototype.getfeedback = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'feedback/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.processHttpMsgService.handleError));
    };
    FeedbackService.prototype.submitFeedback = function (feedback) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'feedback', feedback, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.processHttpMsgService.handleError));
    };
    FeedbackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_process_http_msg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHttpMsgService"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/services/leaders.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/leaders.service.ts ***!
  \*********************************************/
/*! exports provided: LeadersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadersService", function() { return LeadersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_process_http_msg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/process-http-msg.service */ "./src/app/services/process-http-msg.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LeadersService = /** @class */ (function () {
    function LeadersService(http, processHttpMsgService) {
        this.http = http;
        this.processHttpMsgService = processHttpMsgService;
    }
    LeadersService.prototype.getLeaders = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'leadership').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHttpMsgService.handleError));
    };
    LeadersService.prototype.getLeader = function (id) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'leadership/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHttpMsgService.handleError));
    };
    LeadersService.prototype.getFeaturedLeader = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'leadership?featured=true').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (Leadership) { return Leadership[0]; })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHttpMsgService.handleError));
        ;
    };
    LeadersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_process_http_msg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHttpMsgService"]])
    ], LeadersService);
    return LeadersService;
}());



/***/ }),

/***/ "./src/app/services/process-http-msg.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/process-http-msg.service.ts ***!
  \******************************************************/
/*! exports provided: ProcessHttpMsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessHttpMsgService", function() { return ProcessHttpMsgService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcessHttpMsgService = /** @class */ (function () {
    function ProcessHttpMsgService() {
    }
    ProcessHttpMsgService.prototype.handleError = function (error) {
        var errmsg;
        if (error.error instanceof ErrorEvent) {
            errmsg = error.error.message;
        }
        else {
            errmsg = error.status + "-" + (error.statusText || '') + " " + error.error;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errmsg);
    };
    ProcessHttpMsgService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProcessHttpMsgService);
    return ProcessHttpMsgService;
}());



/***/ }),

/***/ "./src/app/services/promotion.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/promotion.service.ts ***!
  \***********************************************/
/*! exports provided: PromotionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionService", function() { return PromotionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_process_http_msg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/process-http-msg.service */ "./src/app/services/process-http-msg.service.ts");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





;

var PromotionService = /** @class */ (function () {
    function PromotionService(http, processHttpMsgService) {
        this.http = http;
        this.processHttpMsgService = processHttpMsgService;
    }
    PromotionService.prototype.getPromotions = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'promotions').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHttpMsgService.handleError));
    };
    PromotionService.prototype.getPromotion = function (id) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'promotions' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHttpMsgService.handleError));
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'promotions?featured=true').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (abc) { return abc[0]; })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHttpMsgService.handleError));
    };
    PromotionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_process_http_msg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHttpMsgService"]])
    ], PromotionService);
    return PromotionService;
}());



/***/ }),

/***/ "./src/app/shared/baseurl.ts":
/*!***********************************!*\
  !*** ./src/app/shared/baseurl.ts ***!
  \***********************************/
/*! exports provided: baseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
var baseURL = 'http://localhost:3000/';


/***/ }),

/***/ "./src/app/shared/feedback.ts":
/*!************************************!*\
  !*** ./src/app/shared/feedback.ts ***!
  \************************************/
/*! exports provided: Feedback, ContactType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactType", function() { return ContactType; });
var Feedback = /** @class */ (function () {
    function Feedback() {
    }
    return Feedback;
}());

var ContactType = ['None', 'Tel', 'Email'];


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Siddharth\Documents\Coursera\Angular\conFusion\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map