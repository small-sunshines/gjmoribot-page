export default ({
  title,
  url,
  siteName,
  desc,
  image,
  width,
  height,
  author,
  twitterCreator
}, anotherMeta, anotherLink) => {
  let meta = []
  if (desc) meta.push({name: 'description', content: desc})
  if (author) meta.push({name: 'author', content: author})
  if (title) meta.push({name: 'og:title', content: title})
  if (desc) meta.push({name: 'og:description', content: desc})
  if (url) meta.push({name: 'og:url', content: url})
  if (siteName) meta.push({name: 'og:site_name', content: siteName})
  if (image) meta.push({name: 'og:image', content: image})
  if (width) meta.push({name: 'og:image:width', content: width})
  if (height) meta.push({name: 'og:image:height', content: height})
  if (title) meta.push({name: 'twitter:title', content: title})
  if (desc) meta.push({name: 'twitter:description', content: desc})
  if (image) meta.push({name: 'twitter:image', content: imgae})
  if (twitterCreator) meta.push({name: 'twitter:creator', content: twitterCreator})

  if (Array.isArray(anotherMeta)) {
    anotherMeta.forEach((current, index, array) => {
      if (current.content && current.name) {
        meta.push(current)
      }
    })
  }

  let link = []
  if (url) link.push({rel: 'canonical', href: url})

  if (Array.isArray(anotherLink)) {
    anotherLink.forEach((current, index, array) => {
      if (current.content && current.name) {
        meta.push(current)
      }
    })
  }

  return { meta, link }
}
