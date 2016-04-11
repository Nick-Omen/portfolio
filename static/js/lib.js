var works = [
    {
        id: 1,
        imageUrl: 'img/portfolio/1.jpg',
        workType: 'Frontend, Backend',
        siteName: 'Cyber Namba',
        siteUrl: 'http://cybernamba.com/',
        description: 'Big description here',
        shortDescription: 'short description here',
        technologies: 'tech i use'
    },
    {
        id: 2,
        imageUrl: 'img/portfolio/4.jpg',
        workType: 'Frontend, Backend',
        siteName: 'Athletic',
        siteUrl: 'http://atletic.kz/',
        description: 'Big description here',
        shortDescription: 'short description here',
        technologies: 'tech i use'
    },
    {
        id: 3,
        imageUrl: 'img/portfolio/5.jpg',
        workType: 'Frontend, Backend',
        siteName: 'Namba Express',
        siteUrl: 'http://nambaexpress.kg/',
        description: 'Big description here',
        shortDescription: 'short description here',
        technologies: 'tech i use'
    },
    {
        id: 4,
        imageUrl: 'img/portfolio/6.jpg',
        workType: 'Frontend, Backend',
        siteName: 'Global Business Forum',
        siteUrl: 'http://gbf.adline.kz/',
        description: 'Big description here',
        shortDescription: 'short description here',
        technologies: 'tech i use'
    },
    {
        id: 5,
        imageUrl: 'img/portfolio/6.jpg',
        workType: 'Frontend, Backend',
        siteName: 'Charity Award Site',
        siteUrl: 'http://delaidobro.tv7.kz/',
        description: 'Big description here',
        shortDescription: 'short description here',
        technologies: 'tech i use'
    },
    {
        id: 6,
        imageUrl: 'img/portfolio/6.jpg',
        workType: 'Frontend, Backend',
        siteName: 'Official Mul-T-Lock Agent',
        siteUrl: 'http://vzlomunet.kz/',
        description: 'Big description here',
        shortDescription: 'short description here',
        technologies: 'tech i use'
    }
];

var myLib= function() {
    'use strict';

    var lib = this;

    this._workItem = function() {
        return $('<div class="item col-lg-4 col-sm-6">').append($('<div class="portfolio-box">')
            .append($('<img class="img-responsive" src="">'))
            .append($('<div class="portfolio-box-caption">')
                .append($('<div class="portfolio-box-caption-content">')
                    .append($('<div class="project-category text-faded">'))
                    .append($('<div class="project-name">'))
                    .append($('<div class="project-short">'))
                )));
    };

    this._renderWorks = function() {
        var $workContainer = $('#work-container');
        for (var i in works) {
            if(works.hasOwnProperty(i)) {
                var $item = lib._workItem();
                $item.data('id', works[i].id);
                $item.find('img').attr('src', works[i].imageUrl).attr('alt', works[i].siteName);
                $item.find('.project-category').text(works[i].workType);
                $item.find('.project-name').text(works[i].siteName);
                $item.find('.project-short').text('< ' + works[i].shortDescription + ' >');
                $workContainer.append($item);
            }
        }
    };

    this._expandMenu = function() {
        $(window).on('scroll', function(event) {
            event.stopPropagation();

            var $menu = $('#mainNav');
            var $header = $('#page-top');
            var scrolled = window.pageYOffset <= $header.height() ? window.pageYOffset : $header.height();

            $menu.find('.cover').animate({opacity: Math.round(scrolled*100)/$header.height()/135}, 0);
        });
    };

    this._slyScroll = function() {
        var $buttons = $('.page-scroll');

        $buttons.on('click touchend', function() {

            var $el = $(this);
            var scrollTo = $el.attr('href');

            $buttons.removeClass('active');
            $el.addClass('active');
            $('html, body').animate({scrollTop: $(scrollTo).offset().top - $('#mainNav').height()}, 500)
        });
    };

    this._buttonsHandler = function() {
        var $buttons = $('.page-scroll');

        $buttons.each(function(){
            var $el = $(this);
            var blockID = $el.attr('href');

            if($(blockID).offset().top < window.pageYOffset < ($(blockID).offset().top + $(blockID).height())) {
                //console.log(blockID);
            }
        });
    };

    this._showPersonalDataHandler = function() {
        var $menu = $('#mainNav');

        var addMenuItem = function() {
            var $nav = $menu.find('ul.nav');
            if($nav.find('.nav-person').length != 0) return;
            var $item = $('<li class="nav-person">').append($('<a class="page-scroll">').attr('href', '#person').text('About Me'));
            $nav.prepend($item);
            $('.page-scroll').removeClass('active');
            $item.fadeIn(400).find('a').addClass('active');

            lib._buttonsHandler();
            lib._slyScroll();
        };

        if(window.location.hash && window.location.hash == '#person') {
            var $person = $('#person');
            addMenuItem();
            $('html, body').animate({scrollTop: $person.offset().top - $menu.height()}, 800);
            $person.delay(400).animate({height: $person.children().height() + 60}, 400);
        }

        $('#person-handler').on('click touchend', function() {

            var $el = $(this);
            var $person = $($el.attr('href'));
            addMenuItem();

            $('html, body').animate({scrollTop: $person.offset().top - $menu.height()}, 300);
            $person.delay(600).animate({height: $person.children().height() + 60}, 400);

        });
    };

};

$(function() {
    'use strict';

    var lib = new myLib();

    lib._renderWorks();
    lib._expandMenu();
    lib._slyScroll();
    lib._buttonsHandler();
    lib._showPersonalDataHandler();
});