import { Request, Response } from 'express';
import { AuthService } from './service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDTO: {
        email: string;
    }): Promise<{
        message: string;
    }>;
    googleAuth(): void;
    googleAuthCallback(req: Request, res: Response): void;
}
