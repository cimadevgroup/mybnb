body{

font-family:system-ui;

margin:0;

}

.nav{

padding:20px;

border-bottom:1px solid #eee;

}

.gallery{

display:grid;

grid-template-columns:2fr 1fr 1fr;

grid-template-rows:220px 220px;

gap:8px;

padding:20px;

}

.gallery img{

width:100%;

height:100%;

object-fit:cover;

border-radius:12px;

cursor:pointer;

transition:0.3s;

}

.gallery img:hover{

transform:scale(1.05);

}

#viewer{

display:none;

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:black;

justify-content:center;

align-items:center;

}

#viewer img{

max-width:90%;

max-height:90%;

}

#close{

position:absolute;

top:20px;

right:40px;

color:white;

font-size:40px;

cursor:pointer;

}

.layout{

display:grid;

grid-template-columns:2fr 1fr;

gap:40px;

padding:20px;

}

.card{

border:1px solid #ddd;

border-radius:14px;

padding:20px;

box-shadow:0 6px 20px rgba(0,0,0,.1);

}

#calendar{

display:grid;

grid-template-columns:1fr 1fr;

gap:20px;

}

.day{

padding:8px;

text-align:center;

border-radius:6px;

cursor:pointer;

}

.blocked{

background:#ddd;

text-decoration:line-through;

cursor:not-allowed;

}

.selected{

background:#ff385c;

color:white;

}

button{

width:100%;

padding:14px;

border:none;

border-radius:10px;

background:#ff385c;

color:white;

font-size:16px;

margin-top:10px;

}
