System.register(['angular2/core', './components/navigation.component', './components/firstScreen.component', './components/secondScreen.component', './components/thirdScreen.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, navigation_component_1, firstScreen_component_1, secondScreen_component_1, thirdScreen_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            },
            function (firstScreen_component_1_1) {
                firstScreen_component_1 = firstScreen_component_1_1;
            },
            function (secondScreen_component_1_1) {
                secondScreen_component_1 = secondScreen_component_1_1;
            },
            function (thirdScreen_component_1_1) {
                thirdScreen_component_1 = thirdScreen_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'portfolio',
                        template: "\n        <navigation></navigation>\n        <first-screen></first-screen>\n        <second-screen></second-screen>\n        <third-screen></third-screen>\n    ",
                        directives: [
                            navigation_component_1.NavigationComponent,
                            firstScreen_component_1.FirstScreenComponent,
                            secondScreen_component_1.SecondScreenComponent,
                            thirdScreen_component_1.ThirdScreenComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map