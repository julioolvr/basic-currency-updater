import React from 'react'

export const App = () => {
  return (
    <div>
      <div>
        From:
        <ul>
          <li>
            <div>
              <select defaultValue="USD">
                <option value="USD">USD</option>
                <option value="ARS">ARS</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
              </select>
              <input type="number" value="0.96"></input>
              <input type="number" value="25"></input>
            </div>
          </li>
          <li>
            <div>
              <select defaultValue="GBP">
                <option value="USD">USD</option>
                <option value="ARS">ARS</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
              </select>
              <input type="number" value="0.8"></input>
              <input type="number" value="30"></input>
            </div>
          </li>
          <li>
            <div>
              <select defaultValue="EUR">
                <option value="USD">USD</option>
                <option value="ARS">ARS</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
              </select>
              <input type="number" value="0.7"></input>
              <input type="number" value="50"></input>
            </div>
          </li>
        </ul>
        <div>
          To:
          <select defaultValue="ARS">
            <option value="USD">USD</option>
            <option value="ARS">ARS</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>, ARS1234.45
        </div>
      </div>
    </div>
  )
}

export default App
