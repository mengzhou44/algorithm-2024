function solveNQueens(n) {
    let result = [] 
    
    const board = new Array(n)
    for(let i= 0 ; i<n ;i++) {
      board[i] = new Array(n).fill('.')
    }

      // Function to check if it's safe to place a queen at board[row][col]
      function isSafe(row, col) {
        // Check column for another queen
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        
        // Check upper-left diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        
        // Check upper-right diagonal
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        
        return true;
    }

     function placeQueens(row) {
         if (row === n) {
            const copy = board.map(item=> item.join(''))
            result.push(copy)
         }

         for(let col=0; col<n; col++) {
             if (isSafe(row, col)) {
                 board[row][col] = 'Q'
                 placeQueens(row+1)
                board[row][col] = '.'
             }
         }
     }

     placeQueens(0)

     return result

}

const solutions = solveNQueens(4);
console.log(solutions);