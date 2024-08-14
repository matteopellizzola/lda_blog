export const heroQuery = `{
  allHeroImages {
    id
    buttonText
    image {
      alt
      url
      title
    }
    _status
    _firstPublishedAt
  }
  _allHeroImagesMeta {
    count
  }
}`;
