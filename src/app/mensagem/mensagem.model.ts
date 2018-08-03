export enum MensagemTipo {
    primary = 'primary',
    secondary = 'secondary',
    sucess = 'success',
    danger = 'danger',
    warning = 'warning',
    info = 'info',

}

export class Mensagem {
    tipo : MensagemTipo;
    conteudo = '';
}
