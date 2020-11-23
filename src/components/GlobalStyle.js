import  { createGlobalStyle } from "styled-components";


const GlobalStyle=createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing:border-box
}
html{
    @media (max-width:1700px){
        font-size:75%;
    }
    @media (max-width:1300px){
        
    }
}
body{
    background:#1b1b1b;
    overflow-x:hidden;

}
p{
    color:#ccc;
    padding:3rem 0rem;
    font-size:1.4rem;
    line-height:150%;
}

button{
    font-weight:bold;
    font-size:1.1.rem;
    cursor: pointer;
    padding:1rem 2rem;
    border:3px solid #23d997;
    background:transparent;
    color:white;
    transition:all 0.5s ease;
    &:hover{
        background-color:#23d997;
        color:white;
    }
}
h2{
    font-weight:lighter;
    font-size:4rem;
    color:white;
}

h3{
    font-weight:bold;
    color:white;
}
span{
    font-weight:bold;
    color:#23d997;
}
a{
    font-size:1.1rem;
}
h4{
    font-weight:bold;
    color:#23d997;
    font-size:2rem;
}
q{
    padding-top:5px;
}

`;




export default GlobalStyle;