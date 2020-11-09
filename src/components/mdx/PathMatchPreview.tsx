import * as React from 'react'
import { match } from 'node-match-path'
import { Code } from './Code'
import { Composition, Box } from 'atomic-layout'
import { ErrorBoundary } from '../ErrorBoundary'
import { InteractiveArea } from '../InteractiveArea'
import styled from 'styled-components'

const Input = styled.input`
  font-family: var(--font-family-mono);
  font-size: 90%;
`

interface Props {
  path?: string
  url?: string
  onPathChange?: (nextValue: string) => void
  onUrlChange?: (nextValue: string) => void
}

const Result: React.FC<Props> = ({ path, url }) => {
  const result = React.useMemo(() => {
    let matchResult: ReturnType<typeof match>
    let output: string

    try {
      matchResult = match(path, url)
      output = JSON.stringify(matchResult, null, 2)
    } catch (error) {
      matchResult = null
      output = `Failed to match against path: provided path is invalid.`
    }

    return output
  }, [path, url])

  return (
    <Code language="json" copyable={false}>
      {result}
    </Code>
  )
}

export const PathMatchPreview: React.FC<Props> = ({
  path: initialPath,
  url: initialUrl,
  onPathChange,
  onUrlChange,
}) => {
  const [path, setPath] = React.useState(initialPath)
  const [url, setUrl] = React.useState(initialUrl)

  React.useEffect(() => {
    onPathChange?.(path)
  }, [path])

  React.useEffect(() => {
    onUrlChange?.(url)
  }, [url])

  return (
    <Box as={InteractiveArea} marginVertical={32}>
      <Composition templateColsMd="repeat(2, 1fr)" gap={16}>
        <Composition gap={4}>
          <label htmlFor="path">Request handler URL:</label>
          <Input
            id="path"
            name="path"
            value={path}
            autoComplete="off"
            onChange={(event) => setPath(event.target.value)}
          />
        </Composition>
        <Composition gap={4}>
          <label htmlFor="url">Actual request URL:</label>
          <Input
            id="url"
            name="url"
            value={url}
            autoComplete="off"
            onChange={(event) => setUrl(event.target.value)}
          />
        </Composition>
      </Composition>

      <ErrorBoundary>
        <Result path={path} url={url} />
      </ErrorBoundary>
    </Box>
  )
}

PathMatchPreview.defaultProps = {
  path: '',
  url: '',
}
