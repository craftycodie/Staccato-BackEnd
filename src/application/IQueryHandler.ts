export default interface IQueryHandler<T1, T2> {
    execute(query: T1): T2 
}