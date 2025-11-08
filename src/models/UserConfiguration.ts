// src/models/UserConfiguration.ts

export class UserConfiguration {
  constructor(
    public username: string, // 사용자 이름
    public email: string, // 이메일
    public phone: string | undefined, // 전화번호, 없을 수도 있다.
    public isAdmin: boolean, // 관리자 여부
    public theme: 'light' | 'dark' // 테마는 light와 dark.
  ) {}
  // 생성된 최종 객체를 문자열로 반환하는 메서드이다!
  public displayConfig(): string {
    return `Name: ${this.username}, Email: ${this.email}, Admin: ${this.isAdmin}, Theme: ${this.theme}`;
  }
}
