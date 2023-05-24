import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Home, User, MessageCircle, Code } from 'angular-feather/icons';

const icons = {
  Home,
  User,
  MessageCircle,
  Code
}

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ], exports: [
    FeatherModule
  ]
})
export class IconsModule { }
