import { ICountry } from "../../common/types/ICountry";
import ICreateCountry from "../../common/types/ICreateCountry";
import { IUseCase } from '../../common/use-case/IUse-case';
import { createCountry } from "../../data-access/country.db";

export class CreateCountryUseCase implements IUseCase<ICreateCountry, Promise<ICountry | null>> {
    execute(command: ICreateCountry) {
        return createCountry(command);
    }
}