// get random max min.
random = (min, max)=>{
  return Math.floor(Math.random() * (max - min + 1) + min);
}
x = random(20,40)

//!!! used with random(). Returns 3 0-to-255 random numbers to be used for random color.
rgbR = ()=>{
  return 'rgb('+random(0,255)+', '+random(0,255)+', '+random(0,255)+')';
}

//Returns the base-16 equivalent 0-16777215 in base 10.
'#'+Math.floor(Math.random()*16777215).toString(16);
