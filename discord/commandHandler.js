
const commandHandler = {

    commandMap: require('./commands'),

    execute(message,args) {

        if(!this.commandMap.has(args[0])){this.error('unkown Command',message)
        }else{
            const command = this.commandMap.get(args[0]);

            command.execute(message,args).catch(error())




        }


    }



        

        
    },

    error(error,message){
        message.reply(error)
    }




}
