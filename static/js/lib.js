var works = [
    {
        id: 1,
        imageUrl: '/img/portfolio/cn.jpg',
        bigImageUrl: '/img/portfolio/cn_big.jpg',
        workType: 'Frontend, Backend',
        siteName: 'Cyber Namba',
        siteUrl: 'http://cybernamba.com/',
        description: 'The cyber platform created to organize cyber-sport competitions.',
        shortDescription: 'The cyber platform created to organize cyber-sport competitions.',
        languages: 'Python, HTML, CSS, JavaScript',
        technologies: 'Django, Bootstrap3, jQuery, AJAX'
    },
    {
        id: 2,
        imageUrl: '/img/portfolio/atletic.jpg',
        bigImageUrl: '/img/portfolio/atletic_big.jpg',
        workType: 'Frontend, Backend',
        siteName: 'Athletic',
        siteUrl: 'http://atletic.kz/',
        description: 'Site created for BodyBuilding event in Almaty, Kazakhstan.',
        shortDescription: 'The site for BodyBuilding event in Almaty, Kazakhstan.',
        languages: 'PHP, HTML, CSS, JavaScript',
        technologies: 'WordPress, Bootstrap3, jQuery, AJAX, GoogleMap, Slick Carousel'
    },
    {
        id: 3,
        imageUrl: '/img/portfolio/express.jpg',
        bigImageUrl: '/img/portfolio/express_big.jpg',
        workType: 'Frontend, Backend',
        siteName: 'Namba Express',
        siteUrl: 'http://nambaexpress.kg/',
        description: 'Landing page with contact form and blog for NambaExpress service.',
        shortDescription: 'Landing page with contact form and blog for NambaExpress service.',
        languages: 'PHP, HTML, CSS, JavaScript',
        technologies: 'WordPress, Bootstrap3, jQuery, AJAX'
    },
    {
        id: 4,
        imageUrl: '/img/portfolio/gbf.jpg',
        bigImageUrl: '/img/portfolio/gbf_big.jpg',
        workType: 'Frontend, Backend',
        siteName: 'Global Business Forum',
        siteUrl: 'http://gbf.adline.kz/',
        description: 'Landing page with booking system for Global Business Forum in Almaty, Kazakhstan.',
        shortDescription: 'Landing page with booking system for Global Business Forum in Almaty, Kazakhstan.',
        languages: 'PHP, HTML, CSS, JavaScript',
        technologies: 'WordPress, Bootstrap3, jQuery'
    },
    {
        id: 5,
        imageUrl: '/img/portfolio/dobro.jpg',
        bigImageUrl: '/img/portfolio/dobro_big.jpg',
        workType: 'Frontend, Backend',
        siteName: 'Charity Award Site',
        siteUrl: 'http://delaidobro.tv7.kz/',
        description: 'Platform which allows to upload photos and videos people can voute for. The platform include auto-grabbing social networks(facebook, vk, instagram) by tag and create new articles.',
        shortDescription: 'Platform which allows to upload photos and videos people can voute for. The platform include auto-grabbing social networks(facebook, vk, instagram) by tag and create new articles.',
        languages: 'Python, HTML, CSS, JavaScript',
        technologies: 'Django, Bootstrap3, jQuery, AJAX, Scrapy'
    },
    {
        id: 6,
        imageUrl: '/img/portfolio/key.jpg',
        bigImageUrl: '/img/portfolio/key_big.jpg',
        workType: 'Frontend, Backend',
        siteName: 'Official Mul-T-Lock Agent',
        siteUrl: 'http://vzlomunet.kz/',
        description: 'Landing page with contact form for official representative Mul-T-Lock Agency.',
        shortDescription: 'Landing page with contact form for official representative Mul-T-Lock Agency.',
        languages: 'PHP, HTML, CSS, JavaScript',
        technologies: 'WordPress, Bootstrap3, jQuery, AJAX'
    }
];

var myLib= function() {
    'use strict';

    // Reference to the class
    var lib = this;
    this.defaultDelay = 300; // ms

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
        return $('<div class="item col-lg-4 col-sm-6 col-xs-12">').append($('<div class="portfolio-box">')
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
        return $('<div class="row work-details">')
            .append($('<div class="col-md-6 col-xs-12">')
                .append($('<div class="title">').append($('<a target="_blank" href="' + work.siteUrl + '" rel="nofollow">').text(work.siteName)))
                .append($('<div class="description">').text(work.description))
                .append($('<div class="work-type">').text(work.workType))
                .append($('<div class="technologies">').text(work.technologies)))
            .append($('<div class="col-md-6 col-xs-12 image-container">')
                .append('<img class="img-responsive" src="' + work.bigImageUrl + '" alt="' + work.siteName + '">'));
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
                $item.find('img').css('background-image', 'url(' + works[i].imageUrl + ')').attr('src', '/img/blank.png').attr('alt', works[i].siteName);
                $item.find('.project-category').text(works[i].workType);
                $item.find('.project-name').text(works[i].siteName);
                $item.find('.project-short').text('< ' + works[i].languages + ' >');
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

        $works.on('click', function() {
            var $modal = $('#work-modal');
            var $modalContent = $modal.find('.modal-body');
            var $workDetails = lib._workDetail($(this).attr('id'));
            $modalContent.html($workDetails);

            $('body').css('overflow', 'hidden');

            var pageCenter = {};
            var centerCoordinates = {};
            pageCenter.x = Math.round($(window).width()/2);
            pageCenter.y = Math.round($(window).height()/2);
            centerCoordinates.x = Math.round($(this).offset().left - $(this).width()/2);
            centerCoordinates.y = Math.round($(this).offset().top - $(this).height()/2);

            $modal.removeClass('close');

            var closeModal = function() {
                $modal.addClass('close');
                $('body').css('overflow', 'auto');
            };

            $modal.find('.close').on('click', function() {
                closeModal();
            });
            $(document).on('click', function(e){
                if($(e.target).is($('.modal-mask'))){
                    closeModal();
                }
            });
        });
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
