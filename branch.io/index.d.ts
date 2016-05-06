/*
  Branch.io type definition file
*/


interface branchOptions {}

interface branch {
  init(branch_key: string, options: branchOptions, callback: (err: any, data: any) => void): void;
  data(callback: (err: any, data: any) => void): void;

  link(data: any, callback: (err: any, data: any) => void):void;
  sendSMS(phone: string, linkData: any, options: any, callback: (err: any, data: any) => void):void;
  deepview(data: any, options: any, callback: (err: any, data: any) => void): void;
  deepviewCta(): void;

  banner(options: any, data: any): void;
  closeBanner(): void;
}

declare module 'branch' {
  export = branch;
}

declare var branch: branch;