export interface UserPayload {
  sub: number;
  email: string;
  name: string;
  rule?: number[];
  iat?: number;
  exp?: number;
}
