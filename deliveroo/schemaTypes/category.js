import {defineType,defineField} from 'sanity'

export const categoryType=defineType({
    name:'category',
    title:'Category',
    type:'document',
    fields:[
      defineField({
        name:"name",
        type:'string',
        title:"Category Name",
        validation:(Rule)=>Rule.required()
      }),
      defineField({
        name:"image",
        type:"image"
      })

      
    ]
})