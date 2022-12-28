export default {

    name: 'mural',
    type: 'document',
    title: 'Mural',
    fields: [
        {
            name: 'idName',
            type: 'string',
            title: 'Id_Name'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'imgs',
            type: 'array',
            title: 'Imagenes',
            of: [{type: 'image'}]
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'data',
            type: 'string',
            title: 'Data'
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location'
        },
        {
            name: 'tipoMural',
            type: 'string',
            title: 'Tipo_Mural'
        }
    ]
}