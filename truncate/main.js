$phrase = 'These are words that will need to be truncated.'

function truncate(phrase, length) {
  if (length >= phrase.length) {
    return phrase
  } else {
    return phrase.slice(0, length) + '...'
  }
}

console.log(truncate($phrase, 5))