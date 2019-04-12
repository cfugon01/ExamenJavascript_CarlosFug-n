var digito
var numero = [0,0,0,0]
u_signo=""
o_signo=""

function ejecutarn1(){

  var x = document.getElementById('1')
  x.style ="border:2px solid #A4A4A4"
  setInterval(function(){ x.style ="border=none" }, 300);
  r = document.getElementById("display").firstChild

  if (r.data=="0"){
    r.data="1";
  }
  else {
    if (parseInt(String(r.data).length) < 8)
    {
      r.data = r.data+"1"
    }
  }

  digito = parseInt(String(r.data))
  numero[3]=digito
}
function ejecutarn2(){
  var x = document.getElementById('2')
  x.style ="border:2px solid #A4A4A4"
  setInterval(function(){ x.style ="border=none" }, 300);
  r = document.getElementById("display").firstChild

  if (r.data=="0"){
    r.data="2";
  }
  else {
    if (parseInt(String(r.data).length) < 8)
    {
      r.data = r.data+"2"
    }
  }
  digito = parseInt(String(r.data))
  numero[3]=digito
}
function ejecutarn3(){
  var x = document.getElementById('3')
  x.style ="border:2px solid #A4A4A4"
  setInterval(function(){ x.style ="border=none" }, 300);
  r = document.getElementById("display").firstChild
  if (r.data=="0"){
    r.data="3";
  }
  else {
    if (parseInt(String(r.data).length) < 8)
    {
      r.data = r.data+"3"
    }
  }
  digito = parseInt(String(r.data))
  numero[3]=digito
}
function ejecutarn4(){
  var x = document.getElementById('4')
  x.style ="border:2px solid #A4A4A4"
  setInterval(function(){ x.style ="border=none" }, 300);
  r = document.getElementById("display").firstChild
  if (r.data=="0"){
    r.data="4";
  }
  else {
    if (parseInt(String(r.data).length) < 8)
    {
      r.data = r.data+"4"
    }
  }
  digito = parseInt(String(r.data))
  numero[3]=digito
}
function ejecutarn5(){
  var x = document.getElementById('5')
  x.style ="border:2px solid #A4A4A4"
  setInterval(function(){ x.style ="border=none" }, 300);
  r = document.getElementById("display").firstChild
  if (r.data=="0"){
    r.data="5";
  }
  else {
    if (parseInt(String(r.data).length) < 8)
    {
      r.data = r.data+"5"
    }
  }
  digito = parseInt(String(r.data))
  numero[3]=digito
}
function ejecutarn6(){
  var x = document.getElementById('6')
  x.style ="border:2px solid #A4A4A4"
  setInterval(function(){ x.style ="border=none" }, 300);
  r = document.getElementById("display").firstChild
  if (r.data=="0"){
    r.data="6";
  }
  else {
    if (parseInt(String(r.data).length) < 8)
    {
      r.data = r.data+"6"
    }
  }
  digito = parseInt(String(r.data))
  numero[3]=digito
}
function ejecutarn7(){
  var x = document.getElementById('7')
  x.style ="border:2px solid #A4A4A4"
  setInterval(function(){ x.style ="border=none" }, 300);
  r = document.getElementById("display").firstChild
  if (r.data=="0"){
    r.data="7";
  }
  else {
    if (parseInt(String(r.data).length) < 8)
    {
      r.data = r.data+"7"
    }
  }
  digito = parseInt(String(r.data))
  numero[3]=digito
}
function ejecutarn8(){
  var x = document.getElementById('8')
  x.style ="border:2px solid #A4A4A4"
  setInterval(function(){ x.style ="border=none" }, 300);
  r = document.getElementById("display").firstChild
  if (r.data=="0"){
    r.data="8";
  }
  else {
    if (parseInt(String(r.data).length) < 8)
    {
      r.data = r.data+"8"
    }
  }
  digito = parseInt(String(r.data))
  numero[3]=digito
}
function ejecutarn9(){
  var x = document.getElementById('9')
  x.style ="border:2px solid #A4A4A4"
  setInterval(function(){ x.style ="border=none" }, 300);
  r = document.getElementById("display").firstChild
  if (r.data=="0"){
    r.data="9";
  }
  else {
    if (parseInt(String(r.data).length) < 8)
    {
      r.data = r.data+"9"
    }
  }
  digito = parseInt(String(r.data))
  numero[3]=digito
}
function ejecutarn0(){
  var x = document.getElementById('0')
  x.style ="border:2px solid #A4A4A4"
  setInterval(function(){ x.style ="border=none" }, 300);
  r = document.getElementById("display").firstChild
  if (r.data=="0"){
    r.data="0";
  }
  else {
    if (parseInt(String(r.data).length) < 8)
    {
      r.data = r.data+"0"
    }
  }
  digito = parseInt(String(r.data))
  numero[3]=digito
}

function ejecutarON(){
  var x = document.getElementById("on");
  x.style ="border:2px solid #A4A4A4"
  setInterval(function(){ x.style ="border=none" }, 300);
  r = document.getElementById("display").firstChild
  r.data="0";
  for (i=0; i<4; i++){
    numero[i]=0;
  }
}

//ESTA EJECUTA LAS OPERACIONES BASICAS SUMA, RESTA, MULTIPLICACIÓN Y DIVISIÓN
function ejecutarOPERACION(signo)
{

  u_signo=signo
  if (signo =="+" ||signo =="-" ||signo =="x" ||signo =="/")
  {
    o_signo = signo
  }

  if (signo=="+")
  {
    y = document.getElementById("mas")
    document.addEventListener("click", function(){
      y.style = "border:2px solid #A4A4A4"
      setInterval(function(){y.style = "border:none"},300)
    });
  }

  if (signo=="-")
  {
    y = document.getElementById("menos")
    document.addEventListener("click", function(){
      y.style = "border:2px solid #A4A4A4"
      setInterval(function(){y.style = "border:none"},300)
    });
  }

  if (signo=="x")
  {
    y = document.getElementById("por")
    document.addEventListener("click", function(){
      y.style = "border:2px solid #A4A4A4"
      setInterval(function(){y.style = "border:none"},300)
    });
  }

  if (signo=="/")
  {
    y = document.getElementById("dividido")
    document.addEventListener("click", function(){
      y.style = "border:2px solid #A4A4A4"
      setInterval(function(){y.style = "border:none"},300)
    });
  }

  r = document.getElementById("display").firstChild

  if (numero[0]==0)
  {
    numero[0]=digito
    r.nodeValue="0";
  }
  else {
    if (numero[1]==0 && r.nodeValue!="0")
    {
      numero[1]=digito
      r.data="0";
    }
  }

  if (signo=='+'){
    if (numero[0]!=0 && numero[1]!=0)
    {
      numero[0]=numero[0]+numero[1]
      numero[1]=0
      r.data="0"
    }
    numero[2]=numero[0]+numero[1]
  }

  if (signo=='-'){
    if (numero[0]!=0 && numero[1]!=0)
    {
      numero[0]=numero[0]-numero[1]
      numero[1]=0
      r.data="0"
    }
    numero[2]=numero[0]-numero[1]
  }

  if (signo=='x'){
    if (numero[0]!=0 && numero[1]!=0)
    {
      numero[0]=numero[0]*numero[1]
      numero[1]=0
      r.data="0"
    }
    numero[2]=numero[0]-numero[1]
  }

  if (signo=='/'){
    if (numero[0]!=0 && numero[1]!=0)
    {
      numero[0]=numero[0]/numero[1]
      numero[1]=0
      r.data="0"
    }
    numero[2]=numero[0]-numero[1]
  }
  if (u_signo=='='){
    if (o_signo=="+")      {numero[2]=numero[2]+numero[3];numero[1]=0;numero[0]=0}
    if (o_signo=="-")      {numero[2]=numero[2]-numero[3];numero[1]=0;numero[0]=0}
    if (o_signo=="x")      {numero[2]=numero[2]*numero[3];numero[1]=0;numero[0]=0}
    if (o_signo=="/")      {numero[2]=numero[2]/numero[3];numero[1]=0;numero[0]=0}

    r.data = String(numero[2])
  }
}

//listener para cambiar de signo
  w= document.getElementById("sign")
  w.addEventListener("click", function(){
    cambio_signo = document.getElementById("sign")
    cambio_signo.style = "border:2px solid #A4A4A4"
    setInterval(function(){cambio_signo.style ="border:none"},300)

    r = document.getElementById("display").firstChild
    if (r.data!="0"){
      r.data= String(parseInt(r.data)*-1)
      digito = parseInt(String(r.data))
      numero[3]=digito
  }
})
