import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "phoneNumber"})
export class PhoneNumberPipe implements PipeTransform {
    transform(phoneNumber: string, separatorIndex: number): string {
        // const separatorIndex = 3;

        let actualIndex = 0;
        let formatedNumber = '';

        for(let i = 0; i < phoneNumber.length; i++) {
            if (actualIndex > phoneNumber.length) {
                break;
            }

            formatedNumber += phoneNumber.substring(actualIndex, actualIndex + separatorIndex) + ' ';
            
            actualIndex += separatorIndex;
        }

        return formatedNumber;
    }
}
