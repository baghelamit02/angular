export interface IDashboardConfiguration {
    name: string,
    configuration: {
        columns: number,
        miniCard: {
            cols: number,
            rows: number
        },
        chart: {
            cols: number,
            rows: number
        },
        newsTicker: {
            cols: number,
            rows: number
        }
    }
}
