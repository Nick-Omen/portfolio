'use strict';

var works = works || {};

var Works = Backbone.View.extend({

    el: $('#work-container'),

    initialize: function () {
        _.bindAll(this, 'render');

        this.render();
    },

    render: function () {
        return this;
    }

});