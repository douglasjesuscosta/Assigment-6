import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error){
        alert('An unexcepted error ocurred');
        console.log(error);
    }
}