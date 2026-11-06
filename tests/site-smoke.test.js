#!/usr/bin/env node
// Run locally: node tests/site-smoke.test.js
// Zero dependencies. Static tests only; NOT browser, accessibility, or checkout tests.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const pages=['index.html','pricing-options.html','build-your-plan.html','client-journey.html','client-onboarding.html','content-review-demo.html','support.html'];
const files=Object.fromEntries(pages.map(p=>[p,fs.readFileSync(path.join(root,p),'utf8')]));
let count=0;
function check(name,fn){try{fn();console.log('PASS',name);count++}catch(e){console.error('FAIL',name,e.message);process.exitCode=1}}
for(const [page,html] of Object.entries(files)){
 check(page+' has a viewport and unique HTML close',()=>{assert.match(html,/<meta\s+name=["']viewport["']/i);assert.equal((html.match(/<\/html>/gi)||[]).length,1)});
 check(page+' scripts balanced',()=>assert.equal((html.match(/<script\b/gi)||[]).length,(html.match(/<\/script>/gi)||[]).length));
 check(page+' links resolve locally',()=>{for(const match of html.matchAll(/\bhref=["']([^"'#?]+\.html)(?:[?#][^"']*)?["']/g)){const href=match[1];if(/^https?:\/\//.test(href))continue;assert.ok(fs.existsSync(path.join(root,href)),href+' missing')}});
 check(page+' IDs are unique',()=>{const ids=[...html.matchAll(/(?:\s|<)id=["']([^"']+)["']/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length)});
 check(page+' has description and keyboard focus styles',()=>{assert.match(html,/name=["']description["']/);assert.match(html,/:focus-visible/)});
}
check('all pages include shared support navigation',()=>{for(const [p,html] of Object.entries(files))assert.match(html,/href="support\.html"/,p)});
check('checkout remains disabled in plan builder',()=>assert.match(files['build-your-plan.html'],/<button[^>]*disabled[^>]*>Secure checkout/));
check('three-month discount arithmetic',()=>{for(const [standard,discounted,total] of [[249,21165,63495],[449,38165,114495],[699,59415,178245]]){const cents=Math.round(standard*100*0.85);assert.equal(cents,discounted);assert.equal(cents*3,total)}});
check('onboarding never submits to server',()=>{assert.match(files['client-onboarding.html'],/e\.preventDefault\(\)/);assert.doesNotMatch(files['client-onboarding.html'],/fetch\s*\(/)});
console.log('Completed',count,'static checks');if(process.exitCode)process.exit(process.exitCode);
