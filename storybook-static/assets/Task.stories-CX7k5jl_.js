import{f as l}from"./index-DEpIhj4w.js";import{j as t}from"./jsx-runtime-DEdD30eg.js";import{P as a}from"./index-rNTiGNI1.js";function p({task:{id:e,title:d,state:c},onArchiveTask:b,onPinTask:I,onUnPinTask:K}){return t.jsxs("div",{className:`list-item ${c}`,children:[t.jsxs("label",{htmlFor:`archiveTask-${e}`,"aria-label":`archiveTask-${e}`,className:"checkbox",children:[t.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:c==="TASK_ARCHIVED"}),t.jsx("span",{className:"checkbox-custom",onClick:()=>b(e)})]}),t.jsx("label",{htmlFor:`title-${e}`,"aria-label":d,className:"title",children:t.jsx("input",{type:"text",value:d,readOnly:!0,name:"title",id:`title-${e}`,placeholder:"Input title"})}),c!=="TASK_ARCHIVED"&&t.jsx("button",{className:"pin-button",onClick:()=>c==="TASK_PINNED"?K(e):I(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:t.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}p.propTypes={task:a.shape({id:a.string.isRequired,title:a.string.isRequired,state:a.string.isRequired}),onArchiveTask:a.func,onPinTask:a.func,onUnPinTask:a.func};p.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1},onUnPinTask:{description:"",type:{name:"func"},required:!1}}};const v={onArchiveTask:l(),onPinTask:l(),unPinTask:l()},j={component:p,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...v}},s={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},r={args:{task:{...s.args.task,title:"Test Task (pinned)",state:"TASK_PINNED"}}},n={args:{task:{...s.args.task,title:"Test Task (unpinned)",state:"TASK_UNPINNED"}}},i={args:{task:{...s.args.task,state:"TASK_ARCHIVED"}}},o={args:{task:{...s.args.task,title:"Test Task (tested)",state:"TASK_TESTED"}}};var u,k,T;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(T=(k=s.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var m,g,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      title: 'Test Task (pinned)',
      state: 'TASK_PINNED'
    }
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,A,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      title: 'Test Task (unpinned)',
      state: 'TASK_UNPINNED'
    }
  }
}`,...(S=(A=n.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var _,D,N;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(N=(D=i.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var P,x,E;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      title: 'Test Task (tested)',
      state: 'TASK_TESTED'
    }
  }
}`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const y=["ActionsData","Default","Pinned","UnPinned","Archived","Tested"],R=Object.freeze(Object.defineProperty({__proto__:null,ActionsData:v,Archived:i,Default:s,Pinned:r,Tested:o,UnPinned:n,__namedExportsOrder:y,default:j},Symbol.toStringTag,{value:"Module"}));export{s as D,p as T,R as a};
