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
            name: 'paintingDate',
            type: 'date',//cambiar a date para mostrar mes
            title: 'Fecha de realización',
            description: 'Mes y año',
           /* options: {
                dateFormat: 'MMMM YYYY',
              }*/
        },
        {
            name: 'muralTypes',
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
    ],
    orderings: [
        {
          title: 'De nuevo a viejo',
          name: 'paintingDateDesc',
          by: [
            {field: 'paintingDate', direction: 'desc'}
          ]
        },
        {
          title: 'De viejo a nuevo',
          name: 'paintingDateAsc',
          by: [
            {field: 'paintingDate', direction: 'asc'}
          ]
        },
        {
          title: 'Tipo de Mural',
          name: 'muralTypesAsc',
          by: [
            {field: 'muralTypes', direction: 'asc'}
          ]
        },
        {
          title: 'Alfabéticamente',
          name: 'titleAsc',
          by: [
            {field: 'title', direction: 'asc'}
          ]
        }
    ]
}