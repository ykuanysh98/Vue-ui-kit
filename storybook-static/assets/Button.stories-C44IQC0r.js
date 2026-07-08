import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./Button-gppXDbPA.js";var r,i,a,o,s;e((()=>{t(),r={title:`Components/Button`,component:n,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`danger`,`ghost`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},loading:{control:`boolean`},disabled:{control:`boolean`},block:{control:`boolean`}}},i={args:{variant:`primary`,default:`Click me`},render:e=>({components:{Button:n},setup:()=>({args:e}),template:`<Button v-bind="args">Click me</Button>`})},a={render:()=>({components:{Button:n},template:`
      <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="primary" loading>Loading</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>
    `})},o={render:()=>({components:{Button:n},template:`
      <div style="display:flex;gap:12px;align-items:center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `})},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    default: 'Click me'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: \`<Button v-bind="args">Click me</Button>\`
  })
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="primary" loading>Loading</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div style="display:flex;gap:12px;align-items:center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}},s=[`Primary`,`AllVariants`,`Sizes`]}))();export{a as AllVariants,i as Primary,o as Sizes,s as __namedExportsOrder,r as default};