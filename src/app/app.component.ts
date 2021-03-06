import { RegisterPage } from './../pages/register/register';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RoomTypePage } from '../pages/room-type/room-type';
import { RoomComparePage } from '../pages/room-compare/room-compare';
import { RoomAddPage } from '../pages/room-add/room-add';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'ลงชื่อเข้าใช้', component: LoginPage  },
      { title: 'หน้าแรก', component: HomePage  },
      { title: 'ประเภทห้องเช่า', component: RoomTypePage  },
      { title: 'เปรียบเทียบราคาห้องเช่า', component: RoomComparePage  },
      { title: 'เพิ่มข้อมูลห้องเช่า', component: RoomAddPage  }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
