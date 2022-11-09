import { BinaryReader, BinaryWriter } from "borsh"
import {PublicKey} from '@velas/web3';

export class PublicKeyBE {
  solPubKey: PublicKey;
  value: Uint8Array;

  constructor(fields: {value: Uint8Array}) {
    this.value = fields.value;
    let copy = new Uint8Array(fields.value);
    this.solPubKey = new PublicKey(copy);
  }

  fromPubKey(arg: PublicKey): this {
    this.solPubKey = arg;
    let copy = new Uint8Array(Uint8Array.from(arg.toBuffer()));
    this.value = copy;

    return this;
  }

  equals(publicKey: PublicKeyBE) {
    return this.solPubKey.equals(publicKey.solPubKey);
  }
}

export const borshPublicKeyHack = () => {
	// "borsh": "^0.7.0"

	// agsol-borsh-schema/test-rs-output-ts-input/node_modules/borsh/lib/index.js:258
	//             writer[`write${capitalizeFirstLetter(fieldType)}`](value);
	//                                                               ^
	// TypeError: writer[capitalizeFirstLetter(...)] is not a function
  ;(BinaryReader.prototype as any).readPublicKeyHack = function () {
    const reader = this as unknown as BinaryReader
    const array = reader.readFixedArray(32)
    return new PublicKey(array)
  }
  ;(BinaryWriter.prototype as any).writePublicKeyHack = function (value: PublicKey) {
    const writer = this as unknown as BinaryWriter
    writer.writeFixedArray(value.toBytes())
  }
}

export class Struct {
  constructor(properties: any) {
    Object.keys(properties).map(key => {
      this[key as keyof typeof this] = properties[key];
    });
  }
}

export class Enum {
  enum: string | undefined;

  constructor(properties: any) {
    if (Object.keys(properties).length !== 1) {
      throw new Error('Enum can only take single value');
    }
    Object.keys(properties).map(key => {
      this[key as keyof typeof this] = properties[key];
      this.enum = key;
    });
  }
}
