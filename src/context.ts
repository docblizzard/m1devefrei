import { TrackAPI } from "./datasources/TrackAPI"
import { GhibliAPI } from "./datasources/ghibliAPI"

export type DataSourceContext = {
    dataSources: {
        trackApi: TrackAPI,
        ghibliApi: GhibliAPI
    }
}