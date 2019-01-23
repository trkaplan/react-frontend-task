function queryExtractor(query) {
  const [key, value] = query.split(":")
  const valueTrimmed = value.trim()
  return { key, valueTrimmed }
}
export default queryExtractor
