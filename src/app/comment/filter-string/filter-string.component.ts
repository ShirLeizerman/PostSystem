import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'filter-string',
    templateUrl: './filter-string.component.html',
    styleUrls: ['./filter-string.component.less']
})

export class  FilterStringComponent {
    strings = new FormControl();

    @Input() stringList: string[];
    @Input() filterLabel: string;

    @Output() newFilter: EventEmitter<Comment> = new EventEmitter<Comment>();

    constructor() { }
}
