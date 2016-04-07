System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FirstScreenComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FirstScreenComponent = (function () {
                function FirstScreenComponent() {
                    this.title = 'Nick Omen';
                    this.mainText = "Let's do hot stuff together!";
                }
                FirstScreenComponent = __decorate([
                    core_1.Component({
                        selector: 'first-screen',
                        templateUrl: 'app/templates/first-screen.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FirstScreenComponent);
                return FirstScreenComponent;
            })();
            exports_1("FirstScreenComponent", FirstScreenComponent);
        }
    }
});
//# sourceMappingURL=firstScreen.component.js.map