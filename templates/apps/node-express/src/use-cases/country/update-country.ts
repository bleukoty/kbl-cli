import { ICountry } from "../../common/types/ICountry";
import ICreateCountry from "../../common/types/ICreateCountry";
import { IUseCase } from "../../common/use-case/IUse-case";
import { updateCountry } from "../../data-access/country.db";

export class UpdateCountryUseCase implements IUseCase<ICreateCountry, Promise<ICountry | null>> {
    execute(command: ICreateCountry) {
        // treat command
        return updateCountry(command);
    }
}