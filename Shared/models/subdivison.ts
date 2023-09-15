export type Subdivision = {
    id: number,
    code: string,
    name: string,
    longitude: number,
    latitude: number,
    fieldSurveyTerritoryId: number,
    marketId: number,
    subdivisionStatusId: number,
    surveyMethodId: number,
    activeSections: number,
    futureSections: number,
    builtOutSections: number,
    totalLots: number,
    fieldSurveyTerritoryName: string,
    marketName:string,
    marketAbbreviation: string,
    subdivisionStatusCode: SubdivisionStatusCode,
    surveyMethodCode:string,
    county: string,
    community: string | null,
    zoom17Date:  Date,
    zoom18Date:  Date,
    subdivisionGeometryId: string | null, // was null for all subdivisions , assumed string
    subdivisionGeometryBoundingBoxId: string | null, // was null for all subdivisions , assumed string
    subdivisionGeometryBoundaryId: string | null, // was null for all subdivisions a, assumed string
    subdivisionGeometryIntelligenceBoundaryId: number,
    subdivisionGeometryIntelligenceBoundaryStatusId: number,
    subdivisionGeometryIntelligenceBoundaryStatusCode: string,
    subdivisionGeometryIntelligenceBoundaryStatusChangeDate: Date,
    nearMapImageDate: Date,
    imageBoxId: number,
    mostRecentIPointBatchDate: Date,
    iPoints: null, 
    validatediPoints: null, 
    subdivisionSpecificStatus: string
} 

export enum SubdivisionStatusCode {
    Active = 'Active',
    Future = 'Future',
    Builtout = 'Builtout'
}