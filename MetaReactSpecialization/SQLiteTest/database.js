import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('little_lemon')

export async function createTable() {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS menuitems (id INTEGER PRIMARY KEY, uuid TEXT, title TEXT, price TEXT, category TEXT);',
      )
    })
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getMenuItems() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql('SELECT * FROM menuitems', [], (_, { rows }) => {
          resolve(rows._array)
        })
      },
      (error) => {
        reject(error)
      },
    )
  })
}

export function saveMenuItems(menuItems) {
  db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO menuitems (category, id, title, price) VALUES ${menuItems
        .map(() => '(?, ?, ?, ?)')
        .join(', ')}`,
      menuItems.flatMap((item) => [
        item.category,
        item.id,
        item.title,
        item.price,
      ]),
    )
  })
}

export async function filterByQueryAndCategories(query, activeCategories) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      const queryString = `title LIKE '%' || ? || '%'`

      const categoryPlaceholders = activeCategories.map(() => '?').join(', ')
      const categoryString = `category IN (${categoryPlaceholders})`

      const sqlStatement = `
        SELECT * FROM menuitems
        WHERE ${queryString} AND ${categoryString}
      `

      const params = [query, ...activeCategories]

      tx.executeSql(
        sqlStatement,
        params,
        (_, { rows }) => {
          resolve(rows._array)
        },
        (_, error) => {
          reject(error)
        },
      )
    })
  })
}
