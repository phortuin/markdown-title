const markdownTitle = markdown => {
    let matches = markdown.match(/^#[^#][\s]*(.+?)#*?$/m)
    if (matches && matches.length) {
        return matches.pop().trim()
    } else {
        return
    }
}

module.exports = markdownTitle
