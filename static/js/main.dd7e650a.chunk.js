(this.webpackJsonptodo_app_frontend=this.webpackJsonptodo_app_frontend||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),i=a.n(r),c=(a(14),a(15),a(1)),o=a(2),l=a(4),p=a(3),d=a(5),u=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("header",{className:"header-index"},s.a.createElement("h1",{className:"h1"},"To Do App"))}}]),t}(s.a.Component),m=a(8),k=a.n(m),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={id:"",taskDescription:"",done:!1},a.handleAddTask=function(){var e={id:k()(),taskDescription:a.state.taskDescription,done:!1};a.props.newTask(e),a.setState({taskDescription:""})},a.takeDescriptionChanged=function(e){var t=a.state.taskDescription;t=e.target.value,a.setState({taskDescription:t})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-10"},s.a.createElement("input",{type:"text",newTask:!0,className:"input-group input-addTask p-2",id:"addTask",autocomplete:"off",placeholder:"Add your task here",value:this.state.taskDescription,onChange:this.takeDescriptionChanged})),s.a.createElement("div",{className:"col-2"},s.a.createElement("button",{className:"reset-btn d-md-none",onClick:this.handleAddTask,disabled:0===this.state.taskDescription.length},s.a.createElement("i",{className:"fas fa-plus-circle fa-2x d-md-none btn-awesome"})),s.a.createElement("button",{className:"btn btn-sm d-none d-none d-md-block p-2",onClick:this.handleAddTask,disabled:0===this.state.taskDescription.length},"ADD")))}}]),t}(s.a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=0,t="";return"completed"===this.props.render?(e=this.props.counter.completedTasks.length,t="You have ".concat(e," completed tasks")):"pending"===this.props.render?(e=this.props.counter.pendingTasks.length,t="You have ".concat(e," pending tasks")):(e=this.props.counter.tasks.length,t="You have ".concat(e," tasks")),s.a.createElement("div",{className:"row m-3"},s.a.createElement("div",{className:"col-12"},s.a.createElement("h2",{className:"m-0 p-3 h2"},t)))}}]),t}(s.a.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"row d-flex p-3 justify-content-center"},s.a.createElement("input",{type:"button",className:"btn btn-primary btn-sm",value:"Pending",onClick:this.props.pendingTasks}),s.a.createElement("input",{type:"button",className:"btn btn-primary btn-sm",value:"Completed",onClick:this.props.completedTasks}),s.a.createElement("input",{type:"button",className:"btn btn-primary btn-sm",value:"All",onClick:this.props.allTasks}),s.a.createElement("input",{type:"button",className:"btn btn-primary btn-sm",value:"Delete All",onClick:this.props.deleteAll}))}}]),t}(s.a.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="red",t=null;return this.props.task.done&&(e="green",t="task-completed"),s.a.createElement("div",{className:"row align-items-center mt-2 mb-2"},s.a.createElement("div",{className:"col-1 p-0 d-flex justify-content-end"},s.a.createElement("button",{className:"circle "+e,onClick:this.props.updateTask.bind(this,this.props.task.id)})),s.a.createElement("div",{className:"col-9"},s.a.createElement("p",{className:"m-0 p-2 task "+t},this.props.task.taskDescription)),s.a.createElement("div",{className:"col-2 p-0"},s.a.createElement("i",{className:"fas fa-trash-alt fa-lg d-block d-md-none pointer btn-awesome",onClick:this.props.deleteTask.bind(this,this.props.task.id)}),s.a.createElement("input",{type:"button",className:"btn btn-primary btn-sm d-none d-md-block p-2",value:"Delete",onClick:this.props.deleteTask.bind(this,this.props.task.id)})))}}]),t}(s.a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t="";return t="completed"===this.props.render?this.props.showCompleted:"pending"===this.props.render?this.props.showPendig:this.props.showTasks,s.a.createElement("div",null,t.map((function(t,a){return s.a.createElement(T,{task:t,key:a,deleteTask:e.props.deleteTask,updateTask:e.props.updateTask})})))}}]),t}(s.a.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).addTask=function(e){var t=a.state.tasks;t.push(e),a.setState({tasks:t}),a.setState({pendingTasks:t})},a.deleteTask=function(e){var t=a.state.tasks.filter((function(t){return t.id!==e})),n=a.state.pendingTasks.filter((function(t){return t.id!==e})),s=a.state.completedTasks.filter((function(t){return t.id!==e}));a.setState({tasks:t}),a.setState({pendingTasks:n}),a.setState({completedTasks:s})},a.deleteAllTasks=function(){var e=[];window.confirm("Do you want to delete all tasks?")&&(a.setState({tasks:e}),a.setState({pendingTasks:e}),a.setState({completedTasks:e}))},a.updateTask=function(e){var t=a.state.tasks.map((function(t){return t.id===e&&(t.done=!t.done),t}));a.setState({tasks:t})},a.pendingTasks=function(){var e=a.state.tasks.filter((function(e){return!e.done}));a.setState({pendingTasks:e}),a.setState({render:"pending"})},a.completedTasks=function(){var e=a.state.tasks.filter((function(e){return e.done}));a.setState({completedTasks:e}),a.setState({render:"completed"})},a.allTasks=function(){var e=a.state.tasks.filter((function(e){return e}));a.setState({tasks:e}),a.setState({render:"tasks"})},a.state={tasks:[],completedTasks:[],pendingTasks:[],render:"tasks"},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("main",{className:"main"},s.a.createElement("div",{className:"container sizeTodo"},s.a.createElement(b,{counter:this.state,render:this.state.render}),s.a.createElement(h,{newTask:this.addTask}),s.a.createElement(v,{render:this.state.render,showTasks:this.state.tasks,showPendig:this.state.pendingTasks,showCompleted:this.state.completedTasks,deleteTask:this.deleteTask,updateTask:this.updateTask}),s.a.createElement(f,{deleteAll:this.deleteAllTasks,pendingTasks:this.pendingTasks,completedTasks:this.completedTasks,allTasks:this.allTasks})))}}]),t}(s.a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",{className:"footer-index "},s.a.createElement("p",null,"Alberto Mart\xednez"))}}]),t}(s.a.Component);var O=function(){return s.a.createElement("div",null,s.a.createElement(u,null),s.a.createElement(j,null),s.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.dd7e650a.chunk.js.map