interface ITemplateRequestDTO {
    templateId: string;
    fields: {};
    to: string;
    channel: String;
}


interface IMailRequestDTO {
    email: string,
    name: string,
    subject: string,
    variables: {},
    template: string,
}


export { ITemplateRequestDTO, IMailRequestDTO };