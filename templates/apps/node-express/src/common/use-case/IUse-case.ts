export interface IUseCase<T, R> {
    execute(command:T) : R;
}