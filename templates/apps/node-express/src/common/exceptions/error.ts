export class Error {
   private message = '';
   private code = '';
   private error: any;

   constructor(message: string, code: string, error: any ) {
        this.message = message;
        this.code = code;
        this.error = error;
    }
}