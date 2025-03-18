type Uuid = string;
declare const Uuid: {
    readonly generate: () => Uuid;
    readonly validate: (value: string) => boolean;
};
export default Uuid;
