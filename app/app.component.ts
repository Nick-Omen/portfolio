import {Component} from 'angular2/core';
import {NavigationComponent} from './components/navigation.component';
import {FirstScreenComponent} from './components/firstScreen.component';
import {SecondScreenComponent} from './components/secondScreen.component';
import {ThirdScreenComponent} from './components/thirdScreen.component';

@Component({
    selector: 'portfolio',
    template: `
        <navigation></navigation>
        <first-screen></first-screen>
        <second-screen></second-screen>
        <third-screen></third-screen>
    `,
    directives: [
        NavigationComponent,
        FirstScreenComponent,
        SecondScreenComponent,
        ThirdScreenComponent
    ]
})

export class AppComponent { }