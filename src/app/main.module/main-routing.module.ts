import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component/main-page.component';
import { MenuComponent } from './menu.component/menu.component';
import { CateringComponent } from './catering.component/catering.component';
import { AboutUsComponent } from './about-us.component/about-us.component';
import { ContactComponent } from './contact.component/contact.component';

const mainRoutes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: '',
        component: MainPageComponent,
        children: [
            {
                path: 'menu',
                component: MenuComponent,
                data: {
                    menuItem: 'Menu',
                    title: 'Menu'
                }
            },
            {
                path: 'catering',
                component: CateringComponent,
                data: {
                    menuItem: 'Catering',
                    title: 'Catering'
                }
            },
            {
                path: 'about-us',
                component: AboutUsComponent,
                data: {
                    menuItem: 'About Us',
                    title: 'About Us'
                }
            },
            {
                path: 'contact',
                component: ContactComponent,
                data: {
                    menuItem: 'Contact',
                    title: 'Contact'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule],
    providers: []
})

export class MainRoutingModule { }
