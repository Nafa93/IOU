import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu';
import { GenericHeaderComponent } from './generic-header/generic-header';
@NgModule({
	declarations: [SideMenuComponent,
    GenericHeaderComponent],
	imports: [],
	exports: [SideMenuComponent,
    GenericHeaderComponent]
})
export class ComponentsModule {}
