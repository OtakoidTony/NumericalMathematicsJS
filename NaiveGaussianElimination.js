var a=[[],
       [0,6,-2,2,4],
       [0,12,-8,6,10],
       [0,3,-13,9,3],
       [0,-6,4,1,-18]];
var b=[0,16,26,-19,-34];

var x=[0,0,0,0,0];
var n = 4;
var k, i, j;

for(k=1;k<=n-1;k++){
    for(i=k+1;i<=n;i++){
        for(j=k;j<=n;j++){
            a[i][j]=a[i][j]-((a[i][k]/a[k][k])*a[k][j]);
        }
        b[i]=b[i]-((a[i][k]/a[k][k])*b[k]);
    }
}
x[n]=b[n]/a[n][n];
var sum;
for(i=n-1;i>=1;i--){
    sum=b[i];
    for(j=i+1;j<=n;j++){
        sum=sum-(a[i][j]*x[j]);
    }
    x[i]=sum/a[i][i];
}
