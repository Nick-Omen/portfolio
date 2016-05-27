(function ($) {

    $.fn.singlePageApp = function (options) {
        var lib = this;

        var settings = $.extend({
            scrollTimeout: 1000, // number, ms
            animationTime: 300, // number, ms
            recursive: true, // boolean
            currentPage: 2 // number
        }, options);

        var $pages = $(lib);
        var $currentPage = $pages.eq(settings.currentPage).length != 0 ? $pages.eq(settings.currentPage) : $pages.eq(0);
        var allowScrollOrClick = true;

        lib._init = function () {

            lib._addStyles();
            lib._setPage($currentPage);

            $(window).on('mousewheel keyup', function (event) {
                if(!allowScrollOrClick) return false;
                if (typeof event.originalEvent.deltaY == 'undefined' && event.originalEvent.keyCode != 40 && event.originalEvent.keyCode != 38) return false;

                allowScrollOrClick = false;
                setTimeout(function () { allowScrollOrClick = true }, settings.scrollTimeout);

                lib._scroll(lib._getScrollDirection(event));
                console.log(1);
            });
        };

        lib._addStyles = function () {

            var setProps = function (props) {
                if (props.width !== '100%') $(this).css('width', '100%');
                if (props.height !== '100%') $(this).css('height', '100%');
                if (props.overflow !== 'hidden') $(this).css('overflow', 'hidden');
                if (!props.transition) $(this).css('transition', 'all' + settings + 'ms ease');
            };

            $('html, body').css(['width', 'height', 'overflow'], setProps);

            $pages.each(function (num, el) {
                $(el).css(['width', 'height', 'overflow', 'transition'], setProps);
            });
        };

        lib._setPage = function ($page) {
            var coordinates = $(window).height() * $pages.index($page) + 1;
            $pages.css('transform', 'translateY(-' + coordinates + 'px)');
            $currentPage = $page;
        };

        lib._getScrollDirection = function (event) {

            if (!event || (typeof event.originalEvent.keyCode == 'undefined' && typeof event.originalEvent.deltaY == 'undefined')) return false;

            var scrollDirection;

            if (event.originalEvent.keyCode && (event.originalEvent.keyCode == 40 || event.originalEvent.keyCode == 38)) {
                scrollDirection = event.originalEvent.keyCode == 40 ? 'down' : 'up';
            }

            if (event.originalEvent.deltaY) {
                scrollDirection = event.originalEvent.deltaY >= 0 ? 'down' : 'up';
            }

            return scrollDirection
        };

        lib._scroll = function (direction) {
            if (direction == 'down') {
                lib._scrollNext();
            }
        };

        lib._scrollNext = function () {
            var index = $pages.index($currentPage);
            var $nextPage = $pages.eq(index + 1);
            if ($nextPage.length == 0 && settings.recursive) $nextPage = $pages.eq(0);
            if ($nextPage.length == 0) return false;
            lib._setPage($nextPage);
        };

        lib._init();

        return this;
    };

}(jQuery));