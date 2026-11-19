import {scenes,extras,sequence,money,reaction} from './game04-engine.js';
const $=id=>document.getElementById(id);let index=0,answered=false;
function el(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
function focus(id){$(id).focus({preventScroll:true});$(id).scrollIntoView({block:'start'});}
function reveal(){const s=scenes[index];$('reveal').hidden=false;$('lesson').textContent=s.lesson;$('sequence-panel').hidden=!s.sequence;$('levelling-panel').hidden=!s.levelling;$('closing').hidden=index!==7;$('next').hidden=index===7;if(s.sequence)showStep(0);}
function showStep(i){$('sequence-caption').textContent=`Bước ${i+1}: ${sequence[i]}`;[...$('sequence-buttons').children].forEach((b,k)=>b.setAttribute('aria-pressed',String(i===k)));}
function render(){
 const s=scenes[index];answered=false;$('progress').value=index+1;$('scene-label').textContent=`CẢNH ${index+1} / 8 · ${s.tag}`;$('title').textContent=s.title;$('brief').textContent=s.text;
 $('message-box').hidden=!s.message;$('message').textContent=s.message||'';$('comparison').replaceChildren();
 for(const [key,cls,label]of [['a','traditional','COMPANY A · 2D + EXCEL'],['b','modern','COMPANY B · REVIT + MÔ PHỎNG']])if(s[key]){const card=el('article',undefined,cls);card.append(el('span',label),el('h2',s[key][0]),el('p',s[key][1]));$('comparison').append(card);}
 $('comparison').hidden=!s.a;$('decision').hidden=!s.options;$('feedback').hidden=true;$('reveal').hidden=true;$('next').hidden=!!s.options;$('choices').replaceChildren();
 if(s.options){$('question').textContent=s.question;s.options.forEach(([text],i)=>{const b=el('button',undefined,'choice');b.type='button';b.append(el('span',String.fromCharCode(65+i)),el('strong',text));b.addEventListener('click',()=>choose(i));$('choices').append(b);});}else reveal();focus('scene');
}
function choose(option){if(answered)return;const result=reaction(index,option);answered=true;$('choices').querySelectorAll('button').forEach(b=>b.disabled=true);$('feedback').hidden=false;$('feedback-title').textContent=result.good?'Bạn đang làm rõ cơ sở báo giá.':'Sếp yêu cầu kiểm tra thêm.';$('reaction').textContent=result.text;reveal();focus('feedback');}
function start(){index=0;$('intro').hidden=true;$('game').hidden=false;render();}
$('start').addEventListener('click',start);$('replay').addEventListener('click',start);
$('reset').addEventListener('click',()=>{$('game').hidden=true;$('intro').hidden=false;$('start').focus();});
$('next').addEventListener('click',()=>{if(scenes[index].options&&!answered)return;if(index<scenes.length-1){index++;render();}});
sequence.forEach((_,i)=>{const b=el('button',`Bước ${i+1}`);b.type='button';b.addEventListener('click',()=>showStep(i));$('sequence-buttons').append(b);});
function priceRow(label,a,b,cls){const row=el('tr',undefined,cls),heading=el('th',label);heading.scope='row';row.append(heading,el('td',a),el('td',b));$('price-rows').append(row);}
priceRow('Giá nộp ban đầu',money(405000),money(419000));extras.forEach(([label,n])=>priceRow(label,'+ '+money(n),'Đã bao gồm theo điều kiện báo giá'));priceRow('Tổng làm rõ bổ sung',money(extras.reduce((sum,[,v])=>sum+v,0)),'Không cộng thêm');priceRow('Giá xác nhận sau làm rõ',money(441000),money(419000),'total-row');
