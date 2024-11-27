/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
export class AuthUserAlreadyExistsException extends Error {
  constructor() {
    super('User already exists with this email');
  }
}
