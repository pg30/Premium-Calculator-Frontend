import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor() { }

    removeItem(key)
    {
        sessionStorage.removeItem(key);
    }

    setItem(key,value)
    {
        sessionStorage.setItem(key,value);
    }

    getItem(key)
    {
        return sessionStorage.getItem(key);
    }

    clearAll()
    {
        sessionStorage.clear();
    }
}
