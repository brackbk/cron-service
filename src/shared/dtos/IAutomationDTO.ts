import { ObjectID } from "typeorm";

export default interface IResponseActionDTO {
    id: ObjectID;
    type: string;
    date: Date;
    time: string;
    msg_id: ObjectID;
    template_id: string;
    template_fields: object;
    tag: string;
    status: boolean;
    cadence: Array<number>;
    type_action: string;
}
