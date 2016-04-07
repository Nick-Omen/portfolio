import {Component} from 'angular2/core';

export class Menu {
    hash: string;
    title: string;
}

@Component({
    selector: 'navigation',
    templateUrl: 'app/templates/navigation.html'
})

export class NavigationComponent {
    menuItems = MENU_ITEMS;
    brand = "Nick"
}

var MENU_ITEMS: Menu[] = [
    //{hash: 'about', title: 'About'},
    {hash: 'portfolio', title: 'Portfolio'},
    {hash: 'contact', title: 'Contacts'}
];