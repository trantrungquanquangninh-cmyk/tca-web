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
const siteStages = {
 '1': { alt: 'Sơ đồ 5 bước: xe tải vào bến dỡ hàng, dỡ hàng, thang máy hàng lên tầng 12, góc rẽ hành lang cần kiểm tra chiều dài tấm, điểm tập kết cấp đợt cho khu A, B', caption: 'Đi theo vật tư qua 5 điểm chuyển tiếp — từ xe tải đến khu thi công — trước khi chọn quy cách tấm. Bấm hình để xem lớn.' },
 '2': { alt: 'Sơ đồ phân khu thi công: đội A triển khai khu A, khu B chờ điều phối, vật tư cấp theo đợt', caption: 'Phân khu và trình tự dự kiến để cùng Site Manager rà soát. Bấm hình để xem lớn.' },
 '3': { alt: 'Sơ đồ briefing cho đội mới: rà soát khu A trước khi chuyển bước và hướng dẫn phạm vi tại khu B', caption: 'Dùng chung hình ảnh và phiên bản để briefing đội mới, xác nhận phạm vi và bước tiếp theo. Bấm hình để xem lớn.' }
};
document.querySelectorAll('[data-site-stage]').forEach(button => {
 button.addEventListener('click', () => {
  const key = button.dataset.siteStage;
  const stage = siteStages[key];
  if (!stage) return;
  const image = document.querySelector('#site-model');
  image.src = `assets/case03-site-${key}.svg`;
  image.alt = stage.alt;
  document.querySelector('#site-large').href = image.src;
  document.querySelector('#site-caption').textContent = stage.caption;
  const video = document.querySelector('#site-video');
  if (video) video.hidden = key !== '1';
  document.querySelectorAll('[data-site-stage]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
 });
});
