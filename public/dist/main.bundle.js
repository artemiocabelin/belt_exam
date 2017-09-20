webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/answer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
var Answer = (function () {
    function Answer(_id, answer, details, creator, likes, _question, created_at, updated_at) {
        if (_id === void 0) { _id = null; }
        if (answer === void 0) { answer = ''; }
        if (details === void 0) { details = null; }
        if (creator === void 0) { creator = ''; }
        if (likes === void 0) { likes = []; }
        if (_question === void 0) { _question = ''; }
        if (created_at === void 0) { created_at = new Date(); }
        if (updated_at === void 0) { updated_at = new Date(); }
        this._id = _id;
        this.answer = answer;
        this.details = details;
        this.creator = creator;
        this.likes = likes;
        this._question = _question;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    return Answer;
}());

//# sourceMappingURL=answer.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__new_answer_new_answer_component__ = __webpack_require__("../../../../../src/app/new-answer/new-answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_answer_question_answer_component__ = __webpack_require__("../../../../../src/app/question-answer/question-answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'index', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__index_index_component__["a" /* IndexComponent */] },
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'new_question', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__new_question_new_question_component__["a" /* NewQuestionComponent */] },
    { path: 'question/:id', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_1__question_answer_question_answer_component__["a" /* QuestionAnswerComponent */] },
    { path: 'question/:id/new_answer', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_0__new_answer_new_answer_component__["a" /* NewAnswerComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_service__ = __webpack_require__("../../../../../src/app/public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__question_answer_question_answer_component__ = __webpack_require__("../../../../../src/app/question-answer/question-answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new_answer_new_answer_component__ = __webpack_require__("../../../../../src/app/new-answer/new-answer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // <-- Import FormsModule
 // <-- Import HttpModule







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__new_question_new_question_component__["a" /* NewQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__question_answer_question_answer_component__["a" /* QuestionAnswerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__new_answer_new_answer_component__["a" /* NewAnswerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__public_service__["a" /* PublicService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Hi {{currentUser}}!</h1>\n<a [routerLink]=\"['/index']\">Logout</a>\n\n<a [routerLink]=\"['/new_question']\">Add a Question</a>\n\n<form>\n  <label>Search: \n    <input type=\"text\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"searchVal\" (keyup)=\"searchQuestions()\" />\n  </label>\n</form>\n\n<table *ngIf=\"hasNotUsedSearch\">\n  <tr>\n    <th>Question</th>\n    <th>Answer</th>\n    <th>Action</th>\n  </tr>\n  <tr *ngFor=\"let question of questions\">\n    <td>{{question.question}}</td>\n    <td>{{question.answers.length}}</td>\n    <td>\n      <a [routerLink]=\"['/question', question._id]\">Show</a>\n      <a [routerLink]=\"['/question', question._id,'new_answer']\">Answer</a>\n    </td>\n  </tr>\n</table>\n<table *ngIf=\"!hasNotUsedSearch\">\n  <tr>\n    <th>Question</th>\n    <th>Answer</th>\n    <th>Action</th>\n  </tr>\n  <tr *ngFor=\"let question of showQuestions\">\n    <td>{{question.question}}</td>\n    <td>{{question.answers.length}}</td>\n    <td>\n      <a [routerLink]=\"['/question', question._id]\">Show</a>\n      <a [routerLink]=\"['/question', question._id,'new_answer']\">Answer</a>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_service__ = __webpack_require__("../../../../../src/app/public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(_publicService, _router) {
        this._publicService = _publicService;
        this._router = _router;
        this.questions = [];
        this.showQuestions = [];
        this.searchVal = '';
        this.hasNotUsedSearch = true;
        this.checkUserInSession();
        this.getCurrentUser();
        this.getAllQuestions();
        this.showQuestions = this.questions;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this._publicService.getCurrentUser()
            .then(function (data) {
            console.log('controller getCurrentUser then');
            console.log(data);
            _this.currentUser = data;
        })
            .catch(function (error) {
            console.log('controller getCurrentUser error');
        });
    };
    DashboardComponent.prototype.checkUserInSession = function () {
        var _this = this;
        this._publicService.checkIfUserInSession()
            .then(function (data) {
            console.log('got then response');
            console.log(data);
            if (!data) {
                _this._router.navigate(['index']);
            }
        })
            .catch(function (error) {
            console.log('got catch response');
            console.log(error);
        });
    };
    DashboardComponent.prototype.getAllQuestions = function () {
        var _this = this;
        this._publicService.getAllQuestions()
            .then(function (data) {
            console.log('got then response');
            console.log(data);
            _this.questions = data;
        })
            .catch(function (error) {
            console.log('got catch response');
            console.log(error);
        });
    };
    DashboardComponent.prototype.searchQuestions = function () {
        var _this = this;
        this.hasNotUsedSearch = false;
        console.log('this is happening');
        console.log(this.searchVal);
        this.showQuestions = this.questions.filter(function (index) {
            return index.question.toLowerCase().includes(_this.searchVal.toLowerCase());
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__public_service__["a" /* PublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__public_service__["a" /* PublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit()\">\n<input \n    type=\"text\" \n    name=\"username\"\n    [(ngModel)] = \"user.name\"\n    #username = ngModel\n    />\n    <input type=\"submit\" value=\"Login\" />\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_service__ = __webpack_require__("../../../../../src/app/public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = (function () {
    function IndexComponent(_publicService, _router) {
        this._publicService = _publicService;
        this._router = _router;
        this.user = { name: '' };
        this.logoutUser();
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.onSubmit = function () {
        var _this = this;
        this._publicService.saveNameToSession(this.user)
            .then(function (data) {
            console.log('controller onSubmit then');
            console.log(data);
            _this.user = { name: '' };
            _this._router.navigate(['']);
        })
            .catch(function (error) {
            console.log('controller onSubmit error');
        });
    };
    IndexComponent.prototype.logoutUser = function () {
        this._publicService.logoutUser()
            .then(function (data) {
            console.log('controller logout then');
            console.log(data);
        })
            .catch(function (error) {
            console.log('controller logout error');
        });
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index/index.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__public_service__["a" /* PublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__public_service__["a" /* PublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], IndexComponent);

var _a, _b;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-answer/new-answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-answer/new-answer.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/index']\">Logout</a>\n\n<a [routerLink]=\"['/']\">Home</a>\n<a [routerLink]=\"['/question', question._id]\">Go Back to Question</a>\n\n<h1>{{question.question}}</h1>\n<p>{{question.description}}</p>\n<form (submit)=\"submitAnswer(question._id)\">\n  <label>Your Answer: \n    <input type=\"text\" name=\"answer\" required minlength=\"5\" [(ngModel)] = \"newAnswer.answer\" #newr = \"ngModel\" />\n  </label>\n  <label>Supporting Details for your answer (optional): \n    <input type=\"text\" name=\"detail\" [(ngModel)] = \"newAnswer.details\" #newDetail = \"ngModel\"/>\n  </label>\n  <input type=\"submit\" value=\"Submit\" [disabled] = \"newr.invalid\" />\n  <a [routerLink]=\"['/']\">Cancel</a>\n</form>\n\n<div style=\"color: red;\" *ngIf=\"!newr.valid && (newr.dirty || newr.touched)\">\n  <p *ngIf=\"newr.errors.required\">Answer is Required</p> \n  <p *ngIf=\"newr.errors.minlength\">Answer must be at least 5 characters long</p> \n</div>"

/***/ }),

/***/ "../../../../../src/app/new-answer/new-answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__answer__ = __webpack_require__("../../../../../src/app/answer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_service__ = __webpack_require__("../../../../../src/app/public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewAnswerComponent = (function () {
    function NewAnswerComponent(_publicService, _route, _router) {
        this._publicService = _publicService;
        this._route = _route;
        this._router = _router;
        this.newAnswer = new __WEBPACK_IMPORTED_MODULE_0__answer__["a" /* Answer */]();
    }
    NewAnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._route.paramMap
            .switchMap(function (params) {
            console.log('got params id: ' + params.get('id'));
            return _this._publicService.retrieveQuestionById(params.get('id'));
        }).subscribe(function (question) {
            _this.question = question;
            console.log(_this.question);
        });
    };
    NewAnswerComponent.prototype.submitAnswer = function (question_id) {
        var _this = this;
        this.newAnswer._question = question_id;
        console.log(this.newAnswer);
        this._publicService.addAnswerToQuestionById(this.newAnswer)
            .then(function (data) {
            console.log('controller addAnswerToQuestioById then');
            console.log(data);
            _this.newAnswer = new __WEBPACK_IMPORTED_MODULE_0__answer__["a" /* Answer */]();
            _this._router.navigate(['']);
        })
            .catch(function (error) {
            console.log('controller addAnswerToQuestioById error');
            console.log(error);
        });
    };
    return NewAnswerComponent;
}());
NewAnswerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-new-answer',
        template: __webpack_require__("../../../../../src/app/new-answer/new-answer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-answer/new-answer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__public_service__["a" /* PublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__public_service__["a" /* PublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NewAnswerComponent);

var _a, _b, _c;
//# sourceMappingURL=new-answer.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">Home</a>\n\n<a [routerLink]=\"['/index']\">Logout</a>\n\n<h1>New Question</h1>\n<form (submit)=\"saveQuestion()\">\n  <label>Question: \n    <input type=\"text\" name=\"question\" required minlength=\"10\" [(ngModel)] = \"newQuestion.question\" #newquestion = \"ngModel\" />\n  </label>\n  <p></p>\n  <label>Details:\n    <input type=\"text\" name=\"description\" [(ngModel)] = \"newQuestion.description\" #question = \"ngModel\" />\n  </label>\n  <input type=\"submit\" value=\"Submit\" [disabled] = \"newquestion.invalid\" />\n  <a [routerLink]=\"['/']\">Cancel</a>\n</form>\n<div style=\"color: red;\" *ngIf=\"!newquestion.valid && (newquestion.dirty || newquestion.touched)\">\n  <p *ngIf=\"newquestion.errors.required\">Question is Required</p> \n  <p *ngIf=\"newquestion.errors.minlength\">Question must be at least 10 characters long</p> \n</div>"

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__("../../../../../src/app/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_service__ = __webpack_require__("../../../../../src/app/public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewQuestionComponent = (function () {
    function NewQuestionComponent(_publicService, _router) {
        this._publicService = _publicService;
        this._router = _router;
        this.newQuestion = new __WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]();
    }
    NewQuestionComponent.prototype.ngOnInit = function () {
    };
    NewQuestionComponent.prototype.saveQuestion = function () {
        var _this = this;
        console.log('controller saving question');
        this._publicService.saveQuestion(this.newQuestion)
            .then(function (data) {
            console.log('controller saveQuestion then');
            console.log(data);
            _this.newQuestion = new __WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]();
            _this._router.navigate(['']);
        })
            .catch(function (error) {
            console.log('controller saveQuestion error');
            console.log(error);
        });
    };
    return NewQuestionComponent;
}());
NewQuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-new-question',
        template: __webpack_require__("../../../../../src/app/new-question/new-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-question/new-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__public_service__["a" /* PublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__public_service__["a" /* PublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NewQuestionComponent);

var _a, _b;
//# sourceMappingURL=new-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/public.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicService = (function () {
    function PublicService(_http) {
        this._http = _http;
    }
    PublicService.prototype.getAllQuestions = function () {
        return this._http.get('/api/questions')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.saveNameToSession = function (usernameData) {
        return this._http.post('/api/questions/user', usernameData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.getCurrentUser = function () {
        return this._http.get('/api/questions/user/get')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.checkIfUserInSession = function () {
        console.log('service getting if user in session');
        return this._http.get('api/questions/checksession')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.logoutUser = function () {
        console.log('service loggin user out');
        return this._http.get('/api/questions/logout')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.saveQuestion = function (questionData) {
        console.log('service saving question');
        console.log(questionData);
        return this._http.post('/api/questions/add', questionData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.retrieveQuestionById = function (questionId) {
        console.log('service retrieving question by id');
        return this._http.get('/api/questions/' + questionId)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.addAnswerToQuestionById = function (questionIdData) {
        console.log('service retrieving question by id');
        return this._http.post('/api/questions/answer', questionIdData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PublicService.prototype.incrementLike = function (answerIdData) {
        console.log('service retrieving question by id');
        return this._http.post('/api/questions/like', answerIdData)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return PublicService;
}());
PublicService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PublicService);

var _a;
//# sourceMappingURL=public.service.js.map

/***/ }),

/***/ "../../../../../src/app/question-answer/question-answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-answer/question-answer.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/index']\">Logout</a>\n\n<a [routerLink]=\"['/']\">Home</a>\n<a [routerLink]=\"['/question', question._id, 'new_answer']\">Answer this Question</a>\n\n<h1>{{question.question}}</h1>\n<p>{{question.description}}</p>\n\n<div *ngFor=\"let answer of sortedAnswers, let idx=index\">\n  <p>{{answer.creator}}</p>\n  <p>{{answer.answer}}</p>\n  <p>{{answer.details}}</p>\n  <p>{{answer.likes}} likes</p>\n  <button (click)=\"addLike(answer._id)\">Like!</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/question-answer/question-answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionAnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question__ = __webpack_require__("../../../../../src/app/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_service__ = __webpack_require__("../../../../../src/app/public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionAnswerComponent = (function () {
    function QuestionAnswerComponent(_publicService, _route) {
        this._publicService = _publicService;
        this._route = _route;
        this.question = new __WEBPACK_IMPORTED_MODULE_0__question__["a" /* Question */];
        this.sortedAnswers = [];
    }
    QuestionAnswerComponent.prototype.ngOnInit = function () {
        this.subscribeQA();
    };
    QuestionAnswerComponent.prototype.addLike = function (answer_id) {
        var _this = this;
        console.log('adding like');
        var a_id = {
            aid: answer_id
        };
        this._publicService.incrementLike(a_id)
            .then(function (data) {
            console.log('controller addLike then');
            console.log(data);
            _this.subscribeQA();
        })
            .catch(function (error) {
            console.log('controller addLike error');
            console.log(error);
        });
    };
    QuestionAnswerComponent.prototype.subscribeQA = function () {
        var _this = this;
        this.subscription = this._route.paramMap
            .switchMap(function (params) {
            console.log('got params id: ' + params.get('id'));
            return _this._publicService.retrieveQuestionById(params.get('id'));
        }).subscribe(function (question) {
            _this.question = question;
            console.log(_this.question);
            if (_this.question.answers.length > 0) {
                _this.sortedAnswers = question.answers.sort(function (a, b) {
                    return b.likes - a.likes;
                });
            }
        });
    };
    return QuestionAnswerComponent;
}());
QuestionAnswerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-question-answer',
        template: __webpack_require__("../../../../../src/app/question-answer/question-answer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question-answer/question-answer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__public_service__["a" /* PublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__public_service__["a" /* PublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], QuestionAnswerComponent);

var _a, _b;
//# sourceMappingURL=question-answer.component.js.map

/***/ }),

/***/ "../../../../../src/app/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question(id, question, description, creator, answers, created_at, updated_at) {
        if (id === void 0) { id = null; }
        if (question === void 0) { question = ''; }
        if (description === void 0) { description = null; }
        if (creator === void 0) { creator = ''; }
        if (answers === void 0) { answers = []; }
        if (created_at === void 0) { created_at = new Date(); }
        if (updated_at === void 0) { updated_at = new Date(); }
        this.id = id;
        this.question = question;
        this.description = description;
        this.creator = creator;
        this.answers = answers;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    return Question;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map