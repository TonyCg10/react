import SQLite from 'react-native-sqlite-storage'

SQLite.DEBUG(true)
SQLite.enablePromise(true)

const databaseName = 'MyDatabase.db'
const databaseVersion = '1.0'
const databaseDisplayname = 'My Database'
const databaseSize = 200000

export default class Database {
  initDB() {
    return new Promise((resolve, reject) => {
      console.log('Plugin integrity check ...')
      SQLite.echoTest()
        .then(() => {
          console.log('Integrity check passed ...')
          console.log('Opening database ...')
          SQLite.openDatabase(
            databaseName,
            databaseVersion,
            databaseDisplayname,
            databaseSize,
          )
            .then((DB) => {
              this.db = DB
              console.log('Database OPEN')
              resolve()
            })
            .catch((error) => {
              console.log(error)
              reject()
            })
        })
        .catch((error) => {
          console.log('echoTest failed - plugin not functional')
          reject()
        })
    })
  }

  closeDatabase() {
    if (this.db) {
      console.log('Closing database ...')
      this.db
        .close()
        .then((status) => {
          console.log('Database CLOSED')
        })
        .catch((error) => {
          this.errorCB(error)
        })
    } else {
      console.log('Database was not OPENED')
    }
  }

  listUsers() {
    return new Promise((resolve) => {
      const users = []
      this.db.transaction((tx) => {
        tx.executeSql('SELECT * FROM users', [], (tx, results) => {
          console.log('Query completed')
          const len = results.rows.length
          for (let i = 0; i < len; i++) {
            const row = results.rows.item(i)
            users.push(row)
          }
          resolve(users)
        })
      })
    })
  }

  addUser(name, email) {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO users (name, email) VALUES (?, ?)',
          [name, email],
          (tx, results) => {
            console.log('User added')
            resolve(results)
          },
          (error) => {
            console.log(error)
            reject(error)
          },
        )
      })
    })
  }

  // Add other database operations as needed

  errorCB(err) {
    console.log('SQL Error: ' + err)
  }

  successCB() {
    console.log('SQL executed fine')
  }

  openCB() {
    console.log('Database OPENED')
  }
}
