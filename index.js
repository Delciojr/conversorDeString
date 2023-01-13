const fs = require("fs")


const renomearMusica = async(nome) =>{
    return nome.split('[SPOTIFY-DOWNLOADER.COM] ').join("") //String para cortar do nome da musica
}

const start = async() => {
    let musicas = await fs.readdirSync("./musicas")

    for(var i in musicas){
        let musica = musicas[i]
        let novoNome = await renomearMusica(musica)
        if(novoNome){
            await fs.renameSync(`./musicas/${musica}`,`./musicas/${novoNome}`)
        }
    }

    console.log("Finish")
}


start()