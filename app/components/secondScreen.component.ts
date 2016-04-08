import {Component} from 'angular2/core';

export class Work {
    id: number;
    imageUrl: string;
    workType: string;
    siteName: string;
    siteUrl: string;
}

@Component({
    selector: 'second-screen',
    templateUrl: 'app/templates/second-screen.html'
})

export class SecondScreenComponent {
    works = WORKS;

    ngOnInit() {
        this.workDetailsHandler();
    };

    workDetailsHandler() {
        var $works = $('#portfolio').find('.item');

        $works.click(function(e) {
            e.preventDefault();
            var $el = $(this);
            var id = $el.data('id');
        });
    }
}

var WORKS: Work[] = [
    {id: 1, imageUrl: 'img/portfolio/1.jpg', workType: 'Frontend, Backend(Python, Django)', siteName: 'Cyber Namba', siteUrl: 'http://cybernamba.com/'},
    {id: 2, imageUrl: 'img/portfolio/2.jpg', workType: 'Frontend, Backend(Flynax Classifieds)', siteName: 'Все Для Вас', siteUrl: 'http://xn--80adahe1b1bf7j.xn--p1ai/'},
    {id: 4, imageUrl: 'img/portfolio/4.jpg', workType: 'Frontend, Backend(WordPress)', siteName: 'Athletic', siteUrl: 'http://atletic.kz/'},
    {id: 5, imageUrl: 'img/portfolio/5.jpg', workType: 'Frontend, Backend(WordPress)', siteName: 'Namba Express', siteUrl: 'http://nambaexpress.kg/'},
    {id: 6, imageUrl: 'img/portfolio/6.jpg', workType: 'Frontend, Backend(WordPress)', siteName: 'Global Business Forum', siteUrl: 'http://gbf.adline.kz/'},
    {id: 6, imageUrl: 'img/portfolio/6.jpg', workType: 'Frontend, Backend(Python, Django)', siteName: 'Charity Award Site', siteUrl: 'http://delaidobro.tv7.kz/'},
    {id: 6, imageUrl: 'img/portfolio/6.jpg', workType: 'Frontend, Backend(Python, Django)', siteName: 'Official Mul-T-Lock Agent', siteUrl: 'http://vzlomunet.kz/'},
];