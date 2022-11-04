import { PublicKey } from '@velas/web3';
export declare class PublicKeyBE {
    solPubKey: PublicKey;
    value: Uint8Array;
    constructor(fields: {
        value: Uint8Array;
    });
    fromPubKey(arg: PublicKey): this;
    equals(publicKey: PublicKeyBE): boolean;
}
export declare class Struct {
    constructor(properties: any);
}
export declare class Enum {
    enum: string | undefined;
    constructor(properties: any);
}
