const commandsMap = new Map();


class Command {
    constructor(command,description,execute){
        this._command = command;
        this._description = description;
        this._execute = execute;

        commandsMap.set(this._command,this)

    }

    get command() {
        return this._command
    }

    get description() {
        return this._description;
    }



    execute(message,args){
        return this._execute(message,args);
    }




}


const ping = new Command('Ping','test command',(message,args)=>{
    message.reply('pong');
})



module.exports = commandsMap;