import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,d as n,f as r,g as i,p as a,u as o,y as s}from"./iframe-BGNGUcka.js";import{n as c,t as l}from"./Badge-lDnF5i8i.js";import{n as u,t as d}from"./_plugin-vue_export-helper-C3HqjvoV.js";import{n as f,t as p}from"./Button-gppXDbPA.js";var m=e((()=>{})),h,g,_,v,y,b=e((()=>{o(),m(),u(),h={key:0,class:`ui-card__header`},g={class:`ui-card__body`},_={key:1,class:`ui-card__footer`},v={__name:`Card`,props:{hoverable:Boolean,bordered:{type:Boolean,default:!0}},setup(e){return(o,c)=>(i(),a(`div`,{class:s([`ui-card`,{"ui-card--hoverable":e.hoverable,"ui-card--bordered":e.bordered}])},[o.$slots.header?(i(),a(`div`,h,[t(o.$slots,`header`,{},void 0,!0)])):r(``,!0),n(`div`,g,[t(o.$slots,`default`,{},void 0,!0)]),o.$slots.footer?(i(),a(`div`,_,[t(o.$slots,`footer`,{},void 0,!0)])):r(``,!0)],2))}},y=d(v,[[`__scopeId`,`data-v-3455dec6`]]),v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:`default`,displayName:`Card`,description:``,tags:{},props:[{name:`hoverable`,type:{name:`boolean`}},{name:`bordered`,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}],slots:[{name:`header`},{name:`default`},{name:`footer`}],sourceFiles:[`/home/ykuanysh/test/vue-ui-kit/src/components/Card.vue`]})})),x,S,C,w;e((()=>{b(),c(),f(),x={title:`Components/Card`,component:y,tags:[`autodocs`]},S={render:()=>({components:{Card:y,Badge:l,Button:p},template:`
      <Card style="max-width:320px">
        <template #header>Заголовок карточки</template>
        <p style="margin:0;font-size:14px;color:#718096">Содержимое карточки. Сюда можно вставить любой контент.</p>
        <template #footer>
          <Button size="sm" variant="secondary">Отмена</Button>
          <Button size="sm">Подтвердить</Button>
        </template>
      </Card>
    `})},C={render:()=>({components:{Card:y},template:`
      <div style="display:flex;gap:16px">
        <Card hoverable style="max-width:200px;padding:4px">
          <p style="margin:0;font-size:14px">Hoverable card</p>
        </Card>
        <Card hoverable style="max-width:200px;padding:4px">
          <p style="margin:0;font-size:14px">Another card</p>
        </Card>
      </div>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Card,
      Badge,
      Button
    },
    template: \`
      <Card style="max-width:320px">
        <template #header>Заголовок карточки</template>
        <p style="margin:0;font-size:14px;color:#718096">Содержимое карточки. Сюда можно вставить любой контент.</p>
        <template #footer>
          <Button size="sm" variant="secondary">Отмена</Button>
          <Button size="sm">Подтвердить</Button>
        </template>
      </Card>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Card
    },
    template: \`
      <div style="display:flex;gap:16px">
        <Card hoverable style="max-width:200px;padding:4px">
          <p style="margin:0;font-size:14px">Hoverable card</p>
        </Card>
        <Card hoverable style="max-width:200px;padding:4px">
          <p style="margin:0;font-size:14px">Another card</p>
        </Card>
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Hoverable`]}))();export{S as Default,C as Hoverable,w as __namedExportsOrder,x as default};