import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: "app-child",
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
    @Input() buttonText: string = '';
    @Output() childEmitData: EventEmitter<string> = new EventEmitter<string>()
    @Input() inputValue: string = ''

    emitData() {
        this.childEmitData.emit(this.inputValue);

    }
}
