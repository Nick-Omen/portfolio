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

    // Reference to the class
    var lib = this;
    this.defaultDelay = 400; // ms

    /**
     * Get work by ID from portfolio array
     * @param id
     * @returns {*}
     */
    this._getWorkById = function(id) {
        var work = {};
        for (var i in works) {
            if(works.hasOwnProperty(i)) {
                if(works[i].id == id) return work = works[i];
            }
        }
        return work;
    };

    /**
     * Create a DOM of a work item
     * @returns {*|jQuery}
     */
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

    /**
     * Create a DOM of a work detail
     * @param id
     * @returns {*|jQuery}
     */
    this._workDetail = function(id) {
        var work = lib._getWorkById(id);
        return $('<div class="row">')
            .append($('<div class="col-md-6">')
                .append($('<div class="title">').append($('<a href="' + work.siteUrl + '" rel="nofollow">').text(work.siteName)))
                .append($('<div class="work-type">').text(work.workType))
                .append($('<div class="technologies">').text(work.technologies))
                .append($('<div class="description">').text(work.description)))
            .append($('<div class="col-md-6">')
                .append('<img class="img-responsive" src="' + work.imageUrl + '" alt="' + work.siteName + '">'));
    };

    /**
     * Create DOM with all works and insert it to document
     */
    this._renderWorks = function() {
        var $workContainer = $('#work-container');
        for (var i in works) {
            if(works.hasOwnProperty(i)) {
                var $item = lib._workItem();
                $item.attr('id', works[i].id);
                $item.find('img').attr('src', works[i].imageUrl).attr('alt', works[i].siteName);
                $item.find('.project-category').text(works[i].workType);
                $item.find('.project-name').text(works[i].siteName);
                $item.find('.project-short').text('< ' + works[i].shortDescription + ' >');
                $workContainer.append($item);
            }
        }
        lib._workClickHandler();
    };

    /**
     * Handle click on work and open modal with work details
     */
    this._workClickHandler = function() {
        var $works = $('#work-container').find('.item');

        $works.on('click touchend', function() {
            var $modal = lib._createModal();
            var $modalContent = $modal.find('.modal-content');
            var $workDetails = lib._workDetail($(this).attr('id'));

            $modalContent.append($workDetails);
            $(this).closest('section').append($modal);

            var closeModal = function() {
                $modal.addClass('close');
                setTimeout(function(){
                    $modal.remove();
                }, lib.defaultDelay)
            };

            $modalContent.find('.close').on('click touchend', function() {
                closeModal();
            });
            $(document).on('click touchstart', function(e){
                if($(e.target).is($('.modal-mask'))){
                    closeModal();
                }
            });
        });
    };

    /**
     * Create DOM of a modal window
     * @returns {*|jQuery}
     */
    this._createModal = function() {
        return $('<div class="modal-mask">')
            .append($('<div class="modal-content container">')
                .append($('<div class="close">')));
    };

    /**
     * Expand main menu when page scroll
     */
    this._expandMenu = function() {
        $(window).on('scroll', function(event) {
            event.stopPropagation();

            var $menu = $('#mainNav');
            var $header = $('#page-top');
            var scrolled = window.pageYOffset <= $header.height() ? window.pageYOffset : $header.height();

            $menu.find('.cover').animate({opacity: Math.round(scrolled*100)/$header.height()/135}, 0);
        });
    };

    /**
     * Sly scroll to anchors with the page-scroll class
     */
    this._slyScroll = function() {
        var $buttons = $('.page-scroll');

        $buttons.on('click touchend', function() {

            var $el = $(this);
            var scrollTo = $el.attr('href');

            $buttons.removeClass('active');
            $el.addClass('active');
            $('html, body').animate({scrollTop: $(scrollTo).offset().top - $('#mainNav').height()}, 400)
        });
    };

    /**
     *
     */
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

    /**
     * Handler to show dropdown with my own info
     */
    this._showPersonalDataHandler = function() {
        var $menu = $('#mainNav');

        // Add the About me link to menu if block is opened
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

        // Scroll to my personal info
        var scrollToPersonalInfo = function($selector) {
            $('html, body').animate({scrollTop: $selector.offset().top - $menu.height()}, lib.defaultDelay);
            $selector.delay(lib.defaultDelay).animate({height: $selector.children().height() + 60}, lib.defaultDelay);
        };

        if(window.location.hash && window.location.hash == '#person') {
            var $person = $('#person');
            scrollToPersonalInfo($person);
            addMenuItem();
        }

        $('#person-handler').on('click touchend', function() {
            var $person = $($(this).attr('href'));
            scrollToPersonalInfo($person);
            addMenuItem();
        });
    };

    this._closeLoad = function () {
        $('#overflowed').animate({opacity: 0}, 500, function () {
            $(this).remove();
        });
    };

};

$(document).ready(function() {
    'use strict';

    var lib = new myLib();
    lib._closeLoad();
    lib._renderWorks();
    lib._expandMenu();
    lib._slyScroll();
    lib._buttonsHandler();
    lib._showPersonalDataHandler();
});
