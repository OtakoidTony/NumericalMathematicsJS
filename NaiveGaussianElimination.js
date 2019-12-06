
var a=[[6,-2,2,4],
       [12,-8,6,10],
       [3,-13,9,3],
       [-6,4,1,-18]];

var b=[16,26,-19,-34];

var x=[0,0,0,0];
var n = b.length;
var k, i, j;

for(k=0;k<n-1;k++){
    for(i=k+1;i<n;i++){
        for(j=k+1;j<n;j++){
            a[i][j]=a[i][j]-((a[i][k]/a[k][k])*a[k][j]);
        }
        b[i]=b[i]-((a[i][k]/a[k][k])*b[k]);
    }
}
x[n-1]=b[n-1]/a[n-1][n-1];
var sum;
for(i=n-2;i>=0;i--){
    sum=b[i];
    for(j=i;j<n;j++){
        sum=sum-(a[i][j]*x[j]);
    }
    x[i]=sum/a[i][i];
}
