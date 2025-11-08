// src/builders/UserConfigBuilder.ts
//최종 결과물의 타입을 가져온다.
import { UserConfiguration } from '../models/UserConfiguration';

export interface IUserConfigBuilder {
  reset(): void; // 내부 초기화
  // 이 메서드들 중요
  setUsername(username: string): this;
  setEmail(email: string): this;
  setPhone(phone: string): this;
  setIsAdmin(isAdmin: boolean): this;
  setTheme(theme: 'light' | 'dark'): this;
  //모든 빌딩 단계 후, 최종 객체 반환.
  build(): UserConfiguration;
}
