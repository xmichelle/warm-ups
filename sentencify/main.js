function sentencify(words) {
  const sentence = words.join(' ')
  const completeSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.'
  return completeSentence
}
