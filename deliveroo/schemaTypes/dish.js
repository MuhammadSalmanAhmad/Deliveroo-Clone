import {defineType,defineField} from 'sanity'

export const dishtype=defineType({
    name:'dish',
    title:'Dish',
    type:'document',
    fields:[
      defineField({
        name:"name",
        type:'string',
        title:"Dish Name",
        validation:(Rule)=>Rule.required()
      }),
        defineField({
            name:"description",
            type:'string',
            validation:(Rule)=>Rule.max(300)
        }),
            defineField({
                name:"price",
                type:'number',
                validation:(Rule)=>Rule.required().min(1)
            }),
            defineField({
                name:"image",
                type:'image'
            }),
          
    
      
    ]
})