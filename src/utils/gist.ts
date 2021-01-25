import { fetchJson } from "./fetch"

type GistType = {
  files: {
    [key: string]: {
      raw_url: string
    }
  }
}

export const  readRawUrlGist = async (gistId: string, filename: string = ''): Promise<string> => {
  if (!gistId) return ''

  // uses gist api to access info about the gist
  const gist = (<GistType> await fetchJson(`https://api.github.com/gists/${gistId}`))
  if (!gist) return ''

  if (!gist.files || Object.keys(gist.files).length ===0) return ''

  // if no file specified get first file
  if (!filename) filename = Object.keys(gist.files)[0]
  
  // get information for that file
  const file = gist.files[filename]
  if (!file) return ''
  
  // get raw_url of that file
  const gistRawUrl = file.raw_url
  return gistRawUrl || ''
}

export const readRawGist = async (gistId: string, filename: string = ''): Promise<unknown> => {
  
  // get raw_url of that file
  const gistRawUrl = await readRawUrlGist(gistId, filename)
  if (!gistRawUrl) return ''

  // fetch raw content
  const gistRaw = await fetchJson(gistRawUrl)

  return gistRaw
}