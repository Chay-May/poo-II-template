import { TUserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

    public static TABLE_USERS = "users"
    public static findUsersById: any;
   
    public async findUser(q: string | undefined){
        
        let usersDB

        if (q) {
            const result: TUserDB[] = await BaseDatabase.connection(UserDatabase.TABLE_USERS).where("name", "LIKE", `%${q}%`)
            usersDB = result
        } else {
            const result: TUserDB[] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            usersDB = result
        }

    return usersDB

    }

    public async findUsersById(id: string){

        const [ userDBExists ]: TUserDB[] | undefined[] = await BaseDatabase.connection(UserDatabase.TABLE_USERS).where({ id })

        return userDBExists
    }

    public async insertUser(newUserDB: TUserDB){
        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(newUserDB)
    }

}


/*protected - os dados da classe pai podem ser acessados pela classe filha(this.dado)

static -  você não acessa pela instância e sim pela classe, o que gera uma economia de memória.

abstract class - classe pai como abstrata para evitar que ela seja instanciável, ou seja, declaramos em código que ela é apenas uma ideia (abstrata) e não algo concreto.

- **toda classe abstrata é utilizada para implementar herança

- **nenhuma classe abstrata é instanciável*/