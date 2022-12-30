export default {

    name: 'mural',
    type: 'document',
    title: 'Mural',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Título'
        },
        {
            name: 'idName',
            type: 'string',
            title: 'Nombre Identificador',
            description: 'Colocar el título sin espacios'
        },
        {
            name: 'location',
            type: 'string',
            title: 'Ubicación',
            description: 'Url de google maps'
        },
        {
            name: 'description', //ver si es necesario establacer validación de longitud máxima
            type: 'string',
            title: 'Descripción',
            description: 'Breve descripción del mural'
        },
        {
            name: 'data',
            type: 'string',//cambiar a date para mostrar mes
            title: 'Mes y año de realización'
        },
        {
            name: 'tipoMural',
            type: 'string',
            title: 'Tipo de Mural',
            description: 'Seleccionar entre los disponibles (este campo no puede ir vacío)',
            options: {
                list: [
                  {title: 'Telúrbicos', value: 'telurbicos'},
                  {title: 'Homenajes', value: 'homenajes'},
                  {title: 'Otros', value: 'otros'}
                ]
            }
        },
        {
            name: 'imgs',
            type: 'array',
            title: 'Imagenes',
            of: [{type: 'image'}]
        },
    ]
}