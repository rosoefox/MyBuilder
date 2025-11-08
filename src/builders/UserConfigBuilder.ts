// src/builders/UserConfigBuilder.ts
import { UserConfiguration } from '../models/UserConfiguration';

export interface IUserConfigBuilder {
  reset(): void;
  setUsername(username: string): this;
  setEmail(email: string): this;
  setPhone(phone: string): this;
  setIsAdmin(isAdmin: boolean): this;
  setTheme(theme: 'light' | 'dark'): this;
  build(): UserConfiguration;
}
