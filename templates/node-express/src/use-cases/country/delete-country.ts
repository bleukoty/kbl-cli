import ICreateCountry from "../../common/types/ICreateCountry";
import { IUseCase } from "../../common/use-case/IUse-case";
import { deleteCountry } from "../../data-access/country.db";

export class DeleteCountryUseCase implements IUseCase<ICreateCountry, Promise<boolean | null>> {
    execute(command: ICreateCountry) {
        // treat command
        return deleteCountry(command);
    }
}