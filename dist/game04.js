import {scenes,metricNames,freshState,decide,restore,ending} from './game04-engine.js';
const $=id=>document.getElementById(id), key='tca-estimator-game-v1';
const methods={undecided:'Chưa chọn bộ công cụ', '2d':'2D · PDF / CAD / Bluebeam + Excel',bim:'Revit / 3D + AI hỗ trợ',hybrid:'Phối hợp 2D + mô hình'};
const money=value=>value===null?'Chưa chốt':new Intl.NumberFormat('vi-VN').format(value)+' AUD';
let state=freshState(), saved=null, storageAvailable=true;
try{saved=restore(JSON.parse(localStorage.getItem(key)));}catch{storageAvailable=false;}
if(saved && saved.index>0) $('resume').hidden=false;
function persist(){try{localStorage.setItem(key,JSON.stringify(state));}catch{storageAvailable=false;}updateSaveNote();}
function updateSaveNote(){if(!storageAvailable){$('save-note').textContent='Trình duyệt không lưu được tiến độ. Bạn vẫn có thể chơi trọn lượt trong tab này.';$('save-note').classList.add('storage-warning');}}
updateSaveNote();
function node(tag,text,cls){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(cls)el.className=cls;return el;}
function dashboard(){
 $('career').textContent=state.index<2?'Sinh viên xây dựng':state.index<7?'Junior Estimator':'Estimator · Đang tích lũy kinh nghiệm';
 $('method').textContent=methods[state.method];$('metrics').replaceChildren();
 state.metrics.forEach((v,i)=>{const row=node('div',undefined,'metric'+(v<30?' low':'')),top=node('div',undefined,'metric-top');top.append(node('span',metricNames[i]),node('b',String(v)+'/100'));const track=node('div',undefined,'metric-track'),fill=node('span');fill.style.width=v+'%';track.append(fill);row.append(top,track);$('metrics').append(row);});
 $('phase-map').replaceChildren(...scenes.map((_,i)=>node('span',undefined,i<state.index?'done':'')));
 $('progress').value=state.index;$('progress-text').textContent=`${state.index} / ${scenes.length} quyết định`;
 $('chapter').textContent=state.index<scenes.length?scenes[state.index].chapter:'Hoàn thành hành trình';
 $('revision-count').textContent=String(state.revisions.length);$('ledger').replaceChildren();
 if(!state.revisions.length)$('ledger').append(node('p','Các mốc sẽ xuất hiện khi bạn làm dự án.'));
 state.revisions.forEach(r=>{const row=node('div',undefined,'revision-row'),heading=node('strong');heading.append(node('b',r.code+' · '+r.name),node('b',money(r.amount)));row.append(heading,node('span',r.status));$('ledger').append(row);});
}
function focus(el){el.focus({preventScroll:true});el.scrollIntoView({block:'start',behavior:'instant'});}
function showScene(){
 dashboard();$('feedback').hidden=true;$('ending').hidden=true;
 if(state.index===scenes.length){showEnding();return;}
 $('scene').hidden=false;const scene=scenes[state.index],box=$('scene');box.replaceChildren(node('p',scene.place,'location'),node('h1',scene.title),node('p',scene.brief,'brief'));
 const msg=node('div',undefined,'message'),avatar=node('span',scene.sender.split(' ')[0].slice(0,1),'avatar'),content=node('div');avatar.setAttribute('aria-hidden','true');content.append(node('strong',scene.sender),node('p',scene.request));msg.append(avatar,content);box.append(msg,node('p','BẠN SẼ LÀM GÌ?','decision-label'));
 const choices=node('div',undefined,'choices');scene.options.forEach((o,i)=>{const b=node('button',undefined,'choice');b.type='button';const k=node('span',String.fromCharCode(65+i),'choice-key');k.setAttribute('aria-hidden','true');const copy=node('span');copy.append(node('strong',o.title),node('small',o.detail));b.append(k,copy);b.addEventListener('click',()=>choose(i));choices.append(b);});box.append(choices);focus(box);
}
function showFeedback(result){
 $('scene').hidden=true;$('ending').hidden=true;const box=$('feedback');box.hidden=false;box.replaceChildren(node('p','QUYẾT ĐỊNH ĐÃ ĐƯỢC GHI NHẬN','feedback-label'),node('h1',result.title));
 [['Alex · Phản ứng của sếp',result.boss,'reaction'],['Khách hàng / Người nhận · Phản ứng',result.client,'reaction client']].forEach(([label,text,cls])=>{const reaction=node('div',undefined,cls);reaction.append(node('small',label),node('p',text));box.append(reaction);});
 const effects=node('div',undefined,'effect-list');result.effects.forEach((v,i)=>effects.append(node('span',`${metricNames[i]} ${v>0?'+':''}${v}`,v<0?'effect negative':'effect')));box.append(effects);
 const lesson=node('div',undefined,'lesson');lesson.append(node('strong','ĐIỀU QUYẾT ĐỊNH NÀY CHO THẤY'),node('p',result.lesson));box.append(lesson);
 const next=node('button',state.index===scenes.length?'Xem kết quả hành trình':'Tình huống tiếp theo','primary');next.type='button';next.addEventListener('click',showScene);box.append(next);focus(box);
}
function choose(index){const outcome=decide(state,index);state=outcome.state;persist();dashboard();showFeedback(outcome.result);}
function showEnding(){
 $('scene').hidden=true;$('feedback').hidden=true;const box=$('ending');box.hidden=false;const result=ending(state);box.replaceChildren(node('span',result.rank,'result-rank'),node('h1',result.title),node('p',result.text),node('p','Bộ công cụ cuối hành trình: '+methods[state.method],'micro'));
 const summary=node('div',undefined,'lesson');summary.append(node('strong','CÁC MỐC CHI PHÍ TRONG LƯỢT CHƠI'));
 state.revisions.forEach(r=>summary.append(node('p',`${r.code} · ${r.name}: ${money(r.amount)} — ${r.status}`)));summary.append(node('p','Mốc tham chiếu của bài tập: 125.000 → 128.600 → 131.900 → 134.750 AUD (chưa GST). Đây là số giả lập; trạng thái trong lượt chơi phản ánh mức độ kiểm tra và cam kết của bạn.','micro'));box.append(summary);
 box.append(node('h2','Dự toán tĩnh và động khác nhau ở đâu?'));
 const grid=node('div',undefined,'compare-grid');[['Snapshot tại một thời điểm','Một bảng giá phản ánh bộ hồ sơ và giả định tại thời điểm lập. Hữu ích cho một mốc ngân sách, nhưng không tự theo dõi những gì xảy ra sau đó.'],['Quản lý chi phí qua thay đổi','Lưu baseline, đối chiếu revision, theo dõi quantity–rate–scope, so sánh phương án và giải thích rủi ro trong suốt quá trình.']].forEach(([title,text])=>{const a=node('article');a.append(node('h3',title),node('p',text));grid.append(a);});box.append(grid,node('p','Công cụ không quyết định tĩnh hay động. Quy trình cập nhật và kiểm soát thay đổi mới là điểm khác biệt.','principle'),node('p','2D có thể làm dự toán động với quy trình tốt. Revit / 3D / AI hỗ trợ tốc độ, truy vết và giao tiếp khi dữ liệu được tổ chức và kiểm tra.','brief'));
 const history=node('details'),sum=node('summary','Xem lại 12 quyết định của bạn');history.append(sum);state.history.forEach(r=>{const item=node('article',undefined,'history-item');item.append(node('h3',`${r.scene+1}. ${scenes[r.scene].chapter} · ${r.title}`),node('p',r.lesson));history.append(item);});box.append(history);
 const actions=node('div',undefined,'ending-actions'),replay=node('button','Chơi lại, thử hướng khác','primary');replay.type='button';replay.addEventListener('click',newGame);const course=node('a','Tìm hiểu khóa học TCA','secondary');course.href='index.html#chuong-trinh';actions.append(replay,course);box.append(actions,node('p','Chỉ số là cơ chế mô phỏng học tập, không phải đánh giá năng lực nghề nghiệp. Hãy dùng nhật ký để thảo luận với giảng viên.','micro'));focus(box);
}
function enter(){ $('intro').hidden=true;$('play').hidden=false;$('restart-confirm').hidden=true;}
function newGame(){state=freshState();persist();enter();showScene();}
$('start').addEventListener('click',()=>{if(saved?.index>0){state=saved;enter();$('restart-confirm').hidden=false;showScene();focus($('restart-confirm'));}else newGame();});
$('resume').addEventListener('click',()=>{state=saved;enter();dashboard();if(state.index===scenes.length)showEnding();else if(state.history.length)showFeedback(state.history.at(-1));else showScene();});
$('restart').addEventListener('click',()=>{$('restart-confirm').hidden=false;});
$('restart-yes').addEventListener('click',()=>{saved=null;newGame();});
$('restart-no').addEventListener('click',()=>{$('restart-confirm').hidden=true;});
