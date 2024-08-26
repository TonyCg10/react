import { useRef, useEffect } from 'react'

export function getSectionListData(data) {
  const newData = []

  data.forEach((element) => {
    const existingSection = newData.find(
      (section) => section.title === element.category,
    )

    if (existingSection) {
      existingSection.data.push({
        id: element.id,
        title: element.title,
        price: element.price,
      })
    } else {
      newData.push({
        data: [
          {
            id: element.id,
            title: element.title,
            price: element.price,
          },
        ],
        title: element.category,
      })
    }
  })
  return newData
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      const cleanup = effect()
      return () => {
        if (typeof cleanup === 'function') {
          cleanup()
        }
      }
    }
  }, dependencies)
}
