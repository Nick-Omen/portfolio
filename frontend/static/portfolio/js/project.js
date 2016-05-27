var works = [
    {
        id: 1,
        imageUrl: 'img/portfolio/1.jpg',
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
        imageUrl: 'img/portfolio/4.jpg',
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
        imageUrl: 'img/portfolio/5.jpg',
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
        imageUrl: 'img/portfolio/6.jpg',
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
        imageUrl: 'img/portfolio/6.jpg',
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
        imageUrl: 'img/portfolio/6.jpg',
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
    
};

$(document).ready(function() {
    'use strict';

    var lib = new myLib();
    $('.one-page').singlePageApp({className: 'one-page'});
});
