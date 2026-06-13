import { Nullable } from '../../lib/lib-typescript';

export interface User {
  id?: Nullable<string>;
  email?: Nullable<string>;
  username?: Nullable<string>;
  password?: Nullable<string>;
}
