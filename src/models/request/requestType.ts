export type Request = {
    id: string;
    name: string;
    description: string;
    thumnail: string;
    labels: string[];
    updatedAt: Date;
    requestCount: number;
    contributeCount: number;
    progress: number;
}