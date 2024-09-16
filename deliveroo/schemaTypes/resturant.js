import {defineType,defineField} from 'sanity'

export const restuarantType=defineType({
    name:'restuarant',
    title:'Restuarant',
    type:'document',
    fields:[
      defineField({
        name:"name",
        type:'string',
        title:"Restuarant Name",
        validation:(Rule)=>Rule.required()
      }),
      defineField({
        name:"description",
        type:'string',
        validation:(Rule)=>Rule.max(500)
      }),
        defineField({
            name:"location",
            type:'string'
        }),
        defineField({
            name:"image",
            type:'image'
        }),
        defineField({
            name:"rating",
            type:'number',
            validation:(Rule)=>Rule.required().max(5).min(1).error("Please enter a value between 1 to 5")
        }),
        defineField({
            name:"lat",
            type:'number',
            title:"Latitude of the Restaurant"
        }),
        defineField({
            name:"long",
            type:'number',
            title:"Longitude of the restaurant"
        }),
        defineField({
            name:"Address",
            type:"string",
            title:"Restaurant Address"
        }),

        defineField({
            name:"Category",
            type:"reference",
            to:[{type:"category"}]


        }),
        defineField({
            name:"Dishes",
            type:"array",
            of:[{type:"reference", to:[{type:"dish"}]}]
        }),

      
    ]
})