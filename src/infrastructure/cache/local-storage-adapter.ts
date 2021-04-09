import { GetStorage } from '@/data/protocols/cache/get-storage'
import { SetStorage } from '@/data/protocols/cache/set-storage'

export class LocalStorageAdapter implements SetStorage, GetStorage {
  async set (key: string, value: object): Promise<void> {
    if (value) {
      await localStorage.setItem(key, JSON.stringify(value))
    } else {
      await localStorage.removeItem(key)
    }
  }

  get (key: string): any {
    return JSON.parse(localStorage.getItem(key))
  }
}
