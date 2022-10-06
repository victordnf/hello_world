import * as express from 'express';

const hello = express();
const port = 3000;
/*
 *  code here ↓↓↓↓↓↓↓
 */
hello.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
});

hello.get('/bsms', (request, response) => {
    response.send('<h2><br> Mentalidades</h2>'+
    '<li>Persitência</li> '+
    '<li>Responsabilidade pessoal</li>'+
    '<li>Orientação ao futuro</li>'+
    '<li>Mentalidade de crescimento</li>'+
    '<h2><br>Habilidades</h2>'+
    '<li>Trabalho em equipe</li> '+
    '<li>Atenção aos detalhes</li>'+
    '<li>Proatividade</li>'+
    '<li>Comunicação</li>')
});

hello.get('/objectives', (request, response) => {
    response.send('<h2>&nbsp;&nbsp;&nbsp;&nbsp;Objetivos de Aprendizagem</h2>' +
    '<p>&nbsp;&nbsp;Meus objetivos são melhorar minha comunicação e também <br> &nbsp;&nbsp; principalmente  melhorar minhas habilidades no back end')
})

/*
 *  code here ↑↑↑↑↑↑↑
 */
hello.listen(port, () => {
    console.log(`server is running at port ${port}`) 
});