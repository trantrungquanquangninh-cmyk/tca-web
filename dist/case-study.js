const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => {
 const open = menu.getAttribute('aria-expanded') !== 'true';
 menu.setAttribute('aria-expanded', String(open));
 nav.classList.toggle('open', open);
});
const model = document.querySelector('#revision-model');
const large = document.querySelector('#model-large');
const caption = document.querySelector('#revision-caption');
const revisions = {
 a: { alt: 'Sơ đồ 3D GA Rev A: bố trí vách ban đầu, W04 là vách tiêu chuẩn', caption: 'GA Rev A: bố trí vách trong hồ sơ ban đầu. Bấm hình để xem lớn.' },
 b: { alt: 'Sơ đồ 3D GA Rev B: W02 và W03 đã dịch chuyển, W04 đổi sang vách chống cháy', caption: 'GA Rev B: bố trí sau cập nhật, W04 giữ vị trí nhưng đổi loại vách. Bấm hình để xem lớn.' },
 compare: { alt: 'Sơ đồ 3D so sánh Rev A và Rev B, thể hiện tường giữ nguyên, loại bỏ, thêm mới và đổi loại', caption: 'So sánh A / B: cùng một bố trí với mặt bằng 2D. Bấm hình để xem lớn.' }
};
document.querySelectorAll('[data-revision]').forEach(button => {
 button.addEventListener('click', () => {
  const key = button.dataset.revision;
  const revision = revisions[key];
  if (!revision) return;
  const src = `assets/case01-3d-${key}.svg`;
  model.src = src;
  model.alt = revision.alt;
  large.href = src;
  caption.textContent = revision.caption;
  document.querySelectorAll('[data-revision]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
 });
});
const stairStages = {
 '1': { alt: 'Concept cầu thang thép: khung dầm thang, điểm đỡ và chiếu nghỉ', caption: 'Lớp khung thép: thảo luận cấu kiện chính, điểm đỡ và liên kết.' },
 '2': { alt: 'Concept cầu thang thép có thêm bậc thang và chiếu nghỉ trên khung đỡ', caption: 'Bổ sung bậc và chiếu nghỉ: làm rõ phạm vi gia công, cung cấp và lắp đặt.' },
 '3': { alt: 'Sơ đồ concept 3D cầu thang thép với khung đỡ, bậc, chiếu nghỉ và lan can màu cam', caption: 'Phương án tổng thể: khung, bậc, chiếu nghỉ và lan can. Bấm hình để xem lớn.' }
};
document.querySelectorAll('[data-stair-stage]').forEach(button => {
 button.addEventListener('click', () => {
  const key = button.dataset.stairStage;
  const stage = stairStages[key];
  if (!stage) return;
  const image = document.querySelector('#stair-model');
  image.src = `assets/case02-stair-${key}.svg`;
  image.alt = stage.alt;
  document.querySelector('#stair-large').href = image.src;
  document.querySelector('#stair-caption').textContent = stage.caption;
  document.querySelectorAll('[data-stair-stage]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
 });
});
