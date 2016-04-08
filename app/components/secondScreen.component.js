System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Work, SecondScreenComponent, WORKS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Work = (function () {
                function Work() {
                }
                return Work;
            }());
            exports_1("Work", Work);
            SecondScreenComponent = (function () {
                function SecondScreenComponent() {
                    this.works = WORKS;
                }
                SecondScreenComponent.prototype.ngOnInit = function () {
                    this.workDetailsHandler();
                };
                ;
                SecondScreenComponent.prototype.workDetailsHandler = function () {
                    var $works = $('#portfolio').find('.item');
                    $works.click(function (e) {
                        e.preventDefault();
                        var $el = $(this);
                        var id = $el.data('id');
                    });
                };
                SecondScreenComponent = __decorate([
                    core_1.Component({
                        selector: 'second-screen',
                        templateUrl: 'app/templates/second-screen.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SecondScreenComponent);
                return SecondScreenComponent;
            }());
            exports_1("SecondScreenComponent", SecondScreenComponent);
            WORKS = [
                { id: 1, imageUrl: 'img/portfolio/1.jpg', workType: 'Frontend, Backend(Python, Django)', siteName: 'Cyber Namba', siteUrl: 'http://cybernamba.com/' },
                { id: 2, imageUrl: 'img/portfolio/2.jpg', workType: 'Frontend, Backend(Flynax Classifieds)', siteName: 'Все Для Вас', siteUrl: 'http://xn--80adahe1b1bf7j.xn--p1ai/' },
                { id: 4, imageUrl: 'img/portfolio/4.jpg', workType: 'Frontend, Backend(WordPress)', siteName: 'Athletic', siteUrl: 'http://atletic.kz/' },
                { id: 5, imageUrl: 'img/portfolio/5.jpg', workType: 'Frontend, Backend(WordPress)', siteName: 'Namba Express', siteUrl: 'http://nambaexpress.kg/' },
                { id: 6, imageUrl: 'img/portfolio/6.jpg', workType: 'Frontend, Backend(WordPress)', siteName: 'Global Business Forum', siteUrl: 'http://gbf.adline.kz/' },
                { id: 6, imageUrl: 'img/portfolio/6.jpg', workType: 'Frontend, Backend(Python, Django)', siteName: 'Charity Award Site', siteUrl: 'http://delaidobro.tv7.kz/' },
                { id: 6, imageUrl: 'img/portfolio/6.jpg', workType: 'Frontend, Backend(Python, Django)', siteName: 'Official Mul-T-Lock Agent', siteUrl: 'http://vzlomunet.kz/' },
            ];
        }
    }
});
//# sourceMappingURL=secondScreen.component.js.map