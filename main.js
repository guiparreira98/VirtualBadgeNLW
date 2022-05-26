const LinksSocialMedia = {
    github: 'Guiparreira98',
    instagram:'guiparreira',
    facebook: 'GuilhermeParreira',
    twitter: 'guiparreira'
}
///SocialLinks: é um Id que eu colqouei la no HTML
function changeSocialMediaLinks() {
    ///To pegando os filhos(que sao as LI) do ID(sociallinks) que eu criei, cada vez que o for rodar, vou estar trabalhando com um filho(li), e vai guardar este filho e colocar na variavel LI
    ///OBS: ta pegando todo o elemento HTML que tem dentro de cada LI
    for (let li of socialLinks.children) {
        ///Criei uma variavel chamada social, que esta recebendo cada class que eu criei  de cada filho(li) do ID social Links, OBS: ele muda de valor cada vez que o for rodar
        const social = li.getAttribute('class')
        ///vai na li, pega o filho da li na posição zero, que é o href desse filho
        ///cada vez que o For rodar, vai pegar o href do filho da li na posição zero de cada li que tem dentro do ID socialLinks
        ///No href ele vai colocar a varivel social(que possui as classes)
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`  
    }
}
    ////Faz com que chame a função
    changeSocialMediaLinks()

    ///função para ir ao github, pegar as informações e trazer para o js(acessando a API do github e pegar as minhas info)

    function getGitHubProfileInfos() {
        ///criou uma variavel que vai conter a url da API do Github que vai puxar seu usuario(vai conter o url do meu perfil e guardei dentro da variavel URL)
        ///ate o momento apenas guardei a URl em uma variavel
        const url = `https://api.github.com/users/${LinksSocialMedia.github}`
        ///o fetch vai ate a URL, pegar a informação que a api responder(independente do que seja, pois ele nao sabe o que é JSON)o fetch vai ficar com essa informação guardada
        ///Para poder pegar esdsa informação guardada dentro do fetch temos que usar as promises(.then)
        fetch(url)
        ///response é so uma variavel que estou criando para guardar nesta variavel o que esta vindo do fetch( que nao esta vindo como Json)
        ///tem que pegar o que o fetch trouxe e transformar em Json(a API ja responde em Json, mas o fetch nao entende como Jsone sim como se fosse um objeto, por isso precisa fazer isso)
            .then(response => response.json())
        ///criei uma variavel chamada data, que esta armazenando a resposta da api, so que ja transformada em Json
            .then(data => {
                ///este substituiu o nome
                userName.textContent = data.name
                userBio.textContent = data.bio
                userLink.href = data.html_url
                UserPhoto.src = data.avatar_url
                userLogin.textContent = data.login
            })
    }

    getGitHubProfileInfos()

