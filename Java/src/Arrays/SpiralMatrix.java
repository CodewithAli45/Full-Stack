package Arrays;

public class SpiralMatrix {
    public static void spiralPrinting(int mat[][], int row, int col){
        int minR = 0, minC = 0;
        int maxR = row - 1, maxC = col- 1;

        while(minR <= maxR && minC <= maxC){
            for(int i = minC; i <= maxC; i++){
                System.out.print(mat[minR][i] + " ");
            }
            minR++;

            for(int i = minR; i <= maxR; i++){
                System.out.print(mat[i][maxC] + " ");
            }
            maxC--;

            for(int i = maxC; i >= minC; i--){
                System.out.print(mat[maxR][i] + " ");
            }
            maxR--;

            for(int i = maxR; i >= minR; i--){
                System.out.print(mat[i][minC] + " ");
            }
            minC++;
        }
    }
    public static void main(String[] args) {
        int matrix[][] = {
            {1,2,3,8},
            {4,5,6,14},
            {7,8,9,15}
        };

        int row = matrix.length;
        int col = matrix[0].length;

        spiralPrinting(matrix, row, col);
    }
}
