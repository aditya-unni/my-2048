"use client";
import { use, useState,useEffect } from 'react'

function Grid() {
  const n = 4;
  const [matrix, setMatrix] = useState(Array.from({ length: n }, () => Array.from({ length: n }, () => 0)));
  // useState(Array.from({ length: n }, () => Array.from({ length: n }, () => Math.floor((Math.random() * 10%2) + 1))));
  
  useEffect(() => {
    randomnumberplacer();
    randomnumberplacer();
    // setMatrix(Array.from({ length: n }, () => Array.from({ length: n }, () => Math.pow(2,Math.floor((Math.random() * 10%3) + 1)))));
    
  },[]);

  const handleKeyDown = (event: KeyboardEvent) => {
    console.log(event.key);
    if(event.key == "ArrowUp"){
      up();
    }
    else if(event.key == "ArrowDown"){
      down();
    }
    else if(event.key == "ArrowLeft"){
      left();
    }
    else if(event.key == "ArrowRight"){
      right();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown',handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  },[handleKeyDown]);

  const up = () => {
    let newarr = [...matrix];
    for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
        if(newarr[i][j] == 0){
          continue;
        }
        else{
          let k = i;
          while(k>0 && newarr[k-1][j] == 0){
            newarr[k-1][j] = newarr[k][j];
            newarr[k][j] = 0;
            k--;
          }
          if(k>0 && newarr[k-1][j] == newarr[k][j]){
            newarr[k-1][j] = newarr[k-1][j] + newarr[k][j];
            newarr[k][j] = 0;
          }
        }
      }
    }
    setMatrix(newarr);
    randomnumberplacer();
  }

  const down = () => {
    let newarr = [...matrix];
    for(let i=n-1;i>=0;i--){
      for(let j=0;j<n;j++){
        if(newarr[i][j] == 0){
          continue;
        }
        else{
          let k = i;
          while(k<n-1 && newarr[k+1][j] == 0){
            newarr[k+1][j] = newarr[k][j];
            newarr[k][j] = 0;
            k++;
          }
          if(k<n-1 && newarr[k+1][j] == newarr[k][j]){
            newarr[k+1][j] = newarr[k+1][j] + newarr[k][j];
            newarr[k][j] = 0;
          }
        }
      }
    }
    setMatrix(newarr);
    randomnumberplacer();
  }

  const left = () => {
    let newarr = [...matrix];
    for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
        if(newarr[i][j] == 0){
          continue;
        }
        else{
          let k = j;
          while(k>0 && newarr[i][k-1] == 0){
            newarr[i][k-1] = newarr[i][k];
            newarr[i][k] = 0;
            k--;
          }
          if(k>0 && newarr[i][k-1] == newarr[i][k]){
            newarr[i][k-1] = newarr[i][k-1] + newarr[i][k];
            newarr[i][k] = 0;
          }
        }
      }
    }
    setMatrix(newarr);
    randomnumberplacer();
  }

  const right = () => {
    let newarr = [...matrix];
    for(let i=0;i<n;i++){
      for(let j=n-1;j>=0;j--){
        if(newarr[i][j] == 0){
          continue;
        }
        else{
          let k = j;
          while(k<n-1 && newarr[i][k+1] == 0){
            newarr[i][k+1] = newarr[i][k];
            newarr[i][k] = 0;
            k++;
          }
          if(k<n-1 && newarr[i][k+1] == newarr[i][k]){
            newarr[i][k+1] = newarr[i][k+1] + newarr[i][k];
            newarr[i][k] = 0;
          }
        }
      }
    }
    setMatrix(newarr);
    randomnumberplacer();
  }

  const randomnumberplacer = () => {
    let i = Math.floor((Math.random() * 10%4) );
    let j = Math.floor((Math.random() * 10%4) );
    let newarr = [...matrix];
    if(matrix[i][j] == 0){
      newarr[i][j] = 2;
      setMatrix(newarr);
    }
    else{
      randomnumberplacer();
    }
  }
  

  return (
    <div className='h-full w-full '>
      <table className='table-fixed h-4/5 w-1/3 pt-16 border-separate border-spacing-2 m-auto'>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((column, columnIndex) => (
                <td className={`transition-all  rounded-2xl w-32 h-32 text-center
                ${
                  matrix[rowIndex][columnIndex]==2 ? 'bg-two-1': 
                  matrix[rowIndex][columnIndex]==4 ? 'bg-four-1':
                  matrix[rowIndex][columnIndex]==8 ? 'bg-eight-1':
                  matrix[rowIndex][columnIndex]==16 ? 'bg-sixteen-1':
                  matrix[rowIndex][columnIndex]==32 ? 'bg-thirtyTwo-1':
                  matrix[rowIndex][columnIndex]==64 ? 'bg-sixtyFour-1':
                  matrix[rowIndex][columnIndex]==128 ? 'bg-onetwentyeight-1':
                  matrix[rowIndex][columnIndex]==256 ? 'bg-twofiftysix-1':
                  matrix[rowIndex][columnIndex]==512 ? 'bg-fivetwelve-1':
                  matrix[rowIndex][columnIndex]==1024 ? 'bg-tentwentyfour-1':
                  matrix[rowIndex][columnIndex]==2048 ? 'bg-twentyfortyeight-1':'bg-white'
                }`} key={columnIndex}>
                  <h1 className={`transition-all select-none text-6xl font-black font-sans
                  ${
                    matrix[rowIndex][columnIndex]==2 ? 'text-two-2': 
                  matrix[rowIndex][columnIndex]==4 ? 'text-four-2':
                  matrix[rowIndex][columnIndex]==8 ? 'text-eight-2':
                  matrix[rowIndex][columnIndex]==16 ? 'text-sixteen-2':
                  matrix[rowIndex][columnIndex]==32 ? 'text-thirtyTwo-2':
                  matrix[rowIndex][columnIndex]==64 ? 'text-sixtyFour-2':
                  matrix[rowIndex][columnIndex]==128 ? 'text-onetwentyeight-2':
                  matrix[rowIndex][columnIndex]==256 ? 'text-twofiftysix-2':
                  matrix[rowIndex][columnIndex]==512 ? 'text-fivetwelve-2':
                  matrix[rowIndex][columnIndex]==1024 ? 'text-tentwentyfour-2':
                  matrix[rowIndex][columnIndex]==2048 ? 'text-twentyfortyeight-2':'text-black'
                  }`}>
                  {matrix[rowIndex][columnIndex]==0?" ":matrix[rowIndex][columnIndex]}
                  </h1>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Grid