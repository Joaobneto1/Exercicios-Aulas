type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

type Connection = {
    driver: string,
    url: string
}

const conexao = (dados: Conn): Readonly<Connection> => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}