function numIslands(grid: string[][]): number {
  const rows = grid.length
  const cols = grid[0]?.length ?? 0
  let islandCount = 0

  function floodFill(row: number, col: number) {
    if (row < 0 || row >= rows || col < 0 || col >= cols) return
    if (grid[row][col] !== "1") return
    grid[row][col] = "0"

    floodFill(row + 1, col)
    floodFill(row - 1, col)
    floodFill(row, col + 1)
    floodFill(row, col - 1)
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "1") {
        islandCount++
        floodFill(row, col)
      }
    }
  }

  return islandCount
}