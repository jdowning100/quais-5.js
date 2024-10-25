import u2f from "@ledgerhq/hw-transport-u2f";
export type TransportCreator = {
    create: () => Promise<u2f.Transport>;
};
export declare const transports: {
    [name: string]: TransportCreator;
};
//# sourceMappingURL=browser-ledger-transport.d.ts.map