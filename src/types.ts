
export type MixedType = number | string | boolean | object | Array<any>;

export interface DateDifferenceResult {
    status?: number;
    error?: string;
    message?: string;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}