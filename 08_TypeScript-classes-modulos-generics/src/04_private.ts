

class Conta {
    private limite: number = 450;

    private aumentarLimit(quantidade: number){
        if(quantidade < 1000){
            this.limite = quantidade
            console.log(`Agora seu limite é: ${this.limite}`)
        }
    }

    solicitarLimiteApp(estaAutenticado: boolean, quantidade: number): void | boolean{
        if(estaAutenticado){
            this.aumentarLimit(quantidade)
        } else {
            return false
        }
    }
}

const fulano = new Conta()

fulano.solicitarLimiteApp(true, 1200)

console.log(fulano)