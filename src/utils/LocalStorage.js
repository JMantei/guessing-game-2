/**
 * check if local storage is available
 * @returns bool - true if local storage is available, false if not
 */
export function exists() {
  // Check if we are in the browser environment and if localStorage is available
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      // Try setting and getting a test item to ensure localStorage is working
      const testKey = "test";
      window.localStorage.setItem(testKey, "testValue");
      window.localStorage.removeItem(testKey);
      return true; // localStorage is available
    } catch (e) {
      // If an error occurs, localStorage might be restricted (e.g., in incognito mode)
      return false;
    }
  }
  return false; // Not in a browser environment or localStorage is unavailable
}

/**
 * create app object if it doesn't exists
 */
export function init() {
  const appData = JSON.parse(localStorage.getItem("app"));
  if (!appData) {
    localStorage.setItem(
      "app",
      JSON.stringify({
        games: [],
      })
    );
  }
}

/**
 * Save game title to app object in local storage
 * @param {string} gameTitle - title of game to be saved
 */
export function addGameTitle(gameTitle) {
  const appData = JSON.parse(localStorage.getItem("app"));
  const updatedAppData = { ...appData, games: [...app.games, gameTitle] };
  localStorage.setItem("app", JSON.stringify(updatedAppData));
}

/**
 * Save game data object to local storage
 * @param {string} gameTitle - title of game
 * @param {string} gameType - type of game
 * @param {string} numPlayers - number of players
 * @param {string} player1 - name of player 1
 * @param {string} player2 - name of player 2
 * @param {string} player3 - name of player 3
 * @param {string} player4 - name of player 4
 * @param {string} player5 - name of player 5
 * @param {string} player6 - name of player 6
 * @param {string} player7 - name of player 7
 * @param {string} player8 - name of player 8
 */
export function addGameData(
  gameTitle,
  gameType,
  numPlayers,
  player1 = null,
  player2 = null,
  player3 = null,
  player4 = null,
  player5 = null,
  player6 = null,
  player7 = null,
  player8 = null
) {
  // add game data to local storage
  const gameData = {
    type: gameType,
    numberOfPlayer: numPlayers,
    playerNames: [],
    round: 0,
    game: {},
  };
  localStorage.setItem(gameTitle, JSON.stringify(gameData));
}

/**
 * Check if the game already exists in local storage
 * @param {string} gameTitle - title of the game
 * @returns bool - true if it does exist, false if not
 */
export function gameExists(gameTitle) {
  const appData = localStorage.getItem("app");
  const gameData = localStorage.getItem(gameTitle);
  if (!gameData && !appData.games.includes(gameTitle)) return false;
  return true;
}