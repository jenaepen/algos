/**
 * Given an MxN matrix, write a code which prints out diagonals (from upper
 * right to lower left) of the matrix In the example where M = 4 and N = 3:
 * [[9,3,2], [8,6,1], [5,5,6], [1,2,8] ]
 *
 * Your code should print 9 3 8 2 6 5 1 5 1 6 2 8
 */
public class diagonal {

    public static void main(String[] args) {

        Integer[][] array = { { 9, 3, 2 }, { 8, 6, 1 }, { 5, 5, 6 }, { 1, 2, 8 } };
        printDiagonal(array);

    }

    public static void printDiagonal(Integer[][] array) {
        String result = "";
        for (int row = 0; row < array.length; row += 1) {
            for (int col = 0; col < array[0].length; col += 1) {
                // if the value in the array at i, j is not a start,
                // then call the helper function diagonalArray
                // to get the subarray that should be printed out
                if (array[row][col] != Integer.MAX_VALUE) {
                    result += (diagonalArray(array, row, col));
                }
            }
        }
        System.out.println(result);

    }

    private static String diagonalArray(Integer[][] array, int row, int col) {
        return recallDA(array, row, col, "") + "\n";
    }

    private static String recallDA(Integer[][] array, int row, int col, String subArray) {
        // if the position in the array does not exist, then return nothing and don't
        // push into the subArray
        if (row < 0 || col < 0 || row >= array.length || col >= array[0].length)
            return subArray;

        // add the value to the subArray
        subArray += array[row][col] + " ";

        // change the value of the element within the array to keep track of where you
        // have been
        array[row][col] = Integer.MAX_VALUE;

        // move the position to the right and down
        return recallDA(array, row + 1, col - 1, subArray);
    }

}
