// Generated by dts-bundle v0.7.3

declare module '@noderun/xbrowser' {
    export * from '@noderun/xbrowser/func';
}

declare module '@noderun/xbrowser/func' {
    export * from '@noderun/xbrowser/func';
    export * from '@noderun/xbrowser/func/date';
    export * from '@noderun/xbrowser/func/number';
    export * from '@noderun/xbrowser/func/regexp';
    export * from '@noderun/xbrowser/func/url';
}

declare module '@noderun/xbrowser/func/date' {
    export function formatDate(fmt: string, date: Date): string;
}

declare module '@noderun/xbrowser/func/number' {
    export const toFixed: (num: number, n: number) => string;
}

declare module '@noderun/xbrowser/func/regexp' {
    export const testMobile: (str: string) => boolean;
    export const matchMobile: (str: string) => RegExpMatchArray | null;
}

declare module '@noderun/xbrowser/func/url' {
    export function getQueryByKey(name: string): string | null;
}

