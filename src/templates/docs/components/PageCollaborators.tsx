import * as React from 'react'
import { Box } from 'atomic-layout'
import { Avatar } from '../../../components/Avatar'

interface Props {
  relativeFilePath: string
}

interface Author {
  id: number
  avatar_url: string
  html_url: string
}

export const PageCollaborators: React.FC<Props> = ({ relativeFilePath }) => {
  const [collaborators, setCollaborators] = React.useState<Author[]>(null)

  React.useEffect(() => {
    fetch(
      `https://api.github.com/repos/mswjs/mswjs.io/commits?path=${relativeFilePath}`,
    )
      .then((res) => res.json())
      .then((data: any[]) => {
        return data.reduce<Author[]>((acc, commit) => {
          const isUniqueAuthor = acc.every(
            (author) => author.id !== commit.author.id,
          )
          return isUniqueAuthor ? acc.concat(commit.author) : acc
        }, [])
      })
      .then(setCollaborators)
      .catch(() => {
        // Exceeding GitHub API rate limit falls through here.
        return null
      })
  }, [relativeFilePath])

  if (!collaborators) {
    return null
  }

  return (
    <Box flex alignItems="center">
      {collaborators.map((author) => (
        <Box
          as="a"
          key={author.id}
          href={author.html_url}
          target="_blank"
          marginRight={4}
        >
          <Avatar src={author.avatar_url} size={32} />
        </Box>
      ))}
    </Box>
  )
}
