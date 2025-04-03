export interface LoginRequest {
    userNameOrEmailAddress: string;
    password: string;
  }
  
  export interface LoginResponse {
    accessToken: string;
    refreshToken?: string;
    expiresIn: number;
  }
  