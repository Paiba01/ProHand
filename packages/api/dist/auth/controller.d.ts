import { AuthService } from './service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDTO: {
        email: string;
    }): Promise<void>;
}
