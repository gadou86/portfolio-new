import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "7aha2f09",
  dataset: "production",
  useCdn: true
})