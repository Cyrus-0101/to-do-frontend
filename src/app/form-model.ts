export class FormModel<T> {
    name?: string;
    title?: string;
    category?: string;
    message?: string;
    controlType: string;
    key: string;
    required: boolean;
    value: T|undefined;

    constructor(options: {
        controlType: string;
        key: string;
        required: boolean;
        name?: string;
        title?: string;
        category?: string;
        message?: string;
        value: T;
    }) {
        this.name = options.name;
        this.title = options.title;
        this.category = options.category;
        this.message = options.message;
        this.controlType = options.controlType;
        this.key = options.key;
        this.required = options.required;
    }

}
