export namespace Logger {
    export function info(message: string) {
        if (process.env.NODE === 'development')
            console.info(message);
    }

    export function error(message: string) {
        if (process.env.NODE === 'development')
            console.error(message);
    }

    export function warn(message: string) {
        if (process.env.NODE === 'development')
            console.warn(message);
    }
}