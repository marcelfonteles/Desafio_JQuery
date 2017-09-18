/* BEM VINDO, MARINHEIRO 
   O desafio demorou mas saiu rápido
   Antes de tudo, leia todas as dicas e obersações no link do desafio
   ...
   *-* Todo conteudo dentro de $(document).ready( function() { ... } ); será execultado assim que carregar a página
*/
$(document).ready(function() {
    //Inserir um comando para deixar a div #alerta movel  (Dica: função da jqueryui)
    $('#alerta').draggable();
    //chamar a funcão chamada "contador"
    contador();
    //Fazer a alerta aparecer depois de 5 segundos, chamando ã função toggleAlert
    //setTimeOut(toggleAlert, 5000);

    $("#novidadesform [type='submit']").click(function(e){
        e.preventDefault();

        //criar uma variavel e pegar o conteudo digitado na input
        var campo = $('input').val();
        //verificar se o campo não está vazio com if e else
        if(campo===''){
            toastr.error('Preencha um email!', 'Error!');
        }
        else{
             $.ajax({
                url:'http://51.254.204.44/ti/enviar_email.php',
                type:'post',
                data:{'meuemail':email},
                dataType: 'JSON',   
                success: function(retorno){
                    toastr.success('Você foi cadastrado!', 'Sucesso!');
                    $('.resultado').html(email + ' foi salvo em nossa lista de novidades =)');
                    setTimeout(toggleAlert, 2000);
                },
                error: function(erro){
                    toastr.error('Preencha um email válido!', 'Error!');
                }      
              })
          
        }
        //se for vazio execultar o comando abaixo
        //toastr.error('Preencha um email!', 'Error!');

        //se não for vazio enviar uma requisição com -requisição AJAX- do tipo POST para http://51.254.204.44/ti/enviar_email.php 
        // -- passando o paramentro "meuemail" e o dataType JSON

        //SE OCORRER TUDO CERTO COM A REQUISIÇAO: 1° exibir um toastr.sucess com a mensagem  | 2° 
        // 2° colocar um texto na div  de class resultado. "*emaildigitado* foi salvo em nossa lista de novidades =)"
        //limpar input
        //fechar a alerta depois de 2 segundos

        //SE não ocorrer tudo certo a alerta ñ deve fechar. Exibir um toastr.error com a mensagem do erro retornada pelo servidor



    });
});

/* NÃO MEXER 
   Se tiver visível, após executar a função, a div será oculta e vice-versa
*/
function toggleAlert() {
    $('#alerta').slideToggle();
}

//Contador inicia em 5
var i = 5;
function contador() {
    //Ocultar a div #contador qnd o cronometro ser menor ou igual a ZERO
    if(i<=0){
        $('#contador').hide();
        $('.todo').removeClass('hide');
    }
    //Mudar a cor do texto da div #contador qnd o cronometro ser menor ou igual a TRES
    if(i<=3){
        $('#contador').css("color", "red");
    }
    //Sinalizar contador. Ex: Alerta aparecendo em: __  (usar a div #contador)
    $('#contador').html("Alerta aparecendo em: " + i);
    i--;
    setTimeout(contador, 1000);
}