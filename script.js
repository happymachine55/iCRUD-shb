var app = new function(){
    this.el = document.getElementById('tasks');
    this.task=[]


    this.FetchAll = function(){
        var data='';

        if(this.tasks.length>0){
            for(i=0 ; i<this.tasks.length ; i++){
                data += '<tr>';
                data += '<td>' + (i+1) + '. ' + this.tasks[i]+'</td>';
                data += '<td><button onclick="app.Edit(' + i + ')" class=edit-button>수정</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')" class=delete-button>수정</button></td>';
                data += '<tr>';
                data += '</tr>'
            }
        }
        return this.el.innerHTML = data
    };
}