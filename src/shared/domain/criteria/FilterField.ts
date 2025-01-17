/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { StringValueObject } from '../value-object/StringValueObject';

export class FilterField extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
