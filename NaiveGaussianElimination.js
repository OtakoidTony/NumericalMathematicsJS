function Naive_Gauss(n, a, b, x) {
    for (k = 0; k < n - 1; k++) {
        for (i = k + 1; i < n; i++) {
            for (j = k + 1; j < n; j++) {
                a[i][j] = a[i][j] - ((a[i][k] / a[k][k]) * a[k][j]);
            }
            b[i] = b[i] - ((a[i][k] / a[k][k]) * b[k]);
        }
    }
    x[n - 1] = b[n - 1] / a[n - 1][n - 1];
    var sum;
    for (i = n - 2; i >= 0; i--) {
        sum = b[i];
        for (j = i; j < n; j++) {
            sum = sum - (a[i][j] * x[j]);
        }
        x[i] = sum / a[i][i];
    }
};
