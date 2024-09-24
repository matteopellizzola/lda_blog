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

export const heroQuery2 = `{
  homepage {
    _status
    _firstPublishedAt
    _publishedAt
    textAndImageContainer {
      title
      description(markdown: false)
      image {
        url
        alt
      }
      link
      reverse
    }
    singleBox {
      fisrt {
        image {
          alt
          url
        }
      }
    }
    dualBox {
      first {
        title
        image {
          url
          alt
        }
      }
      second {
        title
        image {
          url
          alt
        }
      }
    }
  }
}`;