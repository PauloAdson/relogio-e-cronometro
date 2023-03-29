# relogio-e-cronometro
Isto é um relógio com um cronômetro totalmente responsivo. Este é o meu segundo progeto, então acredito que possa ter algumas coisas que pode acabar assustando.

Eu não sei se fiz da forma correta a centralização dos botões no celular. 
A partir da linha 13, 18, 23, 30, 35 e 40 coloquei o id="background" pois a class="background" estava dando problema na hora de fazer a estilização para o celular, não entendi o porque de ter dado esse erro.

Já na parte do JavaScript, aconteceu um bug no cronômetro, toda vez que clicava no botão start, o tempo era contabilizado mais rápido, para resolver esse problema adicionei esse código. Não sei como funciona direito, mas se algum dia eu entender, volto aqui para explicar.

if (status == "START"){
        return;
    }
    status = "START";

Utilizei na linha 32 até a 35.

Depois de ter adicionado esse código, apareceu mais um bug, assim que eu pausava ou reiniciava o cronômetro não conseguia iniciar o cronômetro de novo, a menos que eu recarregasse a página, para resolver isso adicionei esse código.

    status = "PAUSE"

Utilizei ele nas linhas 41 e 47.

Logo depois de ter adicionado isso, resolveu tudo.
