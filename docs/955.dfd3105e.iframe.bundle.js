"use strict";(self.webpackChunkreact_tree_graph=self.webpackChunkreact_tree_graph||[]).push([[955],{"./.storybook/stories/argTypes.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>AnimatedTreeArgTypes,c:()=>TreeArgTypes});var backIn=function custom(s){function backIn(t){return(t=+t)*t*(s*(t-1)+t)}return s=+s,backIn.overshoot=custom,backIn}(1.70158),backOut=function custom(s){function backOut(t){return--t*t*((t+1)*s+t)+1}return s=+s,backOut.overshoot=custom,backOut}(1.70158),backInOut=function custom(s){function backInOut(t){return((t*=2)<1?t*t*((s+1)*t-s):(t-=2)*t*((s+1)*t+s)+2)/2}return s=+s,backInOut.overshoot=custom,backInOut}(1.70158),b1=4/11,b2=6/11,b3=8/11,b4=3/4,b5=9/11,b6=10/11,b7=15/16,b8=21/22,b9=63/64,b0=1/b1/b1;function bounceOut(t){return(t=+t)<b1?b0*t*t:t<b3?b0*(t-=b2)*t+b4:t<b6?b0*(t-=b5)*t+b7:b0*(t-=b8)*t+b9}function tpmt(x){return 1.0009775171065494*(Math.pow(2,-10*x)-.0009765625)}var tau=2*Math.PI,elasticIn=function custom(a,p){var s=Math.asin(1/(a=Math.max(1,a)))*(p/=tau);function elasticIn(t){return a*tpmt(- --t)*Math.sin((s-t)/p)}return elasticIn.amplitude=function(a){return custom(a,p*tau)},elasticIn.period=function(p){return custom(a,p)},elasticIn}(1,.3),elasticOut=function custom(a,p){var s=Math.asin(1/(a=Math.max(1,a)))*(p/=tau);function elasticOut(t){return 1-a*tpmt(t=+t)*Math.sin((t+s)/p)}return elasticOut.amplitude=function(a){return custom(a,p*tau)},elasticOut.period=function(p){return custom(a,p)},elasticOut}(1,.3),elasticInOut=function custom(a,p){var s=Math.asin(1/(a=Math.max(1,a)))*(p/=tau);function elasticInOut(t){return((t=2*t-1)<0?a*tpmt(-t)*Math.sin((s-t)/p):2-a*tpmt(t)*Math.sin((s+t)/p))/2}return elasticInOut.amplitude=function(a){return custom(a,p*tau)},elasticInOut.period=function(p){return custom(a,p)},elasticInOut}(1,.3);var polyIn=function custom(e){function polyIn(t){return Math.pow(t,e)}return e=+e,polyIn.exponent=custom,polyIn}(3),polyOut=function custom(e){function polyOut(t){return 1-Math.pow(1-t,e)}return e=+e,polyOut.exponent=custom,polyOut}(3),polyInOut=function custom(e){function polyInOut(t){return((t*=2)<=1?Math.pow(t,e):2-Math.pow(2-t,e))/2}return e=+e,polyInOut.exponent=custom,polyInOut}(3),quad=__webpack_require__("./node_modules/d3-ease/src/quad.js"),pi=Math.PI,halfPi=pi/2;const categories_animation="Animation",categories_data="Data",categories_properties="SVG Properties",categories_rendering="Tree Rendering",TreeArgTypes={data:{table:{category:categories_data},type:{name:"object",required:!0},description:"The data to be rendered as a tree. Must be in a format accepted by d3.hierarchy."},getChildren:{control:{disable:!0},table:{category:categories_data,defaultValue:{summary:"node => node.children"}},description:"A function that returns the children for a node, or null/undefined if no children exist."},direction:{options:["ltr","rtl"],table:{category:categories_rendering,defaultValue:{summary:"ltr"}},type:{name:"string"},description:"The direction of the tree, left-to-right or right-to-left."},keyProp:{table:{category:categories_data,defaultValue:{summary:"name"}},type:{name:"string"},description:"The property on each node to use as a key."},labelProp:{table:{category:categories_data,defaultValue:{summary:"name"}},type:{name:"string"},description:"The property on each node to render as a label."},height:{table:{category:categories_rendering},type:{name:"number",required:!0},description:"The height of the rendered tree, including margins."},width:{table:{category:categories_rendering},type:{name:"number",required:!0},description:"The width of the rendered tree, including margins."},margins:{table:{category:categories_rendering,defaultValue:{summary:"{ bottom: 10, left: 20, right: 150, top: 10 }"}},type:{name:"object"},description:"The margins around the content. The right margin should be larger to include the rendered label text."},children:{table:{category:categories_rendering},control:{disable:!0},description:"Will be rendered as children of the SVG, before the links and nodes."},nodeShape:{options:["circle","image","polygon","rect"],table:{category:categories_rendering,defaultValue:{summary:"circle"}},type:{name:"select"},description:"The shape of the node icons. Additional nodeProps must be specifed for polygon and rect."},pathFunc:{control:{disable:!0},table:{category:categories_rendering,defaultValue:{summary:"function(x1,y1,x2,y2)"}},description:"Function to calculate the co-ordinates of the path between nodes."},gProps:{table:{category:categories_properties,defaultValue:{summary:"{ className: 'node' }"}},type:{name:"object"},description:"Props to be added to the `<g>` element. The default className will still be applied if a className property is not set."},nodeProps:{table:{category:categories_properties},type:{name:"object"},description:"Props to be added to the `<circle>`, `<image>`, `<polygon>` or `<rect>` element. These will take priority over the default r added to circle and height, width, x and y added to image and rect."},pathProps:{table:{category:categories_properties,defaultValue:{summary:"{ className: 'link' }"}},type:{name:"object"},description:"Props to be added to the `<path>` element. The default className will still be applied if a className property is not set."},svgProps:{table:{category:categories_properties},type:{name:"object"},description:"Props to be added to the `<svg>` element."},textProps:{table:{category:categories_properties},type:{name:"object"},description:"Props to be added to the `<text>` element."}},AnimatedTreeArgTypes={duration:{table:{category:categories_animation,defaultValue:{summary:500}},type:{name:"number"},description:"The duration in milliseconds of animations."},easing:{mapping:{easeBack:backInOut,easeBackIn:backIn,easeBackOut:backOut,easeBounce:bounceOut,easeBounceIn:function bounceIn(t){return 1-bounceOut(1-t)},easeBounceInOut:function bounceInOut(t){return((t*=2)<=1?1-bounceOut(1-t):bounceOut(t-1)+1)/2},easeCircle:function circleInOut(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2},easeCircleIn:function circleIn(t){return 1-Math.sqrt(1-t*t)},easeCircleOut:function circleOut(t){return Math.sqrt(1- --t*t)},easeCubic:function cubicInOut(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2},easeCubicIn:function cubicIn(t){return t*t*t},easeCubicOut:function cubicOut(t){return--t*t*t+1},easeElastic:elasticOut,easeElasticIn:elasticIn,easeElasticInOut:elasticInOut,easeExp:function expInOut(t){return((t*=2)<=1?tpmt(1-t):2-tpmt(t-1))/2},easeExpIn:function expIn(t){return tpmt(1-+t)},easeExpOut:function expOut(t){return 1-tpmt(t)},easeLinear:t=>+t,easePoly:polyInOut,easePolyIn:polyIn,easePolyOut:polyOut,easeQuad:quad.T_,easeQuadIn:quad.bl,easeQuadOut:quad.yv,easeSin:function sinInOut(t){return(1-Math.cos(pi*t))/2},easeSinIn:function sinIn(t){return 1==+t?1:1-Math.cos(t*halfPi)},easeSinOut:function sinOut(t){return Math.sin(t*halfPi)}},options:["easeBack","easeBackIn","easeBackOut","easeBounce","easeBounceIn","easeBounceInOut","easeCircle","easeCircleIn","easeCircleOut","easeCubic","easeCubicIn","easeCubicOut","easeElastic","easeElasticIn","easeElasticInOut","easeExp","easeExpIn","easeExpOut","easeLinear","easePoly","easePolyIn","easePolyOut","easeQuad","easeQuadIn","easeQuadOut","easeSin","easeSinIn","easeSinOut"],table:{category:categories_animation,defaultValue:{summary:"easeQuadOut"}},type:{name:"select"},description:"The easing function for animations. Takes in a number between 0 and 1 and returns a number between 0 and 1. The options here are all from the d3-ease library."},steps:{table:{category:categories_animation,defaultValue:{summary:20}},type:{name:"number"},description:"The number of steps in animations. A higher number will result in a smoother animation, but too high will cause performance issues."},...TreeArgTypes}},"./src/components/container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Container});var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);__webpack_require__("./node_modules/react/index.js");const regex=/on[A-Z]/;function wrapHandlers(props,...args){const wrappedHandlers=Object.keys(props).filter((propName=>regex.test(propName)&&"function"==typeof props[propName])).reduce(((acc,handler)=>(acc[handler]=function wrapper(func,args){return event=>func(event,...args)}(props[handler],args),acc)),{});return{...props,...wrappedHandlers}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function diagonal(x1,y1,x2,y2){return`M${x1},${y1}C${(x1+x2)/2},${y1} ${(x1+x2)/2},${y2} ${x2},${y2}`}function Link(props){const wrappedProps=wrapHandlers(props.pathProps,props.source.data[props.keyProp],props.target.data[props.keyProp]),d=(props.pathFunc||diagonal)(props.x1,props.y1,props.x2,props.y2);return(0,jsx_runtime.jsx)("path",{...wrappedProps,d})}function Node(props){let offset=.5,nodePropsWithDefaults=props.nodeProps;switch(props.shape){case"circle":nodePropsWithDefaults={r:5,...nodePropsWithDefaults},offset+=nodePropsWithDefaults.r;break;case"image":case"rect":nodePropsWithDefaults={height:10,width:10,...nodePropsWithDefaults},nodePropsWithDefaults={x:-nodePropsWithDefaults.width/2,y:-nodePropsWithDefaults.height/2,...nodePropsWithDefaults},offset+=nodePropsWithDefaults.width/2}"rtl"===props.direction&&(offset=-offset);const wrappedNodeProps=wrapHandlers(nodePropsWithDefaults,props[props.keyProp]),wrappedGProps=wrapHandlers(props.gProps,props[props.keyProp]),wrappedTextProps=wrapHandlers(props.textProps,props[props.keyProp]),label="string"==typeof props[props.labelProp]?(0,jsx_runtime.jsx)("text",{dx:offset,dy:5,...wrappedTextProps,children:props[props.labelProp]}):(0,jsx_runtime.jsx)("g",{transform:`translate(${offset}, 5)`,...wrappedTextProps,children:props[props.labelProp]});return(0,jsx_runtime.jsxs)("g",{...wrappedGProps,transform:function getTransform(){return`translate(${props.x}, ${props.y})`}(),direction:"rtl"===props.direction?"rtl":null,children:[(0,jsx_runtime.jsx)(props.shape,{...wrappedNodeProps}),label]})}function Container(props){return(0,jsx_runtime.jsxs)("svg",{...props.svgProps,height:props.height,width:props.width,children:[props.children,(0,jsx_runtime.jsxs)("g",{transform:`translate(${props.margins.left}, ${props.margins.top})`,children:[props.links.map((link=>(0,jsx_runtime.jsx)(Link,{keyProp:props.keyProp,pathFunc:props.pathFunc,source:link.source,target:link.target,x1:link.source.x,x2:link.target.x,y1:link.source.y,y2:link.target.y,pathProps:{...props.pathProps,...link.target.data.pathProps}},link.target.data[props.keyProp]))),props.nodes.map((node=>(0,jsx_runtime.jsx)(Node,{keyProp:props.keyProp,labelProp:props.labelProp,direction:props.direction,shape:props.nodeShape,x:node.x,y:node.y,...node.data,nodeProps:{...props.nodeProps,...node.data.nodeProps},gProps:{...props.gProps,...node.data.gProps},textProps:{...props.textProps,...node.data.textProps}},node.data[props.keyProp])))]})]})}Link.displayName="Link",Link.propTypes={source:prop_types_default().object.isRequired,target:prop_types_default().object.isRequired,keyProp:prop_types_default().string.isRequired,x1:prop_types_default().number.isRequired,x2:prop_types_default().number.isRequired,y1:prop_types_default().number.isRequired,y2:prop_types_default().number.isRequired,pathFunc:prop_types_default().func,pathProps:prop_types_default().object.isRequired},Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{source:{description:"",type:{name:"object"},required:!0},target:{description:"",type:{name:"object"},required:!0},keyProp:{description:"",type:{name:"string"},required:!0},x1:{description:"",type:{name:"number"},required:!0},x2:{description:"",type:{name:"number"},required:!0},y1:{description:"",type:{name:"number"},required:!0},y2:{description:"",type:{name:"number"},required:!0},pathFunc:{description:"",type:{name:"func"},required:!1},pathProps:{description:"",type:{name:"object"},required:!0}}},Node.displayName="Node",Node.propTypes={x:prop_types_default().number.isRequired,y:prop_types_default().number.isRequired,keyProp:prop_types_default().string.isRequired,labelProp:prop_types_default().string.isRequired,direction:prop_types_default().oneOf(["ltr","rtl"]).isRequired,shape:prop_types_default().string.isRequired,nodeProps:prop_types_default().object.isRequired,gProps:prop_types_default().object.isRequired,textProps:prop_types_default().object.isRequired},Node.__docgenInfo={description:"",methods:[],displayName:"Node",props:{x:{description:"",type:{name:"number"},required:!0},y:{description:"",type:{name:"number"},required:!0},keyProp:{description:"",type:{name:"string"},required:!0},labelProp:{description:"",type:{name:"string"},required:!0},direction:{description:"",type:{name:"enum",value:[{value:"'ltr'",computed:!1},{value:"'rtl'",computed:!1}]},required:!0},shape:{description:"",type:{name:"string"},required:!0},nodeProps:{description:"",type:{name:"object"},required:!0},gProps:{description:"",type:{name:"object"},required:!0},textProps:{description:"",type:{name:"object"},required:!0}}},Container.displayName="Container",Container.propTypes={children:prop_types_default().node,direction:prop_types_default().oneOf(["ltr","rtl"]).isRequired,height:prop_types_default().number.isRequired,keyProp:prop_types_default().string.isRequired,labelProp:prop_types_default().string.isRequired,links:prop_types_default().array.isRequired,margins:prop_types_default().shape({left:prop_types_default().number.isRequired,top:prop_types_default().number.isRequired}).isRequired,nodes:prop_types_default().array.isRequired,nodeClassName:prop_types_default().string,nodeShape:prop_types_default().string.isRequired,nodeProps:prop_types_default().object.isRequired,pathFunc:prop_types_default().func,width:prop_types_default().number.isRequired,gProps:prop_types_default().object.isRequired,pathProps:prop_types_default().object.isRequired,svgProps:prop_types_default().object.isRequired,textProps:prop_types_default().object.isRequired},Container.__docgenInfo={description:"",methods:[],displayName:"Container",props:{children:{description:"",type:{name:"node"},required:!1},direction:{description:"",type:{name:"enum",value:[{value:"'ltr'",computed:!1},{value:"'rtl'",computed:!1}]},required:!0},height:{description:"",type:{name:"number"},required:!0},keyProp:{description:"",type:{name:"string"},required:!0},labelProp:{description:"",type:{name:"string"},required:!0},links:{description:"",type:{name:"array"},required:!0},margins:{description:"",type:{name:"shape",value:{left:{name:"number",required:!0},top:{name:"number",required:!0}}},required:!0},nodes:{description:"",type:{name:"array"},required:!0},nodeClassName:{description:"",type:{name:"string"},required:!1},nodeShape:{description:"",type:{name:"string"},required:!0},nodeProps:{description:"",type:{name:"object"},required:!0},pathFunc:{description:"",type:{name:"func"},required:!1},width:{description:"",type:{name:"number"},required:!0},gProps:{description:"",type:{name:"object"},required:!0},pathProps:{description:"",type:{name:"object"},required:!0},svgProps:{description:"",type:{name:"object"},required:!0},textProps:{description:"",type:{name:"object"},required:!0}}}},"./src/d3.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function count(node){var sum=0,children=node.children,i=children&&children.length;if(i)for(;--i>=0;)sum+=children[i].value;else sum=1;node.value=sum}function hierarchy(data,children){data instanceof Map?(data=[void 0,data],void 0===children&&(children=mapChildren)):void 0===children&&(children=objectChildren);for(var node,child,childs,i,n,root=new Node(data),nodes=[root];node=nodes.pop();)if((childs=children(node.data))&&(n=(childs=Array.from(childs)).length))for(node.children=childs,i=n-1;i>=0;--i)nodes.push(child=childs[i]=new Node(childs[i])),child.parent=node,child.depth=node.depth+1;return root.eachBefore(computeHeight)}function objectChildren(d){return d.children}function mapChildren(d){return Array.isArray(d)?d[1]:null}function copyData(node){void 0!==node.data.value&&(node.value=node.data.value),node.data=node.data.data}function computeHeight(node){var height=0;do{node.height=height}while((node=node.parent)&&node.height<++height)}function Node(data){this.data=data,this.depth=this.height=0,this.parent=null}function defaultSeparation(a,b){return a.parent===b.parent?1:2}function nextLeft(v){var children=v.children;return children?children[0]:v.t}function nextRight(v){var children=v.children;return children?children[children.length-1]:v.t}function moveSubtree(wm,wp,shift){var change=shift/(wp.i-wm.i);wp.c-=change,wp.s+=shift,wm.c+=change,wp.z+=shift,wp.m+=shift}function nextAncestor(vim,v,ancestor){return vim.a.parent===v.parent?vim.a:ancestor}function TreeNode(node,i){this._=node,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=i}function tree(){var separation=defaultSeparation,dx=1,dy=1,nodeSize=null;function tree(root){var t=function treeRoot(root){for(var node,child,children,i,n,tree=new TreeNode(root,0),nodes=[tree];node=nodes.pop();)if(children=node._.children)for(node.children=new Array(n=children.length),i=n-1;i>=0;--i)nodes.push(child=node.children[i]=new TreeNode(children[i],i)),child.parent=node;return(tree.parent=new TreeNode(null,0)).children=[tree],tree}(root);if(t.eachAfter(firstWalk),t.parent.m=-t.z,t.eachBefore(secondWalk),nodeSize)root.eachBefore(sizeNode);else{var left=root,right=root,bottom=root;root.eachBefore((function(node){node.x<left.x&&(left=node),node.x>right.x&&(right=node),node.depth>bottom.depth&&(bottom=node)}));var s=left===right?1:separation(left,right)/2,tx=s-left.x,kx=dx/(right.x+s+tx),ky=dy/(bottom.depth||1);root.eachBefore((function(node){node.x=(node.x+tx)*kx,node.y=node.depth*ky}))}return root}function firstWalk(v){var children=v.children,siblings=v.parent.children,w=v.i?siblings[v.i-1]:null;if(children){!function executeShifts(v){for(var w,shift=0,change=0,children=v.children,i=children.length;--i>=0;)(w=children[i]).z+=shift,w.m+=shift,shift+=w.s+(change+=w.c)}(v);var midpoint=(children[0].z+children[children.length-1].z)/2;w?(v.z=w.z+separation(v._,w._),v.m=v.z-midpoint):v.z=midpoint}else w&&(v.z=w.z+separation(v._,w._));v.parent.A=function apportion(v,w,ancestor){if(w){for(var shift,vip=v,vop=v,vim=w,vom=vip.parent.children[0],sip=vip.m,sop=vop.m,sim=vim.m,som=vom.m;vim=nextRight(vim),vip=nextLeft(vip),vim&&vip;)vom=nextLeft(vom),(vop=nextRight(vop)).a=v,(shift=vim.z+sim-vip.z-sip+separation(vim._,vip._))>0&&(moveSubtree(nextAncestor(vim,v,ancestor),v,shift),sip+=shift,sop+=shift),sim+=vim.m,sip+=vip.m,som+=vom.m,sop+=vop.m;vim&&!nextRight(vop)&&(vop.t=vim,vop.m+=sim-sop),vip&&!nextLeft(vom)&&(vom.t=vip,vom.m+=sip-som,ancestor=v)}return ancestor}(v,w,v.parent.A||siblings[0])}function secondWalk(v){v._.x=v.z+v.parent.m,v.m+=v.parent.m}function sizeNode(node){node.x*=dx,node.y=node.depth*dy}return tree.separation=function(x){return arguments.length?(separation=x,tree):separation},tree.size=function(x){return arguments.length?(nodeSize=!1,dx=+x[0],dy=+x[1],tree):nodeSize?null:[dx,dy]},tree.nodeSize=function(x){return arguments.length?(nodeSize=!0,dx=+x[0],dy=+x[1],tree):nodeSize?[dx,dy]:null},tree}function getTreeData(props){const margins=props.margins||{bottom:10,left:"rtl"!==props.direction?20:150,right:"rtl"!==props.direction?150:20,top:10},contentWidth=props.width-margins.left-margins.right,contentHeight=props.height-margins.top-margins.bottom,data=hierarchy(props.data,props.getChildren),root=tree().size([contentHeight,contentWidth])(data);return{links:root.links().map((link=>({...link,source:{...link.source,x:"rtl"!==props.direction?link.source.y:contentWidth-link.source.y,y:link.source.x},target:{...link.target,x:"rtl"!==props.direction?link.target.y:contentWidth-link.target.y,y:link.target.x}}))),margins,nodes:root.descendants().map((node=>({...node,x:"rtl"!==props.direction?node.y:contentWidth-node.y,y:node.x})))}}__webpack_require__.d(__webpack_exports__,{A:()=>getTreeData}),Node.prototype=hierarchy.prototype={constructor:Node,count:function hierarchy_count(){return this.eachAfter(count)},each:function each(callback,that){let index=-1;for(const node of this)callback.call(that,node,++index,this);return this},eachAfter:function eachAfter(callback,that){for(var children,i,n,node=this,nodes=[node],next=[],index=-1;node=nodes.pop();)if(next.push(node),children=node.children)for(i=0,n=children.length;i<n;++i)nodes.push(children[i]);for(;node=next.pop();)callback.call(that,node,++index,this);return this},eachBefore:function eachBefore(callback,that){for(var children,i,node=this,nodes=[node],index=-1;node=nodes.pop();)if(callback.call(that,node,++index,this),children=node.children)for(i=children.length-1;i>=0;--i)nodes.push(children[i]);return this},find:function find(callback,that){let index=-1;for(const node of this)if(callback.call(that,node,++index,this))return node},sum:function sum(value){return this.eachAfter((function(node){for(var sum=+value(node.data)||0,children=node.children,i=children&&children.length;--i>=0;)sum+=children[i].value;node.value=sum}))},sort:function sort(compare){return this.eachBefore((function(node){node.children&&node.children.sort(compare)}))},path:function path(end){for(var start=this,ancestor=function leastCommonAncestor(a,b){if(a===b)return a;var aNodes=a.ancestors(),bNodes=b.ancestors(),c=null;a=aNodes.pop(),b=bNodes.pop();for(;a===b;)c=a,a=aNodes.pop(),b=bNodes.pop();return c}(start,end),nodes=[start];start!==ancestor;)start=start.parent,nodes.push(start);for(var k=nodes.length;end!==ancestor;)nodes.splice(k,0,end),end=end.parent;return nodes},ancestors:function ancestors(){for(var node=this,nodes=[node];node=node.parent;)nodes.push(node);return nodes},descendants:function descendants(){return Array.from(this)},leaves:function leaves(){var leaves=[];return this.eachBefore((function(node){node.children||leaves.push(node)})),leaves},links:function links(){var root=this,links=[];return root.each((function(node){node!==root&&links.push({source:node.parent,target:node})})),links},copy:function node_copy(){return hierarchy(this).eachBefore(copyData)},[Symbol.iterator]:function*iterator(){var current,children,i,n,node=this,next=[node];do{for(current=next.reverse(),next=[];node=current.pop();)if(yield node,children=node.children)for(i=0,n=children.length;i<n;++i)next.push(children[i])}while(next.length)}},TreeNode.prototype=Object.create(Node.prototype)},"./node_modules/d3-ease/src/quad.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function quadIn(t){return t*t}function quadOut(t){return t*(2-t)}function quadInOut(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}__webpack_require__.d(__webpack_exports__,{T_:()=>quadInOut,bl:()=>quadIn,yv:()=>quadOut})}}]);