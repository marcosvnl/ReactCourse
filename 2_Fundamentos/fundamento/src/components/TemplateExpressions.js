let name = 'Marcos Vinicius';
let data = {
    stack: 'Full Stack Developer',
    backend: '.NET',
    fontend: 'React',
    database: 'SQL Server' 
};
const TemplateExpressions = () =>{
    return(
        <>
            <h1>Informations</h1>
            <h3>Name: { name }</h3>
            <strong>| { data.stack } | { data.backend } | { data.fontend } | { data.database } |</strong>
        </>
    );
};

export default TemplateExpressions;