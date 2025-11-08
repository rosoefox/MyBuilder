// src/builders/DefaultUserConfigBuilder.ts
import { UserConfiguration } from '../models/UserConfiguration';
import type { IUserConfigBuilder } from './UserConfigBuilder';

//꼭 IUserConfigBuilder 모든 메서드 구현하기
export class DefaultUserConfigBuilder implements IUserConfigBuilder {
  private config: Partial<UserConfiguration> = {}; //임시저장소

  constructor() {
    this.reset(); //빌더 생성시 항상 초기화
  }

  public reset(): void {
    // 빌더를 초기 상태로 되돌리고, 선택 항목 기본값 설정
    this.config = {
      isAdmin: false,
      theme: 'light',
    };
  }

  //---------------------빌딩시작----------------------

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

  // 최종 객체 생성
  public build(): UserConfiguration {
    // 최종 객체 생성 전 필수 항목 검증
    if (!this.config.username || !this.config.email) {
      throw new Error("Username and Email must be set.");
    }
// 조립 후, product 객체를 생성, 값을 전달.
    const product = new UserConfiguration(
      this.config.username,
      this.config.email,
      this.config.phone,
      this.config.isAdmin!, // !는 값이 존재함을 알려줌.
      this.config.theme!
    );
    this.reset(); // 빌더 재사용을 위해 리셋
    return product;
  }
}
