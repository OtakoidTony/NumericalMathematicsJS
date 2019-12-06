function Naive_Gauss(a, b) {
    var k, i, j;
    var n = b.length;
    var x = [];
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
    return x;
};

function method_of_least_squares(p){
    var sigma_x1 = 0;
    var sigma_x2 = 0;
    var sigma_y1 = 0;
    var sigma_xy = 0;
    var n = p.length;
    var i = 0;
    while ( i < n ){
        sigma_x1 = sigma_x1 + p[i][0];
        sigma_x2 = sigma_x2 + ( p[i][0] * p[i][0] );
        sigma_y1 = sigma_y1 + p[i][1];
        sigma_xy = sigma_xy + ( p[i][0] * p[i][1] );
        i = i + 1;
    }
    var a=[[n,sigma_x1],
           [sigma_x1, sigma_x2]];
    var b=[sigma_y1,sigma_xy];
    return Naive_Gauss(a,b);
}
