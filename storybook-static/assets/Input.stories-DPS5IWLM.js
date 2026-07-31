import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,b as n,d as r,f as i,g as a,h as o,p as s,u as c,y as l}from"./iframe-BGNGUcka.js";import{n as u,t as d}from"./_plugin-vue_export-helper-C3HqjvoV.js";var f=e((()=>{})),p,m,h,g,_,v,y,b,x,S=e((()=>{c(),f(),u(),p={key:0,class:`ui-input__label`},m={class:`ui-input__field`},h={key:0,class:`ui-input__prefix`},g=[`value`,`placeholder`,`disabled`,`type`],_={key:1,class:`ui-input__suffix`},v={key:1,class:`ui-input__error`},y={key:2,class:`ui-input__hint`},b={__name:`Input`,props:{modelValue:{type:String,default:``},label:{type:String,default:``},placeholder:{type:String,default:``},hint:{type:String,default:``},error:{type:String,default:``},type:{type:String,default:`text`},disabled:Boolean},emits:[`update:modelValue`],setup(e){return(c,u)=>(a(),s(`div`,{class:l([`ui-input-wrap`,{"ui-input-wrap--error":e.error,"ui-input-wrap--disabled":e.disabled}])},[e.label?(a(),s(`label`,p,n(e.label),1)):i(``,!0),r(`div`,m,[c.$slots.prefix?(a(),s(`span`,h,[t(c.$slots,`prefix`,{},void 0,!0)])):i(``,!0),r(`input`,o({class:`ui-input`},c.$attrs,{value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,type:e.type,onInput:u[0]||=e=>c.$emit(`update:modelValue`,e.target.value)}),null,16,g),c.$slots.suffix?(a(),s(`span`,_,[t(c.$slots,`suffix`,{},void 0,!0)])):i(``,!0)]),e.error?(a(),s(`span`,v,n(e.error),1)):e.hint?(a(),s(`span`,y,n(e.hint),1)):i(``,!0)],2))}},x=d(b,[[`__scopeId`,`data-v-9b244985`]]),b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:`default`,displayName:`Input`,description:``,tags:{},props:[{name:`modelValue`,type:{name:`string`},defaultValue:{func:!1,value:`''`}},{name:`label`,type:{name:`string`},defaultValue:{func:!1,value:`''`}},{name:`placeholder`,type:{name:`string`},defaultValue:{func:!1,value:`''`}},{name:`hint`,type:{name:`string`},defaultValue:{func:!1,value:`''`}},{name:`error`,type:{name:`string`},defaultValue:{func:!1,value:`''`}},{name:`type`,type:{name:`string`},defaultValue:{func:!1,value:`'text'`}},{name:`disabled`,type:{name:`boolean`}}],events:[{name:`update:modelValue`}],slots:[{name:`prefix`},{name:`suffix`}],sourceFiles:[`/home/ykuanysh/test/vue-ui-kit/src/components/Input.vue`]})})),C,w,T,E;e((()=>{S(),C={title:`Components/Input`,component:x,tags:[`autodocs`]},w={render:()=>({components:{Input:x},setup:()=>({val:``}),template:`<Input v-model="val" label="Email" placeholder="you@example.com" hint="Мы не будем рассылать спам" />`})},T={render:()=>({components:{Input:x},template:`<Input label="Пароль" type="password" error="Пароль слишком короткий" />`})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Input
    },
    setup: () => ({
      val: ''
    }),
    template: \`<Input v-model="val" label="Email" placeholder="you@example.com" hint="Мы не будем рассылать спам" />\`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Input
    },
    template: \`<Input label="Пароль" type="password" error="Пароль слишком короткий" />\`
  })
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithError`]}))();export{w as Default,T as WithError,E as __namedExportsOrder,C as default};