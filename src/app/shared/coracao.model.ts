export class Coracao {
  constructor(
    public cheio: boolean,
    public styleCoracaoCheio: string = 'fa fa-heart hearts text-danger',
    public styleCoracaoVazio: string = 'fa fa-heart hearts text-danger-light'
  ) { }

  public exibeCoracao(): string {
    if(this.cheio) {
      return this.styleCoracaoCheio
    } else {
      return this.styleCoracaoVazio
    }
  }
}