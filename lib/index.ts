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
