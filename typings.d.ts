export interface Post {
  _id: string
  _createdAt: string
  title: string
  description: string
  body: [object]
  author: {
    name: string
    image: string
  }
  mainImage: {
    asset: {
      url: string
    }
  }
  slug: {
    current: string
  }
}