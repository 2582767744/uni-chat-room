// uni-app 全局类型声明
declare const uni: {
  createSelectorQuery(): {
    select(selector: string): {
      context(callback: (res: any) => void): {
        exec(): void
      }
    }
  }
  chooseImage(options: {
    count?: number
    sourceType?: string[]
    success?: (res: { tempFilePaths: string[] }) => void
    fail?: (err: any) => void
  }): void
  showToast(options: { title: string; icon?: string }): void
}

export {}
