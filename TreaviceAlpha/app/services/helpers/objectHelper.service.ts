import { Injectable } from "@angular/core";

@Injectable()
export class ObjectHelper {
    public extend(obj1: Object, obj2: Object) {
        for (let key in obj2) {
            if (obj2.hasOwnProperty(key)) {
                obj1[key] = obj2[key];
            }
        }
        return obj1;
    }
}
