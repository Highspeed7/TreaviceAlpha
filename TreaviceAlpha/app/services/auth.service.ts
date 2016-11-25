import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AccountService } from "../services/account.service";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private accountService: AccountService) { }

    canActivate() {
        return true;
        //return this.accountService.isLoggedIn()
        //    .then((data) => {
        //        return data;
        //    })
        //    .catch((err) => { return false; })
    }
}