(function ($) {

    $.fn.singlePageApp = function (options) {
        var lib = this;

        var settings = $.extend({
            scrollTimeout: 800, // number, ms
            animationTime: 300, // number, ms
            currentPage: 0, // number || string
            recursive: true, // boolean
            useHash: false,
            overflowed: false
        }, options);

        // $currentPage - object with active page
        // $pages - object with all pages
        // allowScrollOrClick - bool
        var $currentPage = {};
        var $pages = $(lib);
        var allowScrollOrClick = true;

        // Reassign scrollTimeout if it's value less then animation time
        settings.scrollTimeout = settings.scrollTimeout >= settings.animationTime ? settings.scrollTimeout : settings.animationTime;

        if ($pages.length == 0) return false;

        if (settings.useHash) {
            if (typeof settings.currentPage == 'number')
                $currentPage = window.location.hash ? $(window.location.hash) : $pages.eq(settings.currentPage);
            if (typeof settings.currentPage == 'string') {
                settings.currentPage = settings.currentPage.replace(/#/, '');
                $currentPage = $pages.filter('#' + settings.currentPage);
            }
        } else {
            $currentPage = $pages.eq(settings.currentPage).length != 0 ? $pages.eq(settings.currentPage) : $pages.eq(0);
        }

        /**
         * Init the script
         * @private
         */
        lib._init = function () {

            if (!$currentPage) return false;

            lib._addStyles();
            lib._setPage($currentPage);

            $(document).on('mousewheel keyup', lib._scrollEvent);

            if (settings.useHash) {
                $(window).on('hashchange', function () {
                    console.log(window.location.hash)
                });
            }

            $(window).trigger('op.init');
        };

        lib._scrollEvent = function (event) {
            if (!allowScrollOrClick) return false;
            if (typeof event.originalEvent.deltaY == 'undefined' && event.originalEvent.keyCode != 40 && event.originalEvent.keyCode != 38) return false;

            allowScrollOrClick = false;
            setTimeout(function () {
                allowScrollOrClick = true
            }, settings.scrollTimeout);

            lib._scroll(lib._getScrollDirection(event));
        };

        /**
         * Add styles like width, height, overflow to the pages if it's not exists.
         * Also add styles to html and body.
         * @private
         */
        lib._addStyles = function () {

            var setProps = function (props) {
                if (props.width !== '100%') $(this).css('width', '100%');
                if (props.height !== '100%') $(this).css('height', '100%');
                if (props.overflow !== 'hidden') $(this).css('overflow', 'hidden');
                if (!props.transition) $(this).css('transition', 'all' + settings + 'ms ease');
            };

            if (settings.overflowed) {
                $('html, body').css(['width', 'height', 'overflow'], setProps);
            } else {
                $('html, body').css('overflow', function (num, value) {
                    if (value != 'visible') $(this).css('overflow', 'visible');
                });
            }

            $pages.each(function (num, el) {
                $(el).css(['width', 'height', 'overflow', 'transition'], setProps);
            });
        };

        /**
         * Set the page passed as a jQuery object.
         * @param $page - jQuery object
         * @private
         */
        lib._setPage = function ($page) {
            if (typeof $page == 'undefined' || !$page instanceof jQuery) throw new Error("Can't set the page.");
            var coordinates = $(window).height() * $pages.index($page) + 1;

            $(window).trigger('op.change', [$page]);

            if (settings.overflowed) {
                $pages.css('transform', 'translateY(-' + coordinates + 'px)');
            } else {
                $('html, body').animate({scrollTop: coordinates}, settings.animationTime);
            }
            $currentPage = $page;
        };

        /**
         * Get scroll direction and returns it as a sting.
         * Can be used only in jQuery .on() method.
         * @param event - jQuery event
         * @returns string {up || down}
         * @private
         */
        lib._getScrollDirection = function (event) {

            if (!event || (typeof event.originalEvent.keyCode == 'undefined' && typeof event.originalEvent.deltaY == 'undefined')) return false;

            var scrollDirection;

            if (event.type == 'keyup' && (event.originalEvent.keyCode == 40 || event.originalEvent.keyCode == 38)) {
                scrollDirection = event.originalEvent.keyCode == 40 ? 'down' : 'up';
            }

            if (event.type == 'scroll') {
                console.log(event);
            }

            if (event.type == 'mousewheel') {
                scrollDirection = event.originalEvent.deltaY >= 0 ? 'down' : 'up';
            }

            return scrollDirection
        };

        /**
         * Scroll to the next or previous page.
         * @param direction - string {up || down}
         * @private
         */
        lib._scroll = function (direction) {
            if (direction == 'up') lib._scrollPrev();
            if (direction == 'down') lib._scrollNext();
        };

        lib._scrollNext = function () {
            var index = $pages.index($currentPage);
            var $nextPage = $pages.eq(index + 1);
            if ($nextPage.length == 0 && settings.recursive) $nextPage = $pages.eq(0);
            if ($nextPage.length == 0) return false;
            lib._setPage($nextPage);
            $(window).trigger('op.next', [$nextPage]);
        };

        lib._scrollPrev = function () {
            var index = $pages.index($currentPage);
            var $prevPage = $pages.eq(index - 1);
            if ($prevPage.length == 0 && settings.recursive) $prevPage = $pages.eq($pages.length + 1);
            if ($prevPage.length == 0) return false;
            lib._setPage($prevPage);
            $(window).trigger('op.prev', [$prevPage]);
        };

        lib._init();

        return this;
    };

}(jQuery));