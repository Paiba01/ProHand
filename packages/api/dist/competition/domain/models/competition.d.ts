import { AggregateRoot } from "@nestjs/cqrs";
import { CompetitionId } from "./id";
import { Name } from "./name";
import { Category } from "./category";
export declare class Competition extends AggregateRoot {
    private _id;
    private _name;
    private _category;
    private _dateFrom;
    private _dateTo;
    private constructor();
    static create({ id, name, category, dateFrom, dateTo, }: {
        id: CompetitionId;
        name: Name;
        category: Category;
        dateFrom: Date;
        dateTo: Date;
    }): Competition;
    get id(): CompetitionId;
    get name(): Name;
    get category(): Category;
    get dateFrom(): Date;
    get dateTo(): Date;
}
