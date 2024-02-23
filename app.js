function findWords(){
    var searchWord=document.getElementById('searchInput').value.toLowerCase();
    var text=document.getElementById('textInput').value;
    var regex=new RegExp(searchWord,'gi');
    var highlightedText=text.replace(regex,(match)=>{
        return '<span style="background-color:yellow;">'+match+'</span>';
    });
    document.getElementById('highlightedText').innerHTML=highlightedText;
}