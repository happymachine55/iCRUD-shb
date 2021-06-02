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
                data += '<td><button onclick="app.Delete(' + i + ')" class=delete-button>삭제</button></td>';
                data += '<tr>';
                data += '</tr>'
            }
        }
        return this.el.innerHTML = data
    };


    this.Add = function(){
        el = document.getElementById('add-todo');
        var task = el.value;
        if(task){
            this.tasks.push(task.trim());
            this.el.value='';
            this.FetchAll();
        }
    };


    this.Edit = function(item){
        this.el = document.getElementById('edit-todo');
        el.value = this.tasks[item]
        document.getElementById('edit-box').style.display='block';
        self=this;

        document.getElementById('save-edit').onsubmit = function(){
            var task = el.value;
            if(task){
                self.tasks.splice(item, 1, task.trim());
                self.FetchAll();
                CloseInput();
            }
        }
    };


    this.Delete = function(item){
        this.tasks.splice(item,1);
        this.FetchAll();
    };


}

app.FetchAll();

function CloseInput(){
    document.getElementById('edit-box').style.display='none';
}