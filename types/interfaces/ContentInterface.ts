export interface ContentAddPropsApi {
    title: string,
    content?: string,
}

export interface ContentUpdatePropsApi {
    id:number,
    title: string,
    content?: string,
}

export interface ContentRemovePropsApi {
    id:number,

}
