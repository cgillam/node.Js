function generateMarkdown(data) {
  let sections = Object.keys(data)
    .filter((key) => !["descrition", "version", "github_profile_image_url", "user_github_email"].includes(key))
    .filter((key) => data[key])
    .map((key) => {
      return `
# ${ key[0].toUpperCase() + key.slice(1).replace(/_/g, " ")}

${ data[key]}
`



    })
  var author = data.github_profile_image_url && data.user_github_email && `[![author](${data.github_profile_image_url})](mailto:${data.user_github_email})
`
  var version = data.version && `![Version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=gh&type=6&v=${data.version})`


  return `
# ${ data.title}

  ${ author || ""} 

  ${version || ""}

    ${ data.description}

${
    sections.join("\n")


    }





    `;
}

module.exports = generateMarkdown;
/*
## toc

${data.table_of_contents}

## installation:

${data.installation}

## usage:

${data.usage}

## license:

${data.license
    }


## contributing:

${ data.contributing}

# tests:

${ data.tests}

# questions:

${ data.questions}


{
  title: 'l',
  version: 'judnfj',
  description: 'jhnjd',
  table_of_contents: 'shbhd',
  installation: 'shjd',
  usage: 'dhbnjd',
  license: 'djhnbjd',
  contributing: 'sdujire',
  tests: 'sdnjrjd',
  questions: '',
  github_profile_image_url: 'dnd',
  user_g
*/