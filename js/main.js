// Bob est un adolescent nonchalant. Dans la conversation, ses réponses sont très limitées.

// Bob répond "Bien sûr." si vous lui posez une question, comme "Comment allez-vous ?".

// Il répond "Whoa, calmos !" si vous CRIEZ SUR LUI (tout en capital).

// Il répond "Calmez-vous, je sais ce que je fais !" si vous lui criez une question.

// Il dit "Bien, on fait comme ça !" si vous lui parlez sans rien dire.

// Il répond "Peu importe !" à n’importe quoi d’autre.

// Le partenaire conversationnel de Bob est un puriste quand il s’agit de communication écrite et suit toujours les règles normales concernant la ponctuation des phrases en français.
// message.endsWith(?)
$().ready(function(){
    $("#ecriture").empty();
    let champsDeMots = $('#champs');
    const conversation = $('#boutton');
    conversation.click(function(e){
        e.preventDefault();
        console.log(champsDeMots);
        var message = $(champsDeMots).val();
        if (message.toUpperCase() == message && message[message.length-1] =="?"){
            $('#ecriture').html("Calmez-vous, je sais ce que je fais !");
        }else if (message[message.length-1]=="?"){
            $('#ecriture').html('Bien sur') ;
        }else if (message == message.toUpperCase() && message!=""){
            $('#ecriture').html('Whoa, calmos !');
        }else{
            console.log('nonchalent')
            $('#ecriture').html("Peu importe !");
        }

    });
    

})
