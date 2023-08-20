import fsA from 'fs/promises'
import { fileURLToPath as fp } from 'url'
import path from 'path'

export function getPath(fn, dp, dir) {
    const dbpath = path.resolve(path.dirname(fp(import.meta.url)), dir, dp)
    const tempFile = path.join(dbpath, fn)
    if (!tempFile || !dbpath) throw new Error('Could not get path')
    return tempFile
}

export function getFileType(filePath) {
    const type = path.extname(filePath)
    if (!type) throw new Error('Could not find file type')
    return type
}

export const fsModules = {
    async write(filePath, text) {
        await fsA.writeFile(filePath, text)
    },

    async read(filePath, fileType) {
        const data = await fsA.readFile(filePath, 'utf8')
        if (fileType === ".json") return JSON.parse(data)
        return data
    },

    async append(filePath, text) {
        await fsA.appendFile(filePath, text)
    }
}

export const ObjectManager = {
    async checkProperties(objOne, objTwo) {
        const ConvertedObject = objTwo.toObject()
        const myObjKeys = Object.keys(objOne)
        for (const key of myObjKeys) {
            if (!ConvertedObject.hasOwnProperty(key)) {
                throw new Error(`The property: ${key} does not exist in the object with id: ${ConvertedObject._id}`)
            }
        }
    }
}