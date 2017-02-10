/**
 * Created by cb5rp on 1/6/2017.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';

@NgModule({
    declarations: [ StarComponent ],
    imports: [ CommonModule ],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent
    ]
})
export class SharedModule {}