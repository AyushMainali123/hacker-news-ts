enum ITEM_TYPE {
    STORY = "story",
    COMMENT = "comment",
    JOB = "job",
    POLL = "poll",
    POLLOPT = "pollopt"
}


type ItemType = ITEM_TYPE.STORY | ITEM_TYPE.COMMENT | ITEM_TYPE.JOB | ITEM_TYPE.POLL | ITEM_TYPE.POLLOPT


export interface HackerNewsResponseItem {
    id: number,
    deleted: boolean,
    descendants?: number,
    kids?: number[],
    score?: number,
    time?: number,
    title?: string,
    text?: string,
    type?: ItemType,
    by: string,
    dead?: boolean,
    poll?: number,
    parent?: number,
    url?: string,
    parts?: number[]
}