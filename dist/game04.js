import {roles,rounds,outcome} from './game04-engine.js';
const $=id=>document.getElementById(id);
let role='traditional',index=0,correct=0,answered=false;
function el(tag,text,cls){const n=document.createElement(tag);if(text)n.textContent=text;if(cls)n.className=cls;return n;}
function focus(id){$(id).focus({preventScroll:true});$(id).scrollIntoView({block:'start'});}
function start(selected){role=selected;index=0;correct=0;$('intro').hidden=true;$('game').hidden=false;showQuestion();}
function showQuestion(){
 answered=false;$('finish').hidden=true;$('answer').hidden=true;$('question').hidden=false;
 $('playing-role').textContent='Bạn đang chơi: '+roles[role].name;
 for(let i=0;i<3;i++){$('step-'+i).className=i===index?'current':i<index?'done':'';if(i===index)$('step-'+i).setAttribute('aria-current','step');else $('step-'+i).removeAttribute('aria-current');}
 const r=rounds[index];$('round-label').textContent=`TÌNH HUỐNG ${index+1} / 3`;$('title').textContent=r.title;$('request').textContent=r.request;$('before').textContent='Giá trước yêu cầu này: '+r.before;
 $('choices').replaceChildren();
 const actions=[{text:r[role].good,careful:true},{text:r[role].bad,careful:false}];if(index===1)actions.reverse();
 actions.forEach((a,i)=>{const b=el('button',undefined,'choice');b.type='button';b.append(el('span',String.fromCharCode(65+i)),el('strong',a.text));b.addEventListener('click',()=>answer(a.careful));$('choices').append(b);});focus('question');
}
function answer(careful){
 if(answered)return;answered=true;const r=rounds[index],result=outcome(index,role,careful);if(result.accepted)correct++;
 $('question').hidden=true;$('answer').hidden=false;$('result-title').textContent=careful?'Bạn đã xử lý yêu cầu có cơ sở.':'Cần kiểm tra lại trước khi gửi.';
 $('boss').textContent=result.boss;$('client').textContent=result.client;$('after').textContent=r.after;$('why').textContent=r.why;$('lesson').textContent=r.lesson;
 $('continuity').textContent=!careful&&index<2?'Sếp yêu cầu sửa theo cách tính đúng ở trên. Tình huống tiếp theo dùng giá đã sửa.':'';
 $('comparison').replaceChildren();
 for(const key of ['traditional','modern']){const card=el('article',undefined,key);card.append(el('span',role===key?'VAI BẠN ĐANG CHƠI':'CÁCH LÀM CÒN LẠI','card-label'),el('h3',roles[key].name),el('p',roles[key].tools,'tools'));const list=el('ol');r[key].steps.forEach(step=>list.append(el('li',step)));card.append(list);$('comparison').append(card);}
 $('next').textContent=index===2?'Xem kết luận':'Tình huống tiếp theo';focus('answer');
}
$('choose-traditional').addEventListener('click',()=>start('traditional'));
$('choose-modern').addEventListener('click',()=>start('modern'));
$('reset').addEventListener('click',()=>{$('game').hidden=true;$('intro').hidden=false;$('choose-'+role).focus();});
$('other-role').addEventListener('click',()=>start(role==='traditional'?'modern':'traditional'));
$('next').addEventListener('click',()=>{if(!answered)return;if(index<2){index++;showQuestion();}else{$('answer').hidden=true;$('finish').hidden=false;for(let i=0;i<3;i++){$('step-'+i).className='done';$('step-'+i).removeAttribute('aria-current');}$('finish-result').textContent=`Bạn đã xử lý có kiểm tra ${correct}/3 yêu cầu khi chơi vai ${roles[role].name}. ${correct===3?'Sếp và khách hàng có cơ sở để hiểu con số.':'Hãy thử lại và kiểm tra thay đổi trước khi gửi giá.'}`;focus('finish');}});
