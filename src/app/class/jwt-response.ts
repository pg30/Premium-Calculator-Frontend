export class JwtResponse {
    accessToken: string;
    tokenType: string;
    username: string;
    email: string;
    authorities: string[];
}