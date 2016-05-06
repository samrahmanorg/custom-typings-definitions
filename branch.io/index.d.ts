/*
  Branch.io type definition file
*/


interface branchOptions {}

interface branch {
  init(branch_key: string, options: branchOptions, callback: (err: any, data: any) => void): void;
  data(callback: (err: any, data: any) => void): void;
}

declare module 'branch' {
  export = branch;
}

declare var branch: branch;