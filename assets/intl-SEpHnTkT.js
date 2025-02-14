import{c as l}from"./createLucideIcon-D-niisEM.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=l("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);class s{constructor(t={}){this._baseDictionary=t,this.fallbackLanguage="en"}static create(t){return new s(t)}setFallbackLanguage(t){return this.fallbackLanguage=t,this}get baseDictionary(){return this._baseDictionary}makeDictionaryExtension(t){return{...this.baseDictionary,...this.makeDictionary(t)}}makeDictionary(t){return t}makeTranslator(t){const{dictionary:r,language:i=this.fallbackLanguage}=t,u=e=>r[e][i]?r[e][i]:r[e][this.fallbackLanguage],c=(e,n)=>e.replace(/\{(\w+)}/g,(a,o)=>o in n?String(n[o]):a);return(e,n)=>{const a=u(e);return a?n?c(a,n):a:""}}}const h=s.create({noResultsFound:{en:"No results found.",pt:"Nenhum resultado encontrado.",es:"No se encontraron resultados.",de:"Keine Ergebnisse gefunden."}}).setFallbackLanguage("pt");export{f as C,s as T,h as i};
