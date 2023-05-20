(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{488:function(t,e,r){var content=r(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("0c09a64f",content,!0,{sourceMap:!1})},492:function(t,e,r){"use strict";r(488)},493:function(t,e,r){var n=r(82)((function(i){return i[1]}));n.push([t.i,'.code,code{background:#292929;border-radius:5px;color:#fafafa;font-family:"Source Code Pro";font-size:16px;padding:1px}',""]),n.locals={},t.exports=n},497:function(t,e,r){"use strict";r.r(e);r(47),r(39),r(15),r(38),r(81),r(46);var n=r(12),o=(r(63),r(494)),l=r(491),d={name:"IndexPage",data:function(){return{generatedConfig:"",technology:"react",buildProcessor:"",testingSuite:"",includeTesting:!1,deployment:"",showAdditionalSettings:!0,generalAdditionalSettings:{mainBranch:"main",nodeVersion:14,testCommand:""},reactAdditionalSettings:{buildCommand:"build"},vueAdditionalSettings:{buildCommand:"build"},nuxtAdditionalSettings:{buildCommand:"build"},angularAdditionalSettings:{buildCommand:"build"},s3AdditionalSettings:{region:"eu-central-1",bucket:"my-bucket"},herokuAdditionalSettings:{applicationName:"myApplication",email:"my@email.com"},netlifyAdditionalSettings:{siteId:"site-id"}}},mounted:function(){Object(o.a)()},watch:{buildProcessor:function(t){this.testingSuite="",this.deployment="","nuxt"===this.technology&&(this.nuxtAdditionalSettings.buildCommand="build && "+("npm"===t?"npm run generate":t+" generate"))},technology:function(){this.buildProcessor="",this.testingSuite="",this.deployment=""},testingSuite:function(t){"jest"===t?this.generalAdditionalSettings.testCommand="test:unit":"cypress"===t&&(this.generalAdditionalSettings.testCommand="test:e2e")}},computed:{availableBuildProcessors:function(){switch(this.technology){case"react":case"vue":case"nuxt":case"angular":return[{id:"npm",name:"NPM"},{id:"yarn",name:"Yarn"}]}},availableTestingSuite:function(){switch(this.technology){case"react":case"vue":case"nuxt":case"angular":return[{id:"jest",name:"Jest"},{id:"cypress",name:"Cypress"}]}},availableDeploymentMethods:function(){switch(this.technology){case"react":case"vue":case"nuxt":case"angular":return[{id:"s3",name:"AWS S3"},{id:"github",name:"GitHub Pages"},{id:"heroku",name:"Heroku"},{id:"netlify",name:"Netlify"}]}}},methods:{generateConfig:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r="","s3"!==t.deployment){e.next=10;break}return e.next=4,fetch("/templates/deploy/s3.tmpl");case 4:return e.next=6,e.sent.text();case 6:n=e.sent,r=l.render(n,{awsRegion:t.s3AdditionalSettings.region,bucket:t.s3AdditionalSettings.bucket,outputDirectory:"react"===t.technology?"build":"vue"===t.technology||"nuxt"===t.technology||"angular"===t.technology?"dist":""}),e.next=35;break;case 10:if("github"!==t.deployment){e.next=19;break}return e.next=13,fetch("/templates/deploy/gh.tmpl");case 13:return e.next=15,e.sent.text();case 15:o=e.sent,r=l.render(o,{mainBranch:t.generalAdditionalSettings.mainBranch,outputDirectory:"react"===t.technology?"build":"vue"===t.technology||"nuxt"===t.technology||"angular"===t.technology?"dist":""}),e.next=35;break;case 19:if("heroku"!==t.deployment){e.next=28;break}return e.next=22,fetch("/templates/deploy/heroku.tmpl");case 22:return e.next=24,e.sent.text();case 24:d=e.sent,r=l.render(d,{mainBranch:t.generalAdditionalSettings.mainBranch,herokuAppName:t.herokuAdditionalSettings.applicationName,herokuEmail:t.herokuAdditionalSettings.email,outputDirectory:"react"===t.technology?"build":"vue"===t.technology||"nuxt"===t.technology||"angular"===t.technology?"dist":""}),e.next=35;break;case 28:if("netlify"!==t.deployment){e.next=35;break}return e.next=31,fetch("/templates/deploy/netlify.tmpl");case 31:return e.next=33,e.sent.text();case 33:c=e.sent,r=l.render(c,{mainBranch:t.generalAdditionalSettings.mainBranch,netlifyId:t.netlifyAdditionalSettings.siteId,outputDirectory:"react"===t.technology?"build":"vue"===t.technology||"nuxt"===t.technology||"angular"===t.technology?"dist":""});case 35:fetch("/templates/main.tmpl").then((function(t){return t.text()})).then((function(template){var output=l.render(template,{name:"github actions for "+t.technology,mainBranch:t.generalAdditionalSettings.mainBranch,nodeVersion:t.generalAdditionalSettings.nodeVersion,installCommand:t.buildProcessor+" install",buildProcessor:"npm"===t.buildProcessor?"npm run":t.buildProcessor,buildCommand:"react"===t.technology?t.reactAdditionalSettings.buildCommand:"vue"===t.technology?t.vueAdditionalSettings.buildCommand:"nuxt"===t.technology?t.nuxtAdditionalSettings.buildCommand:"angular"===t.technology?t.angularAdditionalSettings.buildCommand:"",includeTesting:t.includeTesting,testCommand:t.generalAdditionalSettings.testCommand,deploySteps:r});t.generatedConfig=output,t.$forceUpdate()}));case 36:case"end":return e.stop()}}),e)})))()}}},c=(r(492),r(61)),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("section",[t._m(0),t._v(" "),t.generatedConfig?t._e():e("div",{staticClass:"mx-auto max-w-2xl py-16 sm:py-16 lg:py-16"},[e("form",{staticClass:"shadow-md relative p-3 bg-opacity-10 bg-black rounded-md",attrs:{action:""}},[e("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"technology"}},[t._v("Framework")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.technology,expression:"technology"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{id:"technology"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.technology=e.target.multiple?r:r[0]}}},[e("option",{attrs:{value:"react"}},[t._v("React")]),t._v(" "),e("option",{attrs:{value:"vue"}},[t._v("Vue")]),t._v(" "),e("option",{attrs:{value:"nuxt"}},[t._v("Nuxt")]),t._v(" "),e("option",{attrs:{value:"angular"}},[t._v("Angular")])]),t._v(" "),e("label",{staticClass:"block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"buildProcessor"}},[t._v("Build processor")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.buildProcessor,expression:"buildProcessor"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{disabled:!t.technology,id:"buildProcessor"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.buildProcessor=e.target.multiple?r:r[0]}}},t._l(t.availableBuildProcessors,(function(r){return e("option",{key:r.id,domProps:{value:r.id}},[t._v("\n          "+t._s(r.name)+"\n        ")])})),0),t._v(" "),e("div",{staticClass:"flex items-center mb-4 mt-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.includeTesting,expression:"includeTesting"}],staticClass:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",attrs:{id:"include-tests",type:"checkbox"},domProps:{checked:Array.isArray(t.includeTesting)?t._i(t.includeTesting,null)>-1:t.includeTesting},on:{change:function(e){var r=t.includeTesting,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&(t.includeTesting=r.concat([null])):l>-1&&(t.includeTesting=r.slice(0,l).concat(r.slice(l+1)))}else t.includeTesting=o}}}),t._v(" "),e("label",{staticClass:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",attrs:{for:"include-tests"}},[t._v("Add tests")])]),t._v(" "),t.includeTesting?e("div",[e("label",{staticClass:"block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"testingSuite"}},[t._v("Testing suite")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.testingSuite,expression:"testingSuite"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{disabled:!t.buildProcessor,id:"testingSuite"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.testingSuite=e.target.multiple?r:r[0]}}},t._l(t.availableTestingSuite,(function(r){return e("option",{key:r.id,domProps:{value:r.id}},[t._v("\n            "+t._s(r.name)+"\n          ")])})),0)]):t._e(),t._v(" "),e("label",{staticClass:"block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"deployment"}},[t._v("Deployment destination")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.deployment,expression:"deployment"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{disabled:!t.buildProcessor,id:"deployment"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.deployment=e.target.multiple?r:r[0]}}},t._l(t.availableDeploymentMethods,(function(r){return e("option",{key:r.id,domProps:{value:r.id}},[t._v("\n          "+t._s(r.name)+"\n        ")])})),0),t._v(" "),e("hr",{staticClass:"h-px my-8 bg-black border-0 dark:bg-black"}),t._v(" "),e("button",{staticClass:"mt-1 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800",attrs:{disabled:!t.buildProcessor||!t.deployment},on:{click:function(e){e.preventDefault(),t.showAdditionalSettings=!t.showAdditionalSettings}}},[e("span",{staticClass:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"},[t._v("\n          "+t._s(t.showAdditionalSettings?"Hide":"Show")+" additional settings\n        ")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showAdditionalSettings,expression:"showAdditionalSettings"}]},[e("div",[e("div",[e("label",{staticClass:"block mb-0 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"mainbranch"}},[t._v("Name of the main branch")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.generalAdditionalSettings.mainBranch,expression:"generalAdditionalSettings.mainBranch"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"mainbranch",required:""},domProps:{value:t.generalAdditionalSettings.mainBranch},on:{input:function(e){e.target.composing||t.$set(t.generalAdditionalSettings,"mainBranch",e.target.value)}}})])]),t._v(" "),e("div",[e("label",{staticClass:"block mb-0 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"nodeVersion"}},[t._v("Node version")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.generalAdditionalSettings.nodeVersion,expression:"generalAdditionalSettings.nodeVersion"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"nodeVersion",required:""},domProps:{value:t.generalAdditionalSettings.nodeVersion},on:{input:function(e){e.target.composing||t.$set(t.generalAdditionalSettings,"nodeVersion",e.target.value)}}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.buildProcessor,expression:"this.buildProcessor"}]},[this.includeTesting?e("div",[e("label",{staticClass:"block mb-0 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"testCommand"}},[t._v("Test command")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.generalAdditionalSettings.testCommand,expression:"generalAdditionalSettings.testCommand"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"testCommand",required:""},domProps:{value:t.generalAdditionalSettings.testCommand},on:{input:function(e){e.target.composing||t.$set(t.generalAdditionalSettings,"testCommand",e.target.value)}}})]):t._e(),t._v(" "),"react"===t.technology?e("div",{staticClass:"mt-2"},[e("div",{staticClass:"mt-1"},[e("label",{staticClass:"block mb-0 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"buildCommand"}},[t._v("React build command")]),t._v(" "),e("div",{staticClass:"relative mb-6"},[e("div",{staticClass:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[t._v("\n                  "+t._s("npm"===t.buildProcessor?"npm run":t.buildProcessor)+"\n                ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.reactAdditionalSettings.buildCommand,expression:"reactAdditionalSettings.buildCommand"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",class:{"pl-12":"yarn"===t.buildProcessor,"pl-20":"npm"===t.buildProcessor},attrs:{type:"text",id:"buildCommand"},domProps:{value:t.reactAdditionalSettings.buildCommand},on:{input:function(e){e.target.composing||t.$set(t.reactAdditionalSettings,"buildCommand",e.target.value)}}})])])]):t._e(),t._v(" "),"vue"===t.technology?e("div",{staticClass:"mt-2"},[e("div",{staticClass:"mt-1"},[e("label",{staticClass:"block mb-0 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"buildCommand"}},[t._v("Vue build command")]),t._v(" "),e("div",{staticClass:"relative mb-6"},[e("div",{staticClass:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[t._v("\n                  "+t._s("npm"===t.buildProcessor?"npm run":t.buildProcessor)+"\n                ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vueAdditionalSettings.buildCommand,expression:"vueAdditionalSettings.buildCommand"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",class:{"pl-12":"yarn"===t.buildProcessor,"pl-20":"npm"===t.buildProcessor},attrs:{type:"text",id:"buildCommand"},domProps:{value:t.vueAdditionalSettings.buildCommand},on:{input:function(e){e.target.composing||t.$set(t.vueAdditionalSettings,"buildCommand",e.target.value)}}})])])]):t._e(),t._v(" "),"nuxt"===t.technology?e("div",{staticClass:"mt-2"},[e("div",{staticClass:"mt-1"},[e("label",{staticClass:"block mb-0 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"buildCommand"}},[t._v("Nuxt build command")]),t._v(" "),e("div",{staticClass:"relative mb-6"},[e("div",{staticClass:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[t._v("\n                  "+t._s("npm"===t.buildProcessor?"npm run":t.buildProcessor)+"\n                ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nuxtAdditionalSettings.buildCommand,expression:"nuxtAdditionalSettings.buildCommand"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",class:{"pl-12":"yarn"===t.buildProcessor,"pl-20":"npm"===t.buildProcessor},attrs:{type:"text",id:"buildCommand"},domProps:{value:t.nuxtAdditionalSettings.buildCommand},on:{input:function(e){e.target.composing||t.$set(t.nuxtAdditionalSettings,"buildCommand",e.target.value)}}})])])]):t._e(),t._v(" "),"angular"===t.technology?e("div",{staticClass:"mt-2"},[e("div",{staticClass:"mt-1"},[e("label",{staticClass:"block mb-0 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"buildCommand"}},[t._v("Angular build command")]),t._v(" "),e("div",{staticClass:"relative mb-6"},[e("div",{staticClass:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[t._v("\n                  "+t._s("npm"===t.buildProcessor?"npm run":t.buildProcessor)+"\n                ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.angularAdditionalSettings.buildCommand,expression:"angularAdditionalSettings.buildCommand"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",class:{"pl-12":"yarn"===t.buildProcessor,"pl-20":"npm"===t.buildProcessor},attrs:{type:"text",id:"buildCommand"},domProps:{value:t.angularAdditionalSettings.buildCommand},on:{input:function(e){e.target.composing||t.$set(t.angularAdditionalSettings,"buildCommand",e.target.value)}}})])])]):t._e(),t._v(" "),"s3"===t.deployment?e("div",{staticClass:"mt-2"},[e("div",{staticClass:"mt-1"},[e("label",{staticClass:"block mb-0 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"s3bucket"}},[t._v("Name of the S3 Bucket")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.s3AdditionalSettings.bucket,expression:"s3AdditionalSettings.bucket"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"s3bucket",required:""},domProps:{value:t.s3AdditionalSettings.bucket},on:{input:function(e){e.target.composing||t.$set(t.s3AdditionalSettings,"bucket",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mt-1"},[e("label",{staticClass:"block mb-0 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"awsregion"}},[t._v("AWS Region")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.s3AdditionalSettings.region,expression:"s3AdditionalSettings.region"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"awsregion",required:""},domProps:{value:t.s3AdditionalSettings.region},on:{input:function(e){e.target.composing||t.$set(t.s3AdditionalSettings,"region",e.target.value)}}})])]):t._e(),t._v(" "),"heroku"===t.deployment?e("div",{staticClass:"mt-2"},[e("div",{staticClass:"mt-1"},[e("label",{staticClass:"block mb-0 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"applicationname"}},[t._v("Name of the Heroku Application")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.herokuAdditionalSettings.applicationName,expression:"herokuAdditionalSettings.applicationName"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"applicationname",required:""},domProps:{value:t.herokuAdditionalSettings.applicationName},on:{input:function(e){e.target.composing||t.$set(t.herokuAdditionalSettings,"applicationName",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mt-1"},[e("label",{staticClass:"block mb-0 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"email"}},[t._v("Heroku Email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.herokuAdditionalSettings.email,expression:"herokuAdditionalSettings.email"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"applicationname",required:""},domProps:{value:t.herokuAdditionalSettings.email},on:{input:function(e){e.target.composing||t.$set(t.herokuAdditionalSettings,"email",e.target.value)}}})])]):t._e(),t._v(" "),"netlify"===t.deployment?e("div",{staticClass:"mt-2"},[e("div",{staticClass:"mt-1"},[e("label",{staticClass:"block mb-0 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"netlifysiteid"}},[t._v("Netlify Site ID")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.netlifyAdditionalSettings.siteId,expression:"netlifyAdditionalSettings.siteId"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"netlifysiteid",required:""},domProps:{value:t.netlifyAdditionalSettings.siteId},on:{input:function(e){e.target.composing||t.$set(t.netlifyAdditionalSettings,"siteId",e.target.value)}}})])]):t._e()])]),t._v(" "),e("div",{staticClass:"w-full flex items-center"},[e("button",{staticClass:"text-center mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 w-full",attrs:{disabled:!t.buildProcessor||!t.deployment,type:"button"},on:{click:t.generateConfig}},[t._v("\n          Get my config 🚀\n        ")])])])]),t._v(" "),t.generatedConfig?e("div",[e("div",{staticClass:"shadow-md relative p-3 bg-opacity-10 bg-black rounded-md mx-auto max-w-2xl my-2 mt-5"},[t._m(1),t._v(" "),e("div",[e("ul",{staticClass:"list-disc list-inside"},[e("li",[t._v("Go to your GitHub repository's homepage.")]),t._v(" "),e("li",[t._v('Click on the "Actions" tab near the top of the repository.')]),t._v(" "),t._m(2),t._v(" "),"s3"===t.deployment?e("div",[t._m(3),t._v(" "),t._m(4)]):t._e(),t._v(" "),"heroku"===t.deployment?e("div",[t._m(5),t._v(" "),e("li",[t._v("Go to the GitHub repository settings.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("li",[t._v('Click "Add secret" to save the secret.')])]):t._e(),t._v(" "),"netlify"===t.deployment?e("div",[t._m(9),t._v(" "),e("li",[t._v("Go to the GitHub repository settings.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),e("li",[t._v('Click "Add secret" to save the secret.')])]):t._e(),t._v(" "),t._m(13),t._v(" "),e("li",[t._v("Commit the changes to the repository.")]),t._v(" "),e("li",[t._v("\n            GitHub Actions will automatically detect the workflow file and\n            start executing it according to the defined triggers.\n          ")]),t._v(" "),e("li",[t._v('\n            You can monitor the status and output of your workflows on the\n            "Actions" tab in your repository.\n          ')]),t._v(" "),"github"===t.deployment?e("div",[e("li",[t._v("\n              As you selected GitHub pages as your deployment, wait for the\n              Actions job to complete.\n            ")]),t._v(" "),e("li",[t._v("Then, complete the following:")]),t._v(" "),t._m(14)]):t._e()])]),t._v(" "),e("button",{staticClass:"mt-5 text-sm underline",on:{click:function(e){t.generatedConfig=""}}},[t._v("\n        ⬅️ Back ...\n      ")])]),t._v(" "),e("div",{staticClass:"mx-auto max-w-2xl"},[e("div",{staticClass:"shadow-md relative p-3 bg-opacity-10 bg-black rounded-md"},[e("pre",[t._v("      "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"yaml rounded-md",attrs:{id:"code-output"}},[t._v(t._s(t.generatedConfig))]),t._v("\n    ")])])])]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white"},[e("div",{staticClass:"relative isolate px-6 pt-14 lg:px-8"},[e("div",{staticClass:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",attrs:{"aria-hidden":"true"}},[e("div",{staticClass:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",staticStyle:{"clip-path":"polygon("}})]),t._v(" "),e("div",{staticClass:"mx-auto max-w-2xl"},[e("div",{staticClass:"text-center"},[e("h1",{staticClass:"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"},[t._v("\n            GitHub Actions Generator\n          ")]),t._v(" "),e("p",{staticClass:"mt-6 text-lg leading-8 text-gray-600"},[t._v("\n            Select Javascript framework, testing suite and deployment, and the\n            system will generate GitHub Actions file with instructions 🚀\n          ")]),t._v(" "),e("p",{staticClass:"mt-6 text-lg leading-8 text-gray-600"},[t._v("\n            Developed for\n            "),e("a",{staticClass:"font-bold",attrs:{target:"_blank",href:"https://dev.to/devteam/announcing-the-github-dev-2023-hackathon-4ocn"}},[t._v("GitHub + Dev hackathon")]),t._v("\n            by\n            "),e("a",{staticClass:"font-bold",attrs:{target:"_blank",href:"https://www.timotejavsec.com"}},[t._v("Timotej Avsec")])])])]),t._v(" "),e("div",{staticClass:"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]",attrs:{"aria-hidden":"true"}},[e("div",{staticClass:"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",staticStyle:{"clip-path":"polygon("}})])])])},function(){var t=this._self._c;return t("h3",{staticClass:"text-lg"},[t("strong",[this._v("📝 Instructions:")])])},function(){var t=this,e=t._self._c;return e("li",[t._v("\n            If you haven't used GitHub Actions before, you may need to enable\n            it by clicking on the\n            "),e("strong",[t._v('"Enable GitHub Actions" button.')])])},function(){var t=this,e=t._self._c;return e("li",[t._v("\n              Go to\n              "),e("strong",[t._v('"Settings" > "Secrets and variables" >\n                "Actions"')]),t._v("\n              and add two new secrets:\n            ")])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list-disc list-inside space-y-1 pl-5"},[e("li",[e("strong",[e("code",[t._v("AWS_ACCESS_KEY_ID")])]),t._v(" as the name\n                and your access key ID as the value.\n              ")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("AWS_SECRET_ACCESS_KEY")])]),t._v(" as the\n                name and your secret access key as the value.\n              ")])])},function(){var t=this,e=t._self._c;return e("li",[t._v("\n              Generate a Heroku API key by following these\n              "),e("a",{staticClass:"font-medium text-blue-600 dark:text-blue-500 hover:underline",attrs:{target:"_blank",href:"https://devcenter.heroku.com/articles/authentication#api-key"}},[t._v("instructions")]),t._v(".\n            ")])},function(){var t=this,e=t._self._c;return e("li",[t._v("Click on "),e("strong",[t._v("Secrets")]),t._v(" in the left sidebar.")])},function(){var t=this,e=t._self._c;return e("li",[t._v("Click on "),e("strong",[t._v("New repository secret")]),t._v(".")])},function(){var t=this,e=t._self._c;return e("li",[t._v("\n              Enter "),e("strong",[e("code",[t._v("HEROKU_API_KEY")])]),t._v(" as the name\n              and paste your Heroku API key as the value.\n            ")])},function(){var t=this,e=t._self._c;return e("li",[t._v("\n              Create a Netlify Personal Access Token by following these\n              "),e("a",{staticClass:"font-medium text-blue-600 dark:text-blue-500 hover:underline",attrs:{target:"_blank",href:"https://docs.netlify.com/cli/get-started/#obtain-a-token-in-the-netlify-ui"}},[t._v("instructions")]),t._v(".\n            ")])},function(){var t=this,e=t._self._c;return e("li",[t._v("Click on "),e("strong",[t._v("Secrets")]),t._v(" in the left sidebar.")])},function(){var t=this,e=t._self._c;return e("li",[t._v("Click on "),e("strong",[t._v("New repository secret")]),t._v(".")])},function(){var t=this,e=t._self._c;return e("li",[t._v("\n              Enter "),e("strong",[e("code",[t._v("NETLIFY_AUTH_TOKEN")])]),t._v(" as the\n              name and paste your Netlify Personal Access Token as the value.\n            ")])},function(){var t=this,e=t._self._c;return e("li",[t._v("\n            Copy the content from the box below to the file under\n            "),e("strong",[e("code",[t._v("<root>/.github/workflows/ci.yaml")])])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list-disc list-inside space-y-1 pl-5"},[e("li",[t._v("Go to the repository "),e("strong",[t._v("Settings")]),t._v(".")]),t._v(" "),e("li",[t._v("\n                Scroll down to the "),e("strong",[t._v("GitHub Pages")]),t._v(" section.\n              ")]),t._v(" "),e("li",[t._v("\n                Under "),e("strong",[t._v('"Source"')]),t._v(", click the dropdown menu and\n                select the branch "),e("strong",[e("code",[t._v("gh-pages")])]),t._v(".\n              ")]),t._v(" "),e("li",[t._v("\n                Choose the "),e("strong",[e("code",[t._v("/(root)")])]),t._v(" directory.\n              ")]),t._v(" "),e("li",[t._v('\n                Click the "Save" button to apply the changes. After the\n                changes are applied, you will get the URL to the deployed\n                website.\n              ')])])}],!1,null,null,null);e.default=component.exports}}]);