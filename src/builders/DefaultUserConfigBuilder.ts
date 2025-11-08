// src/builders/DefaultUserConfigBuilder.ts
import { UserConfiguration } from '../models/UserConfiguration';
import type { IUserConfigBuilder } from './UserConfigBuilder';

export class DefaultUserConfigBuilder implements IUserConfigBuilder {
  private config: Partial<UserConfiguration> = {};

  constructor() {
    this.reset();
  }

  public reset(): void {
    // 기본값 설정 (필수 항목은 제외)
    this.config = {
      isAdmin: false,
      theme: 'light',
    };
  }

  // 모든 빌더 메서드는 this를 반환하여 체이닝을 가능하게 합니다.
  public setUsername(username: string): this {
    this.config.username = username;
    return this;
  }

  public setEmail(email: string): this {
    this.config.email = email;
    return this;
  }

  public setPhone(phone: string): this {
    this.config.phone = phone;
    return this;
  }

  public setIsAdmin(isAdmin: boolean): this {
    this.config.isAdmin = isAdmin;
    return this;
  }

  public setTheme(theme: 'light' | 'dark'): this {
    this.config.theme = theme;
    return this;
  }

  public build(): UserConfiguration {
    // 필수 항목 검증 및 최종 객체 생성
    if (!this.config.username || !this.config.email) {
      throw new Error("Username and Email must be set.");
    }

    const product = new UserConfiguration(
      this.config.username,
      this.config.email,
      this.config.phone,
      this.config.isAdmin!,
      this.config.theme!
    );
    this.reset(); // 빌더 재사용을 위해 리셋
    return product;
  }
}
