type DesignateRefereesType = {
    id: string;
    referee1: string;
    referee2: string;
};
export declare class DesignateReferees implements DesignateRefereesType {
    readonly id: DesignateRefereesType['id'];
    readonly referee1: DesignateRefereesType['referee1'];
    readonly referee2: DesignateRefereesType['referee2'];
    private constructor();
    static with({ id, referee1, referee2 }: DesignateRefereesType): DesignateReferees;
}
export {};
