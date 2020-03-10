import {
    Injector,
    Pipe,
    PipeTransform
} from '@angular/core';


@Pipe({
    name: 'ngZeeDataTablePipe'
})
export class NgZeeDataTablePipe implements PipeTransform {

    public constructor(private injector: Injector) {
    }

    transform(value: any, pipeToken: any, pipeArgs: any[]): any {
        if (!pipeToken) {
            return value;
        }
        else {
            let pipe = this.injector.get(pipeToken);
            if (pipeArgs) {
                return pipe.transform(value, ...pipeArgs);
            }
            else {
                return pipe.transform(value);

            }
        }
    }
}