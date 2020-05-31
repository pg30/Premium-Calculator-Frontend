import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const USERTYPE_KEY = 'AuthUsertype';
const EMAIL_KEY = 'AuthUseremail';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {
    private roles: Array<string> = [];
    constructor() { }

    signOut() {
        localStorage.clear();
    }

    public saveToken(token: string) {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string {
        return localStorage.getItem(TOKEN_KEY);
    }

    public saveUsertype(usertype: string) {
        localStorage.removeItem(USERTYPE_KEY);
        localStorage.setItem(USERTYPE_KEY, usertype);
    }

    public getUsertype(): string {
        return localStorage.getItem(USERTYPE_KEY);
    }

    public saveUsername(username: string) {
        localStorage.removeItem(USERNAME_KEY);
        localStorage.setItem(USERNAME_KEY, username);
    }

    public getUsername(): string {
        return localStorage.getItem(USERNAME_KEY);
    }

    public saveEmail(email: string) {
        localStorage.removeItem(EMAIL_KEY);
        localStorage.setItem(EMAIL_KEY, email);
    }

    public getEmail(): string {
        return localStorage.getItem(EMAIL_KEY);
    }

    public saveAuthorities(authorities: string[]) {
        localStorage.removeItem(AUTHORITIES_KEY);
        localStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }

    public getAuthorities(): string[] {
        this.roles = [];

        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(localStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
                this.roles.push(authority.authority);
            });
        }

        return this.roles;
    }
}
