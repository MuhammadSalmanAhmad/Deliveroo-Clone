import {createClient} from '@sanity/client'
import imageBuilder from '@sanity/image-url'
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: '68qkt2si',
    dataset: 'production',
    useCdn: true,
    apiVersion:"2024-01-01"

})

const builder =imageUrlBuilder(client)
export const urlFor=(source)=>builder.image(source)
export default client;

