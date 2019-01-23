function queryExtractor(query) {
  const [key, value] = query.split(":")
  const valueTrimmed = value.trim()
  return { key, value: valueTrimmed }
}
export default queryExtractor
