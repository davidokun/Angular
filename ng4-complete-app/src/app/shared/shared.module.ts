import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';
import {ImproveDropdownDirective} from './improve-dropdown.directive';

@NgModule({
  declarations: [
    DropdownDirective,
    ImproveDropdownDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    ImproveDropdownDirective
  ]
})
export class SharedModule {}
